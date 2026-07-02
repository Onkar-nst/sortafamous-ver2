// Source: index-11 / Section8 — big-type banner with 3 rows scrolling horizontally
// (scroll-move-right / scroll-move-left, driven by ScrollRotateMoveEffect) + inline
// image pills + a background image that zooms on scroll (anim-zoomin). Content: Sorta Famous.
export default function StoriesThatStick() {
    return (
        <section className="sec-8-home-11 pb-110" aria-label="Stories that stick">
            <div className="sec-8-home-11__bg" aria-hidden="true">
                <div className="anim-zoomin-wrap sec-8-home-11__bg-wrap position-relative">
                    <img
                        className="anim-zoomin sec-8-home-11__bg-img"
                        src="/assets/imgs/pages/home-11/bg.webp"
                        alt="orisa"
                        loading="lazy"
                        decoding="async"
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="sec-8-home-11__bg-overlay" aria-hidden="true"></div>
            </div>

            <div className="sec-8-home-11__inner">
                {/* Scroll-driven typography rows */}
                <div className="sec-8-home-11__type-wrap overflow-hidden" aria-hidden="true">
                    <p className="sec-8-home-11__big-line scroll-move-right mb-0">
                        Stories &nbsp; that &nbsp;
                        <span className="sec-8-home-11__img-pill">
                            <img
                                src="/assets/imgs/pages/home-11/img-3.webp"
                                alt=""
                                width={400}
                                height={267}
                                loading="lazy"
                                decoding="async"
                            />
                        </span>
                        &nbsp; stick &nbsp; longer &nbsp;
                        <span className="sec-8-home-11__img-pill">
                            <img
                                src="/assets/imgs/pages/home-11/img-7.webp"
                                alt=""
                                width={400}
                                height={267}
                                loading="lazy"
                                decoding="async"
                            />
                        </span>
                        &nbsp;--&nbsp;
                    </p>
                </div>
                <div className="sec-8-home-11__type-wrap overflow-hidden" aria-hidden="true">
                    <p className="sec-8-home-11__big-line scroll-move-left mb-0">
                        --&nbsp; Reputations &nbsp;
                        <span className="sec-8-home-11__img-pill">
                            <img
                                src="/assets/imgs/pages/home-11/img-5.webp"
                                alt=""
                                width={400}
                                height={267}
                                loading="lazy"
                                decoding="async"
                            />
                        </span>
                        &nbsp; built &nbsp; with &nbsp;
                        <span className="sec-8-home-11__img-pill">
                            <img
                                src="/assets/imgs/pages/home-11/img-9.webp"
                                alt=""
                                width={400}
                                height={267}
                                loading="lazy"
                                decoding="async"
                            />
                        </span>
                        &nbsp; substance &nbsp;
                    </p>
                </div>
                <div className="sec-8-home-11__type-wrap overflow-hidden" aria-hidden="true">
                    <p className="sec-8-home-11__big-line scroll-move-right mb-0">
                        From &nbsp;
                        <span className="sec-8-home-11__img-pill">
                            <img
                                src="/assets/imgs/pages/home-11/img-11.webp"
                                alt=""
                                width={400}
                                height={267}
                                loading="lazy"
                                decoding="async"
                            />
                        </span>
                        &nbsp; founders &nbsp; to &nbsp; headlines &nbsp;
                        <span className="sec-8-home-11__img-pill">
                            <img
                                src="/assets/imgs/pages/home-11/img-13.webp"
                                alt=""
                                width={400}
                                height={267}
                                loading="lazy"
                                decoding="async"
                            />
                        </span>
                        &nbsp;--&nbsp;
                    </p>
                </div>
            </div>
        </section>
    );
}
