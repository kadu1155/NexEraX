import { Router } from "express";
import fs from "fs";
import path from "path";
import { requireAuth } from "../middleware/auth.js";
import { initScheduler } from "../utils/scheduler.js";

export const settingsRouter = Router();

const settingsPath = path.resolve(process.cwd(), "../../storage/settings.json");

function getSettings() {
  if (fs.existsSync(settingsPath)) {
    return JSON.parse(fs.readFileSync(settingsPath, "utf-8"));
  }
  return {
    recipientEmail: "kk25technicalteam@gmail.com",
    emailTime: "00:00",
    timeZone: "UTC",
    enabled: false
  };
}

function saveSettings(settings: any) {
  const dir = path.dirname(settingsPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
}

settingsRouter.get("/", requireAuth, (_req, res) => {
  res.json(getSettings());
});

settingsRouter.post("/", requireAuth, (req, res) => {
  const { recipientEmail, emailTime, timeZone, enabled } = req.body;
  const newSettings = { recipientEmail, emailTime, timeZone, enabled };
  saveSettings(newSettings);
  
  // Re-initialize scheduler with new settings
  initScheduler(newSettings);
  
  res.json({ message: "Settings saved successfully", settings: newSettings });
});
