import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { E as Handshake, M as BellRing, N as ArrowRight, _ as MapPin, a as ShieldCheck, f as Monitor, n as Users, r as Truck } from "../_libs/lucide-react.mjs";
import { a as whatsappLink, i as site, n as Button } from "./router-BuY6ORd_.mjs";
import { t as Reveal } from "./Reveal-uDemLCZo.mjs";
import { a as Testimonials, i as ServiceCard, n as OfferCard, r as SectionHeading, t as CtaBand } from "./Sections-De7L_e7k.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-KRqwWBB_.js
var import_jsx_runtime = require_jsx_runtime();
var app_tracking_default = "/assets/app-tracking-DA3PNFyg.jpg";
var hero_moto_default = "/assets/hero-moto-BU12fefT.jpg";
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_moto_default,
					alt: "Conducteur de moto en mouvement sur une route de Ziguinchor au coucher du soleil",
					width: 1920,
					height: 1088,
					className: "absolute inset-0 h-full w-full object-cover opacity-70"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink-surface/70 px-4 py-1.5 text-xs font-semibold text-ink-foreground backdrop-blur",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot inline-block h-2 w-2 rounded-full bg-success" }),
									"Suivi en direct · ",
									site.city,
									", Casamance"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 text-4xl font-extrabold leading-[1.05] text-ink-foreground sm:text-5xl lg:text-6xl",
								children: ["Sécurisez vos véhicules ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "en temps réel"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg",
								children: "Tracker GPS + application web pour motos et voitures. Installation et support local."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-sm font-semibold uppercase tracking-[0.16em] text-primary",
								children: site.slogan
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-9 flex flex-col gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#services",
										children: ["Découvrir", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "border-ink-border bg-transparent text-ink-foreground hover:bg-ink-surface hover:text-ink-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: whatsappLink(),
										target: "_blank",
										rel: "noreferrer noopener",
										children: "Nous contacter"
									})
								})]
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4",
				children: [
					{
						icon: ShieldCheck,
						label: "Fiabilité",
						value: "Suivi 24h/24"
					},
					{
						icon: BellRing,
						label: "Alertes",
						value: "Vibration & débranchement"
					},
					{
						icon: MapPin,
						label: "Proximité",
						value: "Installation à Ziguinchor"
					},
					{
						icon: Handshake,
						label: "Impact social",
						value: "Emplois pour les jeunes"
					}
				].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: index * 80,
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
							className: "h-5 w-5",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-sm font-bold",
						children: item.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs text-muted-foreground",
						children: item.label
					})] })]
				}, item.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "services",
			className: "mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Nos services",
					title: "Trois métiers, une même promesse",
					description: "Du tracker installé sur votre moto à l'application web de votre organisation, KAANTAA couvre toute la chaîne."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
							icon: ShieldCheck,
							title: "Tracking GPS",
							description: "Gardez un œil sur votre véhicule où qu'il soit, depuis votre téléphone.",
							items: [
								"Suivi en temps réel sur carte",
								"Historique complet des trajets",
								"Alertes vibration, débranchement et déplacement illégal"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
							icon: Monitor,
							title: "Digitalisation",
							description: "Nous outillons les entreprises et ONG locales avec des solutions numériques sur mesure.",
							items: [
								"Création d'applications web",
								"Vidéos publicitaires et contenus",
								"Conseil numérique pour ONG et PME"
							],
							delay: 90
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
							icon: Truck,
							title: "Flotte & Transport",
							description: "Pilotez vos véhicules et vos courses avec des outils pensés pour la Casamance.",
							items: [
								"Gestion de flotte multi-véhicules",
								"Partage et suivi des courses",
								"Création d'emplois pour les jeunes"
							],
							delay: 180
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							children: ["Voir le détail des services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "gps-grid border-y border-ink-border bg-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs font-bold uppercase tracking-[0.18em] text-primary",
						children: "L'application KAANTAA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-extrabold text-ink-foreground sm:text-4xl",
						children: "Votre véhicule, visible à la seconde"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-ink-muted",
						children: "Connectez-vous depuis un téléphone ou un ordinateur : position en direct, trajets passés, notifications immédiates en cas de mouvement suspect. Nos techniciens installent le tracker et vous forment à l'application."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3 text-sm text-ink-foreground",
						children: [
							"Tableau de bord clair, en français",
							"Notifications WhatsApp en cas d'alerte",
							"Assistance technique locale à Ziguinchor"
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-primary" }), item]
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.appUrl,
								target: "_blank",
								rel: "noreferrer noopener",
								children: "Accéder à l'application"
							})
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: app_tracking_default,
						alt: "Interface de suivi GPS KAANTAA affichant un trajet et des alertes",
						loading: "lazy",
						width: 1280,
						height: 960,
						className: "w-full rounded-2xl border border-ink-border object-cover"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Nos offres",
					title: "Des packs simples, tout compris",
					description: "Tracker, installation et une année de service inclus. Renouvellement annuel à 10 000 F."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfferCard, {
						title: "Pack Moto",
						price: "30 000 F",
						period: "CFA",
						description: "Idéal pour les Jakarta et motos personnelles.",
						features: [
							"Tracker GPS fourni",
							"Installation par nos techniciens",
							"1 an de service inclus",
							"Alertes et historique des trajets"
						],
						featured: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfferCard, {
						title: "Pack Voiture",
						price: "50 000 F",
						period: "CFA",
						description: "Pour les particuliers, taxis et véhicules professionnels.",
						features: [
							"Tracker GPS fourni",
							"Installation discrète",
							"1 an de service inclus",
							"Suivi multi-utilisateurs"
						],
						delay: 90
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/offres",
							children: ["Voir toutes les formules", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-ink-border bg-ink py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Ils nous font confiance",
						title: "Des clients protégés, des partenaires engagés",
						tone: "dark"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "mt-12 flex flex-wrap items-center justify-center gap-3 text-xs text-ink-muted",
						children: [
							"Garages partenaires",
							"ONG locales",
							"Taxis & Jakarta",
							"Entreprises de transport"
						].map((partner) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-ink-border px-4 py-2 font-display font-semibold uppercase tracking-wider",
							children: partner
						}, partner))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs font-bold uppercase tracking-[0.18em] text-primary",
						children: "À propos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-extrabold sm:text-4xl",
						children: "Une startup née en Casamance, tournée vers le Sénégal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-base leading-relaxed text-muted-foreground",
						children: [
							"Créée en ",
							site.founded,
							" à ",
							site.city,
							", ENTREPRISE KAANTAA sécurise et digitalise les transports. Notre équipe mixte, portée par une co-fondatrice engagée, met la technologie au service des conducteurs, des garages et des organisations locales."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/a-propos",
								children: ["Notre histoire", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { "aria-hidden": "true" }), "Rencontrer l'équipe"]
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: app_tracking_default,
						alt: "Poste de supervision des véhicules suivis par KAANTAA",
						loading: "lazy",
						width: 1280,
						height: 960,
						className: "w-full rounded-2xl border border-border object-cover shadow-card"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Prêt à protéger votre véhicule ?",
			description: "Écrivez-nous sur WhatsApp : nous vous conseillons le pack adapté et planifions l'installation à Ziguinchor."
		})
	] });
}
//#endregion
export { Index as component };
