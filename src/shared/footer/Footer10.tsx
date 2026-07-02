import { handleSectionScroll, smoothScrollTo } from "@/shared/utils/smoothScrollTo";
// Footer 10 (Home 10) — CTA + 3D decorations, two-column nav, contact, newsletter, bottom bar.
// Content: Sorta Famous. Nav links smooth-scroll to on-page sections.

// On-page section links (smooth-scroll). "top" scrolls to the very top.
const NAV_LINKS_1 = [
    { label: "Home", target: "top" },
    { label: "Who We Are", target: "#who-we-are" },
    { label: "What We Do", target: "#what-we-do" },
    { label: "How It Works", target: "#how-it-works" },
    { label: "Contact", target: "#contact" },
];

// Mixed: on-page scroll (target) + external/mail (href).
const NAV_LINKS_2 = [
    { label: "Team", target: "#team" },
    { label: "Values", target: "#our-values" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/sortaa-famous/" },
    { label: "Instagram", href: "https://www.instagram.com/sortafamous.in/" },
    { label: "Email", href: "mailto:hellothere@sortafamous.in" },
];

const CTA_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path
            d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z"
            fill="currentColor"
        />
    </svg>
);

const SUBSCRIBE_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
        <path
            d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z"
            fill="currentColor"
        />
    </svg>
);

const DECO_IMAGE_1 = {
    src: "/assets/imgs/pages/home-10/footer-10-deco-1.webp",
    alt: "",
    width: 420,
    height: 559,
};

const DECO_IMAGE_2 = {
    src: "/assets/imgs/pages/home-10/footer-10-deco-2.webp",
    alt: "",
    width: 420,
    height: 503,
};

const BG_IMAGE = {
    src: "/assets/imgs/pages/home-10/footer-10-bg-lines.webp",
    alt: "",
    width: 2096,
    height: 1180,
};

const NAV_ARROW_IMAGE = {
    src: "/assets/imgs/pages/home-8/footer-8-nav-arrow.svg",
    alt: "",
    width: 14,
    height: 13,
};

type NavLink = { label: string; target?: string; href?: string };

function FooterNavLink({ link }: { link: NavLink }) {
    const arrow = (
        <img
            className="footer-10__nav-arrow"
            src={NAV_ARROW_IMAGE.src}
            alt={NAV_ARROW_IMAGE.alt}
            width={NAV_ARROW_IMAGE.width}
            height={NAV_ARROW_IMAGE.height}
            loading="lazy"
            aria-hidden="true"
            style={{ width: "auto", height: "auto" }}
        />
    );
    if (link.target) {
        const href = link.target === "top" ? "#" : link.target;
        const onClick =
            link.target === "top"
                ? (e: { preventDefault: () => void }) => {
                      e.preventDefault();
                      smoothScrollTo("body");
                  }
                : handleSectionScroll(link.target);
        return (
            <a className="footer-10__nav-link" href={href} onClick={onClick}>
                <span>{link.label}</span>
                {arrow}
            </a>
        );
    }
    const external = link.href?.startsWith("http");
    return (
        <a
            className="footer-10__nav-link"
            href={link.href}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
            <span>{link.label}</span>
            {arrow}
        </a>
    );
}

