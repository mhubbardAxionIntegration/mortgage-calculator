# PayMortgage Calculator

An SEO-optimized mortgage calculator built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. It estimates monthly payments (PITI + PMI + HOA), shows a full amortization schedule, and answers "how much house can I afford?" — and it's engineered to rank for high-intent mortgage keywords.

## Why it's built for SEO

This project implements the strategy of leaders like Bankrate, Zillow, and NerdWallet:

- **Static prerendering (SSG).** Every page — including all 50 states + DC and every loan-type calculator — is prerendered to static HTML. Crawlers and AI answer engines see fully-rendered content and structured data on first load, and Core Web Vitals stay fast.
- **Programmatic pages at scale.**
  - `/mortgage-calculator/[state]` — 51 localized pages with state-specific property-tax, insurance, and median-price defaults and unique copy/FAQs.
  - `/calculators/[type]` — FHA, VA, Refinance, Affordability, and ARM calculators, each with tailored defaults, content, and metadata.
- **Structured data (JSON-LD):** `WebApplication`, `FAQPage`, `HowTo`, `FinancialProduct`, `BreadcrumbList`, and `Organization` — for rich results and AI Overviews.
- **On-page optimization:** keyword-targeted title/meta templates, semantic `H1–H3` headings, 1,000+ words of supporting content, internal linking, and clean URLs (`/mortgage-calculator`).
- **Technical SEO:** dynamic `sitemap.xml` (all 64 routes), `robots.txt`, canonical URLs, Open Graph/Twitter cards, and an SVG icon.
- **UX & accessibility:** instant slider-driven updates, donut chart breakdown, amortization table, shareable links, print view, skip-to-content link, ARIA roles, labeled inputs, and `aria-live` results.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (prerenders all pages)
npm run start      # serve the production build
```

## Content & freemium features

- **Blog (`/blog`):** five in-depth, internally-linked guides (mortgage rates, the 28/36 rule, 15- vs 30-year, PMI, and a Georgia first-time-buyer guide) for authority/E-E-A-T. Each post is statically prerendered with `BlogPosting` JSON-LD, breadcrumbs, related-calculator links, and a CTA. Add posts by appending to `BLOG_POSTS` in `src/lib/blog.ts`.
- **Blog categories:** posts are organized into categories (Rates & Market, Affordability, Loan Types, Refinancing, Buying Guides) with statically-generated `/blog/category/[category]` pages and a category nav on the blog index. Set a post's `category` field to one of the `BLOG_CATEGORIES` slugs.
- **PDF amortization report (freemium):** a "Download PDF report" button on the calculator generates a branded, multi-page PDF — payment summary, a year-by-year schedule, **and a full month-by-month amortization breakdown** — client-side via jsPDF. It's **free by default**; set `MONETIZATION.premium.locked = true` to gate it behind checkout.

### Stripe checkout for the premium PDF

When `MONETIZATION.premium.locked = true`, the "Unlock PDF report" button starts a real Stripe Checkout session:

1. Copy `.env.example` to `.env.local` and set `STRIPE_SECRET_KEY` (and optionally `STRIPE_PRICE_ID`; otherwise the inline `MONETIZATION.premium.priceCents` amount is used) and `NEXT_PUBLIC_SITE_URL`.
2. The button POSTs to `/api/checkout`, which creates a Checkout Session and returns its URL.
3. On success, Stripe redirects to `/api/unlock`, which **verifies the session was actually paid** before granting access. When licensing is configured (see below) it issues a signed, email-bound **license key** and returns the buyer with `?license=<key>`; otherwise it falls back to the shared `?unlock=<unlockCode>`. Access is remembered in `localStorage`.
4. If Stripe isn't configured, `/api/checkout` returns `503` and the button falls back to `MONETIZATION.premium.checkoutUrl` (e.g. a Gumroad link) if you've set one.

### License keys + webhook (stronger entitlement, no database)

For real per-purchase entitlement that works across devices — without standing up a database — set `LICENSE_SECRET` (any random string, e.g. `openssl rand -hex 32`) in your env:

- **Signed license keys:** `src/lib/license.ts` issues stateless tokens of the form `base64url(payload).HMAC-SHA256`, signed with `LICENSE_SECRET` and carrying the buyer's email (and optional expiry). They can't be forged or tampered with, and need no storage to verify.
- **Verification endpoint:** `POST /api/license/verify` with `{ "key": "..." }` checks the signature server-side (the secret never reaches the client) and returns `{ valid, email }`. The calculator calls this on load (for a key in the URL or `localStorage`) and from the **"Have a license key?"** entry, so buyers can unlock on any device by pasting their key.
- **Stripe webhook (reliable fulfillment):** point a Stripe webhook for `checkout.session.completed` at `/api/stripe/webhook` and set `STRIPE_WEBHOOK_SECRET`. The route verifies the Stripe signature against the raw body and issues the license for paid sessions. This is the place to email the key to the buyer (e.g. Resend/SendGrid) or record the sale; a redirect can be missed, a webhook is not. Locally: `stripe listen --forward-to localhost:3000/api/stripe/webhook`.

If `LICENSE_SECRET` is unset, the system gracefully falls back to the shared unlock code, so nothing breaks.

## Monetization

All monetization is **config-driven and off by default** — nothing renders with placeholder values, so there are no broken links or empty ad units in production. Edit the `MONETIZATION` and `COMPANY` objects in `src/lib/site.ts`:

- **Display ads (Google AdSense):** set `MONETIZATION.adsenseClientId` (e.g. `ca-pub-...`) and the per-slot IDs in `MONETIZATION.ads`. The AdSense script loads only when an ID is present; `<AdSlot>` renders real units in production and labeled placeholders in development. Placements sit above the fold below the calculator and mid-content.
- **Affiliate / lead generation:** set `MONETIZATION.affiliate.rateQuoteUrl` to your LendingTree / Rocket Mortgage / FlexOffers tracking link. "Get personalized rates" CTAs then appear in the calculator results (pre-filled with the user's price, down payment, rate, term, state, and loan type as query params), on each page, and use `rel="sponsored nofollow"`. An FTC disclosure is shown automatically.
- **Company cross-promo:** optional CTA powered by `COMPANY` / `MONETIZATION.showCompanyPromo` (disabled when no external website is configured) plus legal-page company details.

Trust/compliance pages required for AdSense approval are included: `/about`, `/contact`, `/privacy-policy` (covers ad + affiliate cookies), `/terms`, and `/disclaimer`.

## Contact form email

`POST /api/contact` runs on the **Node.js** runtime (not Edge). Delivery order:

1. **Resend** when `RESEND_API_KEY` is set (HTTPS API — preferred; inbound MX so Hostinger auto-reply can fire)
2. **SMTP** via nodemailer when `SMTP_USER` + `SMTP_PASS` are set (defaults to `smtp.hostinger.com`)
3. **503** in production if neither path is configured

**Headers (both paths):** `To` = `contact@smartmortgagecalc.com` (inbox), `From` = site mailbox / verified sender (**never** the visitor), `Reply-To` = visitor’s submitted email.

### Hostinger auto-reply / vacation

Hostinger automatic reply usually requires **inbound MX** delivery. External mail *to* `contact@` triggers it; contact-form mail sent via SMTP authenticated as the same mailbox (`From=contact@` → `To=contact@`) is often treated as **local/self-sent** and **skipped**, even with a correct `Reply-To`.

- **For auto-reply to work on form submissions:** set `RESEND_API_KEY`, verify `smartmortgagecalc.com` in Resend (or set `RESEND_FROM` to a verified address such as `contact@…`), redeploy. Resend delivers to the inbox via MX → auto-reply fires; replies still go to the visitor via `Reply-To`.
- **SMTP-only:** form delivery can succeed, but Hostinger auto-reply often will **not**. Use Resend for auto-reply, or accept that only external inbound mail triggers the vacation filter.

This app does **not** use `output: 'standalone'`. Hostinger should run SSR with Application type `next`, build `npm run build`, output `.next`, and start via `npm start` (`next start`). Server env vars are read at **runtime** from `process.env` — they are **not** baked into the client bundle. Do **not** put secrets in `next.config` `env` or as `NEXT_PUBLIC_*`.

| HTTP | When | User-facing message |
| --- | --- | --- |
| 503 | Production and no Resend/SMTP configured | *Email is not configured on the server…* + JSON `configured` / `missing` (booleans / key names only) |
| 502 | Resend or SMTP send/auth/connection failed | Auth or generic retry message |
| 200 | Dev without email env | Fake success (message logged to the server console only) |

**Important:** Creating a mailbox in Hostinger **Emails** alone does nothing. Env vars must be set on the **Node.js website** and the app must be **redeployed** (Save). A wrong password is **502**, not 503.

### Diagnostic endpoint (no secrets)

After deploy, open:

`https://www.smartmortgagecalc.com/api/contact/health`

