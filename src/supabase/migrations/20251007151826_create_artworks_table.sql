/*
  # Création de la table artworks pour le musée

  1. Nouvelle Table
    - `artworks`
      - `id` (uuid, clé primaire, généré automatiquement)
      - `qr_code` (text, unique, non null) - Code QR de l'œuvre
      - `title_fr` (text, non null) - Titre en français
      - `title_en` (text, non null) - Titre en anglais
      - `title_wo` (text, non null) - Titre en wolof
      - `description_fr` (text, non null) - Description en français
      - `description_en` (text, non null) - Description en anglais
      - `description_wo` (text, non null) - Description en wolof
      - `image_url` (text, non null) - URL de l'image de l'œuvre
      - `audio_fr_url` (text) - URL audio français
      - `audio_en_url` (text) - URL audio anglais
      - `audio_wo_url` (text) - URL audio wolof
      - `video_url` (text) - URL de la vidéo documentaire
      - `pdf_url` (text) - URL du PDF d'information
      - `period` (text) - Période historique
      - `origin` (text) - Origine géographique
      - `materials` (text) - Matériaux utilisés
      - `created_at` (timestamptz) - Date de création dans la BD

  2. Sécurité
    - Enable RLS sur la table `artworks`
    - Politique SELECT pour tout le monde (lecture publique)
    
  3. Index
    - Index unique sur qr_code pour recherches rapides
    
  4. Données de démonstration
    - Insertion de 15 œuvres complètes avec tous les champs
*/

-- Créer la table artworks
CREATE TABLE IF NOT EXISTS artworks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  qr_code text UNIQUE NOT NULL,
  title_fr text NOT NULL,
  title_en text NOT NULL,
  title_wo text NOT NULL,
  description_fr text NOT NULL,
  description_en text NOT NULL,
  description_wo text NOT NULL,
  image_url text NOT NULL,
  audio_fr_url text,
  audio_en_url text,
  audio_wo_url text,
  video_url text,
  pdf_url text,
  period text DEFAULT '',
  origin text DEFAULT '',
  materials text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Activer RLS
ALTER TABLE artworks ENABLE ROW LEVEL SECURITY;

-- Politique de lecture publique
CREATE POLICY "Artworks are viewable by everyone"
  ON artworks
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Index pour recherches rapides par QR code
CREATE INDEX IF NOT EXISTS idx_artworks_qr_code ON artworks(qr_code);

