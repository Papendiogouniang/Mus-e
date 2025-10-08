import { useLanguage } from '../contexts/LanguageContext';
import { Artwork } from '../lib/supabase';
import { QrCode, MapPin } from 'lucide-react';

interface ArtworkCardProps {
  artwork: Artwork;
  onClick: () => void;
}

export function ArtworkCard({ artwork, onClick }: ArtworkCardProps) {
  const { language } = useLanguage();

  const title = artwork[`title_${language}` as keyof Artwork] as string || artwork.title_fr;
  const description = artwork[`description_${language}` as keyof Artwork] as string || artwork.description_fr;

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden bg-gray-100">
        {artwork.image_url ? (
          <img
            src={artwork.image_url}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100">
            <QrCode className="w-16 h-16 text-amber-400" />
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-amber-900">
          {artwork.qr_code}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>

        {artwork.artist && (
          <p className="text-sm text-amber-700 font-medium mb-2">
            {artwork.artist}
          </p>
        )}

        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500">
          {artwork.origin && (
            <div className="flex items-center space-x-1">
              <MapPin className="w-3 h-3" />
              <span>{artwork.origin}</span>
            </div>
          )}
          {artwork.period && (
            <span className="bg-gray-100 px-2 py-1 rounded">{artwork.period}</span>
          )}
        </div>
      </div>
    </div>
  );
}
