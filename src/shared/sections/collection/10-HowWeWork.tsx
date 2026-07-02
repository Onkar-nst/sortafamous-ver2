import RevealText from "@/shared/effects/RevealText";
import { handleSectionScroll } from "@/shared/utils/smoothScrollTo";
import SectionEyebrow from "@/shared/components/SectionEyebrow";

// Source: index-4 / Section3 — staircase pill-cards. Layout/styling unchanged.
// Effects: staircase pills (CSS) + at_fade_anim (cards fade up) + reveal-text.
// Content: Sorta Famous "R Values" (from sortafamous.in) — Vision / Mission /
// Approach / Promise. Re-worded from the previous "How We Work" process copy.

const ARROW_CIRCLE = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path
            d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z"
            fill="currentColor"
        />
    </svg>
);

const PROCESS_CARDS = [
    {
        cardClass: "card-1",
        pillClass: "card__process-pill--1",
        num: "01",
        title: "Our Vision",
        description:
            "Empowering brands to own their narrative and lead with influence in the digital era.",
    },
    {
        cardClass: "card-2",
        pillClass: "card__process-pill--2",
        num: "02",
        title: "Our Mission",
        description:
            "Delivering impactful strategies that combine creativity, authenticity, and measurable results.",
    },
    {
        cardClass: "card-3",
        pillClass: "card__process-pill--3",
        num: "03",
        title: "Our Approach",
        description: "Data-driven insights meet bold creativity — because smart strategies deserve fearless execution.",
    },
    {
        cardClass: "card-4",
        pillClass: "card__process-pill--4",
        num: "04",
        title: "Our Promise",
        description: "Partnership built on transparency, consistency, and results that speak louder than buzz.",
    },
];

const QUOTE_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="48" viewBox="0 0 42 48" fill="none">
        <path d="M21 16L14 12V4L21 0L28 4V12L21 16Z" fill="currentColor" />
        <path d="M35 24L28 20V12L35 8L42 12V20L35 24Z" fill="currentColor" />
        <path d="M28 36V28L35 24L42 28V36L35 40L28 36Z" fill="currentColor" />
        <path d="M14 36L21 32L28 36V44L21 48L14 44V36Z" fill="currentColor" />
        <path d="M7 24L14 28V36L7 40L0 36V28L7 24Z" fill="currentColor" />
        <path d="M7 24L14 20V12L7 8L0 12V20L7 24Z" fill="currentColor" />
    </svg>
);

export default function HowWeWork() {
    return (
        <div className="container-2200 bg-neutral-50">
            <section className="sec-3-home-4 pt-130 rounded-5 mx-lg-3 mx-2 fix p-relative bg-neutral-0">
                {/* Background grid */}
                <div className="position-absolute w-100 h-100 d-grid top-0 md:grid-cols-7 gap-0 z-0 opacity-10">
                    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className={
                                i === 3
                                    ? "position-relative h-100 border-r border-dark/01 md:border-none"
                                    : "position-relative h-100 overflow-hidden d-md-block border-dark/01"
                            }
                        >
                            <div className="absolute bottom-0 left-0 right-0 border-white/10" />
                            {i === 3 && (
                                <div className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                            )}
                        </div>
                    ))}
                </div>

                <div className="container p-relative z-1">
                    <div className="row align-items-end g-4">
                        <div className="col-lg-6 col-md-10">
                            <SectionEyebrow label="Our Values" />
                            <h3 className="reveal-text mb-0">
                                <RevealText>
                                    Values that guide every click and campaign
                                </RevealText>
                            </h3>
                        </div>
                        <div className="col-lg-3 ms-auto d-flex justify-content-lg-end">
                            <div
                                className="at-btn-group at_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <a className="at-btn-circle" href="#contact" onClick={handleSectionScroll("#contact")}>
                                    {ARROW_CIRCLE}
                                </a>
                                <a className="at-btn z-index-1" href="#contact" onClick={handleSectionScroll("#contact")}>
                                    Let&apos;s get Sorta Famous
                                </a>
                                <a className="at-btn-circle" href="#contact" onClick={handleSectionScroll("#contact")}>
                                    {ARROW_CIRCLE}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4 pt-60">
                        {PROCESS_CARDS.map((card) => (
                            <div key={card.num} className="col-lg-3 col-md-6">
                                <div className={`card__process-card at_fade_anim ${card.cardClass}`} data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                    <div className="card__process-visual">
                                        <div className={`card__process-pill ${card.pillClass}`} />
                                        <span className="card__process-num">{card.num}</span>
                                    </div>
                                    <div className="card__process-content">
                                        <h6 className="card__process-title">{card.title}</h6>
                                        <p className="card__process-desc">{card.description}</p>
                                        <div className="card__process-divider" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row align-items-center g-md-5 g-4 mt-lg-0 mt-20">
                        <div className="col-lg-3 order-lg-1 order-2">
                            <div
                                className="at_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <img
                                    src="/assets/imgs/pages/img-85.webp"
                                    alt="orisa"
                                    width={400}
                                    height={400}
                                    className="w-100" loading="lazy" />
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-2 order-1">
                            <div className="mb-3">{QUOTE_ICON}</div>
                            <span className="fz-font-3xl neutral-900 reveal-text">
                                <RevealText>
                                    We turn strategy into visibility that sticks — and reputations that
                                    last.
                                </RevealText>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
