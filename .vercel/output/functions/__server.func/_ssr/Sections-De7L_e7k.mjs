import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { A as Check, l as Quote } from "../_libs/lucide-react.mjs";
import { a as whatsappLink, n as Button, r as cn } from "./router-BuY6ORd_.mjs";
import { t as Reveal } from "./Reveal-uDemLCZo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Sections-De7L_e7k.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, description, tone = "light", center = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: cn("max-w-2xl", center && "mx-auto text-center"),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xs font-bold uppercase tracking-[0.18em] text-primary",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: cn("mt-3 text-3xl font-extrabold sm:text-4xl", tone === "dark" ? "text-ink-foreground" : "text-foreground"),
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-4 text-base leading-relaxed", tone === "dark" ? "text-ink-muted" : "text-muted-foreground"),
				children: description
			}) : null
		]
	});
}
function ServiceCard({ icon: Icon, title, description, items, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		as: "article",
		delay,
		className: "group relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-6 w-6",
					"aria-hidden": "true"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 font-display text-xl font-bold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted-foreground",
				children: description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 space-y-2.5 text-sm",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: "mt-0.5 h-4 w-4 shrink-0 text-success",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
				}, item))
			})
		]
	});
}
function OfferCard({ title, price, period, description, features, featured = false, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		as: "article",
		delay,
		className: cn("relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1", featured ? "border-primary bg-card shadow-glow" : "border-border bg-card shadow-card hover:border-primary/40"),
		children: [
			featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground",
				children: "Le plus demandé"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg font-bold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 flex items-baseline gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-4xl font-extrabold text-primary",
					children: price
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted-foreground",
					children: period
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 flex-1 space-y-2.5 text-sm",
				children: features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: "mt-0.5 h-4 w-4 shrink-0 text-success",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feature })]
				}, feature))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: featured ? "default" : "outline",
				className: "mt-7 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: whatsappLink(`Bonjour KAANTAA, je suis intéressé par le ${title}.`),
					target: "_blank",
					rel: "noreferrer noopener",
					children: "Commander ce pack"
				})
			})
		]
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: [
			{
				quote: "Ma moto a été retrouvée en moins d'une heure grâce à l'alerte de déplacement. Un vrai soulagement pour ma famille.",
				author: "Ibrahima S.",
				role: "Conducteur Jakarta, Ziguinchor"
			},
			{
				quote: "Nous suivons nos véhicules de mission en temps réel. L'équipe installe sur place et répond en wolof comme en français.",
				author: "ONG Kassa Développement",
				role: "Coordination logistique, Casamance"
			},
			{
				quote: "Installation propre et discrète sur les motos de nos clients. KAANTAA est devenu notre partenaire de confiance.",
				author: "Garage Tilène",
				role: "Partenaire installateur"
			}
		].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			as: "article",
			delay: index * 90,
			className: "flex h-full flex-col rounded-2xl border border-ink-border bg-ink-surface p-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
					className: "h-7 w-7 text-primary",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 flex-1 text-sm leading-relaxed text-ink-foreground",
					children: [
						"« ",
						item.quote,
						" »"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 border-t border-ink-border pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-bold text-ink-foreground",
						children: item.author
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-ink-muted",
						children: item.role
					})]
				})
			]
		}, item.author))
	});
}
function CtaBand({ title, description, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "gps-grid overflow-hidden rounded-3xl border border-ink-border bg-ink px-7 py-12 text-center sm:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-extrabold text-ink-foreground sm:text-3xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-muted",
					children: description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-col justify-center gap-3 sm:flex-row",
					children: children ?? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsappLink(),
							target: "_blank",
							rel: "noreferrer noopener",
							children: "Nous contacter sur WhatsApp"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						className: "border-ink-border bg-transparent text-ink-foreground hover:bg-ink-surface hover:text-ink-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/offres",
							children: "Voir les offres"
						})
					})] })
				})
			]
		})
	});
}
//#endregion
export { Testimonials as a, ServiceCard as i, OfferCard as n, SectionHeading as r, CtaBand as t };
