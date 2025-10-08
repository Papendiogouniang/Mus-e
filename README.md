# Musée des Civilisations Noires - Application Digitale

Solution complète pour le hackathon Dakar Slush'D 2025.

## Fonctionnalités

### React Frontend
- Scan de codes QR pour accès instantané aux œuvres
- Support multilingue (Français, Anglais, Wolof)
- Fiches détaillées avec texte, audio et vidéo
- Historique de consultation personnalisé
- Interface responsive (mobile, tablette, desktop)
- Design moderne avec animations fluides

### Laravel API Backend
- API RESTful complète
- Endpoints pour artworks, QR scanning, historique
- Support de la localisation
- Tracking des vues

### Base de données Supabase
- Table `artworks` avec contenu multilingue
- Table `view_history` pour le tracking
- Row Level Security (RLS) activé
- 3 œuvres exemples pré-remplies

## Structure du projet

```
project/
├── src/                      # React frontend
│   ├── components/          # Composants React
│   ├── contexts/            # Context API (langue)
│   └── lib/                 # Utilitaires et Supabase
├── api/                      # Laravel backend
│   ├── app/
│   │   ├── Models/          # Modèles Eloquent
│   │   └── Http/Controllers/
│   └── routes/              # Routes API
└── supabase/
    └── migrations/          # Migrations DB

```

## Démarrage rapide

### Frontend (React + Vite)
```bash
npm install
npm run dev
```

### Backend (Laravel)
```bash
cd api
composer install
php artisan serve
```

## Exemples de codes QR

- ART001 - Masque Gelede (avec vidéo)
- ART002 - Statue de Reine Mère
- ART003 - Tissu Bogolan

## Technologies

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Laravel 10, PHP 8.1+
- **Base de données**: Supabase (PostgreSQL)
- **Icônes**: Lucide React

## Architecture

L'application peut fonctionner avec ou sans le backend Laravel:
- **Mode direct**: React communique directement avec Supabase
- **Mode API**: React utilise le backend Laravel comme intermédiaire

## Fonctionnalités clés

1. **QR Code Scanning**: Entrée manuelle du code QR pour accès direct
2. **Multilingue**: Français, Anglais, Wolof avec traductions complètes
3. **Médias riches**: Images, audio et vidéo pour chaque œuvre
4. **Historique**: Tracking automatique des œuvres consultées
5. **Responsive**: Optimisé pour tous les écrans
6. **Accessible**: Audio descriptions et interface inclusive

## API Endpoints

### Artworks
- `GET /api/v1/artworks` - Liste toutes les œuvres
- `GET /api/v1/artworks/{id}` - Détail d'une œuvre
- `GET /api/v1/artworks/{id}/locale/{locale}` - Contenu localisé

### QR Scanning
- `POST /api/v1/scan` - Scanner un code QR

### Historique
- `POST /api/v1/history/track` - Enregistrer une vue
- `GET /api/v1/history` - Récupérer l'historique utilisateur

## Configuration

Les variables d'environnement sont déjà configurées dans `.env` pour Supabase.

## Équipe

Projet développé pour le hackathon Dakar Slush'D 2025 organisé par Sen Startup.
