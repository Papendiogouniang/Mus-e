import { Calendar, ArrowRight, Users, Film, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function News() {
  const { t } = useLanguage();

  const news = [
    {
      title: {
        fr: 'Journées Culturelles Panafricaines',
        en: 'Pan-African Cultural Days',
        wo: 'Journées Culturelles Panafricaines'
      },
      description: {
        fr: 'Première édition des Journées culturelles panafricaines avec des activités riches et variées. Visite de parlementaires de la sous-région hôtes de l\'Assemblée nationale.',
        en: 'First edition of Pan-African Cultural Days with rich and varied activities. Visit by parliamentarians from the sub-region hosted by the National Assembly.',
        wo: 'Première édition bu Journées culturelles panafricaines ak activités yu bari.'
      },
      date: 'Mars 2025',
      image: 'https://mcn-sn.com/wp-content/uploads/2025/06/panaf.jpg',
      icon: Users
    },
    {
      title: {
        fr: 'Panafricanisme et Palestine',
        en: 'Panafricanism and Palestine',
        wo: 'Panafricanisme ak Palestine'
      },
      description: {
        fr: 'Conversation exceptionnelle avec Momodou Taal, militant gambien-britannique, et Tabara Korka Ndiaye sur l\'unité africaine et l\'émancipation du peuple palestinien.',
        en: 'Exceptional conversation with Momodou Taal, Gambian-British activist, and Tabara Korka Ndiaye on African unity and Palestinian emancipation.',
        wo: 'Conversation exceptionnelle ak Momodou Taal ak Tabara Korka Ndiaye.'
      },
      date: 'Avril 2025',
      image: 'https://mcn-sn.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-17-at-13.32.36.jpeg',
      icon: Users
    },
    {
      title: {
        fr: 'Association of Black Anthropologists',
        en: 'Association of Black Anthropologists',
        wo: 'Association of Black Anthropologists'
      },
      description: {
        fr: 'Pour la première fois depuis 1970, l\'ABA organise son Congrès en Afrique, en partenariat avec SBA, BIBA, URICA-IFAN et le MCN.',
        en: 'For the first time since 1970, ABA organizes its Congress in Africa, in partnership with SBA, BIBA, URICA-IFAN and MCN.',
        wo: 'Pour première fois depuis 1970, ABA dafa organisé Congress ci Afrique.'
      },
      date: 'Mai 2025',
      image: 'https://mcn-sn.com/wp-content/uploads/2025/06/aba.jpg',
      icon: BookOpen
    },
    {
      title: {
        fr: 'Ciné-Débat Omar Blondin Diop',
        en: 'Film-Debate Omar Blondin Diop',
        wo: 'Ciné-Débat Omar Blondin Diop'
      },
      description: {
        fr: 'Commémoration des 52 ans de la mort d\'Omar Blondin Diop avec projection du film "Juste un Mouvement". Événement coorganisé par Africa First et FRAPP.',
        en: 'Commemoration of the 52nd anniversary of Omar Blondin Diop\'s death with screening of "Juste un Mouvement". Event co-organized by Africa First and FRAPP.',
        wo: 'Commémoration bu 52 ans bu mort Omar Blondin Diop.'
      },
      date: '11 Mai 2025',
      image: 'https://mcn-sn.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-14-at-12.18.16-1.jpeg',
      icon: Film
    },
    {
      title: {
        fr: 'Projection du Film FANON',
        en: 'FANON Film Screening',
        wo: 'Projection Film FANON'
      },
      description: {
        fr: 'Projection suivie d\'un débat avec Souleymane Gueye, Claudia Mosquera, Dialo Diop, Ferdulius Zita Odome Angone et Ismahan Soukeyna Diop.',
        en: 'Screening followed by debate with Souleymane Gueye, Claudia Mosquera, Dialo Diop, Ferdulius Zita Odome Angone and Ismahan Soukeyna Diop.',
        wo: 'Projection suivie d\'un débat ak invités yu bari.'
      },
      date: '03 Mai 2025 - 10h30',
      image: 'https://mcn-sn.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-02-at-12.12.44.jpeg',
      icon: Film
    },
    {
      title: {
        fr: 'Exposition "Première Ligne"',
        en: '"First Line" Exhibition',
        wo: 'Exposition "Première Ligne"'
      },
      description: {
        fr: 'Exposition photographique restituant la lutte héroïque du peuple sénégalais pour se libérer d\'un ordre politique néocolonial et répressif.',
        en: 'Photographic exhibition restoring the heroic struggle of the Senegalese people to free themselves from a neocolonial and repressive political order.',
        wo: 'Exposition photographique bu lutte héroïque bu peuple sénégalais.'
      },
      date: 'Mai 2025',
      image: 'https://mcn-sn.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-30-at-16.17.14-1.jpeg',
      icon: Calendar
    },
    {
      title: {
        fr: 'Exposition ABAFA(BA)ZI',
        en: 'ABAFA(BA)ZI Exhibition',
        wo: 'Exposition ABAFA(BA)ZI'
      },
      description: {
        fr: 'Vernissage de l\'exposition "celles qui meurent en sachant" en présence du Ministre de la culture Khady Diène Gaye et de l\'Ambassadeur d\'Allemagne.',
        en: 'Opening of the exhibition "those who die knowing" in the presence of Minister of Culture Khady Diène Gaye and the German Ambassador.',
        wo: 'Vernissage bu exposition "celles qui meurent en sachant".'
      },
      date: '09 Avril 2025',
      image: 'https://mcn-sn.com/wp-content/uploads/2025/04/abaa.jpg',
      icon: Calendar
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t({
              fr: 'Actualités du Musée',
              en: 'Museum News',
              wo: 'Actualités bu Musée'
            })}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t({
              fr: 'Découvrez les événements, expositions et activités qui animent le MCN',
              en: 'Discover the events, exhibitions and activities that bring the MCN to life',
              wo: 'Xool événements, expositions ak activités yu MCN'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={t(item.title)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.date}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t(item.title)}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t(item.description)}
                  </p>
                  <button className="group/btn text-amber-600 hover:text-amber-700 font-semibold flex items-center space-x-2">
                    <span>
                      {t({
                        fr: 'En savoir plus',
                        en: 'Learn more',
                        wo: 'Xool lu gën'
                      })}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
