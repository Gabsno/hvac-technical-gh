import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "default" | "light";
  showWordmark?: boolean;
};

export function Logo({
  className,
  variant = "default",
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
          "relative inline-block h-10 sm:h-11 w-[150px] sm:w-[170px]",
          isLight && "[filter:brightness(0)_invert(1)]",
        )}
      >
        <Image
          src="/brand/logo.jpeg"
          alt="HVAC Technical"
          fill
          className="object-contain object-left"
          priority
        />
      </span>
    </Link>
  );
}
