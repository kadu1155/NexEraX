import mongoose, { Schema } from "mongoose";

const contentSchema = new Schema(
  {
    type: { type: String, enum: ["testimonial", "faq", "pricing", "service", "client"], required: true, index: true },
    title: { type: String, required: true },
    subtitle: String,
    description: String,
    price: String,
    features: [String],
    rating: Number,
    image: String,
    order: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export const Content = mongoose.model("Content", contentSchema);
