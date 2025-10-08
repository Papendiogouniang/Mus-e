import { BookOpen, Download, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function CaseMag() {
  const { t } = useLanguage();

  const magazines = [
    {
      number: 1,
      period: {
        fr: 'Janvier - Mars 2025',
        en: 'January - March 2025',
        wo: 'Janvier - Mars 2025'
      },
      theme: {
        fr: 'Femmes noires, arts et musée',
        en: 'Black Women, Arts and Museum',
        wo: 'Femmes noires, arts ak musée'
      },
      content: {
        fr: [
          'Les temps forts du trimestre écoulé',
          'Retour sur les panels autour de Thiaroye 44',
          'Contributions de Babacar Faye, Fatoumata Camara et Maylis Dasque'
        ],
        en: [
          'Highlights of the past quarter',
          'Review of panels on Thiaroye 44',
          'Contributions by Babacar Faye, Fatoumata Camara and Maylis Dasque'
        ],
        wo: [
          'Temps forts bu trimestre',
          'Retour ci panels Thiaroye 44',
          'Contributions Babacar Faye, Fatoumata Camara ak Maylis Dasque'
        ]
      },
      image: 'https://mcn-sn.com/wp-content/uploads/2025/07/Capture-decran-2025-07-19-a-14.48.43.png'
    },
    {
      number: 2,
      period: {
        fr: 'Avril - Juin 2025',
        en: 'April - June 2025',
        wo: 'Avril - Juin 2025'
      },
      theme: {
        fr: 'Sons de l\'être et de liberté',
        en: 'Sounds of Being and Freedom',
        wo: 'Sons de l\'être ak liberté'
      },
      content: {
        fr: [
          'Les temps forts du trimestre écoulé',
          'Retour sur les ateliers pédagogiques Fanon',
          'Contributions de Maysa Waaly, Sean Jacobs et Aïcha Euzet'
        ],
        en: [
          'Highlights of the past quarter',
          'Review of Fanon educational workshops',
          'Contributions by Maysa Waaly, Sean Jacobs and Aïcha Euzet'
        ],
        wo: [
          'Temps forts bu trimestre',
          'Retour ci ateliers Fanon',
          'Contributions Maysa Waaly, Sean Jacobs ak Aïcha Euzet'
        ]
      },
      image: 'https://mcn-sn.com/wp-content/uploads/2025/07/Capture-decran-2025-07-19-a-14.49.09.png'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">La Case Mag</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t({
              fr: 'Magazine Trimestriel du MCN',
              en: 'MCN Quarterly Magazine',
              wo: 'Magazine Trimestriel bu MCN'
            })}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t({
              fr: 'La Case Mag se veut à la fois réceptacle et boussole : un regard rétrospectif sur les trois mois écoulés, une mise en lumière des grandes orientations du musée et une ouverture vers des horizons de réflexion critique.',
              en: 'La Case Mag aims to be both a receptacle and a compass: a retrospective look at the past three months, a spotlight on the museum\'s major directions and an opening towards horizons of critical reflection.',
              wo: 'La Case Mag dafa wax regard rétrospectif ci trois mois yi, mise en lumière bu orientations bu musée.'
            })}
          </p>
        </div>

        <div className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-start space-x-4">
            <BookOpen className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t({
                  fr: 'À propos de La Case Mag',
                  en: 'About La Case Mag',
                  wo: 'À propos La Case Mag'
                })}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t({
                  fr: 'Son nom s\'inspire de l\'architecture même du musée, conçue à l\'image des cases à impluvium de Casamance, espaces circulaires où se recueillent et se partagent les savoirs.',
                  en: 'Its name is inspired by the museum\'s very architecture, designed in the image of Casamance impluvium houses, circular spaces where knowledge is gathered and shared.',
                  wo: 'Sa nom dafa inspiré par architecture bu musée, conçue ci image bu cases à impluvium Casamance.'
                })}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t({
                  fr: 'Chaque numéro s\'articule autour d\'un dossier thématique, enrichi des contributions de plumes invitées, offrant ainsi une lecture vivante et engagée des dynamiques culturelles et patrimoniales à l\'œuvre.',
                  en: 'Each issue is structured around a thematic dossier, enriched by contributions from invited writers, offering a lively and engaged reading of cultural and heritage dynamics at work.',
                  wo: 'Chaque numéro dafa articulé ci dossier thématique ak contributions bu plumes invitées.'
                })}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {magazines.map((mag) => (
            <div
              key={mag.number}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={mag.image}
                  alt={`Numéro ${mag.number}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-5xl font-bold mb-2">
                    N°{mag.number}
                  </div>
                  <div className="text-lg text-amber-400">
                    {t(mag.period)}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-amber-600 uppercase tracking-wide">
                    {t({ fr: 'Dossier Thématique', en: 'Thematic File', wo: 'Dossier Thématique' })}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">
                    {t(mag.theme)}
                  </h3>
                </div>

                <ul className="space-y-3 mb-6">
                  {t(mag.content).map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-700">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>
                      {t({ fr: 'Télécharger', en: 'Download', wo: 'Télécharger' })}
                    </span>
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
