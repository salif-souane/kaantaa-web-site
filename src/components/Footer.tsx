import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Music2, Phone } from "lucide-react";

import logo from "@/assets/logo-kaantaa.png";
import { navItems, site, whatsappLink } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="gps-grid border-t border-ink-border bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt=""
              loading="lazy"
              width={816}
              height={816}
              className="h-11 w-11 object-contain"
            />
            <div>
              <p className="font-display text-base font-extrabold">
                ENTREPRISE <span className="text-primary">KAANTAA</span>
              </p>
              <p className="text-sm text-ink-muted">{site.slogan}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-muted">
            Startup sénégalaise de géolocalisation, de tracking GPS et de services numériques,
            basée à {site.city} (Casamance). Installation et support assurés localement.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-border transition-colors hover:border-primary hover:text-primary"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-border transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={site.socials.tiktok}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="TikTok"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-border transition-colors hover:border-primary hover:text-primary"
            >
              <Music2 className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-border transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-ink-border px-4 text-sm transition-colors hover:border-success hover:text-success"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>

        <nav aria-label="Liens du site">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider">Navigation</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-ink-muted transition-colors hover:text-primary"
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.appUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-ink-muted transition-colors hover:text-primary"
              >
                Accès application
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wider">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-ink-muted">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`tel:+${site.phoneRaw}`} className="hover:text-primary">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:text-primary">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {site.name}. Tous droits réservés.
          </p>
          <p>Mentions légales · Politique de confidentialité · {site.city}, Sénégal</p>
        </div>
      </div>
    </footer>
  );
}
