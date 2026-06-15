/**
 * Renders a JSON-LD structured-data block. Server component by default so the
 * markup is in the initial HTML for crawlers and AI answer engines.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; no user input is included.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
