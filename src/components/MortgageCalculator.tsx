"use client";

import { useMemo, useState, useId, useCallback, useEffect, useRef } from "react";
import {
  calculatePayment,
  buildAmortizationSchedule,
  calculateAffordability,
  formatCurrency,
  formatPercent,
  type MortgageInputs,
} from "@/lib/mortgage";
import { DEFAULT_INPUTS } from "@/lib/defaults";
import { buildRateQuoteUrl } from "@/lib/monetization";
import { MONETIZATION, isPremiumLocked } from "@/lib/site";
import { downloadAmortizationPdf } from "@/lib/pdf";
import { PaymentDonut } from "./PaymentDonut";
import { AmortizationSchedule } from "./AmortizationSchedule";

type Mode = "payment" | "affordability";

interface Props {
  initialInputs?: Partial<MortgageInputs>;
  initialMode?: Mode;
  /** Hide the mode tabs (e.g. on a dedicated affordability page). */
  lockMode?: boolean;
}

interface AffordabilityState {
  annualIncome: number;
  monthlyDebts: number;
  downPayment: number;
  maxDtiRatio: number;
}

async function verifyLicenseKey(key: string): Promise<boolean> {
  try {
    const res = await fetch("/api/license/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key }),
    });
    if (!res.ok) return false;
    const data = (await res.json()) as { valid?: boolean };
    return Boolean(data.valid);
  } catch {
    return false;
  }
}

const DONUT_COLORS = {
  pi: "#059669",
  tax: "#0ea5e9",
  insurance: "#f59e0b",
  pmi: "#ef4444",
  hoa: "#8b5cf6",
};

