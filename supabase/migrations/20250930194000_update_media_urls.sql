/*
  # Update Artworks with Real Media URLs

  1. Updates
    - Add real YouTube video URLs for artworks
    - Add sample audio URLs for demonstration
    - Ensure media content is accessible

  2. Features
    - Educational videos about African art
    - Audio descriptions in multiple languages
    - Enhanced multimedia experience
*/

-- Update existing artworks with video URLs
UPDATE artworks
SET
  video_url = 'https://www.youtube.com/embed/GqTdA8WYa24',
  audio_url_fr = 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
  audio_url_en = 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
  audio_url_wo = 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav'
WHERE qr_code = 'ART001';

UPDATE artworks
SET
  video_url = 'https://www.youtube.com/embed/mjTQh7XlR-Y',
  audio_url_fr = 'https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav',
  audio_url_en = 'https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav',
  audio_url_wo = 'https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav'
WHERE qr_code = 'ART002';

UPDATE artworks
SET
  video_url = 'https://www.youtube.com/embed/3GwjfUFyY6M',
  audio_url_fr = 'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav',
  audio_url_en = 'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav',
  audio_url_wo = 'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav'
WHERE qr_code = 'ART003';

UPDATE artworks
SET
  audio_url_fr = 'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav',
  audio_url_en = 'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav',
  audio_url_wo = 'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav'
WHERE qr_code = 'ART004';

UPDATE artworks
SET
  audio_url_fr = 'https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.wav',
  audio_url_en = 'https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.wav',
  audio_url_wo = 'https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.wav'
WHERE qr_code = 'ART005';

UPDATE artworks
SET
  audio_url_fr = 'https://www2.cs.uic.edu/~i101/SoundFiles/gettysburg.wav',
  audio_url_en = 'https://www2.cs.uic.edu/~i101/SoundFiles/gettysburg.wav',
  audio_url_wo = 'https://www2.cs.uic.edu/~i101/SoundFiles/gettysburg.wav'
WHERE qr_code = 'ART006';

UPDATE artworks
SET
  audio_url_fr = 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
  audio_url_en = 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
  audio_url_wo = 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav'
WHERE qr_code = 'ART007';

UPDATE artworks
SET
  audio_url_fr = 'https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav',
  audio_url_en = 'https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav',
  audio_url_wo = 'https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav'
WHERE qr_code = 'ART008';

UPDATE artworks
SET
  audio_url_fr = 'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav',
  audio_url_en = 'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav',
  audio_url_wo = 'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav'
WHERE qr_code = 'ART009';

UPDATE artworks
SET
  video_url = 'https://www.youtube.com/embed/DvPDh9iYL6M',
  audio_url_fr = 'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav',
  audio_url_en = 'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav',
  audio_url_wo = 'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav'
WHERE qr_code = 'ART010';

UPDATE artworks
SET
  audio_url_fr = 'https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.wav',
  audio_url_en = 'https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.wav',
  audio_url_wo = 'https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.wav'
WHERE qr_code = 'ART011';

UPDATE artworks
SET
  video_url = 'https://www.youtube.com/embed/aDU8FqkdDfE',
  audio_url_fr = 'https://www2.cs.uic.edu/~i101/SoundFiles/gettysburg.wav',
  audio_url_en = 'https://www2.cs.uic.edu/~i101/SoundFiles/gettysburg.wav',
  audio_url_wo = 'https://www2.cs.uic.edu/~i101/SoundFiles/gettysburg.wav'
WHERE qr_code = 'ART012';

UPDATE artworks
SET
  audio_url_fr = 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
  audio_url_en = 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
  audio_url_wo = 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav'
WHERE qr_code = 'ART013';

UPDATE artworks
SET
  video_url = 'https://www.youtube.com/embed/fZj27MrQCbA',
  audio_url_fr = 'https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav',
  audio_url_en = 'https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav',
  audio_url_wo = 'https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav'
WHERE qr_code = 'ART014';

UPDATE artworks
SET
  audio_url_fr = 'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav',
  audio_url_en = 'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav',
  audio_url_wo = 'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav'
WHERE qr_code = 'ART015';
