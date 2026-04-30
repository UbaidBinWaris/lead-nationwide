"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MdSend, MdCheckCircle, MdErrorOutline } from "react-icons/md";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error: any) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage(error.message || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl bg-white p-8 shadow-xl shadow-navy-deep/5 md:p-12 lg:col-span-2"
    >
      <h3 className="text-2xl font-bold tracking-tight text-text-primary">Send us a message</h3>
      <p className="mt-2 text-sm text-text-secondary">
        Fill out the form below and our team will get back to you within 24 hours.
      </p>

      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-8 text-center"
        >
          <MdCheckCircle className="h-16 w-16 text-green-500" />
          <h4 className="mt-4 text-xl font-semibold text-green-800">Message Sent!</h4>
          <p className="mt-2 text-sm text-green-700">
            Thank you for reaching out. We will get back to you as soon as possible.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 rounded-full bg-green-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor="name" className="block text-sm font-medium text-text-primary">
              Full Name <span className="text-red-primary">*</span>
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-xl border border-border-light bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-blue-primary focus:ring-1 focus:ring-blue-primary"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="email" className="block text-sm font-medium text-text-primary">
              Email Address <span className="text-red-primary">*</span>
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-xl border border-border-light bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-blue-primary focus:ring-1 focus:ring-blue-primary"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="phone" className="block text-sm font-medium text-text-primary">
              Phone Number
            </label>
            <div className="mt-2">
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full rounded-xl border border-border-light bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-blue-primary focus:ring-1 focus:ring-blue-primary"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="company" className="block text-sm font-medium text-text-primary">
              Company
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="block w-full rounded-xl border border-border-light bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-blue-primary focus:ring-1 focus:ring-blue-primary"
                placeholder="Acme Corp"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-text-primary">
              Message <span className="text-red-primary">*</span>
            </label>
            <div className="mt-2">
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="block w-full resize-none rounded-xl border border-border-light bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-blue-primary focus:ring-1 focus:ring-blue-primary"
                placeholder="How can we help you?"
              />
            </div>
          </div>

          {status === "error" && (
            <div className="sm:col-span-2 flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
              <MdErrorOutline size={18} />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="sm:col-span-2 mt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-primary/20 transition-all hover:-translate-y-0.5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <MdSend size={18} />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
}
