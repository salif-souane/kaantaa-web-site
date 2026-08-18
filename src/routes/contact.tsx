import { createFileRoute } from "@tanstack/react-router";
import { Clock, LogIn, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { site, whatsappLink } from "@/lib/site";

const title = "Contact — Installation GPS à Ziguinchor | KAANTAA";
const description =
  "Contactez ENTREPRISE KAANTAA : Quartier Kenya près de la caserne à Ziguinchor, WhatsApp, email contact@kaantaa.sn et formulaire de demande d'installation GPS.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="gps-grid border-b border-ink-border bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Contact
            </p>
            <h1 className="mt-3 text-3xl font-extrabold text-ink-foreground sm:text-5xl">
              Parlons de votre véhicule
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Écrivez-nous, appelez-nous ou passez à l'atelier : nous répondons sous 24 heures
              ouvrées.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <Reveal className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <h2 className="font-display text-lg font-bold">Nos coordonnées</h2>
              <ul className="mt-5 space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold">Atelier & bureau</span>
                    <span className="text-muted-foreground">{site.address}</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold">Téléphone / WhatsApp</span>
                    <a
                      href={`tel:+${site.phoneRaw}`}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {site.phoneDisplay}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold">Email</span>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {site.email}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold">Horaires</span>
                    <span className="text-muted-foreground">
                      Lundi – samedi, 8h30 – 19h00 (GMT)
                    </span>
                  </span>
                </li>
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="flex-1 bg-success text-success-foreground hover:bg-success/90">
                  <a href={whatsappLink()} target="_blank" rel="noreferrer noopener">
                    <MessageCircle aria-hidden="true" />
                    WhatsApp direct
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <a href={site.appUrl} target="_blank" rel="noreferrer noopener">
                    <LogIn aria-hidden="true" />
                    Se connecter
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={90} className="rounded-2xl border border-ink-border bg-ink p-7">
              <h2 className="font-display text-lg font-bold text-ink-foreground">
                Déjà client KAANTAA ?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Connectez-vous à votre espace pour suivre votre véhicule, consulter l'historique
                des trajets et gérer vos alertes.
              </p>
            </Reveal>
          </div>

          <Reveal
            delay={120}
            className="rounded-2xl border border-border bg-card p-7 shadow-card sm:p-9"
          >
            <h2 className="font-display text-lg font-bold">Envoyer un message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Indiquez le type de véhicule et votre localité pour une réponse plus précise.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
