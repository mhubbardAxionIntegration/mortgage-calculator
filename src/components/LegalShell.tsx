import { Breadcrumbs } from "./Breadcrumbs";
import { PageHero } from "./PageHero";
import type { PageHeroConfig } from "@/lib/pageHeroes";

export function LegalShell({
  title,
  href,
  updated,
  hero,
  subtitle,
  children,
}: {
  title: string;
  href: string;
  updated?: string;
  hero?: PageHeroConfig;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      {hero ? (
        <PageHero hero={hero} title={title} subtitle={subtitle} showBrand />
      ) : null}
      <div className="mx-auto max-w-3xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: title, href },
          ]}
        />
        {!hero ? (
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900">
            {title}
          </h1>
        ) : null}
        {updated && (
          <p className={`text-sm text-slate-500 ${hero ? "mt-0" : "mt-2"}`}>
            Last updated: {updated}
          </p>
        )}
        <div className="mt-8 space-y-6 text-slate-600 [&_a]:text-sky-800 [&_a]:underline [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-900 [&_li]:ml-1 [&_p]:leading-relaxed [&_table]:w-full [&_table]:text-sm [&_td]:py-2 [&_td]:pr-3 [&_td]:align-top [&_th]:py-2 [&_th]:pr-3 [&_th]:text-left [&_th]:font-semibold [&_th]:text-slate-900 [&_tr]:border-b [&_tr]:border-slate-200 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
          {children}
        </div>
      </div>
    </>
  );
}
