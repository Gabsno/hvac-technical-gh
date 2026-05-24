import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "narrow" | "wide";
  as?: "div" | "section" | "article" | "header" | "footer";
};

export function Container({
  className,
  size = "default",
  as: Tag = "div",
  ...props
}: Props) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        size === "default" && "max-w-7xl",
        size === "narrow" && "max-w-4xl",
        size === "wide" && "max-w-[1440px]",
        className,
      )}
      {...props}
    />
  );
}
