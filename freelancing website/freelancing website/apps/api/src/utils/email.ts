import nodemailer from "nodemailer";
import { config } from "../config.js";

type LeadEmail = {
  name: string;
  phone: string;
  email: string;
  businessName?: string | null;
  budget?: string | null;
  message: string;
  projectType?: string | null;
  ip?: string | null;
  browser?: string | null;
  location?: string | null;
  createdAt: Date;
};

export async function sendLeadEmail(lead: LeadEmail, attachmentPath?: string, attachmentName?: string) {
  if (!config.smtp.host || !config.smtp.user || !config.smtp.pass) {
    return "skipped" as const;
  }

  const transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.port === 465,
    auth: { user: config.smtp.user, pass: config.smtp.pass }
  });

  const timeString = lead.createdAt.toLocaleTimeString('en-US', { hour12: false });
  const dateString = lead.createdAt.toISOString().split('T')[0];

  const attachments = [];
  if (attachmentPath && attachmentName) {
    attachments.push({
      filename: attachmentName,
      path: attachmentPath
    });
  }

  await transporter.sendMail({
    from: `"NexEra" <${config.smtp.user}>`,
    to: "kk25technicalteam@gmail.com",
    subject: "New Website Development Lead",
    text: [
      `A new enquiry has been received from the website.`,
      ``,
      `Date: ${dateString}`,
      `Time: ${timeString}`,
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      `Phone: ${lead.phone}`,
      `Company: ${lead.businessName ?? ""}`,
      `Project Type: ${lead.projectType ?? ""}`,
      `Budget: ${lead.budget ?? ""}`,
      `Message: ${lead.message}`,
    ].join("\n"),
    attachments
  });

  return "sent" as const;
}
