import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { QRScanner } from '../components/QRScanner';
import { ArtworkCard } from '../components/ArtworkCard';
import { ArtworkDetail } from '../components/ArtworkDetail';
import { HistoryPanel } from '../components/HistoryPanel';
import { Artwork } from '../lib/supabase';
import { getAllArtworks, getArtworkByQRCode } from '../lib/mockData';
import { Loader2, AlertCircle, Clock, ArrowLeft } from 'lucide-react';

interface CollectionPageProps {
  onNavigateHome: () => void;
}

export function CollectionPage({ onNavigateHome }: CollectionPageProps) {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState<Artwork[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    fetchArtworks();
    loadHistory();
  }, []);

  const loadHistory = () => {
    const historyIds = JSON.parse(localStorage.getItem('artwork_history') || '[]');
    const historyArtworks = historyIds
      .map((id: string) => artworks.find(a => a.id === id))
      .filter((a: Artwork | undefined): a is Artwork => a !== undefined);
    setHistory(historyArtworks);
  };

  const fetchArtworks = async () => {
    try {
      setLoading(true);
      setError(null);
      setTimeout(() => {
        const mockArtworks = getAllArtworks();
        setArtworks(mockArtworks);
        setLoading(false);
      }, 500);
    } catch (err) {
      console.error('Error fetching artworks:', err);
      setError(t({
        fr: 'Erreur lors du chargement des œuvres',
        en: 'Error loading artworks',
        wo: 'Erreur bi chargement bu artworks'
      }));
      setLoading(false);
    }
  };

  const handleQRScan = async (qrCode: string) => {
    try {
      setError(null);
      const artwork = getArtworkByQRCode(qrCode);

      if (artwork) {
        setSelectedArtwork(artwork);
        const historyIds = JSON.parse(localStorage.getItem('artwork_history') || '[]');
        if (!historyIds.includes(artwork.id)) {
          historyIds.unshift(artwork.id);
          localStorage.setItem('artwork_history', JSON.stringify(historyIds.slice(0, 20)));
        }
      } else {
        setError(t({
          fr: 'Code QR non trouvé. Veuillez réessayer.',
          en: 'QR code not found. Please try again.',
          wo: 'QR code amoul. Jéema jeema.'
        }));
      }
    } catch (err) {
      console.error('Error scanning QR code:', err);
      setError(t({
        fr: 'Erreur lors de la recherche',
        en: 'Search error',
        wo: 'Erreur ci recherche'
      }));
    }
  };

  const handleArtworkSelect = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    const historyIds = JSON.parse(localStorage.getItem('artwork_history') || '[]');
    if (!historyIds.includes(artwork.id)) {
      historyIds.unshift(artwork.id);
      localStorage.setItem('artwork_history', JSON.stringify(historyIds.slice(0, 20)));
    }
    loadHistory();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50 to-orange-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onNavigateHome}
          className="mb-6 flex items-center space-x-2 text-gray-700 hover:text-amber-600 font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>
            {t({
              fr: 'Retour à l\'accueil',
              en: 'Back to home',
              wo: 'Dellu ci accueil'
            })}
          </span>
        </button>

        <div className="mb-8">
          <QRScanner onScan={handleQRScan} />
        </div>

        <div className="mb-6 flex justify-end">
          <button
            onClick={() => setShowHistory(true)}
            className="flex items-center space-x-2 bg-white hover:bg-gray-50 border border-amber-300 text-amber-700 px-4 py-2 rounded-lg font-medium transition-colors shadow-sm"
          >
            <Clock className="w-5 h-5" />
            <span>
              {t({
                fr: 'Mon Historique',
                en: 'My History',
                wo: 'Sama Historique'
              })}
            </span>
            {history.length > 0 && (
              <span className="bg-amber-600 text-white text-xs px-2 py-1 rounded-full">
                {history.length}
              </span>
            )}
          </button>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <p className="text-red-800">{error}</p>
          </div>
        )}

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {t({
              fr: 'Collection du Musée',
              en: 'Museum Collection',
              wo: 'Collection bu Musée'
            })}
          </h2>
          <p className="text-gray-600">
            {t({
              fr: 'Explorez notre collection d\'œuvres emblématiques des civilisations noires',
              en: 'Explore our collection of iconic works from Black civilizations',
              wo: 'Xool sa collection bu artworks bu civilisations noires'
            })}
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-amber-600 animate-spin" />
          </div>
        ) : artworks.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow">
            <p className="text-gray-500 text-lg">
              {t({
                fr: 'Aucune œuvre disponible pour le moment',
                en: 'No artworks available at the moment',
                wo: 'Artwork amoul léegi'
              })}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                artwork={artwork}
                onClick={() => handleArtworkSelect(artwork)}
              />
            ))}
          </div>
        )}
      </main>

      {selectedArtwork && (
        <ArtworkDetail
          artwork={selectedArtwork}
          onClose={() => {
            setSelectedArtwork(null);
            loadHistory();
          }}
        />
      )}

      {showHistory && (
        <HistoryPanel
          history={history}
          onClose={() => setShowHistory(false)}
          onSelectArtwork={(artwork) => {
            setShowHistory(false);
            handleArtworkSelect(artwork);
          }}
        />
      )}
    </div>
  );
}
