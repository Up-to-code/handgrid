export interface Post { slug: string; title: string; desc: string; cta: string; date: string; image: string; body: string[]; }

const B = (n: string) => `/assets/${n}`;

export const POSTS: Post[] = [
  {
    slug: "12-essential-tools-every-homeowner-should-have-ready",
    title: "12 Essential Tools Every Homeowner Should Have Ready",
    desc: "Tools save time and money on repairs. This blog covers must-have items for maintenance.",
    cta: "Learn More", date: "Feb 26, 2025", image: B("asset-08.png"),
    body: [
      "Every homeowner faces small repairs and maintenance tasks. Having the right tools on hand saves time, money, and stress — and keeps little issues from becoming expensive emergencies.",
      "Start with the basics: a quality hammer, a set of screwdrivers, an adjustable wrench, a cordless drill, a tape measure, and a level.",
      "Store everything in one dedicated toolbox so you always know where to find it.",
    ],
  },
  {
    slug: "winter-seasonal-maintenance-tips-for-your-home",
    title: "Winter Seasonal Maintenance Tips for Your Home",
    desc: "Prepare your home for colder months with essential maintenance tasks.",
    cta: "Prepare Now", date: "Feb 26, 2025", image: B("asset-17.png"),
    body: [
      "Cold weather puts your home under pressure. A few hours of preparation before winter can prevent frozen pipes, heat loss, and costly mid-season repairs.",
      "Insulate exposed pipes, bleed your radiators, and have your boiler serviced before the first frost.",
      "Finally, test smoke and carbon monoxide detectors — heating season is when they matter most.",
    ],
  },
  {
    slug: "top-exciting-trends-in-home-décor-for-2026",
    title: "Top Exciting Trends in Home Décor for 2026",
    desc: "Stay ahead of the curve with the latest styles and design inspirations.",
    cta: "See Trends", date: "Feb 26, 2025", image: B("asset-22.png"),
    body: [
      "2026 is all about warm minimalism: natural materials, earthy palettes, and spaces designed around wellbeing rather than showrooms.",
      "Expect curved furniture, textured limewash walls, statement lighting, and biophilic touches — indoor trees, stone, and raw wood — to dominate the year.",
      "The easiest way in? Start with lighting and textiles. A sculptural lamp and layered natural fabrics transform a room without a renovation.",
    ],
  },
  {
    slug: "understanding-the-basics-of-homeowners-insurance",
    title: "Understanding the Basics of Homeowner's Insurance",
    desc: "Everything you need to know to protect your home and belongings.",
    cta: "Learn More", date: "Feb 26, 2025", image: B("asset-20.png"),
    body: [
      "Homeowner's insurance protects your property, your belongings, and your liability — but policies differ more than most people realize.",
      "Know the difference between buildings and contents cover, check your excess, and make sure high-value items are listed explicitly.",
      "Review your policy annually. Renovations, new purchases, and market changes can all leave you underinsured.",
    ],
  },
  {
    slug: "a-beginners-comprehensive-guide-to-home-automation",
    title: "A Beginner's Comprehensive Guide to Home Automation",
    desc: "Transform your home into a smart home with these easy steps.",
    cta: "Get Informed", date: "Feb 26, 2025", image: B("asset-36.png"),
    body: [
      "Home automation doesn't have to be complicated or expensive. Start small and build a system that genuinely makes life easier.",
      "Begin with smart lighting and a smart thermostat — the two upgrades with the biggest everyday impact. Add smart plugs for appliances and a video doorbell for security.",
      "Choose one ecosystem and stick to it. Mixed systems are the number one cause of smart-home frustration.",
    ],
  },
  {
    slug: "essential-important-safety-measures-for-homeowners",
    title: "Essential Important Safety Measures for Homeowners",
    desc: "Smart design ideas to make the most of limited square footage.",
    cta: "Read More", date: "Feb 26, 2025", image: B("asset-41.png"),
    body: [
      "A safe home starts with the essentials: working smoke alarms, a carbon monoxide detector, and a fire extinguisher you actually know how to use.",
      "Secure doors and windows with quality locks, add motion-sensor lighting outside, and keep a basic first-aid kit somewhere everyone can find it.",
      "Finally, make a household emergency plan — five minutes of planning makes all the difference when it matters.",
    ],
  },
];

export const STATS = [
  { value: 15, suffix: "+", label: "Years in Business" },
  { value: 12, suffix: "K+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Satisfaction Ratings" },
];

export const VALUES = [
  { title: "Reliability & Trust", desc: "Looking for a dependable handyman? We arrive on time and do the job right." },
  { title: "Quality Workmanship", desc: "Our skilled technicians excel in various home repairs, using only top-quality" },
  { title: "Fair & Transparent Pricing", desc: "No surprises here! We offer clear quotes and fair pricing for quality work." },
];

export const STEPS = [
  { icon: B("asset-43.svg"), title: "Pick Your Service", desc: "Building trust with clients by being transparent, honest, and reliable in all." },
  { icon: B("asset-15.svg"), title: "Select Your Date", desc: "Building trust with clients by being transparent, honest, and reliable in all." },
  { icon: B("asset-38.svg"), title: "Confirm and Relax", desc: "Building trust with clients by being transparent, honest, and reliable in all." },
];
