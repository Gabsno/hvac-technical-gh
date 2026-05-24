import { Phone, MessageCircle, Clock } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "../ui/container";

export function UtilityBar() {
  return (
    <div className="hidden md:block bg-navy-darker text-white/85 text-[0.74rem]">
      <Container className="flex items-center justify-between gap-4 py-2.5">
        <span className="inline-flex items-center gap-2">
          <Clock size={12} aria-hidden className="text-orange" /> {site.hours}
        </span>
        <div className="flex items-center gap-5">
          <a
            href={`tel:${site.phones[0]}`}
            className="inline-flex items-center gap-1.5 hover:text-orange transition-colors"
          >
            <Phone size={12} aria-hidden /> {site.phones[0]}
          </a>
          <span className="opacity-30">·</span>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-orange transition-colors"
          >
            <MessageCircle size={12} aria-hidden /> WhatsApp
          </a>
          <span className="opacity-30">·</span>
          <a
            href={`mailto:${site.email}`}
            className="hover:text-orange transition-colors"
          >
            {site.email}
          </a>
        </div>
      </Container>
    </div>
  );
}
