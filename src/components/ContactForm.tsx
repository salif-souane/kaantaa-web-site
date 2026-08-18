import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, sendContactMessage } from "@/lib/contact.functions";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const send = useServerFn(sendContactMessage);
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = contactSchema.safeParse(values);

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
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
      setValues({ name: "", email: "", message: "" });
      toast.success("Message envoyé", {
        description: "Merci ! Nous vous répondons sous 24 heures ouvrées.",
      });
    } catch {
      toast.error("Envoi impossible", {
        description: "Réessayez ou écrivez-nous directement sur WhatsApp.",
      });
    } finally {
      setPending(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-success/30 bg-success/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-success" aria-hidden="true" />
        <h3 className="mt-4 font-display text-lg font-bold">Message bien reçu</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Merci de votre confiance. Notre équipe de Ziguinchor vous répond très vite.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="space-y-2">
        <Label htmlFor="name">Nom complet</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          maxLength={100}
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          aria-invalid={Boolean(errors.name)}
          placeholder="Ex. Aïssatou Diatta"
        />
        {errors.name ? <p className="text-sm text-destructive">{errors.name}</p> : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={255}
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          aria-invalid={Boolean(errors.email)}
          placeholder="vous@exemple.com"
        />
        {errors.email ? <p className="text-sm text-destructive">{errors.email}</p> : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          maxLength={2000}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          aria-invalid={Boolean(errors.message)}
          placeholder="Dites-nous de quel véhicule il s'agit et où vous vous trouvez."
        />
        {errors.message ? <p className="text-sm text-destructive">{errors.message}</p> : null}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={pending}>
        {pending ? (
          <Loader2 className="animate-spin" aria-hidden="true" />
        ) : (
          <Send aria-hidden="true" />
        )}
        {pending ? "Envoi en cours…" : "Envoyer le message"}
      </Button>
      <p className="text-xs text-muted-foreground">
        Vos informations restent confidentielles et servent uniquement à vous répondre.
      </p>
    </form>
  );
}
