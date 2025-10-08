import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://mcn-sn.com/wp-content/uploads/2025/02/Logo_MCN_ang_Fran_Plan-de-travail-1-copie-4.png"
                alt="MCN Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {t({
                fr: 'Le Musée des Civilisations Noires célèbre la richesse du patrimoine africain et de la diaspora. Une expérience culturelle unique au cœur de Dakar.',
                en: 'The Museum of Black Civilizations celebrates the richness of African heritage and the diaspora. A unique cultural experience in the heart of Dakar.',
                wo: 'Musée des Civilisations Noires dafa celebrate richesse bu patrimoine africain ak diaspora.'
              })}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-amber-600 p-2 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-amber-600 p-2 rounded-lg transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-amber-600 p-2 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-amber-600 p-2 rounded-lg transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">
              {t({
                fr: 'Liens Rapides',
                en: 'Quick Links',
                wo: 'Liens Rapides'
              })}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#collection" className="text-gray-400 hover:text-amber-400 transition-colors">
                  {t({
                    fr: 'Collection',
                    en: 'Collection',
                    wo: 'Collection'
                  })}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors">
                  {t({
                    fr: 'À Propos',
                    en: 'About',
                    wo: 'About'
                  })}
                </a>
              </li>
              <li>
                <a href="#virtual-tour" className="text-gray-400 hover:text-amber-400 transition-colors">
                  {t({
                    fr: 'Visite Virtuelle',
                    en: 'Virtual Tour',
                    wo: 'Visite Virtuelle'
                  })}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">
              {t({
                fr: 'Contact',
                en: 'Contact',
                wo: 'Contact'
              })}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>Route de l'Aéroport</li>
              <li>Dakar, Sénégal</li>
              <li>+221 33 823 45 00</li>
              <li>
                <a href="mailto:contact@mcn.sn" className="hover:text-amber-400 transition-colors flex items-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>contact@mcn.sn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Musée des Civilisations Noires. {t({
                fr: 'Tous droits réservés.',
                en: 'All rights reserved.',
                wo: 'Tous droits réservés.'
              })}
            </p>

            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href="https://mcn-sn.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                {t({
                  fr: 'Site Officiel',
                  en: 'Official Website',
                  wo: 'Site Officiel'
                })}
              </a>
              <span>•</span>
              <span>
                {t({
                  fr: 'Développé pour Dakar Slush\'D 2025',
                  en: 'Developed for Dakar Slush\'D 2025',
                  wo: 'Développé pour Dakar Slush\'D 2025'
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
