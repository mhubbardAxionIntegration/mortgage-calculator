import type { MouseEvent, TouchEvent } from "react";

/**
 * Returns props that fire reliably on iOS/Android in-app browsers (LinkedIn,
 * Facebook, Instagram) where `click` alone is often dropped.
 */
export function bindTap(handler: () => void) {
  let fromTouch = false;
  return {
    onTouchStart: () => {
      fromTouch = true;
    },
    onTouchEnd: (e: TouchEvent) => {
      e.preventDefault();
      handler();
      window.setTimeout(() => {
        fromTouch = false;
      }, 450);
    },
    onClick: (e: MouseEvent) => {
      if (fromTouch) {
        e.preventDefault();
        return;
      }
      handler();
    },
  };
}