export function MortgageCalculator({
  initialInputs,
  initialMode = "payment",
  lockMode = false,
}: Props) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [inputs, setInputs] = useState<MortgageInputs>({
    ...DEFAULT_INPUTS,
    ...initialInputs,
  });
  const [afford, setAfford] = useState<AffordabilityState>({
    annualIncome: 110000,
    monthlyDebts: 600,
    downPayment: initialInputs?.downPayment ?? 70000,
    maxDtiRatio: 0.36,
  });
  const [showSchedule, setShowSchedule] = useState(false);
  const [copied, setCopied] = useState(false);
  const [premiumUnlocked, setPremiumUnlocked] = useState(false);
  const [showLicenseEntry, setShowLicenseEntry] = useState(false);
  const [licenseInput, setLicenseInput] = useState("");
  const [licenseError, setLicenseError] = useState("");
  const [applyingLicense, setApplyingLicense] = useState(false);

  // Grant premium access from (in priority order): a license key in the URL
  // after checkout, a previously stored license, or the legacy shared unlock
  // code. License keys are verified server-side so the secret stays private.
  useEffect(() => {
    if (!isPremiumLocked()) return;
    let cancelled = false;

    (async () => {
      try {
        const params = new URLSearchParams(window.location.search);

        const urlLicense = params.get("license");
        if (urlLicense && (await verifyLicenseKey(urlLicense))) {
          localStorage.setItem("pm_license", urlLicense);
          if (!cancelled) setPremiumUnlocked(true);
          params.delete("license");
          const clean =
            window.location.pathname + (params.toString() ? `?${params}` : "");
          window.history.replaceState({}, "", clean);
          return;
        }

        const stored = localStorage.getItem("pm_license");
        if (stored) {
          if (await verifyLicenseKey(stored)) {
            if (!cancelled) setPremiumUnlocked(true);
            return;
          }
          localStorage.removeItem("pm_license");
        }

        if (params.get("unlock") === MONETIZATION.premium.unlockCode) {
          localStorage.setItem("pm_premium", "1");
        }
        if (localStorage.getItem("pm_premium") === "1" && !cancelled) {
          setPremiumUnlocked(true);
        }
      } catch {
        /* storage/network unavailable; premium stays locked */
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const applyLicense = useCallback(async () => {
    const key = licenseInput.trim();
    if (!key) return;
    setApplyingLicense(true);
    setLicenseError("");
    const ok = await verifyLicenseKey(key);
    if (ok) {
      try {
        localStorage.setItem("pm_license", key);
      } catch {
        /* ignore storage errors */
      }
      setPremiumUnlocked(true);
      setShowLicenseEntry(false);
    } else {
      setLicenseError("That license key isn't valid. Check it and try again.");
    }
    setApplyingLicense(false);
  }, [licenseInput]);

  const set = useCallback(
    <K extends keyof MortgageInputs>(key: K, value: number) =>
      setInputs((prev) => ({ ...prev, [key]: value })),
    [],
  );

  const downPaymentPercent =
    inputs.homePrice > 0 ? (inputs.downPayment / inputs.homePrice) * 100 : 0;

  const result = useMemo(() => calculatePayment(inputs), [inputs]);
  const schedule = useMemo(
    () =>
      buildAmortizationSchedule(
        result.loanAmount,
        inputs.annualRate,
        inputs.termYears,
      ),
    [result.loanAmount, inputs.annualRate, inputs.termYears],
  );

  const affordResult = useMemo(
    () =>
      calculateAffordability({
        annualIncome: afford.annualIncome,
        monthlyDebts: afford.monthlyDebts,
        downPayment: afford.downPayment,
        annualRate: inputs.annualRate,
        termYears: inputs.termYears,
        maxDtiRatio: afford.maxDtiRatio,
        propertyTaxRate: inputs.propertyTaxRate,
        annualHomeInsurance: inputs.annualHomeInsurance,
        monthlyHoa: inputs.monthlyHoa,
      }),
    [afford, inputs.annualRate, inputs.termYears, inputs.propertyTaxRate, inputs.annualHomeInsurance, inputs.monthlyHoa],
  );

  const handleShare = useCallback(async () => {
    const params = new URLSearchParams({
      price: String(inputs.homePrice),
      down: String(inputs.downPayment),
      rate: String(inputs.annualRate),
      term: String(inputs.termYears),
    });
    const url = `${window.location.origin}${window.location.pathname}?${params}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard may be unavailable; fail silently */
    }
  }, [inputs]);

  const rateQuoteUrl = buildRateQuoteUrl({
    homePrice: inputs.homePrice,
    downPayment: inputs.downPayment,
    rate: inputs.annualRate,
    term: inputs.termYears,
  });

  const [checkingOut, setCheckingOut] = useState(false);
  const canDownloadPdf = !isPremiumLocked() || premiumUnlocked;
  const handleDownloadPdf = useCallback(() => {
    downloadAmortizationPdf(inputs, result, schedule);
  }, [inputs, result, schedule]);

  // Start Stripe Checkout; fall back to a configured link if Stripe isn't set up.
  const handleUnlock = useCallback(async () => {
    setCheckingOut(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ returnPath: window.location.pathname }),
      });
      if (res.ok) {
        const data = (await res.json()) as { url?: string };
        if (data.url) {
          window.location.href = data.url;
          return;
        }
      }
      if (MONETIZATION.premium.checkoutUrl) {
        window.location.href = MONETIZATION.premium.checkoutUrl;
        return;
      }
    } catch {
      if (MONETIZATION.premium.checkoutUrl) {
        window.location.href = MONETIZATION.premium.checkoutUrl;
        return;
      }
    } finally {
      setCheckingOut(false);
    }
  }, []);

  const donutSegments = [
    { label: "Principal & interest", value: result.principalAndInterest, color: DONUT_COLORS.pi },
    { label: "Property tax", value: result.monthlyTax, color: DONUT_COLORS.tax },
    { label: "Home insurance", value: result.monthlyInsurance, color: DONUT_COLORS.insurance },
    { label: "PMI", value: result.monthlyPmi, color: DONUT_COLORS.pmi },
    { label: "HOA", value: result.monthlyHoa, color: DONUT_COLORS.hoa },
  ];

  return (
    <section
      aria-label="Mortgage calculator"
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      {!lockMode && (
        <div role="tablist" aria-label="Calculator mode" className="flex border-b border-slate-200">
          <ModeTab id="payment" active={mode === "payment"} onClick={() => setMode("payment")}>
            Monthly payment
          </ModeTab>
          <ModeTab id="affordability" active={mode === "affordability"} onClick={() => setMode("affordability")}>
            Affordability
          </ModeTab>
        </div>
      )}

      <div className="grid gap-0 lg:grid-cols-5">
        {/* Inputs */}
        <div className="space-y-5 p-5 sm:p-6 lg:col-span-3 lg:border-r lg:border-slate-200">
          {mode === "payment" ? (
            <>
              <SliderField
                label="Home price"
                value={inputs.homePrice}
                onChange={(v) => set("homePrice", v)}
                min={50000}
                max={2000000}
                step={5000}
                format={(v) => formatCurrency(v)}
              />
              <SliderField
                label="Down payment"
                value={inputs.downPayment}
                onChange={(v) => set("downPayment", v)}
                min={0}
                max={inputs.homePrice}
                step={1000}
                format={(v) => `${formatCurrency(v)} (${formatPercent(downPaymentPercent, 0)})`}
                hint={downPaymentPercent < 20 ? "Under 20% — PMI applies" : "20%+ — no PMI"}
              />
              <SliderField
                label="Interest rate"
                value={inputs.annualRate}
                onChange={(v) => set("annualRate", v)}
                min={0.5}
                max={12}
                step={0.05}
                format={(v) => formatPercent(v)}
              />
              <fieldset>
                <legend className="mb-2 block text-sm font-medium text-slate-700">
                  Loan term
                </legend>
                <div className="flex flex-wrap gap-2">
                  {[10, 15, 20, 30].map((yrs) => (
                    <button
                      key={yrs}
                      type="button"
                      aria-pressed={inputs.termYears === yrs}
                      onClick={() => set("termYears", yrs)}
                      className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                        inputs.termYears === yrs
                          ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                          : "border-slate-300 bg-white text-slate-600 hover:border-slate-400"
                      }`}
                    >
                      {yrs} yr
                    </button>
                  ))}
                </div>
              </fieldset>

              <details className="rounded-lg border border-slate-200 bg-slate-50/60">
                <summary className="cursor-pointer select-none px-4 py-3 text-sm font-medium text-slate-700">
                  Taxes, insurance &amp; fees
                </summary>
                <div className="grid gap-4 px-4 pb-4 sm:grid-cols-2">
                  <NumberField
                    label="Property tax rate (%/yr)"
                    value={inputs.propertyTaxRate}
                    onChange={(v) => set("propertyTaxRate", v)}
                    step={0.05}
                    suffix="%"
                  />
                  <NumberField
                    label="Home insurance ($/yr)"
                    value={inputs.annualHomeInsurance}
                    onChange={(v) => set("annualHomeInsurance", v)}
                    step={50}
                    prefix="$"
                  />
                  <NumberField
                    label="PMI rate (%/yr)"
                    value={inputs.pmiRate}
                    onChange={(v) => set("pmiRate", v)}
                    step={0.05}
                    suffix="%"
                  />
                  <NumberField
                    label="HOA dues ($/mo)"
                    value={inputs.monthlyHoa}
                    onChange={(v) => set("monthlyHoa", v)}
                    step={10}
                    prefix="$"
                  />
                </div>
              </details>
            </>
          ) : (
            <>
              <SliderField
                label="Annual household income"
                value={afford.annualIncome}
                onChange={(v) => setAfford((p) => ({ ...p, annualIncome: v }))}
                min={20000}
                max={500000}
                step={1000}
                format={(v) => `${formatCurrency(v)}/yr`}
              />
              <SliderField
                label="Monthly debt payments"
                value={afford.monthlyDebts}
                onChange={(v) => setAfford((p) => ({ ...p, monthlyDebts: v }))}
                min={0}
                max={5000}
                step={50}
                format={(v) => `${formatCurrency(v)}/mo`}
                hint="Car loans, student loans, credit cards, etc."
              />
              <SliderField
                label="Down payment"
                value={afford.downPayment}
                onChange={(v) => setAfford((p) => ({ ...p, downPayment: v }))}
                min={0}
                max={400000}
                step={1000}
                format={(v) => formatCurrency(v)}
              />
              <SliderField
                label="Interest rate"
                value={inputs.annualRate}
                onChange={(v) => set("annualRate", v)}
                min={0.5}
                max={12}
                step={0.05}
                format={(v) => formatPercent(v)}
              />
              <fieldset>
                <legend className="mb-2 block text-sm font-medium text-slate-700">
                  Debt-to-income comfort level
                </legend>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Conservative (28%)", v: 0.28 },
                    { label: "Balanced (36%)", v: 0.36 },
                    { label: "Aggressive (43%)", v: 0.43 },
                  ].map((opt) => (
                    <button
                      key={opt.v}
                      type="button"
                      aria-pressed={afford.maxDtiRatio === opt.v}
                      onClick={() => setAfford((p) => ({ ...p, maxDtiRatio: opt.v }))}
                      className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                        afford.maxDtiRatio === opt.v
                          ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                          : "border-slate-300 bg-white text-slate-600 hover:border-slate-400"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </fieldset>
            </>
          )}
        </div>

        {/* Results */}
        <div className="bg-slate-50/70 p-5 sm:p-6 lg:col-span-2">
          {mode === "payment" ? (
            <div className="space-y-5">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Estimated monthly payment
                </p>
                <p
                  className="text-4xl font-extrabold tracking-tight text-slate-900"
                  aria-live="polite"
                >
                  {formatCurrency(result.totalMonthly)}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  on a {formatCurrency(result.loanAmount)} loan
                </p>
              </div>

              <PaymentDonut segments={donutSegments} total={result.totalMonthly} />

              <dl className="grid grid-cols-2 gap-3 border-t border-slate-200 pt-4 text-sm">
                <Stat label="Loan amount" value={formatCurrency(result.loanAmount)} />
                <Stat label="Down payment" value={formatPercent(result.downPaymentPercent, 0)} />
                <Stat label="Total interest" value={formatCurrency(result.totalInterest)} />
                <Stat label="Total of payments" value={formatCurrency(result.totalOfPayments)} />
              </dl>

              {rateQuoteUrl && (
                <div className="border-t border-slate-200 pt-4">
                  <a
                    href={rateQuoteUrl}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    className="block rounded-lg bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                  >
                    Get personalized rates &rarr;
                  </a>
                  <p className="mt-2 text-center text-xs text-slate-400">
                    {MONETIZATION.affiliate.disclosure}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleShare}
                  className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400"
                >
                  {copied ? "Link copied!" : "Copy shareable link"}
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400"
                >
                  Print results
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  You can afford a home up to
                </p>
                <p
                  className="text-4xl font-extrabold tracking-tight text-slate-900"
                  aria-live="polite"
                >
                  {formatCurrency(affordResult.maxHomePrice)}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  with a {formatCurrency(afford.downPayment)} down payment
                </p>
              </div>
              <dl className="grid grid-cols-1 gap-3 border-t border-slate-200 pt-4 text-sm">
                <Stat label="Maximum loan amount" value={formatCurrency(affordResult.maxLoanAmount)} />
                <Stat
                  label="Target housing payment"
                  value={`${formatCurrency(affordResult.maxMonthlyPayment)}/mo`}
                />
                <Stat
                  label="Estimated principal & interest"
                  value={`${formatCurrency(affordResult.estimatedMonthlyPI)}/mo`}
                />
              </dl>
              <p className="rounded-lg bg-emerald-50 p-3 text-xs leading-relaxed text-emerald-800">
                Based on the {Math.round(afford.maxDtiRatio * 100)}% debt-to-income
                guideline. Lenders also weigh credit score, employment history,
                and cash reserves.
              </p>
              {rateQuoteUrl && (
                <div>
                  <a
                    href={rateQuoteUrl}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    className="block rounded-lg bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                  >
                    Get pre-qualified with a lender &rarr;
                  </a>
                  <p className="mt-2 text-center text-xs text-slate-400">
                    {MONETIZATION.affiliate.disclosure}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Amortization */}
      {mode === "payment" && schedule.length > 0 && (
        <div className="border-t border-slate-200 p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setShowSchedule((s) => !s)}
              aria-expanded={showSchedule}
              className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            >
              {showSchedule ? "Hide" : "Show"} amortization schedule
            </button>

            {canDownloadPdf ? (
              <button
                type="button"
                onClick={handleDownloadPdf}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700"
              >
                <span aria-hidden>&#8595;</span> Download PDF report
              </button>
            ) : (
              <button
                type="button"
                onClick={handleUnlock}
                disabled={checkingOut}
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span aria-hidden>&#128274;</span>{" "}
                {checkingOut
                  ? "Redirecting…"
                  : `Unlock PDF report (${MONETIZATION.premium.price})`}
              </button>
            )}
          </div>

          {!canDownloadPdf && (
            <div className="mt-2">
              <p className="text-xs text-slate-500">
                {MONETIZATION.premium.label}: download a branded PDF with your
                full year-by-year and month-by-month amortization schedule.
                One-time {MONETIZATION.premium.price}.{" "}
                <button
                  type="button"
                  onClick={() => setShowLicenseEntry((s) => !s)}
                  className="font-medium text-emerald-700 underline hover:text-emerald-800"
                >
                  Have a license key?
                </button>
              </p>

              {showLicenseEntry && (
                <div className="mt-3 flex flex-wrap items-start gap-2">
                  <label htmlFor="license-key" className="sr-only">
                    License key
                  </label>
                  <input
                    id="license-key"
                    type="text"
                    value={licenseInput}
                    onChange={(e) => setLicenseInput(e.target.value)}
                    placeholder="Paste your license key"
                    className="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                  <button
                    type="button"
                    onClick={applyLicense}
                    disabled={applyingLicense || !licenseInput.trim()}
                    className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {applyingLicense ? "Checking…" : "Apply"}
                  </button>
                  {licenseError && (
                    <p className="w-full text-xs text-red-600">{licenseError}</p>
                  )}
                </div>
              )}
            </div>
          )}

          {showSchedule && (
            <div className="mt-4">
              <AmortizationSchedule schedule={schedule} />
            </div>
          )}
        </div>
      )}
    </section>
  );
}

function ModeTab({
  id,
  active,
  onClick,
  children,
}: {
  id: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      id={`tab-${id}`}
      aria-selected={active}
      onClick={onClick}
      className={`flex-1 px-4 py-3 text-sm font-semibold transition ${
        active
          ? "border-b-2 border-emerald-600 text-emerald-700"
          : "text-slate-500 hover:text-slate-700"
      }`}
    >
      {children}
    </button>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-slate-500">{label}</dt>
      <dd className="font-semibold text-slate-900">{value}</dd>
    </div>
  );
}

function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
  hint,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  hint?: string;
}) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const safeValue = Math.min(Math.max(value, min), max);
  const dragging = useRef(false);
  const [active, setActive] = useState(false);
  const [local, setLocal] = useState(safeValue);

  useEffect(() => {
    if (!dragging.current) setLocal(safeValue);
  }, [safeValue]);

  const commit = useCallback(
    (el: HTMLInputElement) => {
      const n = Number(el.value);
      if (!Number.isFinite(n)) return;
      setLocal(n);
      onChange(n);
    },
    [onChange],
  );

  // Non-passive touchmove prevents LinkedIn/Facebook/Instagram from scrolling
  // over the slider while the user is dragging (iOS + Android WebViews).
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    const onTouchMove = (e: TouchEvent) => {
      if (!dragging.current) return;
      commit(el);
      e.preventDefault();
    };
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => el.removeEventListener("touchmove", onTouchMove);
  }, [commit]);

  const begin = useCallback(
    (el: HTMLInputElement) => {
      dragging.current = true;
      setActive(true);
      commit(el);
    },
    [commit],
  );

  const move = useCallback(
    (el: HTMLInputElement) => {
      if (dragging.current) commit(el);
    },
    [commit],
  );

  const end = useCallback(
    (el: HTMLInputElement) => {
      commit(el);
      dragging.current = false;
      setActive(false);
    },
    [commit],
  );

  const shown = active ? local : safeValue;

  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-medium text-slate-700">
          {label}
        </label>
        <span className="text-sm font-semibold text-slate-900">
          {format(active ? local : value)}
        </span>
      </div>
      <input
        ref={inputRef}
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={shown}
        onPointerDown={(e) => {
          begin(e.currentTarget);
          e.currentTarget.setPointerCapture?.(e.pointerId);
        }}
        onPointerMove={(e) => move(e.currentTarget)}
        onPointerUp={(e) => {
          end(e.currentTarget);
          e.currentTarget.releasePointerCapture?.(e.pointerId);
        }}
        onPointerCancel={(e) => end(e.currentTarget)}
        onTouchStart={(e) => begin(e.currentTarget)}
        onTouchMove={(e) => move(e.currentTarget)}
        onTouchEnd={(e) => end(e.currentTarget)}
        onInput={(e) => move(e.currentTarget)}
        onChange={(e) => commit(e.currentTarget)}
        className="range-slider h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-emerald-600"
      />
      {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
  step,
  prefix,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  step: number;
  prefix?: string;
  suffix?: string;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-xs font-medium text-slate-600">
        {label}
      </label>
      <div className="flex items-center rounded-lg border border-slate-300 bg-white focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500">
        {prefix && <span className="pl-2.5 text-sm text-slate-400">{prefix}</span>}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={0}
          step={step}
          value={Number.isFinite(value) ? value : 0}
          onInput={(e) => onChange(Number(e.currentTarget.value))}
          onChange={(e) => onChange(Number(e.currentTarget.value))}
          onBlur={(e) => onChange(Number(e.currentTarget.value))}
          className="w-full bg-transparent px-2.5 py-2 text-sm text-slate-900 outline-none"
        />
        {suffix && <span className="pr-2.5 text-sm text-slate-400">{suffix}</span>}
      </div>
    </div>
  );
}
