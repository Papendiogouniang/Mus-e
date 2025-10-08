/*
  # Add More Museum Artworks

  1. New Artworks Added
    - Peintures (Paintings)
    - Sculptures
    - Tapisseries (Tapestries)
    - Photographies
    - Installations

  2. Diverse Collection
    - Various artists and periods
    - Multilingual content
    - Different art forms represented
*/

INSERT INTO artworks (
  title_fr, title_en, title_wo,
  description_fr, description_en, description_wo,
  historical_context_fr, historical_context_en, historical_context_wo,
  artist, period, origin, materials, qr_code, image_url
) VALUES
(
  'Portrait d''Aimé Césaire',
  'Portrait of Aimé Césaire',
  'Portrait Aimé Césaire',
  'Peinture majestueuse capturant l''essence du poète martiniquais, figure emblématique de la négritude. Les couleurs vibrantes reflètent sa passion pour la culture africaine.',
  'Majestic painting capturing the essence of the Martinican poet, emblematic figure of negritude. Vibrant colors reflect his passion for African culture.',
  'Peinture bii dafa capture essence bu poète Aimé Césaire.',
  'Aimé Césaire (1913-2008) est l''un des fondateurs du mouvement de la négritude. Son œuvre a profondément marqué la pensée anticoloniale.',
  'Aimé Césaire (1913-2008) was one of the founders of the negritude movement. His work deeply marked anti-colonial thought.',
  'Aimé Césaire dafa fondateur bu négritude.',
  'Ernest Breleur',
  '2008',
  'Martinique',
  'Huile sur toile',
  'ART004',
  'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg'
),
(
  'Sculpture Nok',
  'Nok Sculpture',
  'Sculpture Nok',
  'Sculpture en terre cuite représentant l''extraordinaire savoir-faire de la civilisation Nok, l''une des plus anciennes cultures d''Afrique de l''Ouest.',
  'Terracotta sculpture representing the extraordinary craftsmanship of the Nok civilization, one of the oldest cultures in West Africa.',
  'Sculpture bii en terre cuite dafa waxoon savoir-faire bu Nok.',
  'La culture Nok (900 av. J.-C. - 200 ap. J.-C.) du Nigeria est célèbre pour ses sculptures en terre cuite témoignant d''une société complexe.',
  'The Nok culture (900 BC - 200 AD) of Nigeria is famous for its terracotta sculptures testifying to a complex society.',
  'Culture Nok (900 av. J.-C. - 200 ap. J.-C.) du Nigeria dafa célèbre.',
  'Artisan Nok',
  '500 av. J.-C.',
  'Nigeria',
  'Terre cuite',
  'ART005',
  'https://images.pexels.com/photos/8843050/pexels-photo-8843050.jpeg'
),
(
  'Tapisserie de Thiès',
  'Thiès Tapestry',
  'Tapisserie Thiès',
  'Magnifique tapisserie illustrant les scènes de la vie quotidienne sénégalaise avec des couleurs éclatantes et des motifs géométriques.',
  'Magnificent tapestry illustrating scenes from Senegalese daily life with bright colors and geometric patterns.',
  'Tapisserie bii dafa waxoon scènes bu vie quotidienne sénégalaise.',
  'La Manufacture de Thiès, créée en 1966, perpétue la tradition textile sénégalaise tout en innovant avec des artistes contemporains.',
  'The Thiès Manufactory, created in 1966, perpetuates Senegalese textile tradition while innovating with contemporary artists.',
  'Manufacture de Thiès créée en 1966.',
  'Manufacture de Thiès',
  '1970-2000',
  'Sénégal (Thiès)',
  'Laine, coton',
  'ART006',
  'https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg'
),
(
  'Photographie: Indépendance 1960',
  'Photography: Independence 1960',
  'Photographie: Indépendance 1960',
  'Photographie historique capturant le moment emblématique de l''indépendance. Les visages radieux symbolisent l''espoir d''une nouvelle ère de liberté.',
  'Historical photograph capturing the emblematic moment of independence. Radiant faces symbolize the hope of a new era of freedom.',
  'Photographie bii dafa capture moment emblématique bu indépendance.',
  'Les années 1960 ont marqué l''indépendance de nombreux pays africains. Ces moments furent documentés par des photographes témoins de l''Histoire.',
  'The 1960s marked the independence of many African countries. These moments were documented by photographers witnessing History.',
  'Années 1960 dañu marquer indépendance bu pays africains.',
  'Archives Nationales',
  '1960',
  'Afrique de l''Ouest',
  'Photographie N&B',
  'ART007',
  'https://images.pexels.com/photos/8612992/pexels-photo-8612992.jpeg'
),
(
  'Installation: Passages',
  'Installation: Passages',
  'Installation: Passages',
  'Installation immersive explorant les thèmes de la migration et de l''identité africaine à travers un parcours sensoriel mêlant sons et lumières.',
  'Immersive installation exploring themes of migration and African identity through a sensory journey mixing sounds and lights.',
  'Installation bii dafa explorer thèmes bu migration ak identité africaine.',
  'L''art contemporain africain aborde les questions de migration à travers des installations multimédias créant des espaces de dialogue.',
  'Contemporary African art addresses migration issues through multimedia installations creating spaces for dialogue.',
  'Art contemporain africain dafa aborder questions bu migration.',
  'Collectif d''artistes',
  '2020',
  'Multi-origine',
  'Installation multimédia',
  'ART008',
  'https://images.pexels.com/photos/3004909/pexels-photo-3004909.jpeg'
),
(
  'Masque Pende',
  'Pende Mask',
  'Masque Pende',
  'Masque raffiné illustrant la riche tradition de sculpture sur bois du peuple Pende. Utilisé lors de cérémonies d''initiation importantes.',
  'Refined mask illustrating the rich wood carving tradition of the Pende people. Used during important initiation ceremonies.',
  'Masque bii bu Pende dafa waxoon tradition bu sculpture ci bois.',
  'Les Pende de RD Congo sont réputés pour leurs masques expressifs. Chaque masque incarne un caractère ou un esprit spécifique.',
  'The Pende of DR Congo are renowned for their expressive masks. Each mask embodies a specific character or spirit.',
  'Pende bu RD Congo dañu connu pour masques yi expressifs.',
  'Sculpteur Pende',
  '19ème siècle',
  'RD Congo',
  'Bois, raphia, pigments',
  'ART009',
  'https://images.pexels.com/photos/4386346/pexels-photo-4386346.jpeg'
);
