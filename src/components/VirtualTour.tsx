import { Play, Compass, Camera } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface VirtualTourProps {
  onStartTour: () => void;
}

export function VirtualTour({ onStartTour }: VirtualTourProps) {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-amber-900 to-orange-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t({
              fr: 'Visite Virtuelle 360°',
              en: '360° Virtual Tour',
              wo: 'Visite Virtuelle 360°'
            })}
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {t({
              fr: 'Explorez le musée depuis chez vous avec notre expérience immersive',
              en: 'Explore the museum from home with our immersive experience',
              wo: 'Xool musée bi ci sa kër ak expérience immersive'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group cursor-pointer" onClick={onStartTour}>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://mcn-sn.com/wp-content/uploads/2024/12/13.jpeg"
                alt="Virtual Tour"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors rounded-2xl flex items-center justify-center">
              <div className="bg-amber-600 hover:bg-amber-700 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                <Play className="w-10 h-10 text-white ml-1" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-600 rounded-lg p-3 flex-shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t({
                    fr: 'Navigation Intuitive',
                    en: 'Intuitive Navigation',
                    wo: 'Navigation Intuitive'
                  })}
                </h3>
                <p className="text-gray-300">
                  {t({
                    fr: 'Déplacez-vous librement dans toutes les salles du musée',
                    en: 'Move freely through all museum rooms',
                    wo: 'Déké ci salles yu musée yi lépp'
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-600 rounded-lg p-3 flex-shrink-0">
                <Camera className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t({
                    fr: 'Haute Qualité',
                    en: 'High Quality',
                    wo: 'Qualité Bu Mag'
                  })}
                </h3>
                <p className="text-gray-300">
                  {t({
                    fr: 'Images HD pour une expérience réaliste et détaillée',
                    en: 'HD images for a realistic and detailed experience',
                    wo: 'Images HD ngir am expérience réaliste'
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-600 rounded-lg p-3 flex-shrink-0">
                <Play className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t({
                    fr: 'Contenu Interactif',
                    en: 'Interactive Content',
                    wo: 'Contenu Interactif'
                  })}
                </h3>
                <p className="text-gray-300">
                  {t({
                    fr: 'Cliquez sur les œuvres pour découvrir leur histoire',
                    en: 'Click on artworks to discover their history',
                    wo: 'Click ci œuvres yi ngir xool ñu histoire'
                  })}
                </p>
              </div>
            </div>

            <button
              onClick={onStartTour}
              className="w-full bg-white text-amber-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>
                {t({
                  fr: 'Commencer la Visite',
                  en: 'Start Tour',
                  wo: 'Tambali Visite'
                })}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
