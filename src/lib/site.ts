export const site = {
  name: "ENTREPRISE KAANTAA",
  shortName: "KAANTAA",
  slogan: "La protection qui roule avec toi",
  city: "Ziguinchor",
  address: "Quartier Kenya, Ziguinchor, Sénégal",
  email: "contact@kaantaa.sn",
  phoneDisplay: "+221 77 237 36 83",
  phoneRaw: "221772373683",
  appUrl: "https://kaantaa.vercel.app",
  founded: 2025,
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    linkedin: "https://linkedin.com",
  },
} as const;

export function whatsappLink(
  message = "Bonjour ENTREPRISE KAANTAA, je souhaite des informations sur vos trackers GPS.",
) {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/offres", label: "Offres" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;
