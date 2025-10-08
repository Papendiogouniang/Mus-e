import { QrCode, ArrowRight, Play, Video, Headphones, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function QRDemo() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: QrCode,
      title: {
        fr: '1. Scanner le Code QR',
        en: '1. Scan the QR Code',
        wo: '1. Scanner Code QR'
      },
      description: {
        fr: 'Entrez le code affiché près de l\'œuvre (ex: ART001, ART002, ART003)',
        en: 'Enter the code displayed near the artwork (ex: ART001, ART002, ART003)',
        wo: 'Duggal code bi nekk ci artwork bi (ex: ART001, ART002, ART003)'
      },
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: ArrowRight,
      title: {
        fr: '2. Redirection Automatique',
        en: '2. Automatic Redirect',
        wo: '2. Redirection Automatique'
      },
      description: {
        fr: 'Le système vous redirige instantanément vers la fiche complète de l\'œuvre',
        en: 'The system instantly redirects you to the complete artwork file',
        wo: 'Système bi dafa ko rediriger ci fiche bu komplé'
      },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Headphones,
      title: {
        fr: '3. Description Audio',
        en: '3. Audio Description',
        wo: '3. Description Audio'
      },
      description: {
        fr: 'Écoutez la description complète en français, anglais ou wolof avec contrôles de lecture',
        en: 'Listen to the complete description in French, English or Wolof with playback controls',
        wo: 'Déggal description bu komplé ci français, anglais walla wolof'
      },
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Video,
      title: {
        fr: '4. Vidéo Documentaire',
        en: '4. Documentary Video',
        wo: '4. Video Documentaire'
      },
      description: {
        fr: 'Regardez une vidéo documentaire sur l\'histoire et le contexte culturel de l\'œuvre',
        en: 'Watch a documentary video about the history and cultural context of the artwork',
        wo: 'Xool video documentaire ci histoire ak contexte culturel'
      },
      color: 'from-red-500 to-orange-500'
    }
  ];

  const sampleCodes = [
    {
      code: 'ART001',
      name: {
        fr: 'Masque Dogon',
        en: 'Dogon Mask',
        wo: 'Masque Dogon'
      },
      hasAudio: true,
      hasVideo: true
    },
    {
      code: 'ART002',
      name: {
        fr: 'Statue Fang',
        en: 'Fang Statue',
        wo: 'Statue Fang'
      },
      hasAudio: true,
      hasVideo: true
    },
    {
      code: 'ART003',
      name: {
        fr: 'Couronne Yoruba',
        en: 'Yoruba Crown',
        wo: 'Couronne Yoruba'
      },
      hasAudio: true,
      hasVideo: true
    },
    {
      code: 'ART010',
      name: {
        fr: 'Bronze du Bénin',
        en: 'Benin Bronze',
        wo: 'Bronze Bénin'
      },
      hasAudio: true,
      hasVideo: true
    },
    {
      code: 'ART012',
      name: {
        fr: 'Poids à Peser l\'Or',
        en: 'Gold Weight',
        wo: 'Poids Or'
      },
      hasAudio: true,
      hasVideo: true
    },
    {
      code: 'ART014',
      name: {
        fr: 'Sculpture Dogon',
        en: 'Dogon Sculpture',
        wo: 'Sculpture Dogon'
      },
      hasAudio: true,
      hasVideo: true
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-amber-900 to-orange-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t({
              fr: 'Comment ça marche ?',
              en: 'How does it work?',
              wo: 'Naka la def ?'
            })}
          </h2>
          <p className="text-xl text-amber-200 max-w-3xl mx-auto">
            {t({
              fr: 'Scannez un code QR et découvrez une expérience multimédia complète en 4 étapes simples',
              en: 'Scan a QR code and discover a complete multimedia experience in 4 simple steps',
              wo: 'Scanner code QR bi te xam expérience multimédia bu komplé ci 4 étapes'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 hover:border-amber-400 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`inline-flex bg-gradient-to-br ${step.color} rounded-xl p-4 mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t(step.title)}
                </h3>
                <p className="text-amber-200 leading-relaxed">
                  {t(step.description)}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-amber-400/30">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">
              {t({
                fr: 'Codes QR Disponibles',
                en: 'Available QR Codes',
                wo: 'Codes QR yu Am'
              })}
            </h3>
            <p className="text-amber-200">
              {t({
                fr: 'Essayez ces codes pour découvrir nos œuvres avec audio et vidéo',
                en: 'Try these codes to discover our artworks with audio and video',
                wo: 'Jéema codes yii ngir xam artworks yi ak audio ak video'
              })}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sampleCodes.map((item) => (
              <div
                key={item.code}
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg p-3 mb-3">
                  <QrCode className="w-8 h-8 text-white mx-auto" />
                </div>
                <p className="text-center font-bold text-gray-900 mb-1">
                  {item.code}
                </p>
                <p className="text-xs text-gray-600 text-center mb-2">
                  {t(item.name)}
                </p>
                <div className="flex items-center justify-center space-x-2">
                  {item.hasAudio && (
                    <div className="bg-purple-100 rounded-full p-1" title="Audio disponible">
                      <Headphones className="w-3 h-3 text-purple-600" />
                    </div>
                  )}
                  {item.hasVideo && (
                    <div className="bg-red-100 rounded-full p-1" title="Vidéo disponible">
                      <Video className="w-3 h-3 text-red-600" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-amber-200 text-sm">
              {t({
                fr: '✨ Plus de 15 œuvres disponibles avec descriptions multilingues (FR/EN/WO)',
                en: '✨ More than 15 artworks available with multilingual descriptions (FR/EN/WO)',
                wo: '✨ Artworks yu gën 15 ak descriptions multilingues (FR/EN/WO)'
              })}
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-green-500 rounded-full p-2">
                <Check className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white">
                {t({
                  fr: 'Multilingue',
                  en: 'Multilingual',
                  wo: 'Multilingue'
                })}
              </h4>
            </div>
            <p className="text-amber-200">
              {t({
                fr: 'Descriptions en Français, Anglais et Wolof pour tous',
                en: 'Descriptions in French, English and Wolof for everyone',
                wo: 'Descriptions ci Français, Anglais ak Wolof pour niep'
              })}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-blue-500 rounded-full p-2">
                <Check className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white">
                {t({
                  fr: 'Accessible',
                  en: 'Accessible',
                  wo: 'Accessible'
                })}
              </h4>
            </div>
            <p className="text-amber-200">
              {t({
                fr: 'Lecteurs audio pour une expérience inclusive',
                en: 'Audio players for an inclusive experience',
                wo: 'Lecteurs audio pour expérience inclusive'
              })}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-purple-500 rounded-full p-2">
                <Check className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white">
                {t({
                  fr: 'À Distance',
                  en: 'Remote',
                  wo: 'À Distance'
                })}
              </h4>
            </div>
            <p className="text-amber-200">
              {t({
                fr: 'Accessible depuis chez vous, partout dans le monde',
                en: 'Accessible from home, anywhere in the world',
                wo: 'Accessible depuis kër, niep ci monde bi'
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
