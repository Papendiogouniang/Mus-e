import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase environment variables are not set. Please check your .env file.');
}

export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export type Artwork = {
  id: string;
  title_fr: string;
  title_en: string;
  title_wo: string;
  description_fr: string;
  description_en: string;
  description_wo: string;
  historical_context_fr?: string;
  historical_context_en?: string;
  historical_context_wo?: string;
  artist?: string;
  period?: string;
  origin?: string;
  materials?: string;
  image_url: string;
  audio_fr_url?: string;
  audio_en_url?: string;
  audio_wo_url?: string;
  video_url?: string;
  pdf_url?: string;
  qr_code: string;
  created_at: string;
};

export type ViewHistory = {
  id: string;
  artwork_id: string;
  user_identifier: string;
  viewed_at: string;
};

function getUserIdentifier(): string {
  let userId = localStorage.getItem('mcn_user_id');
  if (!userId) {
    userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('mcn_user_id', userId);
  }
  return userId;
}

export async function trackArtworkView(artworkId: string) {
  if (!supabase) return;
  try {
    const userId = getUserIdentifier();
    await supabase.from('view_history').insert({
      artwork_id: artworkId,
      user_identifier: userId,
      viewed_at: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error tracking view:', error);
  }
}

export async function getUserHistory(limit: number = 20): Promise<Artwork[]> {
  if (!supabase) return [];
  try {
    const userId = getUserIdentifier();
    const { data, error } = await supabase
      .from('view_history')
      .select(`
        artwork_id,
        viewed_at,
        artworks (*)
      `)
      .eq('user_identifier', userId)
      .order('viewed_at', { ascending: false })
      .limit(limit);

    if (error) throw error;

    return data
      ?.map((item: any) => item.artworks)
      .filter((artwork: any) => artwork !== null) || [];
  } catch (error) {
    console.error('Error fetching history:', error);
    return [];
  }
}
