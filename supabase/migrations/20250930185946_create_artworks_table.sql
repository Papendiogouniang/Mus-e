/*
  # Create Artworks Database Schema
  
  1. New Tables
    - `artworks`
      - `id` (uuid, primary key) - Unique identifier for each artwork
      - `title_fr` (text) - French title
      - `title_en` (text) - English title
      - `title_wo` (text) - Wolof title
      - `description_fr` (text) - French description
      - `description_en` (text) - English description
      - `description_wo` (text) - Wolof description
      - `historical_context_fr` (text) - French historical context
      - `historical_context_en` (text) - English historical context
      - `historical_context_wo` (text) - Wolof historical context
      - `artist` (text) - Artist name
      - `period` (text) - Time period
      - `origin` (text) - Geographic origin
      - `materials` (text) - Materials used
      - `image_url` (text) - URL to artwork image
      - `audio_url_fr` (text) - French audio description URL
      - `audio_url_en` (text) - English audio description URL
      - `audio_url_wo` (text) - Wolof audio description URL
      - `qr_code` (text, unique) - QR code identifier
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp
  
  2. Security
    - Enable RLS on `artworks` table
    - Add policy for public read access (museum content is public)
    - Add policy for authenticated admin users to insert/update artworks
  
  3. Indexes
    - Index on qr_code for fast QR code lookups
    - Index on created_at for sorting
*/

CREATE TABLE IF NOT EXISTS artworks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_fr text NOT NULL,
  title_en text NOT NULL,
  title_wo text DEFAULT '',
  description_fr text NOT NULL,
  description_en text NOT NULL,
  description_wo text DEFAULT '',
  historical_context_fr text DEFAULT '',
  historical_context_en text DEFAULT '',
  historical_context_wo text DEFAULT '',
  artist text DEFAULT '',
  period text DEFAULT '',
  origin text DEFAULT '',
  materials text DEFAULT '',
  image_url text DEFAULT '',
  audio_url_fr text DEFAULT '',
  audio_url_en text DEFAULT '',
  audio_url_wo text DEFAULT '',
  qr_code text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE artworks ENABLE ROW LEVEL SECURITY;

-- Public can view all artworks
CREATE POLICY "Anyone can view artworks"
  ON artworks
  FOR SELECT
  TO public
  USING (true);

-- Authenticated users can insert artworks (for admin/curator access)
CREATE POLICY "Authenticated users can insert artworks"
  ON artworks
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Authenticated users can update artworks
CREATE POLICY "Authenticated users can update artworks"
  ON artworks
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_artworks_qr_code ON artworks(qr_code);
CREATE INDEX IF NOT EXISTS idx_artworks_created_at ON artworks(created_at DESC);

-- Insert sample artworks for demonstration
INSERT INTO artworks (
  title_fr, title_en, title_wo,
  description_fr, description_en, description_wo,
  historical_context_fr, historical_context_en, historical_context_wo,
  artist, period, origin, materials, qr_code, image_url
) VALUES 
(
  'Masque Gelede',
  'Gelede Mask',
  'Gelede Mask',
  'Le masque Gelede est une œuvre emblématique de la culture Yoruba, utilisé lors de cérémonies rituelles pour honorer les mères et les ancêtres féminins. Ce masque coloré représente la dualité entre le monde visible et invisible.',
  'The Gelede mask is an iconic work of Yoruba culture, used in ritual ceremonies to honor mothers and female ancestors. This colorful mask represents the duality between the visible and invisible world.',
  'Gelede mask bi dafa yi ñu Yoruba, ñu ko jëfandikoo ci ceremonial yu bari ngir honoré ñëñ ak ancestres yu jigéen.',
  'Les masques Gelede sont apparus au 18ème siècle parmi le peuple Yoruba du Nigéria et du Bénin. Ils sont au cœur d''une tradition qui célèbre le pouvoir spirituel des femmes âgées.',
  'Gelede masks emerged in the 18th century among the Yoruba people of Nigeria and Benin. They are at the heart of a tradition that celebrates the spiritual power of elderly women.',
  'Gelede mask yi daje ci 18ème siècle ci Yoruba yu Nigéria ak Bénin.',
  'Artisan Yoruba',
  '18ème-19ème siècle',
  'Nigéria / Bénin',
  'Bois sculpté, pigments naturels',
  'ART001',
  'https://images.pexels.com/photos/4079238/pexels-photo-4079238.jpeg'
),
(
  'Statue de Reine Mère',
  'Queen Mother Statue',
  'Statue bu Reine Mère',
  'Cette statue majestueuse représente une reine mère du royaume du Bénin. Elle incarne le pouvoir, la sagesse et l''autorité maternelle dans la société africaine précoloniale.',
  'This majestic statue represents a queen mother from the Kingdom of Benin. It embodies power, wisdom and maternal authority in pre-colonial African society.',
  'Statue bii nees na reine mère bu royaume bu Bénin. Dafa waxoon ci boroom, xam-xam ak autorité bu ñëñ.',
  'Les reines mères jouaient un rôle politique crucial dans le royaume du Bénin (actuel Nigéria), servant de conseillères auprès du roi et exerçant une influence considérable.',
  'Queen mothers played a crucial political role in the Kingdom of Benin (present-day Nigeria), serving as advisors to the king and wielding considerable influence.',
  'Reines mères yi amoon nañu rôle bu politique ci royaume bu Bénin.',
  'Sculpteur du Bénin',
  '16ème-17ème siècle',
  'Royaume du Bénin (Nigéria)',
  'Bronze, cuivre',
  'ART002',
  'https://images.pexels.com/photos/8728558/pexels-photo-8728558.jpeg'
),
(
  'Tissu Bogolan',
  'Bogolan Cloth',
  'Toolu Bogolan',
  'Le Bogolan est un tissu traditionnel malien teint avec de la boue fermentée. Chaque motif géométrique raconte une histoire et transmet des messages culturels profonds.',
  'Bogolan is a traditional Malian fabric dyed with fermented mud. Each geometric pattern tells a story and conveys deep cultural messages.',
  'Bogolan moo ngi toolu bu tradition bu Mali bu teint ak boue bu fermenté. Bés bi dessin géométrique am na histoire.',
  'Originaire du Mali, le Bogolan est fabriqué depuis des siècles par les peuples Bambara et Dogon. Il était traditionnellement porté par les chasseurs et lors de cérémonies importantes.',
  'Originating from Mali, Bogolan has been made for centuries by the Bambara and Dogon peoples. It was traditionally worn by hunters and during important ceremonies.',
  'Bogolan daje ci Mali, Bambara ak Dogon ñu ko defee ñu bariwoon.',
  'Artisans Bambara',
  'Tradition séculaire',
  'Mali',
  'Coton, boue fermentée, teintures végétales',
  'ART003',
  'https://images.pexels.com/photos/6069101/pexels-photo-6069101.jpeg'
);
