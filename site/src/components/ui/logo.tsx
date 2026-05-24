import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "default" | "light";
  size?: "default" | "lg";
};

export function Logo({
  className,
  variant = "default",
  size = "default",
}: Props) {
  const isLight = variant === "light";
  return (
    <Link
      href="/"
      aria-label="HVAC Technical — Home"
      className={cn("group inline-flex items-center", className)}
    >
      <span
        className={cn(
          "relative inline-block",
          size === "lg"
            ? "h-14 w-[210px] sm:h-16 sm:w-[240px]"
            : "h-12 w-[180px] sm:h-14 sm:w-[210px]",
          // In dark mode the navy ink disappears on dark navy bg — invert to white.
          // In light variant (e.g. dark footer), always invert to pure white.
          isLight
            ? "[filter:brightness(0)_invert(1)]"
            : "dark:[filter:brightness(0)_invert(1)]",
        )}
      >
        <Image
          src="/brand/logo.png"
          alt="HVAC Technical"
          fill
          className="object-contain object-left"
          priority
          sizes="240px"
        />
      </span>
    </Link>
  );
}
