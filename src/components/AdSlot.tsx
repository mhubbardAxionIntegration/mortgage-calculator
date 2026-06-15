"use client";

import { useEffect, useRef } from "react";
import { MONETIZATION, isAdsEnabled } from "@/lib/site";

type SlotName = keyof typeof MONETIZATION.ads;

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * Responsive ad placement.
 * - Renders a real Google AdSense unit when an AdSense client ID and the
 *   matching slot ID are configured in `MONETIZATION`.
 * - Renders a dashed placeholder in development so you can see ad positions.
 * - Renders nothing in production when ads are unconfigured (no layout shift
 *   from empty units, which keeps Core Web Vitals clean).
 */
export function AdSlot({
  slot,
  label = "Advertisement",
  className = "",
}: {
  slot: SlotName;
  label?: string;
  className?: string;
}) {
  const slotId = MONETIZATION.ads[slot];
  // Render a real ad unit when ads + this slot are configured. Cookie/consent
  // behavior is governed by Google Consent Mode (default denied until the
  // visitor accepts in the cookie banner), so ads serve non-personalized
  // until then rather than being withheld entirely.
  const enabled = isAdsEnabled() && slotId.trim().length > 0;
  const pushed = useRef(false);

  useEffect(() => {
    if (!enabled || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      /* AdSense script not yet ready; it will retry on next render */
    }
  }, [enabled]);

  if (enabled) {
    return (
      <aside
        aria-label={label}
        className={`mx-auto w-full max-w-3xl text-center ${className}`}
      >
        <ins
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client={MONETIZATION.adsenseClientId}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </aside>
    );
  }

  if (process.env.NODE_ENV !== "production") {
    return (
      <aside
        aria-label={`${label} (placeholder)`}
        className={`mx-auto flex w-full max-w-3xl items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-xs font-medium uppercase tracking-wide text-slate-400 ${className}`}
      >
        Ad slot: {slot}
      </aside>
    );
  }

  return null;
}
