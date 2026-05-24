"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const steps = [
  { id: "use", label: "Type of space" },
  { id: "size", label: "Size & rooms" },
  { id: "budget", label: "Budget" },
  { id: "timing", label: "Timing" },
  { id: "contact", label: "Contact" },
] as const;

const useOptions = [
  "Home / Apartment",
  "Office",
  "Restaurant / Hotel",
  "Retail / Mall",
  "Hospital / Lab",
  "Factory / Industrial",
];

const sizeOptions = ["< 50 m²", "50–150 m²", "150–500 m²", "500–2000 m²", "> 2000 m²"];

const budgetOptions = [
  "Under GHC 20k",
  "GHC 20–80k",
  "GHC 80–250k",
  "GHC 250k+",
  "Not sure",
];

const timingOptions = ["This week", "This month", "1–3 months", "Just exploring"];

type FormState = {
  use: string;
  size: string;
  budget: string;
  timing: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
};

const initial: FormState = {
  use: "",
  size: "",
  budget: "",
  timing: "",
  name: "",
  phone: "",
  email: "",
  notes: "",
};

export function QuoteFlow() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(initial);
  const [done, setDone] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const set = (k: keyof FormState, v: string) => setData((d) => ({ ...d, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) {
    return (
      <div className="max-w-2xl mx-auto rounded-3xl border border-divider bg-surface p-10 text-center">
        <CheckCircle2 className="mx-auto text-signal" size={48} aria-hidden />
        <h2 className="font-serif text-3xl mt-6 mb-4">Thanks, {data.name || "we&apos;ve got you"}.</h2>
        <p className="text-muted leading-relaxed mb-8">
          We&apos;ll be in touch within one business day to schedule a site visit.
          For urgent jobs, WhatsApp is the fastest route.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="outline">Back to home</Button>
          <Button
            href="https://wa.me/233599333103"
            external
          >
            Message on WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  const canAdvance = () => {
    switch (step) {
      case 0: return !!data.use;
      case 1: return !!data.size;
      case 2: return !!data.budget;
      case 3: return !!data.timing;
      case 4: return !!data.name && !!data.phone;
      default: return false;
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress */}
      <div className="mb-12 flex items-center gap-3">
        {steps.map((s, i) => (
          <div key={s.id} className="flex items-center gap-3 flex-1">
            <div
              className={cn(
                "h-2 flex-1 rounded-full transition-colors duration-500",
                i <= step ? "bg-signal" : "bg-divider",
              )}
            />
          </div>
        ))}
      </div>
      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-muted mb-3">
        Step {step + 1} of {steps.length}
      </p>

      <form onSubmit={submit} className="rounded-3xl border border-divider bg-surface p-8 sm:p-12">
        {step === 0 && (
          <Step title="What kind of space?">
            <Chips options={useOptions} value={data.use} onChange={(v) => set("use", v)} />
          </Step>
        )}
        {step === 1 && (
          <Step title="Roughly, how big?">
            <Chips options={sizeOptions} value={data.size} onChange={(v) => set("size", v)} />
          </Step>
        )}
        {step === 2 && (
          <Step title="Budget band?">
            <Chips options={budgetOptions} value={data.budget} onChange={(v) => set("budget", v)} />
          </Step>
        )}
        {step === 3 && (
          <Step title="When do you want it done?">
            <Chips options={timingOptions} value={data.timing} onChange={(v) => set("timing", v)} />
          </Step>
        )}
        {step === 4 && (
          <Step title="How do we reach you?">
            <div className="grid gap-5">
              <Input label="Your name" value={data.name} onChange={(v) => set("name", v)} />
              <Input label="Phone / WhatsApp" type="tel" value={data.phone} onChange={(v) => set("phone", v)} />
              <Input label="Email (optional)" type="email" value={data.email} onChange={(v) => set("email", v)} />
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted mb-2">
                  Anything else?
                </label>
                <textarea
                  rows={4}
                  value={data.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  className="w-full rounded-xl border border-divider bg-background px-4 py-3 text-sm focus:border-teal focus:outline-none transition-colors"
                  placeholder="Existing units? Particular issues? Access notes?"
                />
              </div>
            </div>
          </Step>
        )}

        <div className="mt-10 flex items-center justify-between">
          <button
            type="button"
            onClick={back}
            disabled={step === 0}
            className={cn(
              "inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed",
            )}
          >
            <ArrowLeft size={15} aria-hidden /> Back
          </button>
          {step < steps.length - 1 ? (
            <Button
              onClick={canAdvance() ? next : undefined}
              className={cn(!canAdvance() && "opacity-50 cursor-not-allowed")}
            >
              Continue <ArrowRight size={16} aria-hidden />
            </Button>
          ) : (
            <Button type="submit" className={cn(!canAdvance() && "opacity-50 cursor-not-allowed")}>
              Send request <ArrowRight size={16} aria-hidden />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

function Step({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-serif text-3xl sm:text-4xl mb-8 leading-tight">{title}</h2>
      {children}
    </div>
  );
}

function Chips({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          className={cn(
            "rounded-2xl border px-5 py-4 text-left transition-all",
            value === o
              ? "border-signal bg-signal/10 text-foreground"
              : "border-divider hover:border-teal text-foreground/85",
          )}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-divider bg-background px-4 py-3 text-sm focus:border-teal focus:outline-none transition-colors"
      />
    </div>
  );
}
