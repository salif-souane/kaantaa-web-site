import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { c as RefreshCw, j as Building2 } from "../_libs/lucide-react.mjs";
import { r as cn } from "./router-BuY6ORd_.mjs";
import { t as Reveal } from "./Reveal-uDemLCZo.mjs";
import { n as OfferCard, r as SectionHeading, t as CtaBand } from "./Sections-De7L_e7k.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/offres-wMjk_AVW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Table = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "relative w-full overflow-auto",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
		ref,
		className: cn("w-full caption-bottom text-sm", className),
		...props
	})
}));
Table.displayName = "Table";
var TableHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
	ref,
	className: cn("[&_tr]:border-b", className),
	...props
}));
TableHeader.displayName = "TableHeader";
var TableBody = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
	ref,
	className: cn("[&_tr:last-child]:border-0", className),
	...props
}));
TableBody.displayName = "TableBody";
var TableFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", {
	ref,
	className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
	...props
}));
TableFooter.displayName = "TableFooter";
var TableRow = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
	ref,
	className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
	...props
}));
TableRow.displayName = "TableRow";
var TableHead = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
	ref,
	className: cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableHead.displayName = "TableHead";
var TableCell = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
	ref,
	className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableCell.displayName = "TableCell";
var TableCaption = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
	ref,
	className: cn("mt-4 text-sm text-muted-foreground", className),
	...props
}));
TableCaption.displayName = "TableCaption";
var multiYear = [
	{
		formule: "1 an (inclus dans le pack)",
		moto: "Inclus",
		voiture: "Inclus"
	},
	{
		formule: "Renouvellement annuel",
		moto: "10 000 F",
		voiture: "10 000 F"
	},
	{
		formule: "Formule 2 ans",
		moto: "18 000 F",
		voiture: "18 000 F"
	},
	{
		formule: "Formule 3 ans",
		moto: "25 000 F",
		voiture: "25 000 F"
	},
	{
		formule: "Formule à vie",
		moto: "60 000 F",
		voiture: "60 000 F"
	}
];
function OffresPage() {
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
							children: "Offres commerciales"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-3xl font-extrabold text-ink-foreground sm:text-5xl",
							children: "Des tarifs clairs, sans surprise"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-relaxed text-ink-muted",
							children: "Le prix du pack comprend le tracker, l'installation par nos techniciens et une année complète de service."
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfferCard, {
					title: "Pack Moto",
					price: "30 000 F",
					period: "CFA",
					description: "Pour les Jakarta, motos personnelles et professionnelles.",
					features: [
						"Tracker GPS fourni",
						"Installation incluse à Ziguinchor",
						"1 an de service inclus",
						"Alertes vibration, débranchement, déplacement",
						"Historique des trajets"
					],
					featured: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfferCard, {
					title: "Pack Voiture",
					price: "50 000 F",
					period: "CFA",
					description: "Pour les particuliers, taxis et véhicules d'entreprise.",
					features: [
						"Tracker GPS fourni",
						"Installation discrète incluse",
						"1 an de service inclus",
						"Suivi multi-utilisateurs",
						"Rapports de trajets exportables"
					],
					delay: 90
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary/40 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Durée de service",
						title: "Renouvellement et formules longue durée",
						description: "Après la première année, choisissez le rythme qui vous convient. Le renouvellement réactive vos données et votre suivi."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Formule" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Moto" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Voiture" })
						] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: multiYear.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "font-medium",
								children: row.formule
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: row.moto }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: row.voiture })
						] }, row.formule)) })] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 80,
						className: "mt-6 flex items-start gap-3 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
							className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Le renouvellement annuel s'élève à 10 000 F et correspond à la réactivation des données de votre boîtier. Les formules longue durée sont confirmées lors de votre commande." })]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Organismes & flottes",
				title: "Abonnement mensuel pour les structures",
				description: "ONG, entreprises et sociétés de transport peuvent opter pour un abonnement mensuel par véhicule."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2",
				children: [{
					vehicle: "Moto",
					price: "2 000 F",
					period: "/ mois / véhicule"
				}, {
					vehicle: "Voiture",
					price: "3 000 F",
					period: "/ mois / véhicule"
				}].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: index * 90,
					className: "rounded-2xl border border-border bg-card p-7 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-success/10 text-success",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
								className: "h-5 w-5",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-lg font-bold",
							children: item.vehicle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 flex items-baseline gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl font-extrabold text-primary",
								children: item.price
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: item.period
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Facturation groupée, tableau de bord de flotte et support prioritaire."
						})
					]
				}, item.vehicle))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Besoin d'un devis pour plusieurs véhicules ?",
			description: "Indiquez-nous le nombre de motos et de voitures : nous préparons une proposition adaptée à votre structure."
		})
	] });
}
//#endregion
export { OffresPage as component };
