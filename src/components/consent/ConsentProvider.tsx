"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type ConsentStatus = "unknown" | "granted" | "denied";

const STORAGE_KEY = "pm_consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Push a Google Consent Mode v2 update so ad/analytics cookies match choice. */
function updateConsentMode(granted: boolean) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const v = granted ? "granted" : "denied";
  window.gtag("consent", "update", {
    ad_storage: v,
    ad_user_data: v,
    ad_personalization: v,
    analytics_storage: v,
  });
}

interface ConsentContextValue {
  /** Current choice. "unknown" means the visitor hasn't decided yet. */
  consent: ConsentStatus;
  /** True once we've read the stored choice on the client (avoids SSR flash). */
  ready: boolean;
  setConsent: (value: "granted" | "denied") => void;
  /** Re-open the banner so the visitor can change/withdraw consent. */
  resetConsent: () => void;
}

const ConsentContext = createContext<ConsentContextValue>({
  consent: "unknown",
  ready: false,
  setConsent: () => {},
  resetConsent: () => {},
});

export function useConsent(): ConsentContextValue {
  return useContext(ConsentContext);
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<ConsentStatus>("unknown");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "granted" || stored === "denied") {
        setConsentState(stored);
        // Re-apply a returning visitor's choice to Consent Mode (default denied).
        updateConsentMode(stored === "granted");
      }
    } catch {
      /* storage unavailable; treat as undecided */
    }
    setReady(true);
  }, []);

  const setConsent = useCallback((value: "granted" | "denied") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore storage errors */
    }
    updateConsentMode(value === "granted");
    setConsentState(value);
  }, []);

  const resetConsent = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore storage errors */
    }
    setConsentState("unknown");
  }, []);

  return (
    <ConsentContext.Provider value={{ consent, ready, setConsent, resetConsent }}>
      {children}
    </ConsentContext.Provider>
  );
}
