"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";

type Props = {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  hint?: string;
};

function clampStep(min: number, max: number, step: number, raw: number) {
  const bounded = Math.min(max, Math.max(min, raw));
  if (step <= 0) return bounded;
  const steps = Math.round((bounded - min) / step);
  return Math.min(max, Math.max(min, min + steps * step));
}

function valueFromClientX(
  clientX: number,
  rect: DOMRect,
  min: number,
  max: number,
  step: number,
) {
  const ratio =
    rect.width > 0 ? Math.min(1, Math.max(0, (clientX - rect.left) / rect.width)) : 0;
  return clampStep(min, max, step, min + ratio * (max - min));
}

/**
 * Custom range control — native `<input type="range">` does not emit smooth
 * touchmove updates in Facebook/LinkedIn/Instagram in-app browsers; this track
 * derives the value from finger position instead.
 */
export function RangeSlider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
  hint,
}: Props) {
  const id = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const dragKind = useRef<"pointer" | "touch" | null>(null);
  const raf = useRef(0);
  const [active, setActive] = useState(false);
  const [local, setLocal] = useState(value);

  const safe = clampStep(min, max, step, value);

  useEffect(() => {
    if (!dragging.current) setLocal(safe);
  }, [safe]);

  const apply = useCallback(
    (clientX: number, final: boolean) => {
      const track = trackRef.current;
      if (!track) return;
      const v = valueFromClientX(clientX, track.getBoundingClientRect(), min, max, step);
      setLocal(v);
      if (final) {
        cancelAnimationFrame(raf.current);
        onChange(v);
        return;
      }
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => onChange(v));
    },
    [min, max, step, onChange],
  );

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 || dragKind.current === "touch") return;
    dragKind.current = "pointer";
    dragging.current = true;
    setActive(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    apply(e.clientX, false);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current || dragKind.current !== "pointer") return;
    apply(e.clientX, false);
  };

  const onPointerEnd = (e: PointerEvent<HTMLDivElement>) => {
    if (dragKind.current !== "pointer") return;
    dragging.current = false;
    dragKind.current = null;
    setActive(false);
    apply(e.clientX, true);
    if (e.currentTarget.hasPointerCapture?.(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    let delta = 0;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") delta = step;
    else if (e.key === "ArrowLeft" || e.key === "ArrowDown") delta = -step;
    else if (e.key === "Home") {
      e.preventDefault();
      setLocal(min);
      onChange(min);
      return;
    } else if (e.key === "End") {
      e.preventDefault();
      setLocal(max);
      onChange(max);
      return;
    }
    if (!delta) return;
    e.preventDefault();
    const v = clampStep(min, max, step, safe + delta);
    setLocal(v);
    onChange(v);
  };

  // Touch fallback for WebViews where pointer capture is flaky (Facebook iOS).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      dragKind.current = "touch";
      dragging.current = true;
      setActive(true);
      apply(t.clientX, false);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!dragging.current || dragKind.current !== "touch") return;
      const t = e.touches[0];
      if (!t) return;
      apply(t.clientX, false);
      e.preventDefault();
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (dragKind.current !== "touch") return;
      const t = e.changedTouches[0];
      dragging.current = false;
      dragKind.current = null;
      setActive(false);
      if (t) apply(t.clientX, true);
    };

    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchmove", onTouchMove, { passive: false });
    track.addEventListener("touchend", onTouchEnd, { passive: true });
    track.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchmove", onTouchMove);
      track.removeEventListener("touchend", onTouchEnd);
      track.removeEventListener("touchcancel", onTouchEnd);
      cancelAnimationFrame(raf.current);
    };
  }, [apply]);

  const shown = active ? local : safe;
  const pct = max > min ? ((shown - min) / (max - min)) * 100 : 0;

  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between gap-3">
        <label id={`${id}-label`} className="text-sm font-medium text-slate-700">
          {label}
        </label>
        <span className="text-sm font-semibold text-slate-900">{format(shown)}</span>
      </div>
      <div
        ref={trackRef}
        id={id}
        role="slider"
        aria-labelledby={`${id}-label`}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={shown}
        tabIndex={0}
        className="relative flex h-11 cursor-pointer touch-none select-none items-center outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-lg"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        onKeyDown={onKeyDown}
      >
        <div className="pointer-events-none absolute inset-x-0 h-2 rounded-full bg-slate-200" />
        <div
          className="pointer-events-none absolute h-2 rounded-l-full bg-emerald-600"
          style={{ width: `${pct}%` }}
        />
        <div
          className="pointer-events-none absolute h-5 w-5 rounded-full border-2 border-white bg-emerald-600 shadow-md"
          style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
        />
      </div>
      {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
    </div>
  );
}
