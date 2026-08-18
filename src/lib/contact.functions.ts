import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Votre nom doit contenir au moins 2 caractères" })
    .max(100, { message: "Le nom doit faire moins de 100 caractères" }),
  email: z
    .string()
    .trim()
    .email({ message: "Adresse email invalide" })
    .max(255, { message: "L'email doit faire moins de 255 caractères" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Votre message doit contenir au moins 10 caractères" })
    .max(2000, { message: "Le message doit faire moins de 2000 caractères" }),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { createClient } = await import("@supabase/supabase-js");

    const url = process.env["SUPABASE_URL"] ?? process.env["VITE_SUPABASE_URL"];
    const key =
      process.env["SUPABASE_PUBLISHABLE_KEY"] ?? process.env["VITE_SUPABASE_PUBLISHABLE_KEY"];

    if (!url || !key) {
      throw new Error("Configuration du backend indisponible");
    }

    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { error } = await supabase.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      message: data.message,
    });

    if (error) {
      throw new Error("Votre message n'a pas pu être enregistré. Réessayez dans un instant.");
    }

    return { success: true as const };
  });
