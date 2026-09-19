import { Link } from "@tanstack/react-router";
import { ASSETS } from "./data";
import { ALL_REVIEWS } from "./data-reviews2";
import { POSTS } from "./data-stats";
import { Reveal } from "./motion-shared";
import { LovedWall, InstaWall } from "./walls";

export function ReviewCards({ items = ALL_REVIEWS, heading = true }: { items?: typeof ALL_REVIEWS; heading?: boolean }) {
  return (
    <section className="section">
      <div className="container">
        {heading && (
          <Reveal>
            <div className="center">
              <div className="eyebrow">Customer Satisfaction is Our Priority</div>
              <h2 className="h2" style={{ marginTop: 14, maxWidth: 780, marginInline: "auto" }}>
                Your Comprehensive and Reliable Handyman Service Provider for All Your Home Improvement Needs
              </h2>
            </div>
          </Reveal>
        )}
        <div className="reviews-grid">
          {items.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.1}>
              <div className="review-card">
                <img className="q" src={ASSETS.quote} alt="" />
                <h3>{r.title}</h3>
                <p>{r.text}</p>
                <div className="review-who">
                  <img src={r.avatar} alt={r.name} loading="lazy" />
                  <div>
                    <strong>{r.name}</strong>
                    <span>{r.role}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LovedByThousands() {
  return (
    <section className="wall-section section-tint tint">
      <div className="wall-head container">
        <Reveal>
          <div className="eyebrow">Real jobs, real homes</div>
          <h2 className="h2" style={{ marginTop: 14 }}>Loved by thousands</h2>
          <p className="lead" style={{ marginTop: 16, maxWidth: 560, marginInline: "auto" }}>
            Watch our pros at work — an endless wall of finished jobs. Hover to
            pause and drag to explore.
          </p>
        </Reveal>
      </div>
      <LovedWall />
      <p className="wall-hint">Hover to pause — drag / swipe to explore the wall</p>
    </section>
  );
}

export function InstagramSection() {
  return (
    <section className="wall-section">
      <div className="wall-head container">
        <Reveal>
          <div className="eyebrow">@handgrid</div>
          <h2 className="h2" style={{ marginTop: 14 }}>Follow us on Instagram</h2>
          <p className="lead" style={{ marginTop: 16, maxWidth: 560, marginInline: "auto" }}>
            Daily before-and-afters from the crew. Hover to pause and drag to
            browse the feed.
          </p>
        </Reveal>
      </div>
      <InstaWall />
      <p className="wall-hint">Hover to pause — drag / swipe to browse</p>
    </section>
  );
}
