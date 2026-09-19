import { Link } from "@tanstack/react-router";
import { createRoute } from "@tanstack/react-router";
import { rootRoute, PageHero } from "./routes-a";
import { Hero } from "./s-hero";
import { Values, OneStop } from "./s-about";
import { ServicesGrid, Steps } from "./s-services";
import { ReviewCards, LovedByThousands, InstagramSection } from "./s-social";
import { BlogPreview } from "./s-blog";
import { ALL_REVIEWS } from "./data-reviews2";

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <>
      <Hero />
      <Values />
      <OneStop />
      <ServicesGrid />
      <Steps />
      <ReviewCards items={ALL_REVIEWS.slice(0, 6)} />
      <LovedByThousands />
      <InstagramSection />
      <BlogPreview />
    </>
  ),
});

export const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/service",
  component: () => (
    <>
      <PageHero
        title="Our Services"
        sub="Discover our handyman services to maintain your home. From repairs to renovations, we have you covered."
      />
      <ServicesGrid title="Everything your home needs" />
      <Steps />
      <ReviewCards items={ALL_REVIEWS.slice(0, 3)} />
    </>
  ),
});
