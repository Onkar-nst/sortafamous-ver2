import RevealText from "@/shared/effects/RevealText";
import SectionEyebrow from "@/shared/components/SectionEyebrow";

// Home 3 Section 10 - Our Growth Process

// Real Sorta Famous process icons (one per step, in order).
const AVATARS = [
    "/assets/imgs/sortafamous/1-Discover-and-Strategy-icon-300x300.png",
    "/assets/imgs/sortafamous/2-Content-Creation-Icon-296x300.png",
    "/assets/imgs/sortafamous/3-Scheduling-Publishing-Icon-300x300.png",
    "/assets/imgs/sortafamous/4-Tracking-Optimisation-Icon-276x300.png",
    "/assets/imgs/sortafamous/5-Community-Engagement-300x300.png",
    "/assets/imgs/sortafamous/6-Reporting-Collab-300x300.png",
];

const STEPS = [
    { number: "01", title: "Discovery & Strategy", description: "We start with a brand audit and competitive analysis to map where you stand and where the real opportunities are." },
    { number: "02", title: "Content Creation", description: "We craft social and PR storytelling that sounds like you and earns attention for the right reasons." },
    { number: "03", title: "Scheduling & Publishing", description: "Every story goes out with strategic timing — placed where and when it lands hardest." },
    { number: "04", title: "Tracking & Optimization", description: "We measure performance closely and refine the approach so momentum keeps building." },
    { number: "05", title: "Community Engagement", description: "We nurture the conversations around your brand, building relationships that turn into advocacy." },
    { number: "06", title: "Reporting & Collaboration", description: "Monthly insights and updates keep everything transparent, aligned, and moving forward together." },
];

// Source: index-3 / Section10 (Our Growth Process). Content: Sorta Famous — How It Works.
export default function HowItWorks() {
    return (
        <div id="how-it-works" className="container-2200">
            <div className="home-3-section-10 section-fix overflow-hidden bg-neutral-50 rounded-5 mx-lg-3 mx-2">
                <div className="container sf-section-gutter pt-100 pb-100">
                    <div className="row section-title-pin">
                        <div className="col-lg-5 h-100">
                            <SectionEyebrow label="How It Works" />
                            <h3 className="reveal-text mb-0">
                                <RevealText>A proven process that turns strategy into visibility that sticks.</RevealText>
                            </h3>
                            <ul className="list-unstyled navigation-section-10 navigation-active-item pt-50">
                                {AVATARS.map((src, i) => (
                                    <li key={i}>
                                        <div className="item">
                                            <img
                                                src={src}
                                                alt=""
                                                width={120}
                                                height={120}
                                                className="img-cover p-relative" loading="lazy" />
                                            <div className="rectangular bg-neutral-0 border-100" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-xxl-6 col-lg-7 ms-auto p-relative pt-50">
                            <div className="pb-30 fz-font-label neutral-900 fw-600">
                                [ Our six-step process ]
                            </div>
                            <div className="scroll-section vertical-section section">
                                <div className="wrapper">
                                    <div role="list" className="list">
                                        {STEPS.map((step, i) => (
                                            <div key={i} className="item">
                                                <div className="container bg-neutral-0 rounded-4 border-100 p-relative">
                                                    <div className="rectangular bg-neutral-0 border-100" />
                                                    <div className="row align-items-center py-3">
                                                        <div className="col-12 h-100">
                                                            <div className="d-flex flex-column p-md-5 p-3 justify-content-between h-100">
                                                                <div className="block-number icon-shape mb-20 size-50 bg-neutral-100 rounded-3">
                                                                    <h6 className="number mb-0 fw-600">{step.number}</h6>
                                                                </div>
                                                                <h5 className="mb-4">{step.title}</h5>
                                                                <p className="mb-0 fz-font-xl">{step.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
