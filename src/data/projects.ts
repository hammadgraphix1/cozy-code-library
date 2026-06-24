import identities from "@/assets/identities.jpg.asset.json";
import discount from "@/assets/discount.jpg.asset.json";
import fathersday from "@/assets/fathersday.jpg.asset.json";
import megasale from "@/assets/megasale.jpg.asset.json";
import indonesia from "@/assets/indonesia.jpg.asset.json";
import america from "@/assets/america.jpg.asset.json";
import marketing from "@/assets/marketing.jpg.asset.json";

export type Category =
  | "Logo Design"
  | "Brand Identity Design"
  | "Social Media Design"
  | "Advertising Design"
  | "Poster Design";

export interface Project {
  slug: string;
  title: string;
  category: Category;
  description: string;
  image: string;
  year: string;
  client: string;
  featured?: boolean;
  caseStudy?: {
    overview: string;
    challenge: string;
    research: string;
    strategy: string;
    process: string;
    solution: string;
    result: string;
  };
}

export const projects: Project[] = [
  {
    slug: "iconic-identities",
    title: "Iconic Identities",
    category: "Brand Identity Design",
    description:
      "A bold brand-positioning visual built around the idea of timeless icons — fusing classical portraiture with neon energy and high-contrast typographic systems.",
    image: identities.url,
    year: "2025",
    client: "Hammad Graphix",
    featured: true,
    caseStudy: {
      overview:
        "A self-initiated brand campaign positioning Hammad Graphix as a studio that builds iconic, memorable identity systems.",
      challenge:
        "Stand out in a saturated freelance designer market without leaning on generic 'creative agency' tropes.",
      research:
        "Studied award-winning identity work from Pentagram, Gretel, and DIA. Mapped competitor visual languages across Instagram-first designers.",
      strategy:
        "Anchor the brand around an Einstein-as-icon visual metaphor — pairing intellectual heritage with neon-yellow signal color to claim ownership of the 'iconic' positioning.",
      process:
        "Iterated 30+ composition variants. Locked the type lockup, neon spotlight, and grid-based scaffolding. Refined the chrome-style pill buttons to read as deliverables.",
      solution:
        "A single hero composition that doubles as a positioning statement, scalable across post, reel cover, and case-study hero.",
      result:
        "Increased inbound brand inquiries by 3.4x in the first month and became the studio's most-saved post on Instagram.",
    },
  },
  {
    slug: "50-percent-discount",
    title: "50% Discount Campaign",
    category: "Social Media Design",
    description:
      "A power-move promotional creative built on chess imagery — communicating premium positioning while running an aggressive limited-client offer.",
    image: discount.url,
    year: "2025",
    client: "Hammad Graphix",
    featured: true,
  },
  {
    slug: "the-pillar",
    title: "The Pillar — Father's Day Tribute",
    category: "Social Media Design",
    description:
      "A cinematic tribute campaign for Father's Day, anchored in a behind-the-scenes designer-and-mentor narrative shot in moody low-key lighting.",
    image: fathersday.url,
    year: "2025",
    client: "Personal Project",
    featured: true,
  },
  {
    slug: "mega-sale-2026",
    title: "2026 Mega Sale — Hoodie Collection",
    category: "Advertising Design",
    description:
      "A high-contrast retail advertising creative for a winter hoodie drop. Diagonal compositional grid and punchy typography drive immediate sale recall.",
    image: megasale.url,
    year: "2025",
    client: "Grapghix Apparel",
    featured: true,
    caseStudy: {
      overview:
        "Seasonal e-commerce launch creative for a winter hoodie collection targeting a 70% discount window.",
      challenge:
        "Translate a one-color hoodie product into a feed-stopping promotional visual that converts within 1.5 seconds.",
      research:
        "Audited 50+ fashion sale creatives. Found that diagonal axis + serif/sans contrast outperformed centered layouts by 2x on saves.",
      strategy:
        "Build the layout around an aggressive diagonal blush band, locking attention into the 'MEGA SALE' lockup with the product as evidence, not subject.",
      process:
        "Tested 6 typographic systems. Final lockup uses an oversized condensed sans for impact + a navy block to mute the red intensity.",
      solution:
        "A modular template system that can be re-skinned for future drops by swapping product photography and price band.",
      result:
        "Drove a 42% click-through lift versus the brand's previous best-performing sale creative.",
    },
  },
  {
    slug: "indonesia-travel",
    title: "Let's Cover Indonesia",
    category: "Poster Design",
    description:
      "Editorial travel poster blending oversized destination typography with polaroid-stack photography — built for an outbound travel agency campaign.",
    image: indonesia.url,
    year: "2025",
    client: "Alvies Travel",
    featured: true,
  },
  {
    slug: "america-elegance",
    title: "America Elegance",
    category: "Poster Design",
    description:
      "Luxury travel poster system spotlighting iconic US destinations through layered photography cards and a service-icon ribbon footer.",
    image: america.url,
    year: "2025",
    client: "Alvies Travel",
  },
  {
    slug: "experienced-marketing-service",
    title: "Experienced Marketing Service",
    category: "Advertising Design",
    description:
      "B2B service-promotion creative built on bold organic shapes and high-contrast portrait photography to project credibility and momentum.",
    image: marketing.url,
    year: "2025",
    client: "Confidential",
  },
];

export const categories: Category[] = [
  "Logo Design",
  "Brand Identity Design",
  "Social Media Design",
  "Advertising Design",
  "Poster Design",
];

export const stats = [
  { value: "230+", label: "Projects Completed" },
  { value: "160+", label: "Clients Served" },
  { value: "99.5%", label: "Client Satisfaction" },
];

export const services = [
  {
    title: "Logo Design",
    description:
      "Crafting timeless logos that capture your brand's essence and leave a lasting impression.",
    deliverables: ["Custom Mark", "Wordmark", "Logo System", "Usage Guide"],
    comingSoon: true,
  },
  {
    title: "Brand Identity Design",
    description:
      "Full visual identity systems — color palettes, typography, brand guidelines, and more — built for consistency and impact.",
    deliverables: ["Identity System", "Brand Guidelines", "Asset Library", "Launch Kit"],
  },
  {
    title: "Social Media Design",
    description:
      "Scroll-stopping visuals designed to engage your audience and grow your digital presence.",
    deliverables: ["Post Templates", "Story Kits", "Reel Covers", "Content System"],
  },
];

export const WHATSAPP_URL = "https://wa.me/923182957713";
export const EMAIL = "hammadgraphixs@gmail.com";
export const INSTAGRAM = "https://www.instagram.com/hammad.graphix/?hl=en";
export const LINKEDIN = "https://www.linkedin.com/in/hammad-alvi-a06510372/";
