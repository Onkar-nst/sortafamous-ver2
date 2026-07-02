import { useEffect } from "react";
import PageMeta from "@/seo/PageMeta";
import Hero from "@/shared/sections/collection/01-Hero";
// import AboutStudio from "@/shared/sections/collection/AboutStudio";
import WhoWeAre from "@/shared/sections/collection/02-WhoWeAre";
import HeroScatterTestimonial from "@/shared/sections/collection/HeroScatterTestimonial";
import WhatWeDo from "@/shared/sections/collection/03-WhatWeDo";
import WhoWeServe from "@/shared/sections/collection/04-WhoWeServe";
import HowItWorks from "@/shared/sections/collection/05-HowItWorks";
import HowWeWork from "@/shared/sections/collection/10-HowWeWork";
import StoriesThatStick from "@/shared/sections/collection/12-StoriesThatStick";
import TrustedByClients from "@/shared/sections/collection/07-TrustedByClients";
import InsightsFromPartners from "@/shared/sections/collection/InsightsFromPartners";
import CtaLegacy from "@/shared/sections/collection/11-CtaLegacy";
import CTA from "@/shared/sections/collection/08-CTA";
import Team from "@/shared/sections/collection/09-Team";

// Sorta Famous — single-page site.
// Flow: hero → who we are → what we do → who we serve → how it works →
//       our values → trusted by clients → cta → team → (footer via MainLayout).
// Light/creamy theme. Hero + footer stay dark by design (they use neutral-950
// bg + white text, dark in both themes); everything else is cream.
export default function CollectionPage() {
  useEffect(() => {
    try {
      localStorage.setItem("theme", "light");
    } catch {
      /* ignore */
    }
    document.documentElement.setAttribute("data-bs-theme", "light");
  }, []);

  // The three pinned scroll-sections (What We Do, How It Works) + lazy images
  // shift every downstream ScrollTrigger's start/end positions after the initial
  // layout, which can leave later scroll animations (e.g. the testimonial
  // fade-up) stuck at their end state. Recompute positions once things settle.
  useEffect(() => {
    let cancelled = false;
    const refresh = async () => {
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      if (cancelled) return;
      ScrollTrigger.refresh();
    };
    const timers = [400, 1200, 2500].map((ms) => setTimeout(refresh, ms));
    window.addEventListener("load", refresh);
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      window.removeEventListener("load", refresh);
    };
  }, []);

  return (
    <>
      <PageMeta title="Sorta Famous — PR & Strategic Communications" />

      <Hero />
      {/* <AboutStudio /> */}
      <WhoWeAre />
      <HeroScatterTestimonial />
      <WhatWeDo />
      <WhoWeServe />
      <HowItWorks />
      <HowWeWork />
      <StoriesThatStick />
      <TrustedByClients />
      <InsightsFromPartners />
      <CtaLegacy />
      <CTA />
      <Team />
    </>
  );
}
