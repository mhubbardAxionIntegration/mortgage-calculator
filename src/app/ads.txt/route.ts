import { getAdsTxtBody } from "@/lib/adsTxt";

export const dynamic = "force-static";

export function GET() {
  return new Response(getAdsTxtBody(), {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
