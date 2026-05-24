import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <Container className="max-w-xl">
        <p className="eyebrow mb-5">Error 404</p>
        <h1 className="font-display text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.05] mb-6">
          Page not found.
        </h1>
        <p className="text-muted text-lg mb-10">
          The page you are looking for is not here. Try one of these.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/services" variant="outline">Services</Button>
          <Button href="/contact" variant="ghost">Contact us</Button>
        </div>
      </Container>
    </section>
  );
}
