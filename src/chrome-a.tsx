import { AnimatePresence, motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { PHONE, ASSETS, SERVICES } from "./data";

export function Brand({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" className="brand">
      <img src={dark ? ASSETS.logoDark : ASSETS.logoLight} alt="HandGrid" />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container">
        <Brand />
        <nav className="nav">
          <div
            className="dropdown"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <Link to="/">All Pages <span className="caret" /></Link>
            <AnimatePresence>
              {open && (
                <motion.div
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <Link to="/service">All Services</Link>
                  {SERVICES.slice(0, 4).map((s) => (
                    <Link key={s.slug} to="/service/$slug" params={{ slug: s.slug }}>
                      {s.title}
                    </Link>
                  ))}
                  <Link to="/review">Reviews</Link>
                  <Link to="/blog">Blog</Link>
                  <Link to="/contact">Contact</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link to="/service">Services</Link>
          <Link to="/review">Review</Link>
        </nav>
        <div className="header-cta">
          <a className="btn btn-red" href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}>
            Call us: {PHONE}
          </a>
        </div>
      </div>
    </header>
  );
}
