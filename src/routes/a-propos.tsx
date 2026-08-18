import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, Lightbulb, MapPinned, ShieldCheck, Sparkles } from "lucide-react";

import equipe from "@/assets/equipe.jpg";
import { Reveal } from "@/components/Reveal";
import { CtaBand, SectionHeading } from "@/components/Sections";
import { site } from "@/lib/site";

const title = "À propos — Startup de géolocalisation à Ziguinchor | KAANTAA";
const description =
  "Créée en 2025 à Ziguinchor, ENTREPRISE KAANTAA sécurise et digitalise les transports en Casamance. Découvrez notre mission, nos valeurs et notre équipe.";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/a-propos" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
  }),
  component: AProposPage,
});

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Nous concevons nos outils sur place, en écoutant les conducteurs et les garages.",
  },
  {
    icon: ShieldCheck,
    title: "Fiabilité",
    text: "Un matériel testé, un suivi continu et une assistance qui répond vraiment.",
  },
  {
    icon: MapPinned,
    title: "Proximité",
    text: "Une équipe à Ziguinchor, joignable en français comme en langues locales.",
  },
  {
    icon: HeartHandshake,
    title: "Impact social",
    text: "Des emplois pour les jeunes et un accompagnement des ONG de la région.",
  },
];

function AProposPage() {
  return (
    <>
      <section className="gps-grid border-b border-ink-border bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
              À propos
            </p>
            <h1 className="mt-3 text-3xl font-extrabold text-ink-foreground sm:text-5xl">
              La technologie au service de la Casamance
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              {site.slogan} — une promesse née à {site.city}, portée par une équipe qui connaît le
              terrain.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Notre histoire</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              ENTREPRISE KAANTAA a été créée en {site.founded} à {site.city}, au cœur de la
              Casamance. Le constat de départ était simple : trop de motos et de voitures
              disparaissent sans aucun moyen de les retrouver, alors qu'elles représentent souvent
              l'unique source de revenus d'une famille.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Nous avons donc associé un tracker GPS fiable à une application web simple, installée
              et expliquée sur place. Aujourd'hui, notre activité s'étend à la digitalisation des
              entreprises locales et à la gestion de flottes.
            </p>
            <div className="mt-8 rounded-2xl border border-primary/25 bg-accent/60 p-6">
              <h3 className="flex items-center gap-2 font-display text-base font-bold">
                <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
                Notre mission
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Sécuriser et digitaliser les transports en Casamance et au Sénégal, en gardant une
                exigence : que la technologie reste accessible à ceux qui roulent chaque jour.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={equipe}
              alt="L'équipe fondatrice de KAANTAA au travail dans ses bureaux de Ziguinchor"
              loading="lazy"
              width={1280}
              height={912}
              className="w-full rounded-2xl border border-border object-cover shadow-card"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Nos valeurs"
            title="Ce qui guide chacune de nos installations"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal
                key={value.title}
                delay={index * 80}
                className="rounded-2xl border border-border bg-card p-6 shadow-card transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <value.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Notre équipe"
          title="Deux profils complémentaires"
          description="Une entreprise dirigée à parts égales, où l'autonomisation des femmes dans la tech est une réalité quotidienne."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              name: "Salif",
              role: "Fondateur & Développeur Full-stack",
              text: "Il conçoit l'application, choisit le matériel GPS et forme les techniciens installateurs.",
              initials: "S",
            },
            {
              name: "Co-fondatrice",
              role: "Cofondatrice & Responsable opérationnelle",
              text: "Elle pilote les installations, la relation clients et les partenariats avec les garages et les ONG.",
              initials: "K",
            },
          ].map((member, index) => (
            <Reveal
              key={member.role}
              as="article"
              delay={index * 90}
              className="flex h-full gap-5 rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary font-display text-xl font-extrabold text-primary-foreground">
                {member.initials}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-8 rounded-2xl border border-success/25 bg-success/5 p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="font-display text-foreground">Femmes et technologie :</strong> la
            co-direction de KAANTAA par une femme entrepreneure est un choix assumé. Nous
            encourageons les jeunes filles de la région à se former aux métiers du numérique.
          </p>
        </Reveal>
      </section>

      <CtaBand
        title="Venez nous rencontrer à Ziguinchor"
        description="Quartier Kenya, près de la caserne. Nous vous présentons le matériel et l'application avant tout engagement."
      />
    </>
  );
}
