import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "outline-light";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-200 focus-visible:outline-none disabled:opacity-40 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-orange text-white hover:bg-orange-deep",
  secondary:
    "bg-navy text-white hover:bg-navy-deep",
  ghost:
    "bg-transparent text-ink hover:bg-bg-subtle",
  outline:
    "border border-line-strong bg-transparent text-ink hover:border-navy hover:text-navy",
  "outline-light":
    "border border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/60",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.82rem]",
  md: "h-11 px-5 text-[0.92rem]",
  lg: "h-14 px-7 text-[0.95rem]",
};

type Props = {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  ariaLabel?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  className,
  type = "button",
  onClick,
  ariaLabel,
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
