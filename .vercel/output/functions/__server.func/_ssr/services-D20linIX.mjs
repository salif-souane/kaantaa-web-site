import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { M as BellRing, _ as MapPin, a as ShieldCheck, f as Monitor, h as Megaphone, n as Users, r as Truck, s as Route, w as History } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./Reveal-uDemLCZo.mjs";
import { i as ServiceCard, r as SectionHeading, t as CtaBand } from "./Sections-De7L_e7k.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-D20linIX.js
var import_jsx_runtime = require_jsx_runtime();
var details = [
	{
		icon: ShieldCheck,
		title: "Tracking GPS",
		description: "Le cœur de notre métier : un boîtier discret installé sur votre moto ou votre voiture, relié à votre espace personnel.",
		items: [
			"Position en temps réel sur carte",
			"Historique détaillé des trajets",
			"Alerte de vibration à l'arrêt",
			"Alerte de débranchement du boîtier",
			"Alerte de déplacement illégal du véhicule"
		]
	},
	{
		icon: Monitor,
		title: "Digitalisation",
		description: "Nous accompagnons les entreprises, garages et ONG de la région dans leur passage au numérique.",
		items: [
			"Création d'applications et de sites web",
			"Vidéos publicitaires et contenus visuels",
			"Conseil et formation numérique",
			"Accompagnement des ONG et projets sociaux"
		]
	},
	{
		icon: Truck,
		title: "Flotte & Transport",
		description: "Des outils pour les propriétaires de plusieurs véhicules et les acteurs du transport local.",
		items: [
			"Tableau de bord multi-véhicules",
			"Partage et suivi des courses",
			"Suivi de la consommation et des trajets",
			"Création d'emplois pour les jeunes conducteurs"
		]
	}
];
var steps = [
	{
		icon: Users,
		title: "1. Échange",
		text: "Vous nous décrivez votre véhicule et votre besoin sur WhatsApp ou par téléphone."
	},
	{
		icon: MapPin,
		title: "2. Installation",
		text: "Nos techniciens installent le tracker à Ziguinchor, en atelier ou chez vous."
	},
	{
		icon: Route,
		title: "3. Prise en main",
		text: "Nous créons votre compte et vous montrons comment suivre vos trajets."
	},
	{
		icon: BellRing,
		title: "4. Suivi & alertes",
		text: "Vous recevez les alertes et notre support reste joignable toute l'année."
	}
];
function ServicesPage() {
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
							children: "Nos services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-3xl font-extrabold text-ink-foreground sm:text-5xl",
							children: "Protéger, digitaliser, transporter"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-relaxed text-ink-muted",
							children: "KAANTAA associe matériel GPS, logiciel et présence humaine locale pour sécuriser les déplacements en Casamance et partout au Sénégal."
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: details.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
					...service,
					delay: index * 90
				}, service.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary/40 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Comment ça marche",
					title: "De votre appel à la première alerte",
					description: "Un parcours simple, encadré par une équipe locale que vous pouvez rencontrer."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						as: "li",
						delay: index * 80,
						className: "rounded-2xl border border-border bg-card p-6 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, {
									className: "h-5 w-5",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-base font-bold",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: step.text
							})
						]
					}, step.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Au-delà du GPS",
				title: "Un partenaire numérique complet",
				description: "Nous produisons aussi les outils et contenus qui font connaître votre activité."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						icon: Megaphone,
						title: "Vidéos publicitaires",
						text: "Tournage et montage de spots courts pour les réseaux sociaux."
					},
					{
						icon: Monitor,
						title: "Applications métier",
						text: "Outils de gestion sur mesure pour garages, ONG et coopératives."
					},
					{
						icon: History,
						title: "Rapports d'activité",
						text: "Export des trajets et statistiques utiles pour vos bilans."
					}
				].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: index * 80,
					className: "rounded-2xl border border-border bg-card p-6 shadow-card transition-transform duration-300 hover:-translate-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
							className: "h-6 w-6 text-primary",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-base font-bold",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: item.text
						})
					]
				}, item.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Un besoin précis à étudier ?",
			description: "Parlez-nous de votre véhicule, de votre flotte ou de votre projet numérique. Nous répondons rapidement."
		})
	] });
}
//#endregion
export { ServicesPage as component };
