import { createFileRoute } from "@tanstack/react-router";
import { Building2, RefreshCw } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { CtaBand, OfferCard, SectionHeading } from "@/components/Sections";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const title = "Offres et tarifs — Packs GPS moto et voiture | KAANTAA";
const description =
  "Pack Moto à 30 000 F, Pack Voiture à 50 000 F, renouvellement annuel à 10 000 F et abonnements mensuels pour organismes. Tarifs clairs, installation incluse.";

export const Route = createFileRoute("/offres")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/offres" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/offres" }],
  }),
  component: OffresPage,
});

const multiYear = [
  { formule: "1 an (inclus dans le pack)", moto: "Inclus", voiture: "Inclus" },
  { formule: "Renouvellement annuel", moto: "10 000 F", voiture: "10 000 F" },
  { formule: "Formule 2 ans", moto: "18 000 F", voiture: "18 000 F" },
  { formule: "Formule 3 ans", moto: "25 000 F", voiture: "25 000 F" },
  { formule: "Formule à vie", moto: "60 000 F", voiture: "60 000 F" },
];

function OffresPage() {
  return (
    <>
      <section className="gps-grid border-b border-ink-border bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Offres commerciales
            </p>
            <h1 className="mt-3 text-3xl font-extrabold text-ink-foreground sm:text-5xl">
              Des tarifs clairs, sans surprise
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Le prix du pack comprend le tracker, l'installation par nos techniciens et une année
              complète de service.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <OfferCard
            title="Pack Moto"
            price="30 000 F"
            period="CFA"
            description="Pour les Jakarta, motos personnelles et professionnelles."
            features={[
              "Tracker GPS fourni",
              "Installation incluse à Ziguinchor",
              "1 an de service inclus",
              "Alertes vibration, débranchement, déplacement",
              "Historique des trajets",
            ]}
            featured
          />
          <OfferCard
            title="Pack Voiture"
            price="50 000 F"
            period="CFA"
            description="Pour les particuliers, taxis et véhicules d'entreprise."
            features={[
              "Tracker GPS fourni",
              "Installation discrète incluse",
              "1 an de service inclus",
              "Suivi multi-utilisateurs",
              "Rapports de trajets exportables",
            ]}
            delay={90}
          />
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Durée de service"
            title="Renouvellement et formules longue durée"
            description="Après la première année, choisissez le rythme qui vous convient. Le renouvellement réactive vos données et votre suivi."
          />
          <Reveal className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Formule</TableHead>
                  <TableHead>Moto</TableHead>
                  <TableHead>Voiture</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {multiYear.map((row) => (
                  <TableRow key={row.formule}>
                    <TableCell className="font-medium">{row.formule}</TableCell>
                    <TableCell>{row.moto}</TableCell>
                    <TableCell>{row.voiture}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Reveal>
          <Reveal delay={80} className="mt-6 flex items-start gap-3 text-sm text-muted-foreground">
            <RefreshCw className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <p>
              Le renouvellement annuel s'élève à 10 000 F et correspond à la réactivation des
              données de votre boîtier. Les formules longue durée sont confirmées lors de votre
              commande.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Organismes & flottes"
          title="Abonnement mensuel pour les structures"
          description="ONG, entreprises et sociétés de transport peuvent opter pour un abonnement mensuel par véhicule."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { vehicle: "Moto", price: "2 000 F", period: "/ mois / véhicule" },
            { vehicle: "Voiture", price: "3 000 F", period: "/ mois / véhicule" },
          ].map((item, index) => (
            <Reveal
              key={item.vehicle}
              delay={index * 90}
              className="rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-success/10 text-success">
                <Building2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{item.vehicle}</h3>
              <p className="mt-2 flex items-baseline gap-1.5">
                <span className="font-display text-3xl font-extrabold text-primary">
                  {item.price}
                </span>
                <span className="text-sm text-muted-foreground">{item.period}</span>
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Facturation groupée, tableau de bord de flotte et support prioritaire.
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Besoin d'un devis pour plusieurs véhicules ?"
        description="Indiquez-nous le nombre de motos et de voitures : nous préparons une proposition adaptée à votre structure."
      />
    </>
  );
}
