import { motion } from "motion/react";
import { ASSETS } from "./data";
import { STATS, VALUES } from "./data-stats";
import { Reveal, CountUp } from "./motion-shared";

const CHECKS = [
  "Home repair experience.",
  "Licensed, insured, expert pros.",
  "Committed to quality.",
  "Passion for helping homeowners.",
];

export function Values() {
  return (
    <section className="section">
      <div className="container">
        <div className="values-grid">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="value-card">
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OneStop() {
  return (
    <section className="section" style={{ paddingTop: 20 }}>
      <div className="container">
        <div className="split">
          <Reveal>
            <motion.div
              className="media"
              whileHover={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
            >
              <img src={ASSETS.oneStop} alt="Handyman portrait" />
            </motion.div>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="h2">Your Ultimate One-Stop Home Solution</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead" style={{ marginTop: 22 }}>
                From leaky faucets to major renovations, we handle it with care.
                Our skilled team ensures every detail is addressed, giving you
                peace of mind.
              </p>
            </Reveal>
            <div className="check-grid">
              {CHECKS.map((c, i) => (
                <Reveal key={c} delay={0.08 * i}>
                  <div className="check-item">
                    <span className="check-badge">
                      <img src={ASSETS.check} alt="" />
                    </span>
                    {c}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <Reveal>
          <h2 className="h2" style={{ marginTop: 100 }}>Our track record speaks for itself</h2>
        </Reveal>
        <div className="stats-row">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="stat">
                <div className="num">
                  <CountUp value={s.value} suffix={s.suffix} />
                </div>
                <div className="lbl">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
