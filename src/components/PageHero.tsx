import { getImageProps } from "next/image";
import { SITE } from "@/lib/site";
import {
  HERO_INTRINSIC_SIZE,
  mobileHeroSrc,
  type PageHeroConfig,
} from "@/lib/pageHeroes";

type Props = {
  hero: PageHeroConfig;
  title: string;
  subtitle?: string;
  showBrand?: boolean;
  children?: React.ReactNode;
};

/** Tailwind's `sm` breakpoint — matches the min-height switch below. */
const DESKTOP_MEDIA = "(min-width: 640px)";

/**
 * Full-bleed panoramic property hero for major pages.
 *
 * Art-directed: phones (<640px) get a pre-built static mobile-width WebP
 * (see `scripts/optimize-heroes-mobile.mjs`) served with no `/_next/image`
 * round trip at all, so the LCP image never waits on a cold sharp
 * resize/re-encode on constrained hosting. Desktop (>=640px) keeps using
 * the Next.js image optimizer, which is already fast/cached there.
 */
export function PageHero({
  hero,
  title,
  subtitle,
  showBrand = true,
  children,
}: Props) {
  const mobileSrc = mobileHeroSrc(hero.src);

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    src: hero.src,
    alt: hero.alt,
    width: HERO_INTRINSIC_SIZE.width,
    height: HERO_INTRINSIC_SIZE.height,
    quality: 60,
    sizes: "100vw",
  });

  return (
    <section className="relative isolate min-h-[16rem] overflow-hidden sm:min-h-[20rem]">
      {/*
        No explicit `<link rel="preload">` here on purpose: React/Next's
        automatic <link> hoisting for Server Components drops the `media`
        attribute and only keeps one resource per `as` type, so a
        media-scoped mobile-vs-desktop preload pair silently collapses into
        a single *unconditional* preload — which would preload the desktop
        srcset on phones and defeat this whole optimization. The browser's
        preload scanner already discovers this `<picture>` immediately (it's
        the first thing in <body>), and `fetchPriority="high"` plus no
        `loading="lazy"` gives it top priority without that footgun.
      */}
      <picture className="absolute inset-0 block h-full w-full">
        <source media={DESKTOP_MEDIA} srcSet={desktopSrcSet} sizes="100vw" />
        <img
          src={mobileSrc}
          alt={hero.alt}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
      </picture>
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
