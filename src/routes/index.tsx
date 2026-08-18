import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BellRing,
  Handshake,
  MapPin,
  Monitor,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";

import appTracking from "@/assets/app-tracking.jpg";
import heroMoto from "@/assets/hero-moto.jpg";
import { Reveal } from "@/components/Reveal";
import { CtaBand, OfferCard, SectionHeading, ServiceCard, Testimonials } from "@/components/Sections";
import { Button } from "@/components/ui/button";
import { site, whatsappLink } from "@/lib/site";

const title = "KAANTAA — Tracking GPS pour motos et voitures à Ziguinchor";
const description =
  "ENTREPRISE KAANTAA sécurise vos véhicules en temps réel : tracker GPS, application web, alertes et installation locale à Ziguinchor et partout au Sénégal.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "ENTREPRISE KAANTAA",
          description,
          slogan: "La protection qui roule avec toi",
          email: "contact@kaantaa.sn",
          telephone: "+221770000000",
          areaServed: "Casamance, Sénégal",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Quartier Kenya, près de la caserne",
            addressLocality: "Ziguinchor",
            addressCountry: "SN",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink">
        <img
          src={heroMoto}
          alt="Conducteur de moto en mouvement sur une route de Ziguinchor au coucher du soleil"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink-surface/70 px-4 py-1.5 text-xs font-semibold text-ink-foreground backdrop-blur">
              <span className="live-dot inline-block h-2 w-2 rounded-full bg-success" />
              Suivi en direct · {site.city}, Casamance
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-ink-foreground sm:text-5xl lg:text-6xl">
              Sécurisez vos véhicules <span className="text-primary">en temps réel</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Tracker GPS + application web pour motos et voitures. Installation et support local.
            </p>
            <p className="mt-3 font-display text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              {site.slogan}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#services">
                  Découvrir
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-ink-border bg-transparent text-ink-foreground hover:bg-ink-surface hover:text-ink-foreground"
              >
                <a href={whatsappLink()} target="_blank" rel="noreferrer noopener">
                  Nous contacter
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, label: "Fiabilité", value: "Suivi 24h/24" },
            { icon: BellRing, label: "Alertes", value: "Vibration & débranchement" },
            { icon: MapPin, label: "Proximité", value: "Installation à Ziguinchor" },
            { icon: Handshake, label: "Impact social", value: "Emplois pour les jeunes" },
          ].map((item, index) => (
            <Reveal key={item.label} delay={index * 80} className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-display text-sm font-bold">{item.value}</span>
                <span className="block text-xs text-muted-foreground">{item.label}</span>
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Nos services"
          title="Trois métiers, une même promesse"
          description="Du tracker installé sur votre moto à l'application web de votre organisation, KAANTAA couvre toute la chaîne."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <ServiceCard
            icon={ShieldCheck}
            title="Tracking GPS"
            description="Gardez un œil sur votre véhicule où qu'il soit, depuis votre téléphone."
            items={[
              "Suivi en temps réel sur carte",
              "Historique complet des trajets",
              "Alertes vibration, débranchement et déplacement illégal",
            ]}
          />
          <ServiceCard
            icon={Monitor}
            title="Digitalisation"
            description="Nous outillons les entreprises et ONG locales avec des solutions numériques sur mesure."
            items={[
              "Création d'applications web",
              "Vidéos publicitaires et contenus",
              "Conseil numérique pour ONG et PME",
            ]}
            delay={90}
          />
          <ServiceCard
            icon={Truck}
            title="Flotte & Transport"
            description="Pilotez vos véhicules et vos courses avec des outils pensés pour la Casamance."
            items={[
              "Gestion de flotte multi-véhicules",
              "Partage et suivi des courses",
              "Création d'emplois pour les jeunes",
            ]}
            delay={180}
          />
        </div>
        <Reveal className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link to="/services">
              Voir le détail des services
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </section>

      <section className="gps-grid border-y border-ink-border bg-ink">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
              L'application KAANTAA
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink-foreground sm:text-4xl">
              Votre véhicule, visible à la seconde
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Connectez-vous depuis un téléphone ou un ordinateur : position en direct, trajets
              passés, notifications immédiates en cas de mouvement suspect. Nos techniciens
              installent le tracker et vous forment à l'application.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-foreground">
              {[
                "Tableau de bord clair, en français",
                "Notifications WhatsApp en cas d'alerte",
                "Assistance technique locale à Ziguinchor",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild size="lg">
                <a href={site.appUrl} target="_blank" rel="noreferrer noopener">
                  Accéder à l'application
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={appTracking}
              alt="Interface de suivi GPS KAANTAA affichant un trajet et des alertes"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full rounded-2xl border border-ink-border object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Nos offres"
          title="Des packs simples, tout compris"
          description="Tracker, installation et une année de service inclus. Renouvellement annuel à 10 000 F."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <OfferCard
            title="Pack Moto"
            price="30 000 F"
            period="CFA"
            description="Idéal pour les Jakarta et motos personnelles."
            features={[
              "Tracker GPS fourni",
              "Installation par nos techniciens",
              "1 an de service inclus",
              "Alertes et historique des trajets",
            ]}
            featured
          />
          <OfferCard
            title="Pack Voiture"
            price="50 000 F"
            period="CFA"
            description="Pour les particuliers, taxis et véhicules professionnels."
            features={[
              "Tracker GPS fourni",
              "Installation discrète",
              "1 an de service inclus",
              "Suivi multi-utilisateurs",
            ]}
            delay={90}
          />
        </div>
        <Reveal className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link to="/offres">
              Voir toutes les formules
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </section>

      <section className="border-y border-ink-border bg-ink py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Ils nous font confiance"
            title="Des clients protégés, des partenaires engagés"
            tone="dark"
          />
          <div className="mt-12">
            <Testimonials />
          </div>
          <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-3 text-xs text-ink-muted">
            {["Garages partenaires", "ONG locales", "Taxis & Jakarta", "Entreprises de transport"].map(
              (partner) => (
                <span
                  key={partner}
                  className="rounded-full border border-ink-border px-4 py-2 font-display font-semibold uppercase tracking-wider"
                >
                  {partner}
                </span>
              ),
            )}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
              À propos
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Une startup née en Casamance, tournée vers le Sénégal
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Créée en {site.founded} à {site.city}, ENTREPRISE KAANTAA sécurise et digitalise les
              transports. Notre équipe mixte, portée par une co-fondatrice engagée, met la
              technologie au service des conducteurs, des garages et des organisations locales.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/a-propos">
                  Notre histoire
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">
                  <Users aria-hidden="true" />
                  Rencontrer l'équipe
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={appTracking}
              alt="Poste de supervision des véhicules suivis par KAANTAA"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full rounded-2xl border border-border object-cover shadow-card"
            />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Prêt à protéger votre véhicule ?"
        description="Écrivez-nous sur WhatsApp : nous vous conseillons le pack adapté et planifions l'installation à Ziguinchor."
      />
    </>
  );
}
