import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ASSETS, SERVICES, ADDRESS, EMAIL, PHONE_2 } from "./data";
import { Reveal } from "./motion-shared";

export function CtaBanner() {
  return (
    <div className="container">
      <Reveal>
        <section className="cta-banner">
          <img className="pattern" src={ASSETS.redPattern} alt="" aria-hidden />
          <div className="copy">
            <h2>Your Reliable Trusted Handyman is Just One Call Away!</h2>
            <Link className="btn btn-white" to="/service">
              Explor Our Services
            </Link>
          </div>
          <motion.div
            className="man"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={ASSETS.ctaMan} alt="HandGrid handyman" />
          </motion.div>
        </section>
      </Reveal>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <img src={ASSETS.logoLight} alt="HandGrid" />
            </div>
            <p style={{ marginTop: 18, maxWidth: 260, lineHeight: 1.7 }}>
              Fast, friendly handyman services for every corner of your home.
            </p>
          </div>
          <div>
            <h4>Navigation</h4>
            <Link to="/review">Client Review</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div>
            <h4>Services</h4>
            {SERVICES.slice(0, 5).map((s) => (
              <Link key={s.slug} to="/service/$slug" params={{ slug: s.slug }}>
                {s.title}
              </Link>
            ))}
          </div>
          <div>
            <div className="footer-contact">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#DB1C0A">
                <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
              </svg>
              <span>{ADDRESS}</span>
            </div>
            <div className="footer-contact">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#DB1C0A">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>{EMAIL}</span>
            </div>
            <p>{PHONE_2}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>All Right Reserved © HandGrid - 2024</span>
          <div className="socials">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.thread.com" target="_blank" rel="noreferrer">Thread</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
