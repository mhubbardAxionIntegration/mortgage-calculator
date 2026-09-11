/**
 * Crawl/index rules: keep substantial pages indexable; keep location/share
 * query strings and thin listing hubs out of the index.
 */
export const MIN_POSTS_TO_INDEX_CATEGORY = 3;

const DILUTING_KEYS = new Set([
  "state",
  "county",
  "rate",
  "fbclid",
  "gclid",
  "msclkid",
  "license",
  "unlock",
  "session_id",
]);

function keyLooksDiluting(key: string): boolean {
  const lower = key.toLowerCase();
  return DILUTING_KEYS.has(lower) || lower.startsWith("utm_");
}

export function queryLooksDiluting(search: string): boolean {
  if (!search || search === "?") return false;
  const raw = search.startsWith("?") ? search.slice(1) : search;
  const params = new URLSearchParams(raw);
  for (const key of params.keys()) {
    if (keyLooksDiluting(key)) return true;
  }
  return false;
}

/** Next.js `searchParams` object — used by `generateMetadata`. */
export function searchParamsLookDiluting(
  params: Record<string, string | string[] | undefined>,
): boolean {
  return Object.keys(params).some(keyLooksDiluting);
}
