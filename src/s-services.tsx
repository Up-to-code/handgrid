import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SERVICES } from "./data";
import { STEPS } from "./data-stats";
import { Reveal } from "./motion-shared";

export function ServicesGrid({ items = SERVICES, title = "Our Handyman Services" }: { items?: typeof SERVICES; title?: string }) {
  return (
    <section className="section section-tint">
      <div className="container">
        <Reveal>
          <div className="center">
            <div className="eyebrow">Explor Our Services</div>
            <h2 className="h2" style={{ marginTop: 14 }}>{title}</h2>
          </div>
        </Reveal>
        <div className="services-grid">
          {items.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.1}>
              <Link className="service-card" to="/service/$slug" params={{ slug: s.slug }}>
                <img className="bg" src={s.image} alt={s.title} loading="lazy" />
                <div className="panel">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="center mt-48">
            <Link className="btn btn-red" to="/service">Load More</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Steps() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="center">
            <div className="eyebrow">How HandGrid works</div>
            <h2 className="h2" style={{ marginTop: 14 }}>How It works</h2>
          </div>
        </Reveal>
        <div className="steps-grid">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <motion.div
                className="step-card"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <img className="icon" src={s.icon} alt={s.title} />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
