export const PHONE = "+403-394-9940";
export const ADDRESS = "4296 Coplin Avenue, Phoenix Arizona, 59412";
export const EMAIL = "chat@clearmaster.pro";
export const PHONE_2 = "+021 480-202-5906";

const A = (n: string) => `/assets/${n}`;
export { A };

export const ASSETS = {
  logoDark: A("asset-30.svg"),
  logoLight: A("asset-37.svg"),
  hero: A("asset-01.png"),
  oneStop: A("asset-33.png"),
  ctaMan: A("asset-49.png"),
  redPattern: A("asset-50.svg"),
  quote: A("asset-13.svg"),
  check: A("asset-31.svg"),
  arrowRight: A("asset-03.svg"),
  arrowLeft: A("asset-10.svg"),
  stepLayers: A("asset-43.svg"),
  stepCalendar: A("asset-15.svg"),
  stepConfirm: A("asset-38.svg"),
  avatars: [A("asset-11.png"), A("asset-48.png"), A("asset-54.png"), A("asset-06.svg"), A("asset-21.svg"), A("asset-45.svg")],
  wallImages: [
    A("asset-07.png"), A("asset-08.png"), A("asset-12.png"), A("asset-17.png"),
    A("asset-18.png"), A("asset-20.png"), A("asset-22.png"), A("asset-25.png"),
    A("asset-26.png"), A("asset-29.png"), A("asset-34.png"), A("asset-35.png"),
    A("asset-36.png"), A("asset-39.png"), A("asset-41.png"), A("asset-46.png"),
    A("asset-51.png"), A("asset-04.png"),
  ],
};

export interface Service { slug: string; title: string; desc: string; image: string; }

export const SERVICES: Service[] = [
  { slug: "window-replacement", title: "Window Replacement", desc: "Improve energy efficiency and aesthetics with our selection of modern, durable window options.", image: A("asset-07.png") },
  { slug: "interior-painting", title: "Interior Painting", desc: "Refresh your home's interior with our expert painting services, utilizing top-quality materials and techniques.", image: A("asset-12.png") },
  { slug: "flooring-installation", title: "Flooring Installation", desc: "Transform your space with professional flooring solutions, including hardwood, laminate, and tile.", image: A("asset-25.png") },
  { slug: "plumbing-repairs", title: "Plumbing Repairs", desc: "Leaks and clogs disrupt overall comfort. Our plumbers expertly manage repairs and installations.", image: A("asset-18.png") },
  { slug: "pest-control", title: "Pest Control", desc: "Safeguard your home with our effective pest control services, targeting ants, rodents, termites, and more.", image: A("asset-26.png") },
  { slug: "landscaping-design", title: "Landscaping Design", desc: "Enhance your outdoor area with tailored landscaping, including planting and hardscaping.", image: A("asset-39.png") },
];
