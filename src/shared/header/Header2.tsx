import { Link } from "react-router-dom";
import { handleSectionScroll } from "@/shared/utils/smoothScrollTo";

interface Header2Props {
  onOpenSearch?: () => void;
  onToggleSidebar?: () => void;
  onOpenHamburgerMenu?: () => void;
}

const ARROW_SVG = (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
      fill="currentColor"
    />
  </svg>
);

// Minimal Sorta Famous header: logo + single contact CTA.
export default function Header2(_props: Header2Props) {
  return (
    <header>
      <div className="at-header-area at-header-spacing header-transparent">
        <div className="container sf-section-gutter">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="at-header-logo">
                <Link to="/" className="text-decoration-none d-inline-flex align-items-center gap-2">
                  <img
                    src="/assets/imgs/sortafamous/Sorta-Famous-Logo-White.png"
                    alt="Sorta Famous"
                    style={{ height: 40, width: "auto", filter: "none" }}
                  />
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div className="at-header-right d-flex justify-content-end align-items-center">
                <a href="#contact" onClick={handleSectionScroll("#contact")} className="at-btn bg-white rounded-0 text-dark">
                  <span>
                    <span className="text-1">Let&apos;s get Sorta Famous</span>
                    <span className="text-2">Let&apos;s get Sorta Famous</span>
                  </span>
                  <i>{ARROW_SVG}</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
