import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionEyebrow from "@/shared/components/SectionEyebrow";

// Source: index-9 / Section6 ("Meet our team — The minds behind the momentum.").
// Replaces the previous index-7 staggered-portrait team layout.
//
// Effects reproduced:
//   - text-scramble tag ("Meet our team")            → global TextScrambleEffect
//   - scroll-move-up on each row                       → global ScrollMoveUpEffect
//   - at_fade_anim on the footer contact block         → global FadeAnimEffect
//   - CSS row hover (border-radius + padding grow)     → main.css .sec-6-home-9__card:hover
//   - floating image that follows the cursor on hover  → wired LOCALLY below.
//     The theme drives this from data-img-award/data-rotate but only attaches it
//     to `.card-award` cards; these rows never had that class, so the effect was
//     dead. We attach it here scoped to this section (and avoid adding `.card-award`
//     since that class carries its own padding/border-radius that would fight the
//     row layout).
//
// Team names/roles are REAL Sorta Famous team members. Photos are template
// placeholders (reused stock portraits) — swap in real headshots when available.
// The per-person quote + skills lines are PLACEHOLDER copy to be confirmed.

interface TeamMember {
    quote: string;
    name: string;
    role: string;
    skills: string;
    img: string;
    accent?: boolean;
}

const teamMembers: TeamMember[] = [
    {
        quote: "Every brand has a story worth telling — we find it.",
        name: "Nandini Mahant",
        role: "Founder & Creative Director",
        skills: "Brand Strategy, Creative Direction, Storytelling.",
        img: "/assets/imgs/pages/home-7/team-1-darrell.webp",
        accent: true,
    },
    {
        quote: "The right message always reaches the right room.",
        name: "Samriddha Adhikary",
        role: "Sales & Marketing Coordinator",
        skills: "Campaign Planning, Outreach, Client Growth.",
        img: "/assets/imgs/pages/home-7/team-3-esther.webp",
    },
    {
        quote: "Great coverage starts with great relationships.",
        name: "Srinidhi K",
        role: "Media Assistant",
        skills: "Media Relations, Press Outreach, Coordination.",
        img: "/assets/imgs/pages/home-7/team-2-amelia.webp",
    },
    {
        quote: "The details are what make a campaign land.",
        name: "Prajakta Mehul Sheth",
        role: "Sr. Account Manager",
        skills: "Account Management, Client Strategy, Execution.",
        img: "/assets/imgs/pages/home-7/team-4-jacob.webp",
    },
    {
        quote: "Behind every launch is a plan that quietly works.",
        name: "Riya Kapoor",
        role: "Operations Assistant",
        skills: "Operations, Scheduling, Workflow.",
        img: "/assets/imgs/pages/home-7/team-1-darrell.webp",
    },
    {
        quote: "Design is how a brand speaks before it says a word.",
        name: "Palak Nagar",
        role: "Graphic Designer",
        skills: "Visual Design, Brand Identity, Typography.",
        img: "/assets/imgs/pages/home-7/team-3-esther.webp",
    },
];

const CONTACT_EMAIL = "hellothere@sortafamous.in";

const OFFSET_X = 18;
const OFFSET_Y = 18;
const HIDE_DELAY = 120;
const MOBILE_BREAKPOINT = 768;
const CARD_SELECTOR = ".sec-6-home-9__card[data-img-award]";
const ROTATION = -9; // matches the theme's data-rotate="9deg" (negative, left-bottom origin)

type GsapQuickTo = (value: number) => void;

