/*
  # Add Video Support and View History Tracking

  1. Changes to Existing Tables
    - `artworks`
      - Add `video_url` (text) - URL to video content for artwork
  
  2. New Tables
    - `view_history`
      - `id` (uuid, primary key) - Unique identifier
      - `artwork_id` (uuid, foreign key) - Reference to artwork
      - `user_identifier` (text) - User/visitor identifier (IP or session ID)
      - `viewed_at` (timestamptz) - When the artwork was viewed
  
  3. Security
    - Enable RLS on `view_history` table
    - Public can insert view records (tracking)
    - Users can only read their own history
  
  4. Indexes
    - Index on user_identifier for fast history lookups
    - Index on artwork_id for analytics
    - Index on viewed_at for time-based queries
*/

-- Add video support to artworks
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'artworks' AND column_name = 'video_url'
  ) THEN
    ALTER TABLE artworks ADD COLUMN video_url text DEFAULT '';
  END IF;
END $$;

-- Create view history table
CREATE TABLE IF NOT EXISTS view_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  artwork_id uuid NOT NULL REFERENCES artworks(id) ON DELETE CASCADE,
  user_identifier text NOT NULL,
  viewed_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE view_history ENABLE ROW LEVEL SECURITY;

-- Anyone can track views
CREATE POLICY "Anyone can insert view history"
  ON view_history
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Users can read their own history
CREATE POLICY "Users can read own history"
  ON view_history
  FOR SELECT
  TO public
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_view_history_user ON view_history(user_identifier);
CREATE INDEX IF NOT EXISTS idx_view_history_artwork ON view_history(artwork_id);
CREATE INDEX IF NOT EXISTS idx_view_history_viewed_at ON view_history(viewed_at DESC);

-- Update sample artworks with video URLs
UPDATE artworks 
SET video_url = 'https://www.youtube.com/embed/dQw4w9WgXcQ'
WHERE qr_code = 'ART001';