- **200** + `"emailConfigured": true` → at least one path is present (`resendConfigured` and/or `smtpConfigured`).
- **503** + `"missing": ["RESEND_API_KEY", "SMTP_USER", …]` → still missing; fix Hostinger env and redeploy.
- Logs `[contact/health] email env presence: …` to **Runtime Logs** (booleans only).

### Env vars (Hostinger Node app)

Keys must be `A–Z`, `0–9`, `_` only (Hostinger rule). **No** `NEXT_PUBLIC_` prefix for secrets.

**Option A — Resend (recommended if SMTP env keeps failing)**

| Variable | Example | Required |
| --- | --- | --- |
| `RESEND_API_KEY` | `re_…` | Yes for this path |
| `RESEND_FROM` | `Smart Mortgage Calculator <contact@smartmortgagecalc.com>` | No (falls back to `SMTP_FROM` or `SITE.contactEmail`) |

Verify the sending domain in the [Resend](https://resend.com) dashboard (DNS), or use `onboarding@resend.dev` only for testing.

**Option B — Hostinger SMTP**

Primary names: `SMTP_USER`, `SMTP_PASS`. Aliases: `SMTP_USERNAME` / `SMTP_PASSWORD`, `MAIL_USER` / `MAIL_PASS`.

| Variable | Example | Required |
| --- | --- | --- |
| `SMTP_USER` | `contact@smartmortgagecalc.com` | Yes (full mailbox address) |
| `SMTP_PASS` | mailbox password | Yes |
| `SMTP_HOST` | `smtp.hostinger.com` | No (default) |
| `SMTP_PORT` | `465` (or `587`) | No (default `465`) |
| `CONTACT_EMAIL` | `contact@smartmortgagecalc.com` | No |
| `SMTP_FROM` | `Smart Mortgage Calculator <contact@smartmortgagecalc.com>` | No |
| `SMTP_SECURE` | `true` / `false` | No (secure when port is `465`) |

**Password / special characters:** Raw mailbox password in `SMTP_PASS`. No wrapping quotes. Special chars OK. Empty/whitespace-only = unset.

**Hostinger SMTP defaults:** `smtp.hostinger.com`, port **465** SSL. Auto-retry **587** STARTTLS if 465 connection fails and port/secure were not overridden.

### Hostinger click-path (must Save / redeploy)

Per [Hostinger docs](https://docs.hostinger.com/node.js/environment-variables): variables are injected into **both build and the running app**, but only after you **Save** (which **redeploys**). “Unsaved changes” = not applied. A running process will not pick up new vars until redeploy finishes.

Exact path:

1. **hPanel** → **Websites** → open **smartmortgagecalc.com** (the Node.js site — not CDN-only / static, not a different domain).
2. Sidebar → **Environment variables** *or* **Deployments** → **Settings & Redeploy** → Environment variables.
3. **Add environment variable** (or **Import .env**):
   - Easiest: `RESEND_API_KEY` = `re_…`
   - Or SMTP: `SMTP_USER` = `contact@smartmortgagecalc.com`, `SMTP_PASS` = *(Emails → mailbox password, no quotes)*
   - Optional: `SMTP_HOST` = `smtp.hostinger.com`, `SMTP_PORT` = `465`
4. Use the show/hide toggle to confirm values are non-empty (masked `••••` with empty value is a common mistake).
5. **Save** — wait until redeploy finishes. If needed: **Deployments** → **Settings & Redeploy** → **Save and Redeploy** (ZIP deploys can keep “Use previous files”).
6. Verify: `https://www.smartmortgagecalc.com/api/contact/health` → `"emailConfigured": true`.
7. Submit the contact form. Success: *Thanks — your message was sent.*
8. If still failing → **Runtime Logs**. Look for `email env presence` / Resend or SMTP send errors.

**Common pitfalls**

| Pitfall | What happens |
| --- | --- |
| Vars set but not Saved / redeploy not finished | 503; health shows false |
| Mailbox under **Emails** but no Node env vars | 503 |
| Wrong website / CDN panel vs this Node app | 503 |
| Typed `smtp_user` / spaces / `NEXT_PUBLIC_SMTP_*` | Ignored; use exact names |
| Health URL 404 | This code not deployed yet — push/redeploy first |

Locally: copy `.env.example` → `.env.local`, fill the same vars, and run `npm run dev`.

## Before deploying

1. Set your production domain in `src/lib/site.ts` (`SITE.url`) — this drives canonicals, sitemap, and Open Graph URLs.
2. Fill in `COMPANY` details (legal name, address) — used on the legal/contact pages. Public contact email is `SITE.contactEmail`.
3. Add your AdSense ID and affiliate URL(s) in `MONETIZATION` when ready to monetize.
4. Configure contact-form email on the host (see **Contact form email** above). Without `RESEND_API_KEY` or `SMTP_USER`/`SMTP_PASS`, production returns HTTP 503.
5. Replace the indicative `defaultRate` / `ratesAsOf` with a live rate source and keep them current (good for E-E-A-T).
6. Refresh the per-state data in `src/lib/states.ts` from an authoritative source on a schedule.
7. Verify the site and submit the sitemap in Google Search Console; apply for AdSense once you have original content and steady traffic.

## Project structure

```
src/
  app/
    page.tsx                          # Home / hub (brand + calculator + links)
    mortgage-calculator/page.tsx      # Primary "mortgage calculator" guide page
    mortgage-calculator/[state]/      # Programmatic state pages (SSG)
    calculators/[type]/               # Programmatic loan-type pages (SSG)
    sitemap.ts, robots.ts, icon.svg
  components/                         # Calculator UI, chart, FAQ, schema, nav
  lib/
    mortgage.ts                       # Pure math: payment, amortization, affordability
    states.ts, loanTypes.ts, faqs.ts  # Content data
    schema.ts, site.ts, defaults.ts   # SEO + config
```

## Disclaimer

Estimates are for educational purposes only and are not financial advice or a loan offer.
