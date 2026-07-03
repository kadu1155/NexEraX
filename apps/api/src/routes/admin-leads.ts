import { Router } from "express";
import fs from "fs";
import path from "path";
import ExcelJS from "exceljs";
import { requireAuth } from "../middleware/auth.js";

export const adminLeadsRouter = Router();
const storageDir = path.resolve(process.cwd(), "../../storage/leads");

// List files
adminLeadsRouter.get("/files", requireAuth, async (_req, res) => {
  if (!fs.existsSync(storageDir)) {
    return res.json([]);
  }

  const files = fs.readdirSync(storageDir).filter(f => f.endsWith(".xlsx"));
  const filesData = [];

  for (const file of files) {
    const filePath = path.join(storageDir, file);
    const stats = fs.statSync(filePath);
    
    // Quick parse to get row count without loading entire file if it's large, but exceljs needs to load it
    // For small files, it's fast enough
    let rowCount = 0;
    try {
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.readFile(filePath);
      const worksheet = workbook.getWorksheet(1);
      if (worksheet) {
        rowCount = Math.max(0, worksheet.rowCount - 1); // exclude header
      }
    } catch (e) {
      console.error(`Error reading row count for ${file}`, e);
    }

    filesData.push({
      fileName: file,
      createdAt: stats.birthtime,
      size: stats.size,
      entries: rowCount
    });
  }

  filesData.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  res.json(filesData);
});

// Download file
adminLeadsRouter.get("/files/:filename/download", requireAuth, (req, res) => {
  const filename = req.params.filename as string;
  // Basic sanitize to prevent directory traversal
  const safeName = path.basename(filename);
  const filePath = path.join(storageDir, safeName);
  
  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).json({ message: "File not found" });
  }
});

// Delete file
adminLeadsRouter.delete("/files/:filename", requireAuth, (req, res) => {
  const filename = req.params.filename as string;
  const safeName = path.basename(filename);
  const filePath = path.join(storageDir, safeName);
  
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    res.json({ message: "File deleted successfully" });
  } else {
    res.status(404).json({ message: "File not found" });
  }
});

// Preview file
adminLeadsRouter.get("/files/:filename/preview", requireAuth, async (req, res) => {
  const filename = req.params.filename as string;
  const safeName = path.basename(filename);
  const filePath = path.join(storageDir, safeName);
  
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "File not found" });
  }

  try {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet(1);
    
    if (!worksheet) {
      return res.json([]);
    }

    const rows: any[] = [];
    worksheet.eachRow((row, rowNumber) => {
      // row.values is an array where 1-based index is used
      if (rowNumber === 1) return; // skip header
      const values = row.values as any[];
      rows.push({
        date: values[1],
        time: values[2],
        name: values[3],
        email: values[4],
        phone: values[5],
        company: values[6],
        projectType: values[7],
        budget: values[8],
        message: values[9]
      });
    });

    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Failed to read file for preview" });
  }
});
