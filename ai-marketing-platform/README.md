# IA Marketing Pro

Plateforme de marketing digital alimentée par l'IA avec tarification compétitive pour le marché nord-américain.

## Fonctionnalités

- **Moteur de Devis Automatisé**: Calcul en temps réel basé sur l'analyse des prix du marché
- **Services Marketing IA**:
  - Publicité sur réseaux sociaux (Facebook, Instagram, LinkedIn)
  - SEO et marketing de contenu
  - Marketing par courriel automatisé
  - Analytique et reporting en temps réel
  - Gestion de marque et réputation
  - Packs complets avec tarification avantageuse

- **Espace Client Personnel**:
  - Tableau de bord avec métriques en temps réel
  - Gestion des projets et campagnes
  - Signature électronique de contrats
  - Gestion des paiements intégrée
  - Historique et rapports détaillés

## Technologies

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Paiements**: Stripe (intégration prévue)
- **Authentification**: NextAuth.js (intégration prévue)
- **Déploiement**: Vercel

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir l'application.

## Déploiement sur Vercel

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-6dc7aae0
```

## Structure du Projet

```
ai-marketing-platform/
├── app/
│   ├── page.tsx              # Page d'accueil
│   ├── quote/                # Générateur de devis
│   ├── signup/               # Inscription
│   ├── login/                # Connexion
│   ├── dashboard/            # Espace client
│   ├── layout.tsx            # Layout principal
│   └── globals.css           # Styles globaux
├── public/                   # Assets statiques
├── package.json
└── next.config.js
```

## Tarification Compétitive

Les prix sont basés sur une analyse approfondie du marché québécois et nord-américain:

- **-40%** inférieur à la moyenne du marché
- Réductions automatiques pour forfaits groupés
- Tarification transparente et prévisible
- Aucun frais caché

## Support

Pour toute question ou support, contactez-nous via la plateforme.
