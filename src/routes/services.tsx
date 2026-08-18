import { createFileRoute } from "@tanstack/react-router";
import { BellRing, History, MapPin, Megaphone, Monitor, Route as RouteIcon, ShieldCheck, Truck, Users } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { CtaBand, SectionHeading, ServiceCard } from "@/components/Sections";

const title = "Services — Tracking GPS, digitalisation et flotte | KAANTAA";
const description =
  "Tracking GPS en temps réel, création d'applications web et vidéos, gestion de flotte et partage de courses : découvrez les services d'ENTREPRISE KAANTAA à Ziguinchor.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const details = [
  {
    icon: ShieldCheck,
    title: "Tracking GPS",
    description:
      "Le cœur de notre métier : un boîtier discret installé sur votre moto ou votre voiture, relié à votre espace personnel.",
    items: [
      "Position en temps réel sur carte",
      "Historique détaillé des trajets",
      "Alerte de vibration à l'arrêt",
      "Alerte de débranchement du boîtier",
      "Alerte de déplacement illégal du véhicule",
    ],
  },
  {
    icon: Monitor,
    title: "Digitalisation",
    description:
      "Nous accompagnons les entreprises, garages et ONG de la région dans leur passage au numérique.",
    items: [
      "Création d'applications et de sites web",
      "Vidéos publicitaires et contenus visuels",
      "Conseil et formation numérique",
      "Accompagnement des ONG et projets sociaux",
    ],
  },
  {
    icon: Truck,
    title: "Flotte & Transport",
    description:
      "Des outils pour les propriétaires de plusieurs véhicules et les acteurs du transport local.",
    items: [
      "Tableau de bord multi-véhicules",
      "Partage et suivi des courses",
      "Suivi de la consommation et des trajets",
      "Création d'emplois pour les jeunes conducteurs",
    ],
  },
];

const steps = [
  {
    icon: Users,
    title: "1. Échange",
    text: "Vous nous décrivez votre véhicule et votre besoin sur WhatsApp ou par téléphone.",
  },
  {
    icon: MapPin,
    title: "2. Installation",
    text: "Nos techniciens installent le tracker à Ziguinchor, en atelier ou chez vous.",
  },
  {
    icon: RouteIcon,
    title: "3. Prise en main",
    text: "Nous créons votre compte et vous montrons comment suivre vos trajets.",
  },
  {
    icon: BellRing,
    title: "4. Suivi & alertes",
    text: "Vous recevez les alertes et notre support reste joignable toute l'année.",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="gps-grid border-b border-ink-border bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Nos services
            </p>
            <h1 className="mt-3 text-3xl font-extrabold text-ink-foreground sm:text-5xl">
              Protéger, digitaliser, transporter
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              KAANTAA associe matériel GPS, logiciel et présence humaine locale pour sécuriser les
              déplacements en Casamance et partout au Sénégal.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {details.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 90} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Comment ça marche"
            title="De votre appel à la première alerte"
            description="Un parcours simple, encadré par une équipe locale que vous pouvez rencontrer."
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal
                key={step.title}
                as="li"
                delay={index * 80}
                className="rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Au-delà du GPS"
          title="Un partenaire numérique complet"
          description="Nous produisons aussi les outils et contenus qui font connaître votre activité."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Megaphone,
              title: "Vidéos publicitaires",
              text: "Tournage et montage de spots courts pour les réseaux sociaux.",
            },
            {
              icon: Monitor,
              title: "Applications métier",
              text: "Outils de gestion sur mesure pour garages, ONG et coopératives.",
            },
            {
              icon: History,
              title: "Rapports d'activité",
              text: "Export des trajets et statistiques utiles pour vos bilans.",
            },
          ].map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 80}
              className="rounded-2xl border border-border bg-card p-6 shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-display text-base font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Un besoin précis à étudier ?"
        description="Parlez-nous de votre véhicule, de votre flotte ou de votre projet numérique. Nous répondons rapidement."
      />
    </>
  );
}
