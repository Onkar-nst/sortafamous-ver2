// Smooth-scroll to an in-page section. The site uses GSAP ScrollSmoother (a
// virtualised scroll), so a plain #anchor won't work — we drive ScrollSmoother
// directly when it exists and fall back to native scrolling otherwise.
export async function smoothScrollTo(selector: string) {
  const el = document.querySelector(selector);
  if (!el) return;
  try {
    const ScrollSmoother = (await import("gsap/ScrollSmoother")).default;
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(el, true, "top top");
      return;
    }
  } catch {
    /* ScrollSmoother unavailable — fall through to native */
  }
  (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
}

// Convenience click handler for anchor/button elements.
export function handleSectionScroll(selector: string) {
  return (e: { preventDefault: () => void }) => {
    e.preventDefault();
    smoothScrollTo(selector);
  };
}
