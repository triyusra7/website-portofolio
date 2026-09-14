"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

/** Never leave the page frozen if a route takes too long to render. */
const MAX_FREEZE_MS = 1200;

function isPlainLeftClick(event: MouseEvent) {
  return (
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey
  );
}

/**
 * Drives page transitions with the View Transitions API: a click on an internal
 * link is held until the next route has rendered, so the browser can animate
 * between the two snapshots (see the `::view-transition-*` rules in globals.css).
 */
export function RouteTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const finishRef = useRef<(() => void) | null>(null);

  // Release the transition once the new route has been committed to the DOM.
  useEffect(() => {
    finishRef.current?.();
    finishRef.current = null;
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!isPlainLeftClick(event)) return;

      const anchor = (event.target as Element | null)?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || anchor.hasAttribute("download") || anchor.target === "_blank") return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      // In-page anchors (#projects) scroll, they do not navigate.
      if (url.pathname === window.location.pathname) return;

      if (!document.startViewTransition) return;

      // Runs in the capture phase, so stop Next's own Link handler from
      // navigating before the transition is set up.
      event.preventDefault();
      event.stopPropagation();

      const target = url.pathname + url.search + url.hash;

      document.startViewTransition(
        () =>
          new Promise<void>((resolve) => {
            const done = () => {
              clearTimeout(timer);
              // Snapshot the new page from the top, the way a fresh visit looks.
              if (!url.hash) window.scrollTo({ top: 0, behavior: "instant" });
              resolve();
            };
            const timer = setTimeout(done, MAX_FREEZE_MS);
            finishRef.current = done;
            router.push(target);
          }),
      );
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return null;
}