export default function Footer10() {
    return (
        <footer className="footer-10 changeless overflow-hidden">
            <div className="footer-10__bg" aria-hidden="true">
                <img
                    className="footer-10__bg-img"
                    src={BG_IMAGE.src}
                    alt={BG_IMAGE.alt}
                    width={BG_IMAGE.width}
                    height={BG_IMAGE.height}
                    loading="lazy"
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
            </div>

            <div className="container-2200 px-lg-5 px-3 position-relative">
                <div className="footer-10__hero position-relative">
                    <div className="footer-10__deco footer-10__deco--left d-none d-md-block" aria-hidden="true">
                        <img
                            src={DECO_IMAGE_2.src}
                            alt={DECO_IMAGE_2.alt}
                            width={DECO_IMAGE_2.width}
                            height={DECO_IMAGE_2.height}
                            loading="lazy"
                        />
                    </div>
                    <div className="footer-10__deco footer-10__deco--right d-none d-md-block" aria-hidden="true">
                        <img
                            src={DECO_IMAGE_1.src}
                            alt={DECO_IMAGE_1.alt}
                            width={DECO_IMAGE_1.width}
                            height={DECO_IMAGE_1.height}
                            loading="lazy"
                        />
                    </div>

                    <div className="footer-10__cta-block text-center position-relative z-1 d-flex flex-column justify-content-center align-items-center">
                        <h2 className="footer-10__headline mb-0 at_fade_anim reveal-text" data-delay="0.05">
                            Ready to earn the right kind of attention?
                        </h2>
                        <div className="sec-5-home-9__cta-wrap">
                            <div
                                className="at-btn-group at_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <a className="at-btn-circle" href="#contact" onClick={handleSectionScroll("#contact")}>
                                    {CTA_ARROW_SVG}
                                </a>
                                <a className="at-btn z-index-1" href="#contact" onClick={handleSectionScroll("#contact")}>
                                    LET&apos;S GET SORTA FAMOUS
                                </a>
                                <a className="at-btn-circle" href="#contact" onClick={handleSectionScroll("#contact")}>
                                    {CTA_ARROW_SVG}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-10__mid">
                    <div className="row g-5 align-items-start">
                        <div className="col-xl-4 col-lg-5 col-md-6">
                            <div className="row g-4 footer-10__nav-grid">
                                <div className="col-6">
                                    <nav className="footer-10__nav-list" aria-label="Footer primary">
                                        {NAV_LINKS_1.map((link) => (
                                            <FooterNavLink key={link.label} link={link} />
                                        ))}
                                    </nav>
                                </div>
                                <div className="col-6">
                                    <nav className="footer-10__nav-list" aria-label="Footer secondary">
                                        {NAV_LINKS_2.map((link) => (
                                            <FooterNavLink key={link.label} link={link} />
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-7 col-md-6">
                            <div className="footer-10__contact-hours d-flex flex-wrap gap-4 gap-xxl-5">
                                <div className="footer-10__contact">
                                    <p className="footer-10__contact-line mb-1">
                                        <a href="tel:+918814999939">+91 88149 99939</a>
                                    </p>
                                    <p className="footer-10__contact-line mb-3">
                                        <a href="mailto:hellothere@sortafamous.in">hellothere@sortafamous.in</a>
                                    </p>
                                    <p className="footer-10__address mb-0">
                                        203, Patel Commercial Premises, off New Link Road,<br />Andheri-West, Mumbai 400053
                                    </p>
                                </div>
                                <div className="footer-10__hours">
                                    <p className="footer-10__hours-label mb-1">Mo - Sa</p>
                                    <p className="footer-10__hours-value mb-0">10am - 7pm</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 ms-xl-auto col-lg-6">
                            <div className="footer-10__newsletter">
                                <p className="footer-10__newsletter-title mb-3 at_fade_anim" data-delay="0.1">
                                    Sign up for<br />our monthly PR insights
                                </p>
                                <form
                                    className="footer-10__form at_fade_anim"
                                    data-delay="0.2"
                                    action="#"
                                    method="post"
                                >
                                    <label className="visually-hidden" htmlFor="footer10Email">
                                        Email
                                    </label>
                                    <input
                                        id="footer10Email"
                                        className="footer-10__input"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                    <button className="footer-10__submit" type="submit">
                                        <span>
                                            <span className="text-1">Subscribe Now</span>
                                            <span className="text-2">Subscribe Now</span>
                                        </span>
                                        <i aria-hidden="true">
                                            {SUBSCRIBE_ARROW_SVG}
                                            {SUBSCRIBE_ARROW_SVG}
                                        </i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-10__bottom">
                    <div className="footer-10__bottom-inner d-flex flex-wrap align-items-center justify-content-between gap-3">
                        <span className="footer-10__copy">Sorta Famous &copy; 2026 · All Rights Reserved</span>
                        <span className="footer-10__since">[ Fame is earned ]</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
