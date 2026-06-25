import { getAdsTxtBody } from "@/lib/adsTxt";

export const dynamic = "force-static";
export const revalidate = 3600;

export function GET() {
  return new Response(getAdsTxtBody(), {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
