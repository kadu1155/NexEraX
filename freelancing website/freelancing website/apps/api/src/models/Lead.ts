import mongoose, { Schema } from "mongoose";

const leadSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    businessName: { type: String, trim: true },
    website: { type: String, trim: true },
    budget: { type: String, trim: true },
    projectType: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
    ip: { type: String },
    browser: { type: String },
    location: { type: String },
    emailStatus: { type: String, enum: ["sent", "failed", "skipped"], default: "skipped" }
  },
  { timestamps: true }
);

export const Lead = mongoose.model("Lead", leadSchema);
