import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";
import SectionEyebrow from "@/shared/components/SectionEyebrow";

type GsapContext = { revert: () => void };

const ARROW = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
    </svg>
);

const ITEMS = [
    { link: "mailto:hellothere@sortafamous.in", img: "sec-3-card-1.webp", num: "NO. 02", title: "Startups & Scale-ups", sub: "Launch PR · Funding announcements · Growth storytelling" },
    { link: "mailto:hellothere@sortafamous.in", img: "sec-3-card-2.webp", num: "NO. 03", title: "Influencers & Creators", sub: "Personal PR · Brand collaborations · Reputation management" },
    { link: "mailto:hellothere@sortafamous.in", img: "sec-3-card-3.webp", num: "NO. 04", title: "Modern & D2C Brands", sub: "Product launches · Media coverage · Campaign buzz" },
    { link: "mailto:hellothere@sortafamous.in", img: "sec-3-card-4.webp", num: "NO. 05", title: "Personal Brands & Execs", sub: "Profile building · Op-eds · Speaking & podcasts" },
];

// Source: index-14 / Section3 (Selected Series grid), repurposed as "Who We Serve".
export default function WhoWeServe() {
    const gridRef = useRef<HTMLDivElement | null>(null);

    // Pin the featured box (NO.01) while the right-hand list (NO.02–NO.05)
    // scrolls past, releasing once the list ends. Uses GSAP ScrollTrigger (not
    // CSS position:sticky, which doesn't engage under ScrollSmoother's transform
    // scroll). Pins for exactly (listHeight - featuredHeight) so it unpins at NO.05.
    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

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
                gsap.matchMedia().add("(min-width: 1200px)", () => {
                    const featured = grid.querySelector<HTMLElement>(".sec-3-home-14__featured");
                    const list = grid.querySelector<HTMLElement>(".sec-3-home-14__list");
                    if (!featured || !list) return;

                    ScrollTrigger.create({
                        trigger: featured,
                        start: "top 40",
                        end: () => "+=" + Math.max(0, list.offsetHeight - featured.offsetHeight),
                        pin: featured,
                        pinSpacing: false,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    });
                });
            }, grid);

            if (cancelled) {
                ctx.revert();
                ctx = null;
                return;
            }

            const refresh = () => { if (!cancelled) ScrollTrigger.refresh(); };
            grid.querySelectorAll("img").forEach((img) => {
                if (img.complete) return;
                img.addEventListener("load", refresh, { once: true });
                disposers.push(() => img.removeEventListener("load", refresh));
            });
            const timers = [300, 1000, 2000].map((ms) => window.setTimeout(refresh, ms));
            disposers.push(() => timers.forEach((t) => clearTimeout(t)));
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
        <section className="sec-3-home-14" aria-label="Who we serve">
            <div className="sec-3-home-14__inner">
                <div className="sec-3-home-14__head">
                    <div className="sec-3-home-14__head-left">
                        <SectionEyebrow label="Who We Serve" className="at_fade_anim" data-fade-from="bottom" data-delay=".1" />
                        <h2 className="sec-3-home-14__title reveal-text mb-0">
                            <RevealText>The brands and people<br />we help get noticed.</RevealText>
                        </h2>
                    </div>
                    <div className="sec-3-home-14__head-right at_fade_anim" data-fade-from="bottom" data-delay=".2">
                        <p className="sec-3-home-14__head-copy mb-0">
                            From startups to influencers, we help you build<br />
                            visibility, trust, and influence that lasts.
                        </p>
                        <div className="at-btn-group at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                            <Link className="at-btn-circle" to="mailto:hellothere@sortafamous.in">{ARROW}</Link>
                            <Link className="at-btn z-index-1" to="mailto:hellothere@sortafamous.in">Work with us</Link>
                            <Link className="at-btn-circle" to="mailto:hellothere@sortafamous.in">{ARROW}</Link>
                        </div>
                    </div>
                </div>

                <div className="sec-3-home-14__grid" ref={gridRef}>
                    <article className="sec-3-home-14__featured">
                        <Link className="sec-3-home-14__featured-link" to="mailto:hellothere@sortafamous.in" aria-label="Founders and entrepreneurs">
                            <div className="sec-3-home-14__featured-frame anim-zoomin-wrap">
                                <img className="sec-3-home-14__featured-img anim-zoomin" src="/assets/imgs/pages/home-14/sec-3-featured.webp" alt="Founders and entrepreneurs" loading="lazy" />
                                <div className="sec-3-home-14__featured-overlay">
                                    <div className="sec-3-home-14__featured-top">
                                        <p className="sec-3-home-14__featured-num mb-0 text-white">NO. 01</p>
                                        <span className="sec-3-home-14__featured-badge">MOST REQUESTED</span>
                                    </div>
                                    <div className="sec-3-home-14__featured-bot">
                                        <div className="sec-3-home-14__featured-meta">
                                            <p className="sec-3-home-14__featured-title mb-0 text-white">Founders &amp; Entrepreneurs</p>
                                            <p className="sec-3-home-14__featured-sub mb-0 text-white">Personal brand &middot; Media presence &middot; Thought leadership</p>
                                        </div>
                                        <span className="sec-3-home-14__featured-arrow" aria-hidden="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <p className="sec-3-home-14__featured-desc mb-0">
                            We polish the person, not just the logo &mdash; turning founders into recognised voices their industry actually listens to, with media presence that compounds over time.
                        </p>
                    </article>

                    <ul className="sec-3-home-14__list list-unstyled mb-0">
                        {ITEMS.map((it) => (
                            <li key={it.num} className="sec-3-home-14__item">
                                <Link className="sec-3-home-14__item-link" to={it.link}>
                                    <span className="sec-3-home-14__item-img anim-zoomin-wrap">
                                        <img data-speed=".9" className="anim-zoomin" src={`/assets/imgs/pages/home-14/${it.img}`} alt="Orisa" loading="lazy" />
                                    </span>
                                    <span className="sec-3-home-14__item-meta">
                                        <span className="sec-3-home-14__item-top">
                                            <span className="sec-3-home-14__item-num">{it.num}</span>
                                            <span className="sec-3-home-14__item-view">Let&apos;s talk &rarr;</span>
                                        </span>
                                        <span className="sec-3-home-14__item-title">{it.title}</span>
                                        <span className="sec-3-home-14__item-sub">{it.sub}</span>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
