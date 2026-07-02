import { useEffect, useRef, useState } from "react";
import RevealText from "@/shared/effects/RevealText";
import SwiperDynamic from "@/shared/components/SwiperDynamic";
import { Link } from "react-router-dom";

// Section repurposed from "Trusted by Clients" (testimonial carousel) into the
// PRICING section. Content: sortafamous-v1.vercel.app "Simple pricing".
// Only the heading + the 3 box contents changed — the Swiper, reveal-text title,
// scroll-move-up carousel, and the zooming badge animations are all untouched.
const CONTACT_EMAIL = "hellothere@sortafamous.in";

// NOTE: monthly figures (priceMonthly) are placeholder retainer prices — confirm/replace.
const PLAN_SOURCES = [
    {
        plan: "Foundation",
        price: "$2,400",
        priceMonthly: "$900",
        features: [
            "Press strategy & media list",
            "Launch announcement & outreach",
            "Messaging & spokesperson prep",
        ],
        cta: "Start a project",
    },
    {
        plan: "Growth",
        price: "$4,800",
        priceMonthly: "$1,800",
        features: [
            "Ongoing media relations",
            "Always-on social performance",
            "Monthly performance reporting",
        ],
        cta: "Start a project",
    },
    {
        plan: "Scale",
        price: "$12,000",
        priceMonthly: "$4,500",
        features: [
            "Full-funnel PR & paid social",
            "Founder brand & thought leadership",
            "Dedicated strategist",
        ],
        cta: "Book a call",
    },
];

type BillingMode = "project" | "monthly";

// Duplicated to 6 slides to preserve the exact loop/centered carousel behavior
// the testimonial version relied on.
const PLANS = [...PLAN_SOURCES, ...PLAN_SOURCES];

const CHECK_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M4 9.5L7.5 13L14 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CTA_ARROW = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" transform="scale(0.68)" fill="currentColor" />
    </svg>
);

type Plan = (typeof PLAN_SOURCES)[number];

