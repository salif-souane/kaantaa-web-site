import { MessageCircle } from "lucide-react";

import { whatsappLink } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer noopener"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-success px-4 py-3 text-sm font-semibold text-success-foreground shadow-lg transition-transform duration-300 hover:scale-105"
      aria-label="Discuter sur WhatsApp"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
