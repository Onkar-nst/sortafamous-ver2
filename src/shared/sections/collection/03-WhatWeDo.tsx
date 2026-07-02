import RevealText from "@/shared/effects/RevealText";
import SectionEyebrow from "@/shared/components/SectionEyebrow";

// Source: index-2 (index-2-dark) / Section4 — "Things we offer" pinned scroll-stack.
// Content: Sorta Famous PR services.

const SERVICES = [
    {
        title: "Media Relations",
        description:
            "Get your stories placed where they count, with the journalists you actually want. We build the relationships and the angles that turn into real coverage.",
        listLeft: ["Media Strategy", "Journalist Outreach", "Press Releases"],
        listRight: ["Media Lists", "Coverage Tracking"],
        image: "/assets/imgs/pages/img-118.webp",
        itemClass: "pb-40",
    },
    {
        title: "Personal Branding",
        description:
            "We polish the person, not just the logo — turning founders into recognised voices their industry actually listens to.",
        listLeft: ["Founder Positioning", "Executive Profiles", "LinkedIn Presence"],
        listRight: ["Speaking Opportunities", "Reputation Monitoring"],
        image: "/assets/imgs/pages/img-30.webp",
        itemClass: "pb-40",
    },
    {
        title: "Thought Leadership",
        description:
            "Ideas that spark conversation and lasting recognition — bylines, op-eds, and points of view that make people pay attention.",
        listLeft: ["Content Strategy", "Bylines & Op-eds", "Ghostwriting"],
        listRight: ["Newsletters & Blogs", "Industry Commentary"],
        image: "/assets/imgs/pages/img-31.webp",
        itemClass: "pb-40",
    },
    {
        title: "Influencer & Podcast",
        description:
            "Reach the right audiences through voices they already trust — from creator collaborations to podcast guesting.",
        listLeft: ["Influencer Vetting", "Campaign Briefs", "Podcast Pitching"],
        listRight: ["Creator Relations", "Performance Tracking"],
        image: "/assets/imgs/pages/img-32.webp",
        itemClass: "pb-40",
    },
    {
        title: "Campaigns & CSR",
        description:
            "Turn strategy into campaigns that move the needle — integrated launches, events, and CSR initiatives that build real goodwill.",
        listLeft: ["Campaign Planning", "Launch & Events", "CSR Initiatives"],
        listRight: ["Cross-channel Execution", "Reporting"],
        image: "/assets/imgs/pages/img-33.webp",
        itemClass: "pb-50",
    },
];

export default function WhatWeDo() {
    return (
        <div id="what-we-do" className="container-2200">
            <section className="at-service-area bg-neutral-50 rounded-5 mx-lg-3 mx-2 pt-120 pb-80">
                <div className="container sf-section-gutter">
                    <div className="row">
                        <div className="col-12">
                            <div className="at-service-subtitle-wrap at-about-border d-flex justify-content-between gap-3 mb-50">
                                <SectionEyebrow label="What we do" />
                                <span className="fs-font-md fw-500 text-decoration-underline">
                                    Fame is earned
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-section vertical-section position-relative">
                    <div className="wrapper">
                        {SERVICES.map((service, index) => (
                            <div key={index} className="item">
                                <div className={`container bg-neutral-50 pt-20 ${service.itemClass}`}>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="d-flex flex-column justify-content-between h-100 py-4 px-2">
                                                <h1 className="fz-ds-1 fw-500 text-scale-anim-2 pb-xxl-5 pb-4">
                                                    {service.title}
                                                </h1>
                                                <div className="d-xxl-flex align-items-end">
                                                    <p className="fz-font-2xl neutral-950 reveal-text pe-xxl-5 mb-3">
                                                        <RevealText>{service.description}</RevealText>
                                                    </p>
                                                    <div className="d-flex flex-column flex-md-row flex-xxl-column justify-content-between ps-xxl-5 ps-3">
                                                        <ul className="text-nowrap neutral-950">
                                                            {service.listLeft.map((item, i) => (
                                                                <li key={i}>{item}</li>
                                                            ))}
                                                        </ul>
                                                        <ul className="text-nowrap neutral-950">
                                                            {service.listRight.map((item, i) => (
                                                                <li key={i}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 offset-lg-1">
                                            <div className="rounded-4 overflow-hidden">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    width={600}
                                                    height={400}
                                                    className="img-cover"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
