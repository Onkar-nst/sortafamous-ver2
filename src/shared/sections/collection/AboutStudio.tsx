import RevealText from "@/shared/effects/RevealText";
import { handleSectionScroll } from "@/shared/utils/smoothScrollTo";
import SectionEyebrow from "@/shared/components/SectionEyebrow";

// Source: index-11 / Section3 — "About Us". Layout/styling unchanged.
// Placed above "Who We Are". Content: Sorta Famous (sortafamous.in).
//
// Effects reproduced (all class-driven, handled by the global effects already
// mounted in GlobalEffects):
//   - eyebrow hover text-swap (text-1/text-2)            → main.css .at-btn
//   - reveal-text title (per-character reveal)           → RevealTextEffect
//   - at_fade_anim directional entrances everywhere      → FadeAnimEffect
//   - anim-zoomin scroll-zoom on both images             → AnimZoominEffect
//   - text-scramble on the badge line                    → TextScrambleEffect
//   - odometer count-up on the four stats                → OdometerCounter
//
// The eyebrow is switched from `common-black` → `common-white` so it reads on the
// dark page (title/intro/steps use neutral vars that already flip in dark theme).
//
// ⚠️ PLACEHOLDER METRICS — the stat numbers + the floating "Stories placed" card
// are placeholders to be confirmed/replaced with real Sorta Famous figures.
// Images are theme placeholders; swap in real photos when available.


const PROCESS_STEPS = [
    {
        num: "01",
        title: "Discover",
        desc: "We immerse ourselves in your brand world — audience, competitors, culture, and ambition.",
        delay: ".3",
    },
    {
        num: "02",
        title: "Shape",
        desc: "We craft social and PR storytelling in a voice that's unmistakably yours.",
        delay: ".37",
    },
    {
        num: "03",
        title: "Amplify",
        desc: "We place your story with strategic timing, in front of the press and platforms that matter.",
        delay: ".44",
    },
    {
        num: "04",
        title: "Grow",
        desc: "We track performance, refine the approach, and report transparently so momentum compounds.",
        delay: ".51",
    },
];

// Placeholder figures — replace with real Sorta Famous numbers.
const STATS = [
    { count: 50, suffix: "+", label: "Brands guided", delay: ".1" },
    { count: 200, suffix: "+", label: "Media placements", delay: ".16" },
    { count: 6, suffix: "+", label: "Years in PR", delay: ".22" },
    { count: 95, suffix: "%", label: "Client retention", delay: ".28" },
];

