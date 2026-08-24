import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { E as isRedirect, g as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_jsx_runtime, t as Root } from "../_libs/@radix-ui/react-label+[...].mjs";
import { O as Clock, _ as MapPin, b as LoaderCircle, k as CircleCheck, o as Send, p as MessageCircle, u as Phone, v as Mail, y as LogIn } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as whatsappLink, i as site, n as Button, r as cn } from "./router-C5CBHS1A.mjs";
import { t as Reveal } from "./Reveal-ibYPdWzH.mjs";
import { i as getServerFnById, r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-DBH_d4jF2.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CaLNg7ba.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var contactSchema = objectType({
	name: stringType().trim().min(2, { message: "Votre nom doit contenir au moins 2 caractères" }).max(100, { message: "Le nom doit faire moins de 100 caractères" }),
	email: stringType().trim().email({ message: "Adresse email invalide" }).max(255, { message: "L'email doit faire moins de 255 caractères" }),
	message: stringType().trim().min(10, { message: "Votre message doit contenir au moins 10 caractères" }).max(2e3, { message: "Le message doit faire moins de 2000 caractères" })
});
var sendContactMessage = createServerFn({ method: "POST" }).inputValidator((data) => contactSchema.parse(data)).handler(createSsrRpc("f4ab91175279d24fdd2724e2cfe526fe74336bbdfd18bfac38060247ff17403a"));
function ContactForm() {
	const send = useServerFn(sendContactMessage);
	const [values, setValues] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [pending, setPending] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	async function onSubmit(event) {
		event.preventDefault();
		const parsed = contactSchema.safeParse(values);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (key && !next[key]) next[key] = issue.message;
			}
			setErrors(next);
			return;
		}
		setErrors({});
		setPending(true);
		try {
			await send({ data: parsed.data });
			setSent(true);
			setValues({
				name: "",
				email: "",
				message: ""
			});
			toast.success("Message envoyé", { description: "Merci ! Nous vous répondons sous 24 heures ouvrées." });
		} catch {
			toast.error("Envoi impossible", { description: "Réessayez ou écrivez-nous directement sur WhatsApp." });
		} finally {
			setPending(false);
		}
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-success/30 bg-success/5 p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
				className: "mx-auto h-10 w-10 text-success",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 font-display text-lg font-bold",
				children: "Message bien reçu"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Merci de votre confiance. Notre équipe de Ziguinchor vous répond très vite."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				className: "mt-6",
				onClick: () => setSent(false),
				children: "Envoyer un autre message"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "space-y-5",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "name",
						children: "Nom complet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "name",
						name: "name",
						autoComplete: "name",
						maxLength: 100,
						value: values.name,
						onChange: (e) => setValues((v) => ({
							...v,
							name: e.target.value
						})),
						"aria-invalid": Boolean(errors.name),
						placeholder: "Ex. Aïssatou Diatta"
					}),
					errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-destructive",
						children: errors.name
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "email",
						children: "Email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "email",
						name: "email",
						type: "email",
						autoComplete: "email",
						maxLength: 255,
						value: values.email,
						onChange: (e) => setValues((v) => ({
							...v,
							email: e.target.value
						})),
						"aria-invalid": Boolean(errors.email),
						placeholder: "vous@exemple.com"
					}),
					errors.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-destructive",
						children: errors.email
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "message",
						children: "Message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "message",
						name: "message",
						rows: 5,
						maxLength: 2e3,
						value: values.message,
						onChange: (e) => setValues((v) => ({
							...v,
							message: e.target.value
						})),
						"aria-invalid": Boolean(errors.message),
						placeholder: "Dites-nous de quel véhicule il s'agit et où vous vous trouvez."
					}),
					errors.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-destructive",
						children: errors.message
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "submit",
				size: "lg",
				className: "w-full",
				disabled: pending,
				children: [pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
					className: "animate-spin",
					"aria-hidden": "true"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { "aria-hidden": "true" }), pending ? "Envoi en cours…" : "Envoyer le message"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "Vos informations restent confidentielles et servent uniquement à vous répondre."
			})
		]
	});
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "gps-grid border-b border-ink-border bg-ink py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs font-bold uppercase tracking-[0.18em] text-primary",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl font-extrabold text-ink-foreground sm:text-5xl",
						children: "Parlons de votre véhicule"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-ink-muted",
						children: "Écrivez-nous, appelez-nous ou passez à l'atelier : nous répondons sous 24 heures ouvrées."
					})
				]
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[1fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "rounded-2xl border border-border bg-card p-7 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-bold",
							children: "Nos coordonnées"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-5 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "mt-0.5 h-5 w-5 shrink-0 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold",
										children: "Atelier & bureau"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: site.address
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "mt-0.5 h-5 w-5 shrink-0 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold",
										children: "Téléphone / WhatsApp"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:+${site.phoneRaw}`,
										className: "text-muted-foreground hover:text-primary",
										children: site.phoneDisplay
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "mt-0.5 h-5 w-5 shrink-0 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${site.email}`,
										className: "text-muted-foreground hover:text-primary",
										children: site.email
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
										className: "mt-0.5 h-5 w-5 shrink-0 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold",
										children: "Horaires"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Lundi – samedi, 8h30 – 19h00 (GMT)"
									})] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "flex-1 bg-success text-success-foreground hover:bg-success/90",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsappLink(),
									target: "_blank",
									rel: "noreferrer noopener",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { "aria-hidden": "true" }), "WhatsApp direct"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "flex-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: site.appUrl,
									target: "_blank",
									rel: "noreferrer noopener",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { "aria-hidden": "true" }), "Se connecter"]
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 90,
					className: "rounded-2xl border border-ink-border bg-ink p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold text-ink-foreground",
						children: "Déjà client KAANTAA ?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-ink-muted",
						children: "Connectez-vous à votre espace pour suivre votre véhicule, consulter l'historique des trajets et gérer vos alertes."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 120,
				className: "rounded-2xl border border-border bg-card p-7 shadow-card sm:p-9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold",
						children: "Envoyer un message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Indiquez le type de véhicule et votre localité pour une réponse plus précise."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
					})
				]
			})]
		})
	})] });
}
//#endregion
export { ContactPage as component };
