import { Link, Outlet, createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import { Header } from "./chrome-a";
import { Footer, CtaBanner } from "./chrome-b";
import { Hero } from "./s-hero";
import { Values, OneStop } from "./s-about";
import { ServicesGrid, Steps } from "./s-services";
import { ReviewCards, LovedByThousands, InstagramSection } from "./s-social";
import { BlogGrid, BlogPreview } from "./s-blog";
import { Reveal } from "./motion-shared";
import { SERVICES, PHONE } from "./data";
import { ALL_REVIEWS } from "./data-reviews2";
import { POSTS } from "./data-stats";

export function PageHero({ title, sub }: { title: string; sub: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal>
          <h1>{title}</h1>
          <p>{sub}</p>
        </Reveal>
      </div>
    </section>
  );
}

export const rootRoute = createRootRoute({
  component: () => {
    return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <CtaBanner />
        <Footer />
      </>
    );
  },
});
