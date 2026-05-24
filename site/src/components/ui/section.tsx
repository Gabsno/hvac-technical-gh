import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = Omit<React.HTMLAttributes<HTMLElement>, "title"> & {
  eyebrow?: string;
  title?: React.ReactNode;
  lede?: React.ReactNode;
  tone?: "default" | "navy" | "subtle";
  align?: "left" | "center";
  containerSize?: "default" | "narrow" | "wide";
};

export function Section({
  eyebrow,
  title,
  lede,
  tone = "default",
  align = "left",
  containerSize = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative py-20 sm:py-24 lg:py-28",
        tone === "navy" && "bg-navy-darker text-white",
        tone === "subtle" && "bg-bg-subtle",
        className,
      )}
      {...props}
    >
      <Container size={containerSize}>
        {(eyebrow || title || lede) && (
          <header
            className={cn(
              "mb-14 sm:mb-16 max-w-3xl",
              align === "center" && "mx-auto text-center",
            )}
          >
            {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
            {title && (
              <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.8rem)] text-balance">
                {title}
              </h2>
            )}
            {lede && (
              <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-2xl text-pretty">
                {lede}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
