"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { format } from "date-fns";
import { Trash2, Download, Eye, Search } from "lucide-react";

interface LeadFile {
  fileName: string;
  createdAt: string;
  size: number;
  entries: number;
}

export default function AdminLeadsPage() {
  const [files, setFiles] = useState<LeadFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [previewData, setPreviewData] = useState<any[] | null>(null);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/leads/files", {
        headers: { Authorization: `Bearer ${localStorage.getItem("nexera-token")}` }
      });
      if (res.ok) {
        setFiles(await res.json());
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (filename: string) => {
    if (!confirm(`Are you sure you want to delete ${filename}?`)) return;
    try {
      const res = await fetch(`http://localhost:5000/api/admin/leads/files/${filename}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("nexera-token")}` }
      });
      if (res.ok) {
        fetchFiles();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handlePreview = async (filename: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/admin/leads/files/${filename}/preview`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("nexera-token")}` }
      });
      if (res.ok) {
        setPreviewData(await res.json());
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDownload = (filename: string) => {
    const url = `http://localhost:5000/api/admin/leads/files/${filename}/download`;
    const token = localStorage.getItem("nexera-token");
    
    fetch(url, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.blob())
      .then((blob) => {
        const a = document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = filename;
        a.click();
      });
  };

  const filteredFiles = files.filter((f) => f.fileName.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-section pt-28">
        <section className="container py-10">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h1 className="text-4xl font-black">Lead Management</h1>
              <p className="mt-2 text-slate-600">Manage Excel lead workbooks</p>
            </div>
          </div>

          <div className="mb-6 flex items-center gap-4 rounded-xl border border-brand-border bg-white p-2 shadow-soft md:w-96">
            <Search className="ml-2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by date (e.g. 2026-07-02)"
              className="w-full bg-transparent p-2 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="rounded-xl border border-brand-border bg-white shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-xs uppercase text-slate-700">
                  <tr>
                    <th className="px-6 py-4">File Name</th>
                    <th className="px-6 py-4">Created Date</th>
                    <th className="px-6 py-4">Entries</th>
                    <th className="px-6 py-4">Size (KB)</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={5} className="p-6 text-center">Loading...</td>
                    </tr>
                  ) : filteredFiles.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-6 text-center">No leads found.</td>
                    </tr>
                  ) : (
                    filteredFiles.map((file) => (
                      <tr key={file.fileName} className="border-b border-brand-border">
                        <td className="px-6 py-4 font-bold text-slate-900">{file.fileName}</td>
                        <td className="px-6 py-4">{format(new Date(file.createdAt), "PPp")}</td>
                        <td className="px-6 py-4">{file.entries}</td>
                        <td className="px-6 py-4">{(file.size / 1024).toFixed(2)}</td>
                        <td className="px-6 py-4 text-right">
                          <button onClick={() => handlePreview(file.fileName)} className="mr-3 text-primary hover:underline" title="Preview">
                            <Eye className="inline h-4 w-4" />
                          </button>
                          <button onClick={() => handleDownload(file.fileName)} className="mr-3 text-green-600 hover:underline" title="Download">
                            <Download className="inline h-4 w-4" />
                          </button>
                          <button onClick={() => handleDelete(file.fileName)} className="text-red-600 hover:underline" title="Delete">
                            <Trash2 className="inline h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {previewData && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
              <div className="max-h-[80vh] w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-xl">
                <div className="flex items-center justify-between border-b p-4">
                  <h3 className="text-xl font-bold">Preview Data</h3>
                  <button onClick={() => setPreviewData(null)} className="text-slate-500 hover:text-black">Close</button>
                </div>
                <div className="overflow-auto p-4 max-h-[70vh]">
                  <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 text-xs uppercase text-slate-700">
                      <tr>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Phone</th>
                        <th className="px-4 py-2">Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      {previewData.map((row, i) => (
                        <tr key={i} className="border-b">
                          <td className="px-4 py-2">{row.name}</td>
                          <td className="px-4 py-2">{row.email}</td>
                          <td className="px-4 py-2">{row.phone}</td>
                          <td className="px-4 py-2 max-w-xs truncate">{row.message}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
