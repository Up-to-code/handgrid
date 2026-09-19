import { Link } from "@tanstack/react-router";
import { createRoute } from "@tanstack/react-router";
import { rootRoute, PageHero } from "./routes-a";
import { ServicesGrid } from "./s-services";
import { ReviewCards, LovedByThousands } from "./s-social";
import { SERVICES } from "./data";
import { ALL_REVIEWS } from "./data-reviews2";
import { Reveal } from "./motion-shared";

export const serviceDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/service/$slug",
  component: function ServiceDetail() {
    const { slug } = serviceDetailRoute.useParams();
    const service = SERVICES.find((s) => s.slug === slug) ?? SERVICES[0];
    const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
    return (
      <>
        <PageHero title={service.title} sub={service.desc} />
        <div className="container">
          <Reveal>
            <div className="service-hero-img">
              <img src={service.image} alt={service.title} />
            </div>
          </Reveal>
          <div className="service-layout">
            <div className="prose">
              <h2>Overview</h2>
              <p>
                Discover the essential mission and vision that fuels our passion
                every day at HandGrid. We're not just about fixing things; we're
                dedicated to enhancing the comfort and safety of our clients'
                homes.
              </p>
              <p>
                With a keen eye for detail and innovative solutions, even the
                most challenging {service.title.toLowerCase()} issues can be
                resolved efficiently. By applying these expert techniques and
                creative strategies, you can ensure your home runs smoothly and
                reflects your commitment to quality.
              </p>
              <h2>Service Scheduling</h2>
              <ul className="tick-list">
                <li>Reliable {service.title.toLowerCase()}, peace of mind</li>
                <li>Client satisfaction guaranteed</li>
                <li>Exceptional service every time!</li>
              </ul>
            </div>
            <div className="quote-card">
              <h3>Request a Free {service.title} Quote</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="field">
                  <label>Full Name</label>
                  <input placeholder="Full Name" />
                </div>
                <div className="field">
                  <label>Required Service</label>
                  <select defaultValue={service.title}>
                    {SERVICES.map((s) => (
                      <option key={s.slug}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label>Email Address</label>
                  <input placeholder="Type your mail address" type="email" />
                </div>
                <button className="btn btn-red" type="submit">Get in Touch</button>
              </form>
            </div>
          </div>
        </div>
        <ServicesGrid items={others} title="Other services" />
        <ReviewCards items={ALL_REVIEWS.slice(3, 6)} />
      </>
    );
  },
});

export const reviewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/review",
  component: () => (
    <>
      <PageHero
        title="Customer Reviews"
        sub="Real feedback from real homes. Here's what our customers say about working with HandGrid."
      />
      <ReviewCards items={ALL_REVIEWS} heading={false} />
      <LovedByThousands />
    </>
  ),
});
