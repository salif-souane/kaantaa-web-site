import { Link } from "@tanstack/react-router";

import logo from "@/assets/logo-kaantaa.png";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label={`${site.name} — accueil`}>
      <img
        src={logo}
        alt=""
        width={816}
        height={816}
        className="h-10 w-10 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-sm font-extrabold tracking-tight sm:text-base",
            tone === "dark" ? "text-ink-foreground" : "text-foreground",
          )}
        >
          ENTREPRISE <span className="text-primary">KAANTAA</span>
        </span>
        <span
          className={cn(
            "hidden text-[11px] sm:block",
            tone === "dark" ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          {site.slogan}
        </span>
      </span>
    </Link>
  );
}
