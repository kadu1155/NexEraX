import {
  Bot,
  Brush,
  CreditCard,
  Gauge,
  Globe2,
  Headphones,
  LayoutDashboard,
  Lock,
  MessageCircle,
  MonitorSmartphone,
  Search,
  Server,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Wrench,
  Zap,
  Heart,
  LifeBuoy,
  BrainCircuit
} from "lucide-react";

export const clients = [
  "Mangal Moti Dagine",
  "Rudra Imitation",
  "PetCare Clinic",
  "Blue Bean Cafe",
  "Green Valley Resort",
  "Urban Bites Restaurant",
  "Nature Nest Farm",
  "Elite Dental Clinic"
];

export const services = [
  ["Website Design", Brush, "Custom designed to match your brand identity."],
  ["UI/UX Design", Sparkles, "Intuitive user experiences that convert."],
  ["Landing Page", Globe2, "High-converting single pages for campaigns."],
  ["Business Website", MonitorSmartphone, "Professional corporate presence online."],
  ["Portfolio Website", LayoutDashboard, "Showcase your work beautifully."],
  ["Ecommerce Website", ShoppingCart, "Online stores built for sales."],
  ["Static Website", Server, "Fast, secure, and easy to host."],
  ["Dynamic Website", Wrench, "Content managed systems you control."],
  ["SEO Optimization", Search, "Rank higher on Google search results."],
  ["Responsive Design", MonitorSmartphone, "Perfect experience on all devices."],
  ["AI Integration", BrainCircuit, "Smart features to automate your business."],
  ["Chatbot Integration", MessageCircle, "24/7 automated customer support."],
  ["WhatsApp API", MessageCircle, "Direct communication with customers."],
  ["Payment Gateway", CreditCard, "Secure online transaction processing."],
  ["Admin Dashboard", LayoutDashboard, "Custom backends to manage data."],
  ["Website Maintenance", Wrench, "Regular updates and security patches."],
  ["Website Hosting", Server, "Fast, reliable cloud infrastructure."],
  ["Domain Setup", Globe2, "Professional web address management."],
  ["SSL Installation", Lock, "Secure encrypted connections."],
  ["Performance", Gauge, "Lightning fast load times."]
] as const;

export const reasons = [
  { label: "Fast Delivery", Icon: Zap },
  { label: "Modern UI", Icon: MonitorSmartphone },
  { label: "SEO Friendly", Icon: Search },
  { label: "Mobile Responsive", Icon: MonitorSmartphone },
  { label: "Speed Optimized", Icon: Zap },
  { label: "Secure", Icon: ShieldCheck },
  { label: "Affordable", Icon: Heart },
  { label: "24×7 Support", Icon: LifeBuoy },
  { label: "AI Ready", Icon: BrainCircuit }
];

