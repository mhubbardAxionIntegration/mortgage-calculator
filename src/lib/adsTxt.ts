import { MONETIZATION } from "./site";

/** Google ads.txt line — pub ID derived from the AdSense client ID in site config. */
export function getAdsTxtBody(): string {
  const clientId = MONETIZATION.adsenseClientId.trim();
  if (!clientId.startsWith("ca-pub-")) return "";
  const pubId = clientId.replace(/^ca-pub-/, "pub-");
  return `google.com, ${pubId}, DIRECT, f08c47fec0942fa0\n`;
}
