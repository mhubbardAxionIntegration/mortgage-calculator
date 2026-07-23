import { SITE, absoluteUrl } from "./site";
import type { Faq } from "./faqs";

/** WebApplication schema marks the page as an interactive financial tool. */
export function webApplicationSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function faqPageSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function howToSchema(opts: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    logo: absoluteUrl("/icon.svg"),
  };
}

export function blogPostingSchema(opts: {
  title: string;
  description: string;
  url: string;
  published: string;
  updated: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    mainEntityOfPage: opts.url,
    datePublished: opts.published,
    dateModified: opts.updated,
    author: { "@type": "Organization", name: SITE.author.name },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/icon.svg") },
    },
  };
}

/** FinancialProduct schema for loan-type pages. */
export function financialProductSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    category: "Mortgage",
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };
}

export function webPageSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };
}