export default function AboutStudio() {
    return (
        <section className="sec-3-home-11" aria-label="About Sorta Famous">
            <div className="container sf-section-gutter">
                {/* Header row: eyebrow + title (left) / intro paragraph (right) */}
                <div className="row align-items-end">
                    <div className="col-lg-7">
                        <SectionEyebrow label="About Us" />
                        <h2 className="sec-3-home-11__title mt-3 mb-0 reveal-text">
                            <RevealText>
                                Crafted with intention,
                                <br />
                                built to endure.
                            </RevealText>
                        </h2>
                    </div>
                    <div className="col-lg-5">
                        <p className="mb-0 at_fade_anim" data-delay=".25" data-fade-from="right">
                            Sorta Famous is a PR &amp; strategic communications agency based in Mumbai. We help founders, startups, and modern brands earn the right kind of attention — visibility that sticks, and reputations built to endure.
                        </p>
                    </div>
                </div>

                {/* Main grid: three columns */}
                <div className="sec-3-home-11__grid row g-4 g-xl-5 mt-5">
                    {/* Col A: tall portrait image with floating cards */}
                    <div className="col-lg-5">
                        <div className="sec-3-home-11__media-a at_fade_anim" data-delay=".1" data-fade-from="left">
                            <div className="anim-zoomin-wrap sec-3-home-11__img-frame sec-3-home-11__img-frame--tall">
                                <img
                                    className="anim-zoomin sec-3-home-11__img w-100"
                                    src="/assets/imgs/pages/home-11/img-1.webp"
                                    alt="Sorta Famous team at work"
                                    width={800}
                                    height={1100}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>

                            {/* Floating metric card (bottom-right) — placeholder */}
                            <div className="sec-3-home-11__metric" aria-label="150+ stories placed">
                                <p className="sec-3-home-11__metric-value mb-0 text-white">150+</p>
                                <p className="sec-3-home-11__metric-label mb-0 text-white">
                                    Stories
                                    <br />
                                    placed
                                </p>
                            </div>

                            {/* Location badge (top-left) */}
                            <div className="sec-3-home-11__year-badge at_fade_anim" data-delay=".35" data-fade-from="bottom">
                                <span className="sec-3-home-11__year-badge-est">Based in</span>
                                <span className="sec-3-home-11__year-badge-num text-scramble">Mumbai</span>
                            </div>
                        </div>
                    </div>

                    {/* Col B: body copy + process steps + CTA */}
                    <div className="col-lg-4">
                        <div className="sec-3-home-11__content">
                            <p className="sec-3-home-11__body at_fade_anim" data-delay=".2" data-fade-from="bottom">
                                Our work is rooted in deep research, sharp strategy, and an obsessive commitment to getting your story right. Every engagement begins with a single question: <em>what do you want to be known for?</em>
                            </p>

                            <div className="sec-3-home-11__divider at_fade_anim" data-delay=".28" aria-hidden="true"></div>

                            {/* Numbered process steps */}
                            <ol className="sec-3-home-11__steps list-unstyled mb-4 pb-4">
                                {PROCESS_STEPS.map((step) => (
                                    <li
                                        key={step.num}
                                        className="sec-3-home-11__step at_fade_anim"
                                        data-delay={step.delay}
                                        data-fade-from="left"
                                    >
                                        <span className="sec-3-home-11__step-num" aria-hidden="true">
                                            {step.num}
                                        </span>
                                        <div className="sec-3-home-11__step-copy">
                                            <strong className="sec-3-home-11__step-title">{step.title}</strong>
                                            <p className="mb-0">{step.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>

                            <div className="mt-4 at_fade_anim" data-delay=".57">
                                <a
                                    className="sec-3-home-11__cta d-inline-flex align-items-center gap-3"
                                    href="#who-we-are"
                                    onClick={handleSectionScroll("#who-we-are")}
                                >
                                    <span>Discover our story</span>
                                    <svg
                                        width="14"
                                        height="13"
                                        viewBox="0 0 14 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M1 12L13 1M13 1H4M13 1V10"
                                            stroke="currentColor"
                                            strokeWidth="1.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Col C: second image + blockquote */}
                    <div className="col-lg-3">
                        <div className="sec-3-home-11__side at_fade_anim" data-delay=".15" data-fade-from="right">
                            <div className="anim-zoomin-wrap sec-3-home-11__img-frame sec-3-home-11__img-frame--sq">
                                <img
                                    className="anim-zoomin sec-3-home-11__img w-100"
                                    src="/assets/imgs/pages/home-11/img-2.webp"
                                    alt="Sorta Famous studio"
                                    width={600}
                                    height={700}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>

                            <blockquote className="sec-3-home-11__quote at_fade_anim" data-delay=".42" data-fade-from="bottom">
                                <p className="sec-3-home-11__quote-text mb-2">
                                    &ldquo;What do you want to be known for?&rdquo;
                                </p>
                                <footer className="sec-3-home-11__quote-attr">
                                    — Our guiding question
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>

                {/* Stats bar: four numbers spanning full width */}
                <div className="sec-3-home-11__stats-bar row g-0">
                    {STATS.map((stat) => (
                        <div key={stat.label} className="col-6 col-md-3">
                            <div className="sec-3-home-11__stat at_fade_anim" data-delay={stat.delay}>
                                <p className="sec-3-home-11__stat-num mb-0">
                                    {stat.count}{stat.suffix}
                                </p>
                                <p className="sec-3-home-11__stat-label mb-0">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
