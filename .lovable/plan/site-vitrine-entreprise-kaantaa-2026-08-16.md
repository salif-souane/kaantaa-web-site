# Site vitrine — ENTREPRISE KAANTAA

Site vitrine professionnel, responsive et animé pour la startup de géolocalisation basée à Ziguinchor, avec l'identité rouge/noir/vert/blanc et le slogan « La protection qui roule avec toi ».

## Choix retenus (à ajuster si besoin)

- **Structure** : pages séparées (meilleur référencement) — `/`, `/services`, `/offres`, `/a-propos`, `/contact`, avec header et footer partagés.
- **Formulaire de contact** : messages enregistrés côté Lovable Cloud (base de données) + confirmation à l'écran. Un bouton WhatsApp direct est proposé à côté du formulaire.
- **Coordonnées provisoires** : WhatsApp `+221 77 000 00 00`, email `contact@kaantaa.sn`, co-fondatrice affichée comme « Cofondatrice & Responsable opérationnelle » avec un nom à remplacer. À me communiquer pour mise à jour.
- **Bouton « Se connecter »** : lien placeholder vers l'application, à remplacer par l'URL réelle.

## Pages et contenu

1. **Accueil** — héro plein écran (image de véhicule en mouvement générée + dégradé sombre), titre « Sécurisez vos véhicules en temps réel », sous-titre, CTA « Découvrir » et « Nous contacter » (WhatsApp) ; aperçu des 3 services, bandeau chiffres/valeurs, aperçu des offres, témoignages, appel à l'action final.
2. **Services** — 3 cartes détaillées : Tracking GPS (temps réel, historique, alertes vibration/débranchement/déplacement), Digitalisation (apps web, vidéos publicitaires, conseil ONG), Flotte & Transport (gestion de flotte, partage des courses, emplois jeunes).
3. **Offres** — Pack Moto 30 000 F et Pack Voiture 50 000 F (tracker + installation + 1 an), renouvellement annuel 10 000 F, abonnements organismes (moto 2 000 F/mois, voiture 3 000 F/mois), formules multi-années 2 ans / 3 ans / à vie. Tableau récapitulatif + CTA WhatsApp par offre.
4. **À propos** — histoire (créée en 2025, Ziguinchor), mission, valeurs (innovation, fiabilité, proximité, impact social), section Équipe : Salif (Fondateur & Développeur Full-stack) et la cofondatrice, avec mise en avant de l'autonomisation des femmes dans la tech.
5. **Contact** — adresse (Quartier Kenya, près de la caserne, Ziguinchor), téléphone/WhatsApp, email, horaires, lien vers l'application, formulaire (nom, email, message) validé.
6. **Footer** — logo K + nom, liens de navigation, réseaux sociaux (WhatsApp, Facebook, TikTok, Instagram, LinkedIn), mentions légales et copyright.

## Design

- Palette en tokens sémantiques : rouge #E3000F (primaire/accent), noir #1E1E1E (fond sombre, surfaces), vert #2E7D32 (succès, éléments « actif/protégé »), blanc.
- Typographie Montserrat (titres) + Inter (texte), chargées via `<link>` Google Fonts.
- Logo « K » stylisé généré en SVG/image transparente, utilisé dans le header, le footer et le favicon visuel.
- Sections alternant fond clair et fond noir profond, cartes à bord fin, halos rouges discrets, motif de tracé GPS en filigrane.
- Animations légères : apparitions au défilement, survols de cartes, pulsation du point « live » du tracker. Respect de `prefers-reduced-motion`.
- Mobile-first : menu hamburger, grilles qui passent en colonne, boutons pleine largeur, bouton WhatsApp flottant.

## Détails techniques

- Routes TanStack Start sous `src/routes/`, chacune avec son `head()` (title, description, og:title, og:description, canonical) ; JSON-LD `LocalBusiness` sur l'accueil et `Organization` au niveau racine.
- Composants réutilisables : `Header`, `Footer`, `Section`, `ServiceCard`, `OfferCard`, `TeamCard`, `Testimonials`, `WhatsAppButton`, `ContactForm`.
- Tokens de couleur ajoutés en oklch dans `src/styles.css` (`@theme inline`) ; aucune couleur codée en dur dans les composants.
- Formulaire : validation Zod côté client et serveur, envoi via une server function `createServerFn` vers une table `contact_messages` (Lovable Cloud) avec RLS — insertion publique autorisée, lecture réservée aux administrateurs. Activation de Lovable Cloud nécessaire.
- Images du héro et illustrations générées et importées en assets ES6.
- Textes entièrement en français, ton professionnel et chaleureux.