export default function Team() {
    const sectionRef = useRef<HTMLElement | null>(null);

    // Floating hover-preview: mirrors the theme's CardAwardPreviewEffect, scoped
    // to this section's rows. Hovering a row flies in that person's photo, which
    // then follows the cursor.
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        let cancelled = false;
        let dispose: (() => void) | null = null;

        const init = async () => {
            const gsap = (await import("gsap")).default;
            if (cancelled) return;

            const cards = Array.from(section.querySelectorAll<HTMLElement>(CARD_SELECTOR));
            if (!cards.length) return;

            const preview = document.createElement("div");
            preview.className = "card-award-preview sf-team-hover-preview";
            const img = document.createElement("img");
            img.src = "";
            img.alt = "";
            preview.appendChild(img);
            document.body.appendChild(preview);

            let xTo: GsapQuickTo | null = null;
            let yTo: GsapQuickTo | null = null;
            let curCard: Element | null = null;
            let hideTimeout: ReturnType<typeof setTimeout> | null = null;
            const listeners: Array<{ card: HTMLElement; ev: string; fn: EventListener }> = [];

            const updatePosition = (e: Event) => {
                if (!xTo || !yTo || !curCard) return;
                const me = e as MouseEvent;
                xTo(me.clientX + OFFSET_X);
                yTo(me.clientY + OFFSET_Y);
            };

            const scheduleHide = () => {
                if (hideTimeout) clearTimeout(hideTimeout);
                hideTimeout = setTimeout(() => {
                    hideTimeout = null;
                    curCard = null;
                    gsap.to(preview, {
                        opacity: 0,
                        scale: 0,
                        duration: 0.28,
                        ease: "power2.in",
                        onComplete: () => {
                            gsap.set(preview, { visibility: "hidden" });
                        },
                    });
                }, HIDE_DELAY);
            };

            const showPreview = (card: HTMLElement, e: MouseEvent) => {
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                    hideTimeout = null;
                }
                const src = card.getAttribute("data-img-award");
                if (!src) return;
                curCard = card;
                img.src = src;
                img.alt = card.querySelector(".sec-6-home-9__name")?.textContent?.trim() ?? "Team member";
                gsap.set(preview, {
                    visibility: "visible",
                    transformOrigin: "left bottom",
                    rotation: ROTATION,
                    x: e.clientX + OFFSET_X,
                    y: e.clientY + OFFSET_Y,
                    xPercent: 0,
                    yPercent: -100,
                    scale: 0,
                    opacity: 0,
                });
                if (!xTo) xTo = gsap.quickTo(preview, "x", { duration: 0.35, ease: "power2.out" });
                if (!yTo) yTo = gsap.quickTo(preview, "y", { duration: 0.35, ease: "power2.out" });
                gsap.to(preview, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.15)" });
            };

            cards.forEach((card) => {
                const onEnter = (e: Event) => {
                    if (typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT) return;
                    showPreview(card, e as MouseEvent);
                    card.addEventListener("mousemove", updatePosition);
                };
                const onLeave = (e: Event) => {
                    card.removeEventListener("mousemove", updatePosition);
                    const related = (e as MouseEvent).relatedTarget;
                    if (related instanceof Element && related.closest(CARD_SELECTOR)) return;
                    scheduleHide();
                };
                card.addEventListener("mouseenter", onEnter);
                card.addEventListener("mouseleave", onLeave);
                listeners.push({ card, ev: "mouseenter", fn: onEnter });
                listeners.push({ card, ev: "mouseleave", fn: onLeave });
            });

            dispose = () => {
                if (hideTimeout) clearTimeout(hideTimeout);
                listeners.forEach(({ card, ev, fn }) => {
                    card.removeEventListener("mousemove", updatePosition);
                    card.removeEventListener(ev, fn);
                });
                gsap.killTweensOf(preview);
                preview.remove();
                dispose = null;
            };
        };

        void init();

        return () => {
            cancelled = true;
            dispose?.();
        };
    }, []);

    return (
        <section id="team" ref={sectionRef} className="sec-6-home-9 bg-neutral-50 overflow-x-hidden">
            <div className="container sf-section-gutter">
                <header className="sec-6-home-9__header">
                    <SectionEyebrow label="Meet Our Team" />
                    <h2 className="sec-6-home-9__title">
                        The people behind <span className="sec-6-home-9__title-accent">the buzz.</span>
                    </h2>
                </header>

                <div className="sec-6-home-9__body">
                    <div className="sec-6-home-9__list">
                        {teamMembers.map((member, i) => (
                            <article
                                key={i}
                                className={`sec-6-home-9__card scroll-move-up${member.accent ? " sec-6-home-9__card--accent" : ""}`}
                                data-img-award={member.img}
                                data-rotate="9deg"
                            >
                                <p className="sec-6-home-9__quote">&ldquo;{member.quote}&rdquo;</p>
                                <div className="sec-6-home-9__person">
                                    <div className="sec-6-home-9__avatar">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            width={68}
                                            height={68}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="sec-6-home-9__meta">
                                        <h3 className="sec-6-home-9__name">
                                            <Link to={`mailto:${CONTACT_EMAIL}`}>{member.name}</Link>
                                        </h3>
                                        <p className="sec-6-home-9__role">{member.role}</p>
                                    </div>
                                </div>
                                <p className="sec-6-home-9__skills">{member.skills}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
