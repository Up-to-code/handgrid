import { REVIEWS, type Review } from "./data-reviews";

const B = (n: string) => `/assets/${n}`;

const MORE: Review[] = [
  { title: "Fast and reliable service!", text: "They were incredibly quick to respond to my inquiry and efficiently scheduled my appointment at my utmost convenience.", name: "Liam Davis", role: "Web Developer, DesignHub", avatar: B("asset-52.svg") },
  { title: "Outstanding attention to detail!", text: "I was truly impressed by how they expertly spotted areas I hadn't even noticed needed thorough cleaning.", name: "Ava Rodriguez", role: "HR Director, PeopleFirst", avatar: B("asset-53.svg") },
  { title: "Highly recommend!", text: "The value for the exceptional service I received was truly exceptional, and I will definitely be scheduling again.", name: "Isabella Wilson", role: "Operations Lead, GreenTech", avatar: B("asset-14.svg") },
  { title: "Friendly and professional staff!", text: "Everyone I interacted with was incredibly knowledgeable and made the entire process completely seamless.", name: "Charlotte Harris", role: "Business Analyst, DataInsight", avatar: B("asset-23.svg") },
];

export const ALL_REVIEWS: Review[] = [...REVIEWS, ...MORE];
