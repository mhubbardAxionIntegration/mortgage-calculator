import { Breadcrumbs } from "./Breadcrumbs";

export function LegalShell({
  title,
  href,
  updated,
  children,
}: {
  title: string;
  href: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: title, href },
        ]}
      />
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900">
        {title}
      </h1>
      {updated && (
        <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>
      )}
      <div className="mt-8 space-y-6 text-slate-600 [&_a]:text-emerald-700 [&_a]:underline [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_li]:ml-1 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
        {children}
      </div>
    </div>
  );
}