export const portfolio = [
  {
    slug: "mangal-moti-dagine",
    name: "Mangal Moti Dagine",
    category: "Luxury Jewellery Website",
    theme: "Gold Theme",
    description: "A temple jewellery storefront with Marathi warmth, gallery storytelling, testimonials and WhatsApp ordering.",
    color: "#D6A84F",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    features: ["Temple Jewellery", "WhatsApp Order", "Testimonials", "Gallery", "Contact"]
  },
  {
    slug: "rudra-imitation",
    name: "Rudra Imitation",
    category: "Fashion Jewellery",
    theme: "Elegant Premium",
    description: "A premium fashion jewellery landing page with editorial cards, collection highlights and lead capture.",
    color: "#0E2F76",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1200&q=80",
    features: ["Collections", "Lookbook", "WhatsApp CTA", "Testimonials"]
  },
  {
    slug: "happy-paws-veterinary",
    name: "Happy Paws Veterinary",
    category: "Animal Hospital",
    theme: "Care Friendly",
    description: "A clinic site with appointment booking, emergency banner, doctors, services and trust-led content.",
    color: "#22C55E",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=80",
    features: ["Appointment Booking", "Emergency Banner", "Doctors", "Services"]
  },
  {
    slug: "blue-bean-cafe",
    name: "Blue Bean Cafe",
    category: "Cafe Website",
    theme: "Fresh Urban",
    description: "A cafe website with menu sections, reservation flow, gallery and local SEO-ready content blocks.",
    color: "#0E2F76",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    features: ["Menu", "Reservation", "Gallery", "Maps"]
  },
  {
    slug: "green-valley-resort",
    name: "Green Valley Resort",
    category: "Luxury Resort",
    theme: "Nature Luxe",
    description: "A resort landing experience built around rooms, pool photography, amenities and booking CTAs.",
    color: "#16A34A",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    features: ["Rooms", "Swimming Pool", "Booking CTA", "Gallery"]
  },
  {
    slug: "urban-bites-restaurant",
    name: "Urban Bites Restaurant",
    category: "Restaurant Website",
    theme: "Bold Dining",
    description: "A restaurant website with food menu, chef spotlight, reservation funnel and review sections.",
    color: "#EF4444",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    features: ["Food Menu", "Chef", "Reservations", "Reviews"]
  },
  {
    slug: "bloom-beauty-salon",
    name: "Bloom Beauty Salon",
    category: "Salon Landing Page",
    theme: "Soft Premium",
    description: "A beauty salon landing page with service menus, gallery, booking CTA and offer sections.",
    color: "#EC4899",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    features: ["Booking", "Gallery", "Offers", "Services"]
  },
  {
    slug: "fitness-hub-gym",
    name: "Fitness Hub Gym",
    category: "Gym Website",
    theme: "High Energy",
    description: "A gym website with membership plans, BMI calculator, trainer profiles and transformation content.",
    color: "#F97316",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    features: ["Membership Plans", "BMI Calculator", "Trainer Profiles", "Lead Form"]
  }
];

export const testimonials = [
  { name: "Sagar Patil", role: "Jewellery Owner", rating: 5, text: "NexEra made our brand look premium online and brought more WhatsApp enquiries within days." },
  { name: "Neha Sharma", role: "Cafe Founder", rating: 5, text: "The site loads fast, looks beautiful on mobile and our reservation flow is finally simple." },
  { name: "Dr. Amar Kale", role: "Clinic Director", rating: 5, text: "They understood trust, speed and local SEO. The admin dashboard saves our team time." }
];

export const pricing = [
  {
    name: "Starter",
    price: "₹9,999",
    description: "Perfect for new local businesses.",
    featured: false,
    features: ["4 Pages", "Mobile Responsive", "Basic SEO", "Contact Form", "1 Month Support"]
  },
  {
    name: "Professional",
    price: "₹16,999",
    description: "Ideal for growing companies.",
    featured: true,
    features: ["Up to 7 Pages", "Custom Design", "Advanced SEO", "CMS Integration", "Speed Optimization", "3 Months Support"]
  },
  {
    name: "Premium",
    price: "₹24,999",
    description: "For serious brands scaling up.",
    featured: false,
    features: ["Unlimited Pages", "E-commerce Ready", "AI Chatbot", "Payment Gateway", "Custom Animations", "6 Months Support"]
  },
  {
    name: "Enterprise",
    price: "₹36,999",
    description: "Complex custom web applications.",
    featured: false,
    features: ["Custom Web App", "Advanced Integrations", "Dedicated Server", "Custom Dashboards", "24/7 Priority Support"]
  }
];

export const faqs = [
  ["How fast can you launch a website?", "Most business websites launch in 7 to 21 days depending on scope, content and integrations."],
  ["Do you provide hosting and domain setup?", "Yes. We handle domain setup, SSL, hosting configuration, deployment and ongoing maintenance."],
  ["Can I manage portfolio and leads?", "Yes. The included admin dashboard supports leads, portfolio, services, pricing, FAQs, clients and testimonials."],
  ["Do you build ecommerce websites?", "Yes. We build ecommerce flows with product catalogs, payment gateway integration and admin management."],
  ["Will my site be SEO optimized?", "Yes. We include metadata, schema, sitemap, robots.txt, speed optimization and local business SEO structure."]
];

export const process = ["Discovery", "Planning", "Design", "Development", "Testing", "Launch", "Support"];

export const dashboardModules = ["Leads", "Portfolio", "Testimonials", "FAQs", "Pricing", "Services", "Clients"];

export const trustIcons = [Gauge, Sparkles, Search, MonitorSmartphone, ShieldCheck, Headphones, Bot];
