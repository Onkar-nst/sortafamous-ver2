
// Source: index-11 / Section1 — cinematic full-bleed video hero.
// Replaces the previous index-1 parallax hero. Content: Sorta Famous (sortafamous.in).
//
// Effects reproduced (all class-driven, handled by the global effects already
// mounted in GlobalEffects):
//   - text-scramble on the eyebrow label + badge line   → TextScrambleEffect
//   - at_fade_anim staggered entrance (topbar → headline → desc → reel →
//     scroll cue → badge), each with its own data-delay  → FadeAnimEffect
//   - reel button hover (gap grows, ring fills primary)  → main.css :hover
//   - looping scroll-cue line animation                  → main.css keyframes
//   - background <video> (same clip as the demo: hero-11.webm)
//   - "Play Reel" opens the showreel modal               → VideoReelModal
//
// NOTE: sortafamous.in lists no third-party awards, so the demo's "AWWWARDS /
// Site of the Year / 2024" badge is repurposed to the brand's own tagline
// ("We turn visibility into credibility") — no fabricated award. The background
// clip is the theme's placeholder video; swap in a real Sorta Famous reel later.
export default function Hero() {
    return (
        <>
            {/* Collection hero — cinematic video */}
            <section
                className="sec-1-home-11 changeless"
                aria-label="Sorta Famous — PR & Strategic Communications"
                style={{ height: "100dvh", minHeight: 0 }}
            >
                {/* Full-bleed background video */}
                <div className="sec-1-home-11__bg" aria-hidden="true">
                    <video className="sec-1-home-11__bg-video" autoPlay muted loop playsInline preload="metadata">
                        <source src="/assets/imgs/pages/home-11/hero-11.webm" type="video/webm" />
                    </video>
                    <div className="sec-1-home-11__bg-overlay"></div>
                </div>

                {/* Top eyebrow bar */}
                <div className="sec-1-home-11__topbar" style={{ paddingTop: "clamp(84px, 8vw, 104px)" }}>
                    <span className="sec-1-home-11__topbar-label text-uppercase text-scramble">PR &amp; Strategic Communications</span>
                    <span className="sec-1-home-11__topbar-divider" aria-hidden="true"></span>
                    <span className="sec-1-home-11__topbar-label text-uppercase">Visibility into Credibility</span>
                    <span className="sec-1-home-11__topbar-divider" aria-hidden="true"></span>
                    <span className="sec-1-home-11__topbar-label text-uppercase">Mumbai &middot; India</span>
                </div>

                {/* Hero headline */}
                <div className="sec-1-home-11__headline at_fade_anim" data-delay=".1" data-fade-from="bottom" style={{ alignItems: "flex-end", paddingBottom: 0, marginTop: "auto" }}>
                    <h1 className="sec-1-home-11__title" style={{ fontSize: "clamp(52px, 10vw, 132px)", opacity: 0.6 }}>
                        <span className="d-block">Fame Is Earned.</span>
                        <span className="d-block">We Manage The Rest.</span>
                    </h1>
                </div>

                {/* Bottom row: scroll cue */}
                <div className="sec-1-home-11__footer">

                    {/* Scroll indicator */}
                    <div
                        className="sec-1-home-11__scroll at_fade_anim"
                        data-delay=".7"
                        data-fade-from="bottom"
                        data-start="100%"
                        aria-hidden="true"
                    >
                        <span className="sec-1-home-11__scroll-line"></span>
                        <span className="sec-1-home-11__scroll-text text-uppercase">Scroll</span>
                    </div>
                </div>

                {/* Floating tagline badge (repurposed from the demo's award badge).
                    Pushed down to ~68% so it floats over the image, clear of the
                    headline above and the footer row below (was colliding with "REST"). */}
                <div
                    className="sec-1-home-11__badge at_fade_anim"
                    data-delay=".8"
                    data-fade-from="bottom"
                    aria-label="We turn visibility into credibility"
                    style={{ top: "68%" }}
                >
                    <span className="sec-1-home-11__badge-value">We Turn</span>
                    <span className="sec-1-home-11__badge-label">Visibility into</span>
                    <span className="sec-1-home-11__badge-year text-scramble">Credibility</span>
                </div>
            </section>
        </>
    );
}
