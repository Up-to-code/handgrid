import { createRoute } from "@tanstack/react-router";
import { rootRoute, PageHero } from "./routes-a";
import { BlogGrid } from "./s-blog";
import { ReviewCards } from "./s-social";
import { ALL_REVIEWS } from "./data-reviews2";
import { POSTS } from "./data-stats";
import { Reveal } from "./motion-shared";

export const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: () => (
    <>
      <PageHero
        title="Our Blog"
        sub="Tips, guides, and inspiration for keeping your home in perfect shape — written by the HandGrid crew."
      />
      <section className="section">
        <div className="container">
          <BlogGrid items={POSTS} />
        </div>
      </section>
      <ReviewCards items={ALL_REVIEWS.slice(0, 3)} />
    </>
  ),
});

export const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$slug",
  component: function PostDetail() {
    const { slug } = postRoute.useParams();
    const post = POSTS.find((p) => p.slug === slug) ?? POSTS[0];
    return (
      <>
        <PageHero title={post.title} sub={post.desc} />
        <div className="container">
          <Reveal>
            <div className="post-hero-img">
              <img src={post.image} alt={post.title} />
            </div>
          </Reveal>
          <div className="post-body">
            <span className="post-date">{post.date}</span>
            <h2>Overview</h2>
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
        <section className="section">
          <div className="container">
            <Reveal>
              <h2 className="h2">More from the blog</h2>
            </Reveal>
            <BlogGrid items={POSTS.filter((p) => p.slug !== post.slug).slice(0, 3)} />
          </div>
        </section>
      </>
    );
  },
});
