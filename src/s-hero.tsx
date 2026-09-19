import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PHONE, ASSETS } from "./data";
import { Reveal } from "./motion-shared";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={ASSETS.hero} alt="Handyman at work" />
      </div>
      <div className="container hero-inner">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Get Fastest Handyman Service in Central London.
        </motion.h1>
        <motion.p
          className="sub"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          From leaky faucets to full renovations, we handle it all with expertise
          and care. Your home is in good hands.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <a className="btn btn-red" href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}>
            Call us: {PHONE}
          </a>
          <Link className="btn btn-white" to="/service">
            Learn More
          </Link>
        </motion.div>
        <motion.div
          className="hero-trust"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
        >
          <div className="avatars">
            {ASSETS.avatars.slice(0, 4).map((a, i) => (
              <img key={i} src={a} alt="Happy customer" />
            ))}
          </div>
          <span>
            <strong>Trusted by 46,250+</strong>
            Marketers &amp; Complains
          </span>
        </motion.div>
      </div>
    </section>
  );
}
