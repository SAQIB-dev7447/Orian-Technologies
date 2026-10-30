"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealSelector = [
  ".page-hero > *", ".hero-copy", ".hero-art", ".hero-foot", ".trusted > *",
  ".project-card", ".about-inner > *", ".section-heading", ".skills-impact > *",
  ".technology-heading", ".technology-item", ".home-process-step", ".service-card",
  ".fit-inner > *", ".quote-card", ".contact-copy", ".contact-form",
  ".about-story-grid > *", ".belief-card", ".facts-row > *", ".work-case",
  ".process-page-step", ".process-promise .promise-inner > *", ".kindword-card",
  ".kindwords-note-inner > *", ".contact-bottom .wrap > *", ".page-cta > *",
  ".footer-about", ".footer-column", ".footer-bottom > span",
].join(",");

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    if (!elements.length || !("IntersectionObserver" in window)) return;

    const siblingOrder = new Map<Element, number>();
    elements.forEach((element) => {
      const parent = element.parentElement;
      const index = parent ? siblingOrder.get(parent) ?? 0 : 0;
      if (parent) siblingOrder.set(parent, index + 1);
      element.style.setProperty("--reveal-delay", `${Math.min(index * 65, 260)}ms`);
      element.classList.add("scroll-reveal-pending");
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("scroll-reveal-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
