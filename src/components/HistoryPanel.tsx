import { Clock, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Artwork } from '../lib/supabase';
import { ArtworkCard } from './ArtworkCard';

interface HistoryPanelProps {
  history: Artwork[];
  onClose: () => void;
  onSelectArtwork: (artwork: Artwork) => void;
}

export function HistoryPanel({ history, onClose, onSelectArtwork }: HistoryPanelProps) {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm">
      <div className="absolute inset-y-0 right-0 max-w-2xl w-full bg-white shadow-2xl">
        <div className="h-full flex flex-col">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Clock className="w-6 h-6" />
              <h2 className="text-2xl font-bold">
                {t({
                  fr: 'Mon Historique',
                  en: 'My History',
                  wo: 'Sama Historique'
                })}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {history.length === 0 ? (
              <div className="text-center py-20">
                <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">
                  {t({
                    fr: 'Aucun historique pour le moment',
                    en: 'No history yet',
                    wo: 'Historique amoul léegi'
                  })}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  {t({
                    fr: 'Les œuvres que vous consultez apparaîtront ici',
                    en: 'Artworks you view will appear here',
                    wo: 'Artworks bu nga xool dina nekk fii'
                  })}
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                {history.map((artwork) => (
                  <div key={artwork.id} onClick={() => onSelectArtwork(artwork)}>
                    <ArtworkCard
                      artwork={artwork}
                      onClick={() => onSelectArtwork(artwork)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
