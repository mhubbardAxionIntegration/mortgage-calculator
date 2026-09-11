import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

/**
 * Visible author identity for Smart Buying posts and the About page.
 * Credentials stay limited to work that is actually on this site.
 */
export function AuthorBio({
  variant = "card",
}: {
  variant?: "card" | "profile";
}) {
  const author = SITE.author;
  const photo = (
    <Image
      src={author.image}
      alt={author.imageAlt}
      width={variant === "profile" ? 160 : 72}
      height={variant === "profile" ? 160 : 72}
      className={
        variant === "profile"
          ? "h-40 w-40 rounded-2xl object-cover shadow-sm ring-1 ring-slate-200"
          : "h-[72px] w-[72px] rounded-full object-cover ring-1 ring-slate-200"
      }
      sizes={variant === "profile" ? "160px" : "72px"}
    />
  );

  if (variant === "profile") {
    return (
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        {photo}
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-800">
            Editor
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            {author.name}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {author.role} · {author.location}
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">{author.bio}</p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-600">
            {author.experience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
      <div className="flex gap-4">
        {photo}
        <div className="min-w-0">
          <p className="font-semibold text-slate-900">{author.name}</p>
          <p className="text-sm text-slate-500">
            {author.role} · {author.location}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {author.bio}
          </p>
        </div>
      </div>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-600">
        {author.experience.slice(0, 3).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-3 text-sm">
        <Link
          href="/about"
          className="font-medium text-sky-800 hover:text-sky-900"
        >
          About the editor
        </Link>
        {" · "}
        <Link
          href="/how-we-calculate"
          className="font-medium text-sky-800 hover:text-sky-900"
        >
          Methodology
        </Link>
        {" · "}
        <Link
          href="/contact"
          className="font-medium text-sky-800 hover:text-sky-900"
        >
          Contact
        </Link>
      </p>
    </aside>
  );
}
