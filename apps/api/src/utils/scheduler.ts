import cron, { ScheduledTask } from "node-cron";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { config } from "../config.js";

let currentTask: ScheduledTask | null = null;

interface Settings {
  recipientEmail: string;
  emailTime: string; // HH:MM
  timeZone: string;
  enabled: boolean;
}

export function initScheduler(settings?: Settings) {
  // If settings not provided, try to load from file
  if (!settings) {
    const settingsPath = path.resolve(process.cwd(), "../../storage/settings.json");
    if (fs.existsSync(settingsPath)) {
      try {
        settings = JSON.parse(fs.readFileSync(settingsPath, "utf-8"));
      } catch (e) {
        console.error("Failed to parse settings.json", e);
      }
    }
  }

  // Stop existing task if any
  if (currentTask) {
    currentTask.stop();
    currentTask = null;
  }

  if (!settings || !settings.enabled) {
    console.log("Scheduler is disabled or no settings found.");
    return;
  }

  const [hour, minute] = settings.emailTime.split(":");
  if (!hour || !minute) {
    console.error("Invalid email time format");
    return;
  }

  const cronExpression = `${minute} ${hour} * * *`;
  
  currentTask = cron.schedule(cronExpression, async () => {
    await sendDailyReport(settings);
  }, {
    timezone: settings.timeZone || "UTC"
  });

  console.log(`Scheduler initialized to run at ${settings.emailTime} ${settings.timeZone || "UTC"}`);
}

async function sendDailyReport(settings: Settings) {
  try {
    const dateString = new Date().toISOString().split('T')[0];
    const fileName = `Leads_${dateString}.xlsx`;
    const storageDir = path.resolve(process.cwd(), "../../storage/leads");
    const filePath = path.join(storageDir, fileName);

    if (!fs.existsSync(filePath)) {
      console.log("No leads file found for today. Skipping daily report.");
      return;
    }

    if (!config.smtp.host || !config.smtp.user || !config.smtp.pass) {
      console.error("SMTP config missing. Cannot send daily report.");
      return;
    }

    const transporter = nodemailer.createTransport({
      host: config.smtp.host,
      port: config.smtp.port,
      secure: config.smtp.port === 465,
      auth: { user: config.smtp.user, pass: config.smtp.pass }
    });

    await transporter.sendMail({
      from: `"NexEra" <${config.smtp.user}>`,
      to: settings.recipientEmail,
      subject: `Website Leads Report - ${dateString}`,
      text: [
        `Good day,`,
        ``,
        `Please find attached today's website enquiry report.`,
        ``,
        `Summary:`,
        `- Report Date: ${dateString}`,
        `- Generated Automatically`
      ].join("\n"),
      attachments: [{
        filename: fileName,
        path: filePath
      }]
    });
    
    console.log(`Daily report sent successfully to ${settings.recipientEmail}`);
  } catch (error) {
    console.error("Failed to send daily report", error);
  }
}
