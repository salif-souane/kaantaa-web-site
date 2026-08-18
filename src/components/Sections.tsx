import { Link } from "@tanstack/react-router";
import { Check, Quote, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  center = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  center?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-3xl font-extrabold sm:text-4xl",
          tone === "dark" ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "dark" ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  items,
  delay = 0,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  delay?: number;
}) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <ul className="mt-5 space-y-2.5 text-sm">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function OfferCard({
  title,
  price,
  period,
  description,
  features,
  featured = false,
  delay = 0,
}: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
  delay?: number;
}) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className={cn(
        "relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1",
        featured
          ? "border-primary bg-card shadow-glow"
          : "border-border bg-card shadow-card hover:border-primary/40",
      )}
    >
      {featured ? (
        <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
          Le plus demandé
        </span>
      ) : null}
      <h3 className="font-display text-lg font-bold">{title}</h3>
      <p className="mt-3 flex items-baseline gap-1.5">
        <span className="font-display text-4xl font-extrabold text-primary">{price}</span>
        <span className="text-sm text-muted-foreground">{period}</span>
      </p>
      <p className="mt-3 text-sm text-muted-foreground">{description}</p>
      <ul className="mt-5 flex-1 space-y-2.5 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2.5">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button asChild variant={featured ? "default" : "outline"} className="mt-7 w-full">
        <a
          href={whatsappLink(`Bonjour KAANTAA, je suis intéressé par le ${title}.`)}
          target="_blank"
          rel="noreferrer noopener"
        >
          Commander ce pack
        </a>
      </Button>
    </Reveal>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Ma moto a été retrouvée en moins d'une heure grâce à l'alerte de déplacement. Un vrai soulagement pour ma famille.",
      author: "Ibrahima S.",
      role: "Conducteur Jakarta, Ziguinchor",
    },
    {
      quote:
        "Nous suivons nos véhicules de mission en temps réel. L'équipe installe sur place et répond en wolof comme en français.",
      author: "ONG Kassa Développement",
      role: "Coordination logistique, Casamance",
    },
    {
      quote:
        "Installation propre et discrète sur les motos de nos clients. KAANTAA est devenu notre partenaire de confiance.",
      author: "Garage Tilène",
      role: "Partenaire installateur",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((item, index) => (
        <Reveal
          key={item.author}
          as="article"
          delay={index * 90}
          className="flex h-full flex-col rounded-2xl border border-ink-border bg-ink-surface p-7"
        >
          <Quote className="h-7 w-7 text-primary" aria-hidden="true" />
          <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-foreground">
            « {item.quote} »
          </p>
          <div className="mt-6 border-t border-ink-border pt-4">
            <p className="font-display text-sm font-bold text-ink-foreground">{item.author}</p>
            <p className="text-xs text-ink-muted">{item.role}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function CtaBand({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal className="gps-grid overflow-hidden rounded-3xl border border-ink-border bg-ink px-7 py-12 text-center sm:px-12">
        <h2 className="font-display text-2xl font-extrabold text-ink-foreground sm:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">
          {description}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {children ?? (
            <>
              <Button asChild size="lg">
                <a href={whatsappLink()} target="_blank" rel="noreferrer noopener">
                  Nous contacter sur WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-ink-border bg-transparent text-ink-foreground hover:bg-ink-surface hover:text-ink-foreground"
              >
                <Link to="/offres">Voir les offres</Link>
              </Button>
            </>
          )}
        </div>
      </Reveal>
    </section>
  );
}
