import { Globe, Home, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onNavigateHome?: () => void;
  showNavigation?: boolean;
}

export function Header({ onNavigateHome, showNavigation = false }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="bg-gradient-to-r from-amber-900 via-amber-800 to-orange-900 text-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://mcn-sn.com/wp-content/uploads/2025/02/Logo_MCN_ang_Fran_Plan-de-travail-1-copie-4.png"
              alt="MCN Logo"
              className="h-16 sm:h-20 w-auto"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">
                {t({
                  fr: 'Musée des Civilisations Noires',
                  en: 'Museum of Black Civilizations',
                  wo: 'Musée des Civilisations Noires'
                })}
              </h1>
              <p className="text-sm text-amber-200">
                {t({
                  fr: 'Dakar, Sénégal',
                  en: 'Dakar, Senegal',
                  wo: 'Dakar, Senegaal'
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {showNavigation && onNavigateHome && (
              <button
                onClick={onNavigateHome}
                className="hidden sm:flex items-center space-x-2 bg-amber-800 hover:bg-amber-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Home className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {t({
                    fr: 'Accueil',
                    en: 'Home',
                    wo: 'Accueil'
                  })}
                </span>
              </button>
            )}

            <div className="relative group">
              <div className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg px-4 py-2 transition-all cursor-pointer">
                <Globe className="w-5 h-5" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'fr' | 'en' | 'wo')}
                  className="bg-transparent text-white font-medium focus:outline-none cursor-pointer appearance-none pr-2"
                >
                  <option value="fr" className="bg-amber-900 text-white">🇫🇷 Français</option>
                  <option value="en" className="bg-amber-900 text-white">🇬🇧 English</option>
                  <option value="wo" className="bg-amber-900 text-white">🇸🇳 Wolof</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
