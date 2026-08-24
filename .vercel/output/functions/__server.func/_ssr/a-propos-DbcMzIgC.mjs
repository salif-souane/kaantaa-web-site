import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { S as Lightbulb, T as HeartHandshake, a as ShieldCheck, g as MapPinned, i as Sparkles } from "../_libs/lucide-react.mjs";
import { i as site } from "./router-C5CBHS1A.mjs";
import { t as Reveal } from "./Reveal-ibYPdWzH.mjs";
import { r as SectionHeading, t as CtaBand } from "./Sections-BGRRTD5_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/a-propos-DbcMzIgC.js
var import_jsx_runtime = require_jsx_runtime();
var equipe_default = "/assets/equipe-D3VYriOu.jpg";
var values = [
	{
		icon: Lightbulb,
		title: "Innovation",
		text: "Nous concevons nos outils sur place, en écoutant les conducteurs et les garages."
	},
	{
		icon: ShieldCheck,
		title: "Fiabilité",
		text: "Un matériel testé, un suivi continu et une assistance qui répond vraiment."
	},
	{
		icon: MapPinned,
		title: "Proximité",
		text: "Une équipe à Ziguinchor, joignable en français comme en langues locales."
	},
	{
		icon: HeartHandshake,
		title: "Impact social",
		text: "Des emplois pour les jeunes et un accompagnement des ONG de la région."
	}
];
function AProposPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "gps-grid border-b border-ink-border bg-ink py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs font-bold uppercase tracking-[0.18em] text-primary",
							children: "À propos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-3xl font-extrabold text-ink-foreground sm:text-5xl",
							children: "La technologie au service de la Casamance"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-base leading-relaxed text-ink-muted",
							children: [
								site.slogan,
								" — une promesse née à ",
								site.city,
								", portée par une équipe qui connaît le terrain."
							]
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-extrabold sm:text-4xl",
						children: "Notre histoire"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-base leading-relaxed text-muted-foreground",
						children: [
							"ENTREPRISE KAANTAA a été créée en ",
							site.founded,
							" à ",
							site.city,
							", au cœur de la Casamance. Le constat de départ était simple : trop de motos et de voitures disparaissent sans aucun moyen de les retrouver, alors qu'elles représentent souvent l'unique source de revenus d'une famille."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted-foreground",
						children: "Nous avons donc associé un tracker GPS fiable à une application web simple, installée et expliquée sur place. Aujourd'hui, notre activité s'étend à la digitalisation des entreprises locales et à la gestion de flottes."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-2xl border border-primary/25 bg-accent/60 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "flex items-center gap-2 font-display text-base font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
								className: "h-5 w-5 text-primary",
								"aria-hidden": "true"
							}), "Notre mission"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: "Sécuriser et digitaliser les transports en Casamance et au Sénégal, en gardant une exigence : que la technologie reste accessible à ceux qui roulent chaque jour."
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: equipe_default,
						alt: "L'équipe fondatrice de KAANTAA au travail dans ses bureaux de Ziguinchor",
						loading: "lazy",
						width: 1280,
						height: 912,
						className: "w-full rounded-2xl border border-border object-cover shadow-card"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary/40 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Nos valeurs",
					title: "Ce qui guide chacune de nos installations"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: values.map((value, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: index * 80,
						className: "rounded-2xl border border-border bg-card p-6 shadow-card transition-transform duration-300 hover:-translate-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(value.icon, {
									className: "h-5 w-5",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-base font-bold",
								children: value.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: value.text
							})
						]
					}, value.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Notre équipe",
					title: "Deux profils complémentaires",
					description: "Une entreprise dirigée à parts égales, où l'autonomisation des femmes dans la tech est une réalité quotidienne."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2",
					children: [{
						name: "Salif",
						role: "Fondateur & Développeur Full-stack",
						text: "Il conçoit l'application, choisit le matériel GPS et forme les techniciens installateurs.",
						initials: "S"
					}, {
						name: "Co-fondatrice",
						role: "Cofondatrice & Responsable opérationnelle",
						text: "Elle pilote les installations, la relation clients et les partenariats avec les garages et les ONG.",
						initials: "K"
					}].map((member, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						as: "article",
						delay: index * 90,
						className: "flex h-full gap-5 rounded-2xl border border-border bg-card p-7 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary font-display text-xl font-extrabold text-primary-foreground",
							children: member.initials
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold",
								children: member.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-primary",
								children: member.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: member.text
							})
						] })]
					}, member.role))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					className: "mt-8 rounded-2xl border border-success/25 bg-success/5 p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "font-display text-foreground",
							children: "Femmes et technologie :"
						}), " la co-direction de KAANTAA par une femme entrepreneure est un choix assumé. Nous encourageons les jeunes filles de la région à se former aux métiers du numérique."]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Venez nous rencontrer à Ziguinchor",
			description: "Quartier Kenya, près de la caserne. Nous vous présentons le matériel et l'application avant tout engagement."
		})
	] });
}
//#endregion
export { AProposPage as component };
