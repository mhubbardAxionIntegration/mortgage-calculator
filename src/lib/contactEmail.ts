/**
 * Server-only contact inbox address.
 * Import only from Route Handlers / Server Actions — never from Client
 * Components, and never render the return value into HTML or mailto: links.
 */
import "server-only";

export function getContactEmail(): string {
  const fromEnv = process.env.CONTACT_EMAIL?.trim();
  if (fromEnv) return fromEnv;
  return "mhubbard@axionintegration.com";
}
