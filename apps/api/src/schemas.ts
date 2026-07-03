import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export const leadSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(8).max(20),
  businessName: z.string().max(160).optional().or(z.literal("")),
  website: z.string().max(200).optional().or(z.literal("")),
  budget: z.string().max(80).optional().or(z.literal("")),
  projectType: z.string().max(120).optional().or(z.literal("")),
  message: z.string().min(10).max(2500),
  location: z.string().max(160).optional()
});

export const portfolioSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  category: z.string().min(2),
  theme: z.string().optional(),
  description: z.string().min(10),
  image: z.string().optional(),
  color: z.string().optional(),
  features: z.array(z.string()).default([]),
  isPublished: z.boolean().default(true)
});

export const contentSchema = z.object({
  type: z.enum(["testimonial", "faq", "pricing", "service", "client"]),
  title: z.string().min(1),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  price: z.string().optional(),
  features: z.array(z.string()).default([]),
  rating: z.number().min(1).max(5).optional(),
  image: z.string().optional(),
  order: z.number().default(0),
  isPublished: z.boolean().default(true)
});