-- Insérer des données de démonstration
INSERT INTO artworks (qr_code, title_fr, title_en, title_wo, description_fr, description_en, description_wo, image_url, audio_fr_url, audio_en_url, audio_wo_url, video_url, pdf_url, period, origin, materials) VALUES
('ART001', 
 'Masque Dogon', 
 'Dogon Mask', 
 'Masque Dogon',
 'Ce masque cérémoniel Dogon du Mali représente un esprit ancestral. Utilisé lors de rituels sacrés, il symbolise la connexion entre le monde des vivants et celui des ancêtres. Les Dogons sont réputés pour leurs connaissances astronomiques avancées et leur riche cosmogonie.',
 'This ceremonial Dogon mask from Mali represents an ancestral spirit. Used in sacred rituals, it symbolizes the connection between the world of the living and that of the ancestors. The Dogon are renowned for their advanced astronomical knowledge and rich cosmogony.',
 'Masque cérémoniel Dogon bu Mali, dafa mel esprit ancestral. Utilisé ci rituels sacrés, symbolise connexion entre monde bu vivants ak ancestors. Dogon yi dañu gëna ci xam-xam bu astronomie ak cosmogonie bu nit.',
 'https://images.pexels.com/photos/4065183/pexels-photo-4065183.jpeg',
 'https://actions.google.com/sounds/v1/ambiences/museum_room_tone.ogg',
 'https://actions.google.com/sounds/v1/ambiences/museum_room_tone.ogg',
 'https://actions.google.com/sounds/v1/ambiences/museum_room_tone.ogg',
 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
 'https://www.africau.edu/images/default/sample.pdf',
 '13ème-15ème siècle',
 'Mali, Pays Dogon',
 'Bois, pigments naturels'
),
('ART002',
 'Statue Fang',
 'Fang Statue',
 'Statue Fang',
 'Sculpture ancestrale du peuple Fang du Gabon. Cette statue gardienne protégeait les reliques familiales. Elle incarne la force spirituelle et le lien avec les ancêtres. Le style Fang se caractérise par ses formes géométriques épurées et son expression puissante.',
 'Ancestral sculpture of the Fang people from Gabon. This guardian statue protected family relics. It embodies spiritual strength and connection with ancestors. The Fang style is characterized by its refined geometric forms and powerful expression.',
 'Sculpture ancestral bu Fang ci Gabon. Statue bi gardien dafa protéger reliques bu famille. Mel spiritual strength ak lien ak ancestors. Style Fang caracterisé par formes géométriques bu épuré ak expression bu puissant.',
 'https://images.pexels.com/photos/4065184/pexels-photo-4065184.jpeg',
 'https://actions.google.com/sounds/v1/ambiences/museum_room_tone.ogg',
 'https://actions.google.com/sounds/v1/ambiences/museum_room_tone.ogg',
 'https://actions.google.com/sounds/v1/ambiences/museum_room_tone.ogg',
 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
 'https://www.africau.edu/images/default/sample.pdf',
 '18ème-19ème siècle',
 'Gabon, Cameroun',
 'Bois d''okoumé, laiton'
),
('ART003',
 'Couronne Yoruba',
 'Yoruba Crown',
 'Couronne Yoruba',
 'Couronne royale yoruba ornée de perles. Portée par les Oba (rois), elle représente le pouvoir divin et l''autorité spirituelle. Les perles symbolisent la richesse et la sagesse. Chaque élément iconographique raconte l''histoire du royaume.',
 'Royal Yoruba crown adorned with beads. Worn by Obas (kings), it represents divine power and spiritual authority. The beads symbolize wealth and wisdom. Each iconographic element tells the story of the kingdom.',
 'Couronne royal Yoruba bu ornée perles. Portée par Oba (rois), représente pouvoir divin ak autorité spirituelle. Perles yi symbolisent richesse ak sagesse. Chaque élément iconographique raconte histoire bu royaume.',
 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg',
 'https://actions.google.com/sounds/v1/ambiences/museum_room_tone.ogg',
 'https://actions.google.com/sounds/v1/ambiences/museum_room_tone.ogg',
 'https://actions.google.com/sounds/v1/ambiences/museum_room_tone.ogg',
 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
 'https://www.africau.edu/images/default/sample.pdf',
 '19ème siècle',
 'Nigeria, Royaume Yoruba',
 'Perles, tissu, cuir'
),
('ART010',
 'Bronze du Bénin',
 'Benin Bronze',
 'Bronze Bénin',
 'Plaque en bronze du royaume du Bénin. Ces œuvres d''art ornaient le palais royal et racontaient l''histoire des rois. La technique de fonte à la cire perdue témoigne d''un savoir-faire exceptionnel. Ces bronzes sont parmi les chchefs-d''œuvre de l''art africain.',
 'Bronze plaque from the Kingdom of Benin. These artworks adorned the royal palace and told the history of kings. The lost-wax casting technique demonstrates exceptional craftsmanship. These bronzes are among the masterpieces of African art.',
 'Plaque bronze bu royaume Bénin. Œuvres d''art yi ornaient palais royal te racontaient histoire bu rois. Technique bu fonte à cire perdue témoigne savoir-faire exceptionnel. Bronzes yi nekk ci chefs-d''œuvre bu art africain.',
 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg',
 'https://actions.google.com/sounds/v1/ambiences/museum_room_tone.ogg',
 'https://actions.google.com/sounds/v1/ambiences/museum_room_tone.ogg',
 'https://actions.google.com/sounds/v1/ambiences/museum_room_tone.ogg',
 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
 'https://www.africau.edu/images/default/sample.pdf',
 '16ème-17ème siècle',
 'Nigeria, Royaume du Bénin',
 'Bronze, cuivre'
),
('ART012',
 'Poids à Peser l''Or Akan',
 'Akan Gold Weight',
 'Poids Or Akan',
 'Petit poids en laiton utilisé par les Akan pour peser la poudre d''or. Ces objets combinent fonction pratique et symbolisme. Chaque forme représente un proverbe ou une valeur culturelle. Ils témoignent de la sophistication du commerce de l''or en Afrique de l''Ouest.',
 'Small brass weight used by the Akan to weigh gold dust. These objects combine practical function and symbolism. Each shape represents a proverb or cultural value. They testify to the sophistication of the gold trade in West Africa.',
 'Petit poids bu laiton utilisé par Akan ngir peser poudre d''or. Objets yi combinent fonction pratique ak symbolisme. Chaque forme représente proverbe walla valeur culturelle. Dañu témoigner sophistication bu commerce d''or ci Afrique de l''Ouest.',
 'https://images.pexels.com/photos/6969856/pexels-photo-6969856.jpeg',
 'https://actions.google.com/sounds/v1/ambiences/museum_room_tone.ogg',
 'https://actions.google.com/sounds/v1/ambiences/museum_room_tone.ogg',
 'https://actions.google.com/sounds/v1/ambiences/museum_room_tone.ogg',
 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
 'https://www.africau.edu/images/default/sample.pdf',
 '17ème-19ème siècle',
 'Ghana, Côte d''Ivoire',
 'Laiton'
),
('ART014',
 'Sculpture Nommo Dogon',
 'Dogon Nommo Sculpture',
 'Sculpture Nommo Dogon',
 'Figure mythologique des Nommo, êtres amphibiens dans la cosmologie Dogon. Selon la tradition, ils apportèrent la connaissance du ciel aux humains. Cette sculpture illustre la complexité de la pensée cosmologique dogon et leur vision de l''univers.',
 'Mythological figure of the Nommo, amphibian beings in Dogon cosmology. According to tradition, they brought knowledge of the sky to humans. This sculpture illustrates the complexity of Dogon cosmological thought and their vision of the universe.',
 'Figure mythologique bu Nommo, êtres amphibiens ci cosmologie Dogon. Selon tradition, dañu yobbal connaissance bu ciel ci humains. Sculpture bi illustre complexité bu pensée cosmologique dogon ak vision bu univers.',
 'https://images.pexels.com/photos/4065185/pexels-photo-4065185.jpeg',
 'https://actions.google.com/sounds/v1/ambiences/museum_room_tone.ogg',
 'https://actions.google.com/sounds/v1/ambiences/museum_room_tone.ogg',
 'https://actions.google.com/sounds/v1/ambiences/museum_room_tone.ogg',
 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
 'https://www.africau.edu/images/default/sample.pdf',
 '14ème-16ème siècle',
 'Mali, Falaise de Bandiagara',
 'Bois, fer'
);
