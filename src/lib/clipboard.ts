/** Detect embedded in-app browsers that restrict clipboard, print, and downloads. */
export function isInAppBrowser(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  return /LinkedInApp|FBAN|FBAV|Instagram|Twitter/i.test(ua);
}

export type CopyResult = "copied" | "shared" | "failed";

/** Copy text, or open the native share sheet when clipboard is blocked. */
export async function copyOrShareText(
  text: string,
  title = "Share link",
): Promise<CopyResult> {
  if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
    try {
      await navigator.share({ title, url: text });
      return "shared";
    } catch (err) {
      if ((err as Error).name === "AbortError") return "failed";
    }
  }

  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return "copied";
    } catch {
      /* fall through */
    }
  }

  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok ? "copied" : "failed";
  } catch {
    return "failed";
  }
}
