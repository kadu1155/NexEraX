import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import xssClean from "xss-clean";
import cookieParser from "cookie-parser";
import { config } from "./config.js";
import { authRouter } from "./routes/auth.js";
import { contentRouter, portfolioRouter } from "./routes/crud.js";
import { leadRouter } from "./routes/leads.js";
import { adminLeadsRouter } from "./routes/admin-leads.js";
import { settingsRouter } from "./routes/settings.js";

export const app = express();

app.set("trust proxy", 1);
app.use(helmet());
app.use(cors({ origin: config.clientUrl, credentials: true }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 160 }));
app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xssClean());

app.get("/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/auth", authRouter);
app.use("/api/leads", leadRouter);
app.use("/api/portfolio", portfolioRouter);
app.use("/api/content", contentRouter);
app.use("/api/admin/leads", adminLeadsRouter);
app.use("/api/settings", settingsRouter);

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});
