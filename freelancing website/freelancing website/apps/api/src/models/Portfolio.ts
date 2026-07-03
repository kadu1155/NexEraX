import mongoose, { Schema } from "mongoose";

const portfolioSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    category: { type: String, required: true },
    theme: { type: String },
    description: { type: String, required: true },
    image: { type: String },
    color: { type: String },
    features: [{ type: String }],
    sections: {
      hero: String,
      about: String,
      services: [String],
      gallery: [String],
      testimonials: [String],
      contact: String
    },
    isPublished: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export const Portfolio = mongoose.model("Portfolio", portfolioSchema);
