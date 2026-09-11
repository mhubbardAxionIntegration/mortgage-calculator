"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LOAN_TYPES } from "@/lib/loanTypes";

const CALCULATOR_LINKS = [
  { href: "/#calculator", label: "Payment calculator" },
  ...LOAN_TYPES.map((t) => ({ href: `/calculators/${t.slug}`, label: t.title })),
];

const PRIMARY_LINKS = [
  { href: "/blog", label: "Smart Buying" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 text-base font-bold leading-tight text-slate-900 sm:text-lg"
        >
          <Image
            src="/icon.svg"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 shrink-0"
            unoptimized
            fetchPriority="high"
          />
          <span className="flex min-w-0 flex-col text-left">
            <span className="truncate">Smart Mortgage</span>
            <span className="truncate">Calculator</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 text-sm font-medium text-slate-600 md:flex">
          <li className="relative">
            <button
              type="button"
              className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-900"
              aria-expanded={calcOpen}
              aria-haspopup="true"
              onClick={() => setCalcOpen((v) => !v)}
              onBlur={(event) => {
                const next = event.relatedTarget as Node | null;
                if (next && event.currentTarget.parentElement?.contains(next)) {
                  return;
                }
                setCalcOpen(false);
              }}
            >
              Calculators
            </button>
            {calcOpen ? (
              <ul className="absolute left-0 z-50 mt-1 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                {CALCULATOR_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      onClick={() => setCalcOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
          {PRIMARY_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/calculators/home-affordability-calculator"
            className="hidden shrink-0 rounded-lg bg-sky-900 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 sm:inline-flex sm:px-4"
          >
            What can I afford?
          </Link>
          <button
            type="button"
            className="hidden h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-800 max-md:inline-flex"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id={menuId}
          className="border-t border-slate-200 bg-white px-4 py-3 md:hidden"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Calculators
          </p>
          <ul className="mt-2 space-y-1 text-sm font-medium text-slate-800">
            {CALCULATOR_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Site
          </p>
          <ul className="mt-2 space-y-1 text-sm font-medium text-slate-800">
            <li>
              <Link
                href="/calculators/home-affordability-calculator"
                className="block rounded-lg px-3 py-2.5 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                What can I afford?
              </Link>
            </li>
            {[
              ...PRIMARY_LINKS,
              { href: "/how-we-calculate", label: "Methodology" },
              { href: "/faq", label: "FAQ" },
              { href: "/privacy-policy", label: "Privacy Policy" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
