import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onExplore: () => void;
}

export function Hero({ onExplore }: HeroProps) {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-amber-900 to-orange-900 text-white">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://www.reforme.net/wp-content/uploads/2018/12/IMG_3846_WEB.jpg"
          alt="MCN"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 font-semibold text-lg">
              {t({
                fr: 'Innovation Culturelle Digitale',
                en: 'Digital Cultural Innovation',
                wo: 'Innovation Culturelle Digitale'
              })}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {t({
              fr: 'Découvrez les Civilisations Noires',
              en: 'Discover Black Civilizations',
              wo: 'Discover Civilisations Noires'
            })}
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
            {t({
              fr: 'Une expérience immersive et interactive pour explorer notre patrimoine culturel exceptionnel, accessible partout, à tout moment.',
              en: 'An immersive and interactive experience to explore our exceptional cultural heritage, accessible anywhere, anytime.',
              wo: 'Expérience bu immersive ngir xool patrimoine culturel bi exceptional.'
            })}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onExplore}
              className="group bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 flex items-center justify-center space-x-2"
            >
              <span>
                {t({
                  fr: 'Explorer Maintenant',
                  en: 'Explore Now',
                  wo: 'Explore Léegi'
                })}
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExplore}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              {t({
                fr: 'Scanner un QR Code',
                en: 'Scan QR Code',
                wo: 'Scanner QR Code'
              })}
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">5000+</div>
              <div className="text-gray-300">
                {t({
                  fr: 'Œuvres',
                  en: 'Artworks',
                  wo: 'Œuvres'
                })}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">14000m²</div>
              <div className="text-gray-300">
                {t({
                  fr: 'Surface',
                  en: 'Surface',
                  wo: 'Surface'
                })}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">3</div>
              <div className="text-gray-300">
                {t({
                  fr: 'Langues',
                  en: 'Languages',
                  wo: 'Làkk'
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
    </div>
  );
}
