"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Logo } from "../ui/logo";
import { Button } from "../ui/button";
import { ThemeToggle } from "../ui/theme-toggle";
import { Container } from "../ui/container";
import { cn } from "@/lib/utils";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";

const primary = [
  { label: "Services", href: "/services", mega: "services" as const },
  { label: "Industries", href: "/industries", mega: "industries" as const },
  { label: "Projects", href: "/projects" },
  { label: "Brands", href: "/brands" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<null | "services" | "industries">(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 bg-bg",
        scrolled
          ? "border-b border-line shadow-[0_1px_0_rgba(15,44,74,0.04)]"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex items-center justify-between gap-6 py-3.5 lg:py-4">
        <Logo />
        <nav aria-label="Primary" className="hidden lg:flex items-center">
          {primary.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.mega && setOpenMega(item.mega)}
              onMouseLeave={() => item.mega && setOpenMega(null)}
            >
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 px-3.5 py-2 text-[0.88rem] font-medium text-ink-soft hover:text-navy transition-colors"
              >
                {item.label}
                {item.mega && <ChevronDown size={13} aria-hidden className="opacity-60" />}
              </Link>
              {item.mega && openMega === item.mega && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 z-50">
                  <div className="w-[720px] rounded-lg border border-line bg-bg-elevated shadow-2xl overflow-hidden grid grid-cols-2">
                    {(item.mega === "services" ? services : industries).map((m) => (
                      <Link
                        key={m.slug}
                        href={`/${item.mega}/${m.slug}`}
                        className="group p-5 border-b border-r border-line last:border-r-0 hover:bg-bg-subtle transition-colors"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="text-[0.92rem] font-semibold text-ink">{m.title}</div>
                          <ArrowRight size={14} className="text-subtle group-hover:text-orange group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" aria-hidden />
                        </div>
                        <div className="text-[0.78rem] text-muted mt-1.5 line-clamp-2 leading-relaxed">
                          {m.short}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <Button href="/quote" size="sm">
            Request a quote
            <ArrowRight size={14} aria-hidden />
          </Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="inline-grid h-10 w-10 place-items-center rounded-md border border-line"
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-line bg-bg">
          <Container className="py-6 flex flex-col gap-0 max-h-[calc(100vh-130px)] overflow-y-auto">
            {primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-4 text-base font-medium border-b border-line"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/quote" className="mt-6 self-start">
              Request a quote
              <ArrowRight size={14} aria-hidden />
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
