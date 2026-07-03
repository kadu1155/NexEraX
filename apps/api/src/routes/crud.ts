import { Router } from "express";
import type { Model } from "mongoose";
import { requireAuth } from "../middleware/auth.js";
import { validate } from "../middleware/validate.js";
import { Portfolio } from "../models/Portfolio.js";
import { Content } from "../models/Content.js";
import { contentSchema, portfolioSchema } from "../schemas.js";

function crudRouter(model: Model<any>, schema: Parameters<typeof validate>[0]) {
  const router = Router();
  router.get("/", async (_req, res) => res.json(await model.find({ isPublished: { $ne: false } }).sort({ order: 1, createdAt: -1 })));
  router.post("/", requireAuth, validate(schema), async (req, res) => res.status(201).json(await model.create(req.body)));
  router.put("/:id", requireAuth, validate(schema), async (req, res) => res.json(await model.findByIdAndUpdate(req.params.id, req.body, { new: true })));
  router.delete("/:id", requireAuth, async (req, res) => {
    await model.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  });
  return router;
}

export const portfolioRouter = crudRouter(Portfolio, portfolioSchema);
export const contentRouter = crudRouter(Content, contentSchema);