function PricingCard({ plan, mode, className }: { plan: Plan; mode: BillingMode; className?: string }) {
    const price = mode === "monthly" ? plan.priceMonthly : plan.price;
    const period = mode === "monthly" ? "per month" : "per project";
    return (
        <div className={className}>
            <div className="testimonial-cart-wrap p-xxl-5 p-lg-4 p-md-5 p-3">
                <div className="rectangular" />
                <div className="testimonial-bottom-wrap">
                    <div className="testimonial-content">
                        <h6 className="testimonial-content-author-name common-white fw-600 mb-2">{plan.plan}</h6>
                        <p className="testimonial-content-text neutral-0 fz-font-3xl fw-400 mb-1">{price}</p>
                        <p className="testimonial-content-author-position m-0 mb-4">{period}</p>
                        <ul className="list-unstyled m-0 mb-4">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="d-flex align-items-start gap-2 mb-2 common-white">
                                    <span className="mt-1 flex-shrink-0">{CHECK_SVG}</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="at-btn at-btn-border-white text-white rounded-0">
                            <span>
                                <span className="text-1">{plan.cta}</span>
                                <span className="text-2">{plan.cta}</span>
                            </span>
                            <i>{CTA_ARROW}</i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

const LOGO_SVG = (
    <svg className="fill-primary mb-20" xmlns="http://www.w3.org/2000/svg" width="40" height="42" viewBox="0 0 40 42" fill="none">
        <path d="M16 14L12 7L16 0H24L28 7H20L16 14Z" fill="#F0460E" />
        <path d="M36 21L32 14H24L28 7H36L40 14L36 21Z" fill="#F0460E" />
        <path d="M28 35H36L40 28L36 21H28L32 28L28 35Z" fill="#F0460E" />
        <path d="M12 35H20L24 28L28 35L24 42H16L12 35Z" fill="#F0460E" />
        <path d="M4 21H12L8 14L12 7H4L0 14L4 21Z" fill="#F0460E" />
        <path d="M4 21L0 28L4 35H12L16 28H8L4 21Z" fill="#F0460E" />
    </svg>
);

// Source: index-1 / Section6 carousel — now the Simple Pricing section.
export default function TrustedByClients() {
    // The badge grows/zooms as you scroll (unchanged from the original section).
    const badgeRef = useRef<HTMLAnchorElement | null>(null);
    // Billing toggle (replaces the old carousel prev/next arrows).
    const [billing, setBilling] = useState<BillingMode>("project");

    useEffect(() => {
        let killed = false;
        let cleanup: (() => void) | undefined;
        (async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);
            const el = badgeRef.current;
            if (!el || killed) return;
            const tween = gsap.fromTo(
                el,
                { scale: 1 },
                {
                    scale: 16,
                    ease: "none",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        end: "top 25%",
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                }
            );
            cleanup = () => {
                tween.scrollTrigger?.kill();
                tween.kill();
            };
        })();
        return () => {
            killed = true;
            cleanup?.();
        };
    }, []);

    return (
        <div className="container-2200">
            <section id="sec-6-home-1" className="sec-6-home-1 mx-lg-3 mx-2 bg-black pt-100 pb-100 rounded-5 changeless overflow-hidden">
                <div className="container">
                    <div className="row align-items-end mb-50 g-3 z-index-2">
                        <div className="col-md-8">
                            {LOGO_SVG}
                            <h2 className="alt-section-title lh-1 mb-10 reveal-text text-white">
                                <RevealText>Simple pricing</RevealText>
                            </h2>
                            <p className="mg-portfolio-dec mb-50 text-white mb-0">
                                Clear, project-based pricing — pick the scope that fits where your brand is headed.
                            </p>
                        </div>
                        <div className="col-lg-4 ms-auto d-flex justify-content-lg-end align-items-end">
                            {/* Billing toggle — clickable, switches per-project / monthly pricing */}
                            <div
                                role="group"
                                aria-label="Billing period"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 4,
                                    padding: 6,
                                    borderRadius: 999,
                                    background: "#E7E0D2",
                                }}
                            >
                                {(["project", "monthly"] as BillingMode[]).map((mode) => {
                                    const active = billing === mode;
                                    return (
                                        <button
                                            key={mode}
                                            type="button"
                                            aria-pressed={active}
                                            onClick={() => setBilling(mode)}
                                            style={{
                                                border: 0,
                                                cursor: "pointer",
                                                fontWeight: 600,
                                                fontSize: 16,
                                                lineHeight: 1,
                                                padding: "13px 30px",
                                                borderRadius: 999,
                                                whiteSpace: "nowrap",
                                                transition: "background .2s ease, color .2s ease",
                                                background: active ? "#1B1B1B" : "transparent",
                                                color: active ? "#FFFFFF" : "#1B1B1B",
                                            }}
                                        >
                                            {mode === "project" ? "Per project" : "Monthly"}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 scroll-move-up2 z-index-2">
                            <SwiperDynamic
                                className="swiper slider-testimonial rounded-4"
                                slidesPerView={1}
                                spaceBetween={24}
                                centeredSlides
                                loop
                                breakpoints={{
                                    768: { slidesPerView: 1 },
                                    992: { slidesPerView: 1 },
                                    1200: { slidesPerView: 3 },
                                }}
                            >
                                {PLANS.map((item, idx) => (
                                    <PricingCard key={`plan-${idx}`} plan={item} mode={billing} />
                                ))}
                            </SwiperDynamic>
                        </div>
                        <div className="col-12 text-center pt-50 z-index-1">
                            <Link ref={badgeRef} to={`mailto:${CONTACT_EMAIL}`} className="at-btn bg-transparent p-relative badge-zoon-in">
                                <img
                                    className="badge-zoon-in"
                                    src="/assets/imgs/icons/badge-2.svg"
                                    alt="orisa"
                                    width={120}
                                    height={120} loading="lazy" />
                                <span className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center justify-content-center overflow-unset">
                                    <span className="mt-2 badge-text-zoom-in overflow-unset text-wrap">
                                        <span className="fw-700 common-white text-uppercase overflow-unset">
                                            Let&apos;s <br />
                                            Talk
                                        </span>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
