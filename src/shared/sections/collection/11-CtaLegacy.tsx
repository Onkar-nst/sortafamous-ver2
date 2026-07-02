import RevealText from "@/shared/effects/RevealText";
import { handleSectionScroll } from "@/shared/utils/smoothScrollTo";

// Source: index-8 / Section9 — big CTA + contact card.
// Effects: at_fade_anim (fade up), reveal-text (heading/lead), and
// scale-img-from-to (the card image scales 1.5→1 on scroll). Content: Sorta Famous.
export default function CtaLegacy() {
    return (
        <section className="sec-9-home-8">
            <div className="sec-9-home-8__bg" aria-hidden="true">
                <img
                    src="/assets/imgs/pages/home-8/sec9-bg-blur.webp"
                    alt="orisa"
                    width={1920}
                    height={1080}
                    style={{ width: "auto", height: "auto" }} loading="lazy" />
            </div>

            <div className="container sf-section-gutter">
                <div className="row align-items-center justify-content-between g-5">
                    {/* Left copy */}
                    <div className="col-xl-6">
                        <div className="sec-9-home-8__content">
                            <h2 className="sec-9-home-8__title at_fade_anim reveal-text">
                                <RevealText>Ready to become Sorta Famous?</RevealText>
                            </h2>
                            <p className="sec-9-home-8__lead at_fade_anim reveal-text">
                                <RevealText>Let&apos;s talk about turning your story into visibility that sticks — and a reputation that lasts.</RevealText>
                            </p>

                            <div className="sec-9-home-8__cta at_fade_anim">
                                <a className="sec-9-home-8__cta-btn" href="#contact" onClick={handleSectionScroll("#contact")}>
                                    <span>Start your PR journey</span>
                                </a>
                                <a className="sec-9-home-8__cta-icon" href="#contact" onClick={handleSectionScroll("#contact")} aria-label="Start your PR journey">
                                    <img src="/assets/imgs/pages/home-8/sec9-btn-icon.svg" alt="Start your PR journey" width={48} height={48} loading="lazy" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right card */}
                    <div className="col-xl-5">
                        <a className="sec-9-home-8__card" href="#contact" onClick={handleSectionScroll("#contact")} aria-label="Contact us">
                            <div className="sec-9-home-8__card-media">
                                <img className="sec-9-home-8__card-visors w-100 scale-img-from-to" data-value-1="1.5" data-value-2="1" src="/assets/imgs/pages/home-8/sec9-card-visors.webp" alt="orisa" width={500} height={350} loading="lazy" />
                            </div>
                            <div className="sec-9-home-8__card-overlay">
                                <span className="sec-9-home-8__card-kicker">
                                    <span>Contact us</span>
                                    <img src="/assets/imgs/pages/home-8/sec9-arrow.svg" alt="orisa" width={16} height={16} loading="lazy" />
                                </span>
                                <p className="sec-9-home-8__card-text mb-0">
                                    Great reputations begin with a conversation. Let&apos;s talk.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
