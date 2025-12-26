import { useEffect } from "react";

export function useRevealOnScroll(dep: number) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    els.forEach((el) => el.classList.remove("is-visible"));

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));

    const t = window.setTimeout(() => {
      const stillHidden = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"));
      stillHidden.forEach((el) => el.classList.add("is-visible"));
    }, 350);

    return () => {
      window.clearTimeout(t);
      io.disconnect();
    };
  }, [dep]);
}
