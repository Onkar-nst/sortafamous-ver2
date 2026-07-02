import RevealText from "@/shared/effects/RevealText";
import SwiperDynamic from "@/shared/components/SwiperDynamic";
import SectionEyebrow from "@/shared/components/SectionEyebrow";

// About 1 Section 1 - Hero / About Us

const AVATARS = [
    { src: "/assets/imgs/template/avatar/avatar-10.webp", alt: "orisa", hiddenOnMobile: false },
    { src: "/assets/imgs/template/avatar/avatar-11.webp", alt: "orisa", hiddenOnMobile: false },
    { src: "/assets/imgs/template/avatar/avatar-12.webp", alt: "orisa", hiddenOnMobile: false },
    { src: "/assets/imgs/template/avatar/avatar-13.webp", alt: "orisa", hiddenOnMobile: false },
    { src: "/assets/imgs/template/avatar/avatar-14.webp", alt: "orisa", hiddenOnMobile: true },
];

const SLIDES = [
    { src: "/assets/imgs/pages/img-117.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-118.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-119.webp", alt: "orisa" },
    { src: "/assets/imgs/pages/img-120.webp", alt: "orisa" },
];

// Source: about-1 / Section1. Content: Sorta Famous — Who We Are.
export default function WhoWeAre() {
    return (
        <section id="who-we-are" className="sec-1-about pt-150 overflow-hidden">
            <div className="container sf-section-gutter pb-100">
                <div className="row align-items-center g-4">
                    <div className="col-12">
                        <SectionEyebrow label="Who We Are" />
                    </div>
                    <div className="col-lg-7 h-100">
                        <h2 className="section-title fw-600 lh-1 reveal-text">
                            <RevealText>
                                We&apos;re Sorta Famous — we don&apos;t chase clout, we shape reputations
                            </RevealText>
                        </h2>
                    </div>
                    <div className="col-lg-5 ms-auto">
                        <h6 className="mb-4 fw-600">
                            The PR &amp; strategic communications agency helping founders, startups, and
                            modern brands get the right kind of attention — visibility that sticks, and
                            it&apos;s the smart kind.
                        </h6>
                        <div className="sec-2-home-5__avatars-row d-flex gap-2">
                            {AVATARS.map((avatar, i) => (
                                <div
                                    key={i}
                                    className={`sec-2-home-5__avatar-sm at-offcanvas-gallery-img ${avatar.hiddenOnMobile ? "d-none d-md-block" : ""}`}
                                >
                                    <img
                                        src={avatar.src}
                                        alt={avatar.alt}
                                        width={65}
                                        height={65}
                                        className="img-cover" loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="at-item-anime-area">
                <SwiperDynamic
                    className="swiper about-me-slider-active"
                    slidesPerView={2}
                    spaceBetween={24}
                    loop={true}
                    breakpoints={{
                        576: { slidesPerView: 1, spaceBetween: 24 },
                        768: { slidesPerView: 1, spaceBetween: 24 },
                        992: { slidesPerView: 2, spaceBetween: 30 },
                    }}
                >
                    {SLIDES.map((slide, index) => (
                        <div key={index} className="about-me-slider-thumb at-item-anime marque">
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                width={770}
                                height={700}
                                className="w-100 rounded-4" loading="lazy" />
                        </div>
                    ))}
                </SwiperDynamic>
            </div>
        </section>
    );
}
