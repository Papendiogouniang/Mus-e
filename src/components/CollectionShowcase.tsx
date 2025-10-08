import { Eye, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface CollectionShowcaseProps {
  onExploreCollection: () => void;
}

export function CollectionShowcase({ onExploreCollection }: CollectionShowcaseProps) {
  const { t } = useLanguage();

  const collections = [
    {
      image: 'https://mcn-sn.com/wp-content/uploads/2024/12/13.jpeg',
      title: {
        fr: 'Arts Traditionnels',
        en: 'Traditional Arts',
        wo: 'Arts Traditionnels'
      },
      description: {
        fr: 'Masques, sculptures et objets rituels',
        en: 'Masks, sculptures and ritual objects',
        wo: 'Masques, sculptures ak objets rituels'
      }
    },
    {
      image: 'https://mcn-sn.com/wp-content/uploads/2024/12/dd1.png',
      title: {
        fr: 'Architecture & Patrimoine',
        en: 'Architecture & Heritage',
        wo: 'Architecture & Patrimoine'
      },
      description: {
        fr: 'Structures monumentales et sites historiques',
        en: 'Monumental structures and historical sites',
        wo: 'Structures monumentales ak sites historiques'
      }
    },
    {
      image: 'https://mcn-sn.com/wp-content/uploads/2024/12/dd2.jpg',
      title: {
        fr: 'Art Contemporain',
        en: 'Contemporary Art',
        wo: 'Art Contemporain'
      },
      description: {
        fr: 'Créations modernes et expressions artistiques',
        en: 'Modern creations and artistic expressions',
        wo: 'Créations modernes ak expressions artistiques'
      }
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-orange-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmNzk3NDciIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtOS45NCA4LjA2LTE4IDE4LTE4czE4IDguMDYgMTggMTgtOC4wNiAxOC0xOCAxOC0xOC04LjA2LTE4LTE4eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text mb-6">
            {t({
              fr: 'Nos Collections',
              en: 'Our Collections',
              wo: 'Sunu Collections'
            })}
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            {t({
              fr: 'Explorez une richesse patrimoniale inestimable des civilisations noires',
              en: 'Explore an invaluable heritage wealth of Black civilizations',
              wo: 'Xool patrimoine bu délicieux bu civilisations noires'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              onClick={onExploreCollection}
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-900">
                <img
                  src={collection.image}
                  alt={t(collection.title)}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-extrabold mb-3 text-transparent bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text">{t(collection.title)}</h3>
                <p className="text-gray-100 mb-5 text-lg leading-relaxed">{t(collection.description)}</p>

                <div className="flex items-center space-x-3 text-amber-400 font-bold text-lg group-hover:translate-x-3 transition-transform duration-300">
                  <Eye className="w-6 h-6" />
                  <span>
                    {t({
                      fr: 'Découvrir',
                      en: 'Discover',
                      wo: 'Xool'
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onExploreCollection}
            className="group bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 hover:scale-105 inline-flex items-center space-x-3"
          >
            <span>
              {t({
                fr: 'Explorer Toute la Collection',
                en: 'Explore Full Collection',
                wo: 'Xool Collection Lépp'
              })}
            </span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
