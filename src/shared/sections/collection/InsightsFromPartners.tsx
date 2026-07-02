import { useEffect, useRef } from "react";
import RevealText from "@/shared/effects/RevealText";
import SectionEyebrow from "@/shared/components/SectionEyebrow";

// Source: index-8 / Section8 ("Insights from Industry Partners").
// Ported verbatim in structure so the existing global effects attach by class:
//   - TextScrambleEffect     → .text-scramble kicker scrambles on scroll + hover
//   - RevealTextEffect       → .reveal-text title + bottom line reveal per character
//   - FadeAnimEffect         → .at_fade_anim ("Trusted by modern brands") fades up
//   - ScrollMoveUpEffect     → .scroll-move-up bottom paragraph drifts up
//   - ScrollRotateIdleEffect → .at-scroll-rotate asterisk rotates with scroll
//
// The signature pin animation (title stays fixed in the centre while the four
// testimonial cards scrub upward past it) is owned LOCALLY here instead of by
// the global Home8Sec8PinEffect: this section sits below CollectionPage's other
// pinned scroll-sections + GSAP ScrollSmoother, and the global pin computes its
// scroll positions before that layout settles, so it never engages. We mark the
// root data-local-pin (global pin skips it) and drive the pin ourselves,
// refreshing after this section's own images/fonts load + on window `load`.
//
// ⚠️ PLACEHOLDER TESTIMONIALS — sortafamous.in has no cleared client quotes yet.
// Names are tagged "[Sample]" and company is a replace-me note so these are never
// mistaken for real endorsements. Swap in genuine quotes when available.

interface Testimonial {
    name: string;
    role: string;
    company: string;
    quote: string;
    avatar: string;
    groupClass: string;
    reversed?: boolean;
}

const testimonials: Testimonial[] = [
    {
        name: "[Sample] Aditi Verma",
        role: "Founder",
        company: "Placeholder — replace with real quote",
        quote: "\"Sorta Famous turned our quiet launch into a story the press actually wanted to tell. The coverage landed exactly where our customers were looking.\"",
        avatar: "/assets/imgs/pages/home-8/sec8-avatar-1.webp",
        groupClass: "sec-8-home-8__group--a",
    },
    {
        name: "[Sample] Rohan Kapoor",
        role: "CEO",
        company: "Placeholder — replace with real quote",
        quote: "\"From positioning to placement, the whole process felt effortless. Our founder narrative finally reads the way we always meant it to.\"",
        avatar: "/assets/imgs/pages/home-8/sec8-avatar-2.webp",
        groupClass: "sec-8-home-8__group--b",
        reversed: true,
    },
    {
        name: "[Sample] Meera Iyer",
        role: "Brand Lead",
        company: "Placeholder — replace with real quote",
        quote: "\"They have a rare instinct for what makes a brand worth talking about — visibility that felt earned, not manufactured.\"",
        avatar: "/assets/imgs/pages/home-8/sec8-avatar-3.webp",
        groupClass: "sec-8-home-8__group--c",
    },
    {
        name: "[Sample] Dev Sharma",
        role: "Head of Growth",
        company: "Placeholder — replace with real quote",
        quote: "\"Strategic, sharp, and genuinely honest. The right kind of attention showed up — and it stuck.\"",
        avatar: "/assets/imgs/pages/home-8/sec8-avatar-4.webp",
        groupClass: "sec-8-home-8__group--d",
    },
];

function StarsRating() {
    return (
        <>
            {Array.from({ length: 5 }).map((_, i) => (
                <img key={i} src="/assets/imgs/pages/home-8/sec8-star.svg" alt="orisa" width={16} height={16} loading="lazy" />
            ))}
        </>
    );
}

type GsapContext = { revert: () => void };

