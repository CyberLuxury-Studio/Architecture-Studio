"use client";

import { useState } from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";

export function WaitlistInput() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'System rejection.');
      }

      setStatus("success");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 w-full p-4 border border-primary/40 bg-primary/10 rounded-sm text-primary font-label text-sm uppercase shadow-[0_0_15px_rgba(0,243,255,0.2)]">
        <CheckCircle className="w-5 h-5 shrink-0" />
        Access Granted. Awaiting Protocol.
      </div>
    );
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col md:flex-row gap-4 p-2 bg-surface/90 backdrop-blur-xl border ${status === 'error' ? 'border-error' : 'border-white/10'} rounded border-white/5 shadow-xl items-center relative group w-full`}
      >
        <div className={`absolute -inset-1 bg-gradient-to-r ${status === 'error' ? 'from-error/20' : 'from-primary/20'} to-transparent blur opacity-0 group-focus-within:opacity-100 transition duration-500 rounded`}></div>

        <div className={`relative flex items-center gap-3 w-full px-4 border-b md:border-b-0 md:border-r ${status === 'error' ? 'border-error/40' : 'border-outline-variant/40'} pb-2 md:pb-0 h-12 focus-within:${status === 'error' ? 'border-error' : 'border-primary/80'} transition-colors bg-transparent z-10`}>
          <span className={`${status === 'error' ? 'text-error' : 'text-primary'} font-[family-name:var(--font-jetbrains-mono)] text-lg`}>&gt;</span>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            required
            disabled={status === "loading"}
            placeholder="enter your email_"
            className="w-full bg-transparent border-none text-on-surface font-[family-name:var(--font-jetbrains-mono)] placeholder:text-on-surface-variant/50 focus:ring-0 px-0 outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className={`relative z-10 w-full md:w-auto ${status === 'error' ? 'bg-error text-on-error hover:bg-error-container' : 'bg-primary text-on-primary-fixed hover:bg-primary-container'} font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-widest font-bold py-3 md:py-0 h-12 px-8 rounded-sm transition-colors flex-shrink-0 flex items-center justify-center disabled:opacity-50`}
        >
          {status === "loading" ? "UPLOADING..." : "EXECUTE"}
        </button>
      </form>
      {status === "error" && (
        <div className="mt-3 flex items-center gap-2 text-[10px] font-[family-name:var(--font-jetbrains-mono)] text-error uppercase tracking-widest">
          <AlertTriangle className="w-3 h-3" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
}
