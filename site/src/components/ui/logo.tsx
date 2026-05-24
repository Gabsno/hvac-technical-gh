import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "default" | "light";
  size?: "default" | "lg";
};

// Logo aspect ratio (trimmed PNG): 1205 × 385 ≈ 3.13 : 1
//   → for any given height H, width = H * 3.13

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
          "relative inline-block shrink-0",
          // Default = navbar use
          // mobile h-14 (56px) → w ~175px
          // desktop h-[72px] → w ~225px
          size === "lg"
            ? "h-16 w-[200px] sm:h-20 sm:w-[250px]"
            : "h-14 w-[175px] sm:h-[68px] sm:w-[213px]",
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
          sizes="250px"
        />
      </span>
    </Link>
  );
}
