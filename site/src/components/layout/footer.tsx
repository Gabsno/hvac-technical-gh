import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { Logo } from "../ui/logo";
import { Container } from "../ui/container";
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-darker text-white/85">
      <Container className="pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-7 max-w-sm text-[0.92rem] text-white/70 leading-relaxed">
              {site.description}
            </p>
            <div className="mt-8 space-y-3 text-[0.88rem]">
              <Row icon={MapPin}>
                {site.address.line1}, {site.address.line2}<br />
                {site.address.city}, {site.address.country}
              </Row>
              <Row icon={Phone} href={`tel:${site.phones[0]}`}>
                {site.phones[0]}
              </Row>
              <Row icon={Phone} href={`tel:${site.phones[1]}`}>
                {site.phones[1]}
              </Row>
              <Row icon={Mail} href={`mailto:${site.email}`}>
                {site.email}
              </Row>
              <Row icon={MessageCircle} href={site.whatsappLink} external>
                WhatsApp
              </Row>
            </div>
          </div>

          <FooterCol title="Services">
            {services.slice(0, 6).map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>{s.title}</FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Industries">
            {industries.map((i) => (
              <FooterLink key={i.slug} href={`/industries/${i.slug}`}>{i.title}</FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Company">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/projects">Projects</FooterLink>
            <FooterLink href="/brands">Brands</FooterLink>
            <FooterLink href="/insights">Insights</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterCol>

          <FooterCol title="Get started">
            <FooterLink href="/quote">Request a quote</FooterLink>
            <FooterLink href={`tel:${site.phones[0]}`}>{site.phones[0]}</FooterLink>
            <FooterLink href={site.whatsappLink} external>WhatsApp us</FooterLink>
          </FooterCol>
        </div>

        <div className="mt-16 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[0.76rem] text-white/55">
          <p>© {new Date().getFullYear()} {site.fullName}. Indigenous Ghanaian engineering since {site.foundedYear}.</p>
          <p className="font-mono">Accra · Tema · Greater Accra Region</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-orange mb-4">
        {title}
      </p>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <li>
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[0.85rem] text-white/70 hover:text-orange transition-colors"
        >
          {children}
          <ArrowUpRight size={12} aria-hidden className="opacity-50" />
        </a>
      ) : (
        <Link
          href={href}
          className="text-[0.85rem] text-white/70 hover:text-orange transition-colors"
        >
          {children}
        </Link>
      )}
    </li>
  );
}

function Row({ icon: Icon, href, external, children }: { icon: React.ComponentType<{ size?: number; className?: string }>; href?: string; external?: boolean; children: React.ReactNode }) {
  const content = (
    <>
      <Icon size={14} aria-hidden className="text-orange shrink-0 mt-0.5" />
      <span className="text-white/80">{children}</span>
    </>
  );
  const cls = "flex items-start gap-3 leading-snug";
  if (href) {
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={`${cls} hover:text-orange transition-colors`}>
        {content}
      </a>
    );
  }
  return <div className={cls}>{content}</div>;
}
