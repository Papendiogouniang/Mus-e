import { X, Volume2, Pause, Play, MapPin, Calendar, Palette, User, Video, Headphones, FileText, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Artwork, trackArtworkView } from '../lib/supabase';
import { useState, useRef, useEffect } from 'react';

interface ArtworkDetailProps {
  artwork: Artwork;
  onClose: () => void;
}

export function ArtworkDetail({ artwork, onClose }: ArtworkDetailProps) {
  const { language, t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    trackArtworkView(artwork.id);
  }, [artwork.id]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);

      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);

      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
      };
    }
  }, []);

  const title = artwork[`title_${language}` as keyof Artwork] as string || artwork.title_fr;
  const description = artwork[`description_${language}` as keyof Artwork] as string || artwork.description_fr;
  const historicalContext = artwork[`historical_context_${language}` as keyof Artwork] as string;
  const audioUrl = artwork[`audio_${language}_url` as keyof Artwork] as string;

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm">
      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full mx-auto overflow-hidden">
          <div className="relative">
            {artwork.image_url ? (
              <img
                src={artwork.image_url}
                alt={title}
                className="w-full h-96 object-cover"
              />
            ) : (
              <div className="w-full h-96 bg-gradient-to-br from-amber-100 to-orange-100" />
            )}

            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors shadow-lg"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h2 className="text-3xl font-bold text-white mb-2">
                {title}
              </h2>
              {artwork.artist && (
                <p className="text-lg text-amber-300 font-medium flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>{artwork.artist}</span>
                </p>
              )}
            </div>
          </div>

          <div className="p-8">
            {/* Audio Player Section */}
            {audioUrl && (
              <div className="mb-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Headphones className="w-6 h-6 text-amber-700" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {t({ fr: 'Description Audio', en: 'Audio Description', wo: 'Description Audio' })}
                  </h3>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={toggleAudio}
                    className="bg-amber-600 hover:bg-amber-700 text-white rounded-full p-4 transition-colors shadow-lg"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6" />
                    )}
                  </button>

                  <div className="flex-1">
                    <input
                      type="range"
                      min="0"
                      max={duration || 0}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #d97706 0%, #d97706 ${(currentTime / duration) * 100}%, #fde68a ${(currentTime / duration) * 100}%, #fde68a 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>

                  <Volume2 className="w-6 h-6 text-amber-700" />
                </div>

                <p className="text-sm text-amber-800 mt-3 text-center">
                  {t({
                    fr: '🎧 Écoutez la description complète de cette œuvre',
                    en: '🎧 Listen to the complete description of this artwork',
                    wo: '🎧 Déggal description bu komplé bu œuvre bii'
                  })}
                </p>
              </div>
            )}

            {/* PDF Section */}
            {artwork.pdf_url && (
              <div className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="w-6 h-6 text-blue-700" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {t({ fr: 'Documentation PDF', en: 'PDF Documentation', wo: 'Documentation PDF' })}
                  </h3>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={artwork.pdf_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <FileText className="w-5 h-5" />
                    <span>
                      {t({ fr: 'Voir le PDF', en: 'View PDF', wo: 'Xool PDF' })}
                    </span>
                  </a>
                  <a
                    href={artwork.pdf_url}
                    download
                    className="flex-1 bg-white hover:bg-gray-50 text-blue-700 border-2 border-blue-600 px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>
                      {t({ fr: 'Télécharger', en: 'Download', wo: 'Télécharger' })}
                    </span>
                  </a>
                </div>
                <p className="text-sm text-blue-800 mt-3 text-center">
                  {t({
                    fr: '📄 Téléchargez la documentation complète de cette œuvre',
                    en: '📄 Download the complete documentation of this artwork',
                    wo: '📄 Télécharger documentation bu komplé bu œuvre bii'
                  })}
                </p>
              </div>
            )}

            {/* Video Section */}
            {artwork.video_url && (
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Video className="w-6 h-6 text-amber-700" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {t({ fr: 'Vidéo Documentaire', en: 'Documentary Video', wo: 'Video Documentaire' })}
                  </h3>
                </div>
                <div className="aspect-video rounded-xl overflow-hidden bg-gray-900 shadow-2xl border-4 border-amber-200">
                  <iframe
                    src={artwork.video_url}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    title={title}
                    loading="lazy"
                    frameBorder="0"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-3 text-center">
                  {t({
                    fr: '📹 Découvrez l\'histoire et le contexte de cette œuvre',
                    en: '📹 Discover the history and context of this artwork',
                    wo: '📹 Xam histoire ak contexte bu œuvre bii'
                  })}
                </p>
              </div>
            )}

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {artwork.origin && (
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
                  <div className="flex items-center space-x-2 text-amber-700 text-sm mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">
                      {t({ fr: 'Origine', en: 'Origin', wo: 'Origine' })}
                    </span>
                  </div>
                  <p className="text-gray-900 font-bold">{artwork.origin}</p>
                </div>
              )}

              {artwork.period && (
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
                  <div className="flex items-center space-x-2 text-amber-700 text-sm mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">
                      {t({ fr: 'Période', en: 'Period', wo: 'Période' })}
                    </span>
                  </div>
                  <p className="text-gray-900 font-bold">{artwork.period}</p>
                </div>
              )}

              {artwork.materials && (
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 col-span-2 border border-amber-200">
                  <div className="flex items-center space-x-2 text-amber-700 text-sm mb-1">
                    <Palette className="w-4 h-4" />
                    <span className="font-medium">
                      {t({ fr: 'Matériaux', en: 'Materials', wo: 'Matériaux' })}
                    </span>
                  </div>
                  <p className="text-gray-900 font-bold">{artwork.materials}</p>
                </div>
              )}
            </div>

            {/* Description and Historical Context */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t({ fr: 'Description', en: 'Description', wo: 'Description' })}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {description}
                </p>
              </div>

              {historicalContext && (
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t({
                      fr: 'Contexte Historique et Culturel',
                      en: 'Historical and Cultural Context',
                      wo: 'Contexte Historique ak Culturel'
                    })}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {historicalContext}
                  </p>
                </div>
              )}
            </div>

            {/* QR Code Display */}
            <div className="mt-8 text-center p-6 bg-gradient-to-br from-amber-900 to-orange-900 rounded-xl">
              <p className="text-amber-200 text-sm mb-2">
                {t({ fr: 'Code QR de cette œuvre', en: 'QR Code of this artwork', wo: 'Code QR bu œuvre bii' })}
              </p>
              <p className="text-white text-3xl font-bold tracking-wider">
                {artwork.qr_code}
              </p>
            </div>
          </div>

          {audioUrl && (
            <audio
              ref={audioRef}
              src={audioUrl}
              onEnded={() => setIsPlaying(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
