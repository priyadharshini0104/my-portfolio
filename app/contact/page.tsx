"use client";

import { useState } from "react";
import Navbar from "../Components/Navbar";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");
    setIsError(false);
    setPreviewUrl(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        const msg = data?.message ?? "Email sent successfully!";
        setStatus(msg);
        setIsError(false);
        setForm({ name: "", email: "", message: "" });
        setPreviewUrl(data?.previewUrl ?? null);
      } else {
        const errMsg = data?.error ?? data?.message ?? "Failed to send email.";
        setStatus(errMsg);
        setIsError(true);
      }
    } catch (err: any) {
      console.error("Contact submit error", err);
      const message = err?.message ?? "Error sending email.";
      setStatus(message);
      setIsError(true);
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 10000);
    }
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-6 md:px-24 py-16">
        <h1 className="text-4xl text-blue-400 mb-12 text-center">Contact Me</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-slate-800 p-8 rounded-2xl flex flex-col gap-4 shadow-lg"
        >
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-3 rounded bg-slate-700 text-white w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-3 rounded bg-slate-700 text-white w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Message"
            value={form.message}
            required
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={6}
            className="p-3 rounded bg-slate-700 text-white w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 px-6 py-3 rounded hover:bg-blue-600 transition-all duration-300 font-semibold text-white disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send"}
          </button>
          <p className={`text-center mt-2 ${isError ? "text-red-400" : "text-green-400"}`}>
            {status}
            {previewUrl && (
              <><br /><a href={previewUrl} target="_blank" rel="noreferrer" className="underline">View preview</a></>
            )}
          </p>
        </form>
      </section>
    </>
  );
}
