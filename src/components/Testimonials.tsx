import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Aminata Diallo',
      role: {
        fr: 'Étudiante en Histoire',
        en: 'History Student',
        wo: 'Étudiante ci Histoire'
      },
      comment: {
        fr: 'L\'application mobile transforme complètement l\'expérience de visite. Je peux maintenant revisiter mes œuvres préférées depuis chez moi et partager avec mes amis. Les descriptions audio en Wolof rendent le contenu accessible à tous!',
        en: 'The mobile app completely transforms the visit experience. I can now revisit my favorite artworks from home and share with friends. The audio descriptions in Wolof make the content accessible to everyone!',
        wo: 'Application mobile bi dafa wax expérience bu visite bi. Man léegi mën na xool sama œuvres yu neex ci sama kër.'
      },
      rating: 5
    },
    {
      name: 'Jean-Pierre Martin',
      role: {
        fr: 'Touriste Français',
        en: 'French Tourist',
        wo: 'Touriste Français'
      },
      comment: {
        fr: 'Une innovation remarquable! Les codes QR permettent d\'accéder instantanément aux informations détaillées. Les vidéos contextuelles enrichissent vraiment la compréhension des œuvres. Bravo pour cette initiative digitale!',
        en: 'A remarkable innovation! QR codes provide instant access to detailed information. The contextual videos really enrich the understanding of the works. Bravo for this digital initiative!',
        wo: 'Innovation bu remarquable! Codes QR yi dañu jox info bu detail bu gaaw gaaw.'
      },
      rating: 5
    },
    {
      name: 'Fatou Sow',
      role: {
        fr: 'Guide Touristique',
        en: 'Tour Guide',
        wo: 'Guide Touristique'
      },
      comment: {
        fr: 'Mes visiteurs adorent cette fonctionnalité! Le système multilingue facilite grandement mon travail. L\'historique personnel permet aux visiteurs de créer leur propre parcours culturel. Un outil indispensable!',
        en: 'My visitors love this feature! The multilingual system greatly facilitates my work. The personal history allows visitors to create their own cultural journey. An essential tool!',
        wo: 'Sama visiteurs dañu neex fonctionnalité bi! Système multilingue bi dafa facilité sama liggéey.'
      },
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t({
              fr: 'Ce Que Disent Nos Visiteurs',
              en: 'What Our Visitors Say',
              wo: 'Luy Wax Sunu Visiteurs'
            })}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t({
              fr: 'Des milliers de visiteurs ont déjà adopté notre solution digitale',
              en: 'Thousands of visitors have already adopted our digital solution',
              wo: 'Millions bu visiteurs dañu adopté sunu solution digitale'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="w-10 h-10 text-amber-500 mb-4" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{t(testimonial.comment)}"
              </p>

              <div className="border-t border-gray-200 pt-6">
                <div className="font-bold text-gray-900 mb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">
                  {t(testimonial.role)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-full font-semibold">
            <Star className="w-5 h-5 fill-white" />
            <span>4.9/5</span>
            <span className="opacity-80">|</span>
            <span>
              {t({
                fr: '2,500+ avis',
                en: '2,500+ reviews',
                wo: '2,500+ avis'
              })}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
