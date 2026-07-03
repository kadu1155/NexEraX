import bcrypt from "bcryptjs";
import { connectDb } from "./db.js";
import { config } from "./config.js";
import { User } from "./models/User.js";
import { Portfolio } from "./models/Portfolio.js";
import { Content } from "./models/Content.js";

const portfolios = [
  ["Mangal Moti Dagine", "mangal-moti-dagine", "Luxury Jewellery Website", "Gold Theme"],
  ["Rudra Imitation", "rudra-imitation", "Fashion Jewellery", "Elegant Premium"],
  ["Happy Paws Veterinary", "happy-paws-veterinary", "Animal Hospital", "Care Friendly"],
  ["Blue Bean Cafe", "blue-bean-cafe", "Cafe Website", "Fresh Urban"],
  ["Green Valley Resort", "green-valley-resort", "Luxury Resort", "Nature Luxe"],
  ["Urban Bites Restaurant", "urban-bites-restaurant", "Restaurant Website", "Bold Dining"],
  ["Bloom Beauty Salon", "bloom-beauty-salon", "Salon Landing Page", "Soft Premium"],
  ["Fitness Hub Gym", "fitness-hub-gym", "Gym Website", "High Energy"]
];

await connectDb();

await User.updateOne(
  { email: config.adminEmail },
  { email: config.adminEmail, passwordHash: await bcrypt.hash(config.adminPassword, 12), role: "admin" },
  { upsert: true }
);

await Portfolio.deleteMany({});
await Portfolio.insertMany(
  portfolios.map(([name, slug, category, theme]) => ({
    name,
    slug,
    category,
    theme,
    description: `${name} sample portfolio landing page with hero, about, services, gallery, testimonials and contact sections.`,
    features: ["Hero", "About", "Services", "Gallery", "Testimonials", "Contact"],
    isPublished: true
  }))
);

await Content.deleteMany({});
await Content.insertMany([
  { type: "service", title: "Website Design", description: "Premium responsive website design.", order: 1 },
  { type: "service", title: "SEO Optimization", description: "Metadata, schema, sitemap and speed foundations.", order: 2 },
  { type: "faq", title: "How fast can you launch?", description: "Most business websites launch in 7 to 21 days.", order: 1 },
  { type: "pricing", title: "Professional", price: "₹24,999", features: ["5 pages", "Animations", "SEO"], order: 1 },
  { type: "testimonial", title: "Sagar Patil", subtitle: "Jewellery Owner", rating: 5, description: "NexEra made our brand look premium online.", order: 1 },
  { type: "client", title: "Mangal Moti Dagine", order: 1 }
]);

console.log("Seed complete");
process.exit(0);
