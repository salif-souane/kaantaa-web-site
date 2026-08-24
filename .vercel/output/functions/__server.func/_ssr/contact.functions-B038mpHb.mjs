import { r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-DBH_d4jF2.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.functions-B038mpHb.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
var sendContactMessage_createServerFn_handler = createServerRpc({
	id: "f4ab91175279d24fdd2724e2cfe526fe74336bbdfd18bfac38060247ff17403a",
	name: "sendContactMessage",
	filename: "src/lib/contact.functions.ts"
}, (opts) => sendContactMessage.__executeServer(opts));
var sendContactMessage = createServerFn({ method: "POST" }).inputValidator((data) => contactSchema.parse(data)).handler(sendContactMessage_createServerFn_handler, async ({ data }) => {
	const { createClient } = await import("../_libs/supabase__supabase-js.mjs").then((n) => n.n);
	const url = process.env["SUPABASE_URL"] ?? process.env["VITE_SUPABASE_URL"];
	const key = process.env["SUPABASE_PUBLISHABLE_KEY"] ?? process.env["VITE_SUPABASE_PUBLISHABLE_KEY"];
	if (!url || !key) throw new Error("Configuration du backend indisponible");
	const { error } = await createClient(url, key, { auth: {
		persistSession: false,
		autoRefreshToken: false
	} }).from("contact_messages").insert({
		name: data.name,
		email: data.email,
		message: data.message
	});
	if (error) throw new Error("Votre message n'a pas pu être enregistré. Réessayez dans un instant.");
	return { success: true };
});
//#endregion
export { sendContactMessage_createServerFn_handler };
