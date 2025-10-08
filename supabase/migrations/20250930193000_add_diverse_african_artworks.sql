/*
  # Add Diverse African Civilization Artworks

  1. New Diverse Artworks
    - Benin Bronzes
    - Ethiopian Manuscripts
    - Ashanti Gold Weights
    - Kente Cloth
    - Dogon Sculptures
    - Makonde Carvings

  2. Features
    - Authentic African cultural heritage
    - Multilingual descriptions
    - Audio and video URLs for enhanced experience
*/

INSERT INTO artworks (
  title_fr, title_en, title_wo,
  description_fr, description_en, description_wo,
  historical_context_fr, historical_context_en, historical_context_wo,
  artist, period, origin, materials, qr_code, image_url, audio_url_fr, audio_url_en, audio_url_wo, video_url
) VALUES
(
  'Bronze du Bénin',
  'Benin Bronze',
  'Bronze Bénin',
  'Ces plaques en bronze ornaient autrefois les murs du palais royal du Bénin. Elles illustrent la sophistication artistique et technique du Royaume du Bénin aux 16ème-17ème siècles.',
  'These bronze plaques once adorned the walls of the royal palace of Benin. They illustrate the artistic and technical sophistication of the Kingdom of Benin in the 16th-17th centuries.',
  'Plaques bii en bronze dañu ornaient murs bu palais royal bu Bénin.',
  'Les Bronzes du Bénin sont parmi les plus belles œuvres d''art africaines. Pillés par les Britanniques en 1897, ils symbolisent aujourd''hui la question du retour des œuvres africaines.',
  'The Benin Bronzes are among the finest African artworks. Looted by the British in 1897, they now symbolize the issue of African art restitution.',
  'Bronzes bu Bénin dañu yam ci plus belles œuvres d''art africaines.',
  'Artisans Edo',
  '16ème-17ème siècle',
  'Nigeria (Royaume du Bénin)',
  'Bronze, laiton',
  'ART010',
  'https://images.pexels.com/photos/4386347/pexels-photo-4386347.jpeg',
  'https://example.com/audio/benin-fr.mp3',
  'https://example.com/audio/benin-en.mp3',
  'https://example.com/audio/benin-wo.mp3',
  'https://www.youtube.com/embed/dQw4w9WgXcQ'
),
(
  'Manuscrit Éthiopien Enluminé',
  'Illuminated Ethiopian Manuscript',
  'Manuscrit Éthiopien',
  'Manuscrit religieux éthiopien richement enluminé, témoignant de la longue tradition chrétienne d''Éthiopie et de son patrimoine littéraire exceptionnel.',
  'Richly illuminated Ethiopian religious manuscript, testifying to Ethiopia''s long Christian tradition and exceptional literary heritage.',
  'Manuscrit religieux éthiopien bu richement enluminé.',
  'L''Éthiopie possède l''une des plus anciennes traditions chrétiennes au monde. Ses manuscrits, souvent illustrés à la main, sont des trésors d''art et de spiritualité.',
  'Ethiopia has one of the oldest Christian traditions in the world. Its manuscripts, often hand-illustrated, are treasures of art and spirituality.',
  'Éthiopie dafa am tradition chrétienne bu mag ci monde.',
  'Scribes éthiopiens',
  '17ème-18ème siècle',
  'Éthiopie',
  'Parchemin, encre, pigments',
  'ART011',
  'https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg',
  'https://example.com/audio/ethiopian-fr.mp3',
  'https://example.com/audio/ethiopian-en.mp3',
  'https://example.com/audio/ethiopian-wo.mp3',
  ''
),
(
  'Poids à Peser l''Or Ashanti',
  'Ashanti Gold Weight',
  'Poids Or Ashanti',
  'Ces petites sculptures en laiton servaient à mesurer la poudre d''or. Chaque poids raconte une histoire ou transmet un proverbe, faisant de ces objets utilitaires de véritables œuvres d''art.',
  'These small brass sculptures were used to measure gold dust. Each weight tells a story or conveys a proverb, making these utilitarian objects true works of art.',
  'Sculptures bii ci laiton dañu utiliser pour mesurer poudre d''or.',
  'Le peuple Ashanti du Ghana a développé un système complexe de poids pour le commerce de l''or. Ces objets allient utilité et beauté, fonction et symbolisme.',
  'The Ashanti people of Ghana developed a complex system of weights for gold trade. These objects combine utility and beauty, function and symbolism.',
  'Peuple Ashanti bu Ghana dafa développer système bu poids pour commerce d''or.',
  'Artisans Ashanti',
  '18ème-19ème siècle',
  'Ghana (Royaume Ashanti)',
  'Laiton coulé à la cire perdue',
  'ART012',
  'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg',
  'https://example.com/audio/ashanti-fr.mp3',
  'https://example.com/audio/ashanti-en.mp3',
  'https://example.com/audio/ashanti-wo.mp3',
  'https://www.youtube.com/embed/dQw4w9WgXcQ'
),
(
  'Tissu Kente',
  'Kente Cloth',
  'Tissu Kente',
  'Le Kente est un tissu de soie et coton tissé à la main, aux motifs géométriques colorés. Chaque motif et couleur possède une signification particulière, faisant du Kente un langage visuel riche.',
  'Kente is a hand-woven silk and cotton fabric with colorful geometric patterns. Each pattern and color has a particular meaning, making Kente a rich visual language.',
  'Kente moo ngi tissu bu soie ak coton tissé ak loxo.',
  'Originaire du peuple Akan du Ghana, le Kente était traditionnellement réservé à la royauté. Il est devenu un symbole de fierté africaine dans le monde entier.',
  'Originally from the Akan people of Ghana, Kente was traditionally reserved for royalty. It has become a symbol of African pride worldwide.',
  'Kente dafa jekka ci peuple Akan bu Ghana.',
  'Tisserands Akan',
  'Traditionnel et contemporain',
  'Ghana',
  'Soie, coton',
  'ART013',
  'https://images.pexels.com/photos/6101959/pexels-photo-6101959.jpeg',
  'https://example.com/audio/kente-fr.mp3',
  'https://example.com/audio/kente-en.mp3',
  'https://example.com/audio/kente-wo.mp3',
  ''
),
(
  'Sculpture Dogon',
  'Dogon Sculpture',
  'Sculpture Dogon',
  'Les Dogon du Mali sont réputés pour leurs sculptures sur bois représentant des figures ancestrales et mythologiques. Cette pièce incarne la spiritualité profonde du peuple Dogon.',
  'The Dogon of Mali are renowned for their wood carvings depicting ancestral and mythological figures. This piece embodies the deep spirituality of the Dogon people.',
  'Dogon bu Mali dañu connu pour sculptures yi ci bois.',
  'Le peuple Dogon possède un système de croyances complexe et une riche tradition artistique. Leurs sculptures sont utilisées dans des rituels importants et incarnent leurs mythes fondateurs.',
  'The Dogon people have a complex belief system and rich artistic tradition. Their sculptures are used in important rituals and embody their founding myths.',
  'Peuple Dogon dafa am système de croyances bu complexe.',
  'Sculpteurs Dogon',
  '19ème-20ème siècle',
  'Mali (Falaise de Bandiagara)',
  'Bois sculpté',
  'ART014',
  'https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg',
  'https://example.com/audio/dogon-fr.mp3',
  'https://example.com/audio/dogon-en.mp3',
  'https://example.com/audio/dogon-wo.mp3',
  'https://www.youtube.com/embed/dQw4w9WgXcQ'
),
(
  'Sculpture Makonde',
  'Makonde Carving',
  'Sculpture Makonde',
  'Les sculptures Makonde de Tanzanie et Mozambique sont célèbres pour leur style unique représentant des figures entrelacées. Elles incarnent les liens familiaux et communautaires.',
  'Makonde sculptures from Tanzania and Mozambique are famous for their unique style representing intertwined figures. They embody family and community bonds.',
  'Sculptures Makonde bu Tanzanie ak Mozambique dañu célèbres.',
  'L''art Makonde a gagné une reconnaissance internationale dans les années 1950-60. Les artistes Makonde continuent d''innover tout en respectant les traditions ancestrales.',
  'Makonde art gained international recognition in the 1950s-60s. Makonde artists continue to innovate while respecting ancestral traditions.',
  'Art Makonde dafa gagner reconnaissance internationale.',
  'Artistes Makonde',
  '20ème siècle',
  'Tanzanie/Mozambique',
  'Bois d''ébène sculpté',
  'ART015',
  'https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg',
  'https://example.com/audio/makonde-fr.mp3',
  'https://example.com/audio/makonde-en.mp3',
  'https://example.com/audio/makonde-wo.mp3',
  ''
);
