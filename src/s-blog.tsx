import { Link } from "@tanstack/react-router";
import { POSTS } from "./data-stats";
import { Reveal } from "./motion-shared";

export function BlogGrid({ items = POSTS }: { items?: typeof POSTS }) {
  return (
    <>
      <div className="blog-grid">
        {items.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 0.1}>
            <Link className="post-card" to="/blog/$slug" params={{ slug: p.slug }}>
              <img className="bg" src={p.image} alt={p.title} loading="lazy" />
              <div className="panel">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="meta">
                  <span className="cta">{p.cta}</span>
                  <span className="date">{p.date}</span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}

export function BlogPreview() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <div className="center">
            <div className="eyebrow">Latest from our blog</div>
            <h2 className="h2" style={{ marginTop: 14 }}>Tips, trends &amp; how-tos</h2>
          </div>
        </Reveal>
        <BlogGrid items={POSTS.slice(0, 3)} />
        <Reveal>
          <div className="center mt-48">
            <Link className="btn btn-red" to="/blog">Load More</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
