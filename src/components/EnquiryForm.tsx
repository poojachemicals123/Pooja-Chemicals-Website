"use client";

import { useState } from "react";
import { ArrowRight, CheckIcon } from "./Icons";

type Kind = "enquiry" | "career";
type Status = "idle" | "submitting" | "success" | "error";

const field =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-slate-400 focus:border-cta focus:ring-2 focus:ring-cta/20";
const labelCls = "mb-1.5 block text-sm font-medium text-navy";

export function EnquiryForm({ kind = "enquiry" }: { kind?: Kind }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    setFieldErrors({});

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind }),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setFieldErrors(json.fields ?? {});
        setError(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-white p-10 text-center shadow-soft">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-cta/10 text-cta">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="text-xl font-semibold text-navy">Thank you — message sent.</h3>
        <p className="max-w-sm text-sm text-slate-soft">
          We&apos;ve received your {kind === "career" ? "application" : "enquiry"} and will get back
          to you shortly. A confirmation is on its way to your inbox.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="cursor-pointer text-sm font-semibold text-cta hover:text-cta-600"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8"
    >
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelCls}>First name</label>
          <input id="firstName" name="firstName" required className={field} placeholder="John" />
          {fieldErrors.firstName && <p className="mt-1 text-xs text-red-600">{fieldErrors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className={labelCls}>Last name</label>
          <input id="lastName" name="lastName" className={field} placeholder="Doe" />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Email</label>
          <input id="email" name="email" type="email" required className={field} placeholder="you@company.com" />
          {fieldErrors.email && <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>Phone</label>
          <input id="phone" name="phone" type="tel" required className={field} placeholder="+91 ..." />
          {fieldErrors.phone && <p className="mt-1 text-xs text-red-600">{fieldErrors.phone}</p>}
        </div>

        {kind === "career" ? (
          <div className="sm:col-span-2">
            <label htmlFor="role" className={labelCls}>Role you&apos;re applying for</label>
            <input id="role" name="role" className={field} placeholder="e.g. Sales Engineer, Lab Chemist" />
          </div>
        ) : (
          <div className="sm:col-span-2">
            <label htmlFor="subject" className={labelCls}>Subject</label>
            <input id="subject" name="subject" className={field} placeholder="Cooling tower treatment enquiry" />
          </div>
        )}

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>
            {kind === "career" ? "Tell us about yourself" : "How can we help?"}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`${field} resize-y`}
            placeholder={
              kind === "career"
                ? "Your experience, qualifications and why you'd like to join us."
                : "Describe your system, water source and the challenge you're facing."
            }
          />
          {fieldErrors.message && <p className="mt-1 text-xs text-red-600">{fieldErrors.message}</p>}
        </div>
      </div>

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cta px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-cta-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : kind === "career" ? "Submit application" : "Send message"}
        {status !== "submitting" && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
      </button>
    </form>
  );
}
