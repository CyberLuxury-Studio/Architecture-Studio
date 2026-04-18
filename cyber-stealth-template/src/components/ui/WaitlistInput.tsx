"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export function WaitlistInput() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Mock API Call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1200);
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 w-full p-4 border border-primary/40 bg-primary/10 rounded-sm text-primary font-label text-sm uppercase">
        <CheckCircle className="w-5 h-5" />
        Access Granted. Awaiting Protocol.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-4 p-2 bg-surface/90 backdrop-blur-xl border border-white/10 rounded border-white/5 shadow-xl items-center relative group w-full"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent blur opacity-0 group-focus-within:opacity-100 transition duration-500 rounded"></div>

      <div className="relative flex items-center gap-3 w-full px-4 border-b md:border-b-0 md:border-r border-outline-variant/40 pb-2 md:pb-0 h-12 focus-within:border-primary/80 transition-colors bg-transparent z-10">
        <span className="text-primary font-label text-lg">&gt;</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "loading"}
          placeholder="enter your email_"
          className="w-full bg-transparent border-none text-on-surface font-[family-name:var(--font-jetbrains-mono)] placeholder:text-on-surface-variant/50 focus:ring-0 px-0 outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="relative z-10 w-full md:w-auto bg-primary text-on-primary-fixed font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest font-bold py-3 md:py-0 h-12 px-8 rounded-sm hover:bg-primary-container transition-colors flex-shrink-0 flex items-center justify-center disabled:opacity-50"
      >
        {status === "loading" ? "UPLOADING..." : "EXECUTE"}
      </button>
    </form>
  );
}
