import Image from "next/image";
import { SITE } from "@/lib/site";
import type { PageHeroConfig } from "@/lib/pageHeroes";

type Props = {
  hero: PageHeroConfig;
  title: string;
  subtitle?: string;
  showBrand?: boolean;
  children?: React.ReactNode;
};

/** Full-bleed panoramic property hero for major pages. */
export function PageHero({
  hero,
  title,
  subtitle,
  showBrand = true,
  children,
}: Props) {
  return (
    <section className="relative isolate min-h-[16rem] overflow-hidden sm:min-h-[20rem]">
      <Image
        src={hero.src}
        alt={hero.alt}
        fill
        preload
        sizes="100vw"
        quality={60}
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/45 to-slate-950/70"
      />
      <div className="relative mx-auto flex min-h-[16rem] max-w-6xl items-center px-4 py-12 sm:min-h-[20rem] sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          {showBrand ? (
            <p className="text-sm font-semibold tracking-wide text-sky-200">
              {SITE.shortName}
            </p>
          ) : null}
          <h1
            className={`text-3xl font-extrabold tracking-tight text-white sm:text-4xl ${showBrand ? "mt-3" : ""}`}
          >
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 text-lg text-slate-100/90">{subtitle}</p>
          ) : null}
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
