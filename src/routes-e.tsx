import { createRoute, createRouter } from "@tanstack/react-router";
import { rootRoute, PageHero } from "./routes-a";
import { indexRoute, servicesRoute } from "./routes-b";
import { serviceDetailRoute, reviewRoute } from "./routes-c";
import { blogRoute, postRoute } from "./routes-d";
import { SERVICES } from "./data";
import { Reveal } from "./motion-shared";

export const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: function Contact() {
    return (
      <>
        <PageHero
          title="Contact Us"
          sub="Have a question or need a quote? Reach out using the form below or call us. Here to help with handyman needs."
        />
        <div className="container contact-wrap">
          <Reveal>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="field">
                <label>Full Name</label>
                <input placeholder="Jane Smith" />
              </div>
              <div className="field-row">
                <div className="field">
                  <label>Email Address</label>
                  <input placeholder="Type your mail address" type="email" />
                </div>
                <div className="field">
                  <label>Phone</label>
                  <input placeholder="+1 (123) 456-7890" />
                </div>
              </div>
              <div className="field">
                <label>Required Service</label>
                <select defaultValue="">
                  <option value="" disabled>Select your required services</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug}>{s.title}</option>
                  ))}
                </select>
              </div>
              <button className="btn btn-red" type="submit">Get in Touch</button>
            </form>
          </Reveal>
        </div>
      </>
    );
  },
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  serviceDetailRoute,
  reviewRoute,
  blogRoute,
  postRoute,
  contactRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