export default function InsightsFromPartners() {
    const sectionRef = useRef<HTMLElement | null>(null);

    // Local pin: pin .sec-8-home-8__stage while scrubbing the .sec-8-home-8__group
    // cards upward, so the centre title stays put and the cards stream past it.
    // Mirrors the theme's Home8Sec8PinEffect but recomputes positions after this
    // section's own assets load, so it survives CollectionPage's layout shifts.
    useEffect(() => {
        const sec8 = sectionRef.current;
        if (!sec8) return;

        const reduceMotion =
            typeof window.matchMedia === "function" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) return;

        let cancelled = false;
        let ctx: GsapContext | null = null;
        const disposers: Array<() => void> = [];

        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);
            if (cancelled) return;

            ctx = (gsap as unknown as {
                context: (fn: () => void, scope?: Element) => GsapContext;
            }).context(() => {
                // Matches the CSS: cards are absolutely positioned only from 992px up.
                gsap.matchMedia().add("(min-width: 992px)", () => {
                    const stage = sec8.querySelector<HTMLElement>(".sec-8-home-8__stage");
                    const center = sec8.querySelector<HTMLElement>(".sec-8-home-8__center");
                    const groups = Array.from(
                        sec8.querySelectorAll<HTMLElement>(".sec-8-home-8__group")
                    );
                    if (!stage || !center || !groups.length) return;

                    const getScrollDistance = () => {
                        let maxBottom = 0;
                        groups.forEach((el) => {
                            const b = el.offsetTop + el.offsetHeight;
                            if (b > maxBottom) maxBottom = b;
                        });
                        const centerTop = center.offsetTop || 0;
                        return Math.max(0, Math.round(maxBottom - centerTop));
                    };

                    gsap.set(center, { willChange: "transform" });
                    gsap.set(groups, { willChange: "transform" });

                    gsap.timeline({
                        scrollTrigger: {
                            trigger: center,
                            start: "top 10%",
                            end: () => `+=${getScrollDistance()}`,
                            pin: stage,
                            pinSpacing: true,
                            scrub: 1,
                            anticipatePin: 1,
                            invalidateOnRefresh: true,
                        },
                    }).to(
                        groups,
                        {
                            y: () => -getScrollDistance(),
                            ease: "none",
                        },
                        0
                    );
                });
            }, sec8);

            if (cancelled) {
                ctx.revert();
                ctx = null;
                return;
            }

            // Positions depend on this section's images/fonts + everything pinned
            // above it. Recompute once those settle so the pin lands correctly.
            const refresh = () => {
                if (!cancelled) ScrollTrigger.refresh();
            };
            const imgs = Array.from(sec8.querySelectorAll("img"));
            imgs.forEach((img) => {
                if (img.complete) return;
                img.addEventListener("load", refresh, { once: true });
                img.addEventListener("error", refresh, { once: true });
                disposers.push(() => {
                    img.removeEventListener("load", refresh);
                    img.removeEventListener("error", refresh);
                });
            });
            window.addEventListener("load", refresh);
            disposers.push(() => window.removeEventListener("load", refresh));
            const timers = [200, 800, 1600].map((ms) => window.setTimeout(refresh, ms));
            disposers.push(() => timers.forEach((t) => clearTimeout(t)));
            if (typeof document !== "undefined" && "fonts" in document) {
                document.fonts.ready.then(refresh).catch(() => { });
            }
            refresh();
        };

        init();

        return () => {
            cancelled = true;
            disposers.forEach((fn) => fn());
            ctx?.revert();
            ctx = null;
        };
    }, []);

    return (
        <section ref={sectionRef} data-local-pin className="sec-8-home-8 p-relative">
            <div className="container sf-section-gutter">
                <div className="sec-8-home-8__top d-flex align-items-end justify-content-between">
                    <SectionEyebrow label="Testimonials" />
                    <span className="sec-8-home-8__trusted text-decoration-underline at_fade_anim">Trusted by modern brands</span>
                </div>
                <div className="sec-8-home-8__stage">
                    <div className="sec-8-home-8__center">
                        <img className="sec-8-home-8__asterisk at-scroll-rotate" data-rotate-duration="12" data-rotate-sensitivity="0.18" data-rotate-boost="12" src="/assets/imgs/pages/home-8/sec8-asterisk.svg" alt="orisa" width={100} height={100} loading="lazy" />
                        <h2 className="sec-8-home-8__title mb-0 reveal-text"><RevealText>Insights from Industry Partners</RevealText></h2>
                    </div>

                    {testimonials.map((t, index) => (
                        <div key={index} className={`sec-8-home-8__group ${t.groupClass}`}>
                            {t.reversed ? (
                                <>
                                    <div className="sec-8-home-8__card">
                                        <div className="sec-8-home-8__role">
                                            <span>{t.role}</span>
                                            <span>{t.company}</span>
                                        </div>
                                        <div className="sec-8-home-8__body">
                                            <div className="sec-8-home-8__avatar">
                                                <img src={t.avatar} alt="orisa" width={80} height={80} loading="lazy" />
                                            </div>
                                            <p className="sec-8-home-8__quote mb-0">
                                                {t.quote}
                                            </p>
                                        </div>
                                        <div className="sec-8-home-8__stars" aria-hidden="true">
                                            <StarsRating />
                                        </div>
                                    </div>
                                    <div className="sec-8-home-8__namebar">
                                        <span className="sec-8-home-8__name">{t.name}</span>
                                        <span className="sec-8-home-8__plus" aria-hidden="true">+</span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="sec-8-home-8__namebar">
                                        <span className="sec-8-home-8__name">{t.name}</span>
                                        <span className="sec-8-home-8__plus" aria-hidden="true">+</span>
                                    </div>
                                    <div className="sec-8-home-8__card">
                                        <div className="sec-8-home-8__role">
                                            <span>{t.role}</span>
                                            <span>{t.company}</span>
                                        </div>
                                        <div className="sec-8-home-8__body">
                                            <div className="sec-8-home-8__avatar">
                                                <img src={t.avatar} alt="orisa" width={80} height={80} loading="lazy" />
                                            </div>
                                            <p className="sec-8-home-8__quote mb-0">
                                                {t.quote}
                                            </p>
                                        </div>
                                        <div className="sec-8-home-8__stars" aria-hidden="true">
                                            <StarsRating />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <div className="text-center w-50 mx-auto scroll-move-up">
                    <h6 className="sec-8-home-8__view-all at_fade_anim reveal-text"><RevealText>Real words from the founders and brands we&apos;ve helped get noticed — and the results that followed.</RevealText></h6>
                </div>
            </div>
        </section>
    );
}
