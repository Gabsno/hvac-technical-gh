import Image from "next/image";
import { Container } from "../ui/container";
import { imagery } from "@/lib/imagery";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  image?: string;
};

export function PageHeader({ eyebrow, title, lede, image = imagery.heroBuilding }: Props) {
  return (
    <header className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden bg-navy-darker text-white">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(8,24,43,0.92) 0%, rgba(8,24,43,0.78) 55%, rgba(8,24,43,0.55) 100%)",
          }}
        />
      </div>
      <Container className="relative max-w-4xl">
        <p className="eyebrow mb-5 text-orange">{eyebrow}</p>
        <h1 className="font-display text-[clamp(2.2rem,5.2vw,4.2rem)] leading-[1.02] text-balance">
          {title}
        </h1>
        {lede && (
          <p className="mt-7 text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl text-pretty">
            {lede}
          </p>
        )}
      </Container>
    </header>
  );
}
