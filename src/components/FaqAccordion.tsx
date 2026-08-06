"use client";

import { useId, useState } from "react";
import type { FaqCategory } from "@/lib/faq";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function FaqAccordion({ categories }: { categories: FaqCategory[] }) {
  const baseId = useId();
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className="scroll-mt-24"
          aria-labelledby={`${baseId}-${category.id}-heading`}
        >
          <h2
            id={`${baseId}-${category.id}-heading`}
            className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
          >
            {category.title}
          </h2>
          <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {category.items.map((item, index) => {
              const key = `${category.id}-${index}`;
              const open = openKey === key;
              const panelId = `${baseId}-${key}-panel`;
              const buttonId = `${baseId}-${key}-button`;
              const number = index + 1;

              return (
                <div key={key}>
                  <h3 className="text-base font-semibold text-slate-900">
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenKey(open ? null : key)}
                      className="flex w-full items-start gap-3 px-4 py-4 text-left hover:bg-slate-50 sm:px-5"
                    >
                      <span className="mt-0.5 w-7 shrink-0 text-sm font-bold tabular-nums text-sky-800">
                        {number}.
                      </span>
                      <span className="min-w-0 flex-1 leading-snug">
                        {item.question}
                      </span>
                      <ChevronIcon open={open} />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!open}
                    className="px-4 pb-4 sm:px-5"
                  >
                    {open ? (
                      <p className="pl-10 text-sm leading-relaxed text-slate-600 sm:pl-10">
                        {item.answer}
                      </p>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
