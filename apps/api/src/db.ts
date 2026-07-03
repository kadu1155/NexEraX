import mongoose from "mongoose";
import { config } from "./config.js";

export async function connectDb() {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(config.mongoUri);
    console.log("MongoDB connected");
  } catch (err) {
    console.warn("⚠️  MongoDB connection failed. API running without database.");
    console.warn("   To fix: set MONGODB_URI in apps/api/.env to a valid MongoDB connection string.");
    console.warn("   Get a free cloud DB at https://www.mongodb.com/atlas");
  }
}
