import { A } from "./data";

export interface Review { title: string; text: string; name: string; role: string; avatar: string; }

export const REVIEWS: Review[] = [
  { title: "Great value for money!", text: "I was genuinely pleasantly surprised by the exceptional quality of service provided at such a competitive rate.", name: "Amelia Clark", role: "Operations Manager, GreenEarth", avatar: A("asset-02.svg") },
  { title: "Reliable and efficient!", text: "Their team arrived promptly on time and completed the job faster than I expected, leaving my home absolutely spotless.", name: "Michael Chen", role: "Lead Developer, CodeCraft", avatar: A("asset-05.svg") },
  { title: "Exceptional customer.", text: "I had an urgent last-minute need for a thorough deep clean before hosting guests, and Handgrid truly came.", name: "Sophia Turner", role: "Chief Marketing Officer, EcoStyle", avatar: A("asset-09.svg") },
  { title: "Professional and friendly!", text: "The staff was incredibly polite and went above and beyond to ensure that I was completely satisfied with the service.", name: "Ethan Smith", role: "Product Designer, Innovatech", avatar: A("asset-44.svg") },
  { title: "Thorough and meticulous!", text: "Every single nook and cranny was cleaned with meticulous care, and I couldn't be happier with the amazing results.", name: "Emma Johnson", role: "Content Strategist, MediaWorks", avatar: A("asset-47.svg") },
];
