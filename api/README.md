# MCN Museum API

Laravel backend API pour le Musée des Civilisations Noires.

## Endpoints API

### Base URL
```
http://localhost:8000/api/v1
```

### Artworks

#### Get All Artworks
```
GET /artworks
```

#### Get Single Artwork
```
GET /artworks/{id}
```

#### Get Localized Artwork
```
GET /artworks/{id}/locale/{locale}
```
Locales: `fr`, `en`, `wo`

#### Scan QR Code
```
POST /scan
Content-Type: application/json

{
  "qr_code": "ART001",
  "user_identifier": "optional-user-id"
}
```

### History

#### Track View
```
POST /history/track
Content-Type: application/json

{
  "artwork_id": "uuid",
  "user_identifier": "optional-user-id"
}
```

#### Get User History
```
GET /history?user_identifier={id}&limit={number}
```

### Health Check
```
GET /health
```

## Installation

1. Install dependencies:
```bash
cd api
composer install
```

2. Configure environment:
```bash
cp .env.example .env
php artisan key:generate
```

3. Run migrations:
```bash
php artisan migrate
```

4. Start server:
```bash
php artisan serve
```

## Database

L'API utilise Supabase PostgreSQL comme base de données.
