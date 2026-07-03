import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { validate } from "../middleware/validate.js";
import { leadSchema } from "../schemas.js";
import { sendLeadEmail } from "../utils/email.js";
import { toCsv } from "../utils/csv.js";
import ExcelJS from "exceljs";
import fs from "fs";
import path from "path";

export const leadRouter = Router();

leadRouter.post("/", validate(leadSchema), async (req, res) => {
  const data = req.body;
  const createdAt = new Date();
  
  const dateString = createdAt.toISOString().split('T')[0];
  const timeString = createdAt.toLocaleTimeString('en-US', { hour12: false });

  // 1. Storage setup
  const storageDir = path.resolve(process.cwd(), "../../storage/leads");
  if (!fs.existsSync(storageDir)) {
    fs.mkdirSync(storageDir, { recursive: true });
  }

  const fileName = `Leads_${dateString}.xlsx`;
  const filePath = path.join(storageDir, fileName);

  let workbook = new ExcelJS.Workbook();
  let worksheet;

  try {
    if (fs.existsSync(filePath)) {
      await workbook.xlsx.readFile(filePath);
      worksheet = workbook.getWorksheet(1);
    } else {
      worksheet = workbook.addWorksheet("Leads");
      worksheet.columns = [
        { header: "Date", key: "date", width: 15 },
        { header: "Time", key: "time", width: 10 },
        { header: "Name", key: "name", width: 25 },
        { header: "Email", key: "email", width: 30 },
        { header: "Phone", key: "phone", width: 15 },
        { header: "Company", key: "company", width: 25 },
        { header: "Project Type", key: "projectType", width: 20 },
        { header: "Budget", key: "budget", width: 15 },
        { header: "Message", key: "message", width: 50 },
      ];
    }

    if (worksheet) {
      worksheet.addRow({
        date: dateString,
        time: timeString,
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.businessName ?? "",
        projectType: data.projectType ?? "",
        budget: data.budget ?? "",
        message: data.message
      });
      await workbook.xlsx.writeFile(filePath);
    }
  } catch (error) {
    console.error("Failed to write to excel file:", error);
    return res.status(500).json({ message: "Server error while saving enquiry" });
  }

  // 2. Email sending
  let emailStatus = "pending";
  try {
    emailStatus = await sendLeadEmail({
      ...data,
      createdAt
    }, filePath, fileName);
  } catch (error) {
    console.error("Failed to send lead email:", error);
    emailStatus = "failed";
  }

  return res.status(201).json({ message: "Lead saved", emailStatus });
});

leadRouter.get("/", requireAuth, async (_req, res) => {
  res.json([]);
});

leadRouter.get("/export.csv", requireAuth, async (_req, res) => {
  res.header("Content-Type", "text/csv");
  res.attachment("nexera-leads.csv");
  res.send(toCsv([]));
});

leadRouter.delete("/:id", requireAuth, async (req, res) => {
  res.json({ message: "Lead deleted" });
});
