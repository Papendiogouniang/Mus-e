import { MapPin, Clock, Phone, Mail, Camera, Hand, Volume2, Accessibility, Users, GraduationCap, Banknote, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ContactInfo() {
  const { t } = useLanguage();

  const hours = [
    {
      days: { fr: 'Mardi - Samedi', en: 'Tuesday - Saturday', wo: 'Talata - Gaawu' },
      time: '10h00 - 19h00'
    },
    {
      days: { fr: 'Dimanche', en: 'Sunday', wo: 'Dimbali' },
      time: { fr: 'Fermé', en: 'Closed', wo: 'Fermé' }
    }
  ];

  const rules = [
    {
      icon: Hand,
      text: {
        fr: 'Ne pas toucher aux œuvres',
        en: 'Do not touch the artworks',
        wo: 'Bu taxul œuvres yi'
      }
    },
    {
      icon: Camera,
      text: {
        fr: 'Photos sans flash autorisées',
        en: 'Photos without flash allowed',
        wo: 'Photos bu amul flash dañu jaay'
      }
    },
    {
      icon: Banknote,
      text: {
        fr: 'Interdiction de boire ou manger',
        en: 'No eating or drinking',
        wo: 'Bu ñewul wala lekk'
      }
    },
    {
      icon: Volume2,
      text: {
        fr: 'Circuler calmement',
        en: 'Move quietly',
        wo: 'Dem ci nax'
      }
    }
  ];

  const freeVisitPrices = [
    {
      type: { fr: 'Tarif plein', en: 'Full price', wo: 'Prix bu teg' },
      price: '3.000 FCFA',
      icon: Users
    },
    {
      type: { fr: 'Scolaire/Étudiant', en: 'Student', wo: 'Étudiant' },
      price: '500 FCFA',
      icon: GraduationCap
    },
    {
      type: { fr: 'Groupe (10-30 pers.)', en: 'Group (10-30 people)', wo: 'Groupe (10-30 nit)' },
      price: '2.500 FCFA/pers',
      icon: Users
    }
  ];

  const guidedVisitPrices = [
    {
      type: { fr: 'Tarif plein', en: 'Full price', wo: 'Prix bu teg' },
      price: '5.000 FCFA',
      icon: Users
    },
    {
      type: { fr: 'Étudiant', en: 'Student', wo: 'Étudiant' },
      price: '1.500 FCFA',
      icon: GraduationCap
    },
    {
      type: { fr: 'Scolaire', en: 'School', wo: 'Scolaire' },
      price: '1.000 FCFA',
      icon: GraduationCap
    },
    {
      type: { fr: 'Groupe (10-30 pers.)', en: 'Group (10-30 people)', wo: 'Groupe (10-30 nit)' },
      price: '4.000 FCFA/pers',
      icon: Users
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t({
              fr: 'Visitez-Nous',
              en: 'Visit Us',
              wo: 'Nàngu ñu'
            })}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t({
              fr: 'Le musée vous accueille toute l\'année',
              en: 'The museum welcomes you all year round',
              wo: 'Musée bi dafa niaw jaar-jaar'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-amber-600 hover:shadow-2xl transition-shadow">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-amber-100 rounded-full p-3">
                <MapPin className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {t({ fr: 'Adresse', en: 'Address', wo: 'Adresse' })}
              </h3>
            </div>
            <div className="space-y-3">
              <p className="text-lg text-gray-700">Autoroute prolongée</p>
              <p className="text-lg text-gray-700">Place de la Gare</p>
              <p className="text-lg text-gray-700 font-semibold">Dakar, Sénégal</p>
              <a
                href="https://maps.google.com/?q=Musée+des+Civilisations+Noires+Dakar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {t({ fr: 'Voir sur la carte', en: 'View on map', wo: 'Xool ci carte' })}
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-orange-600 hover:shadow-2xl transition-shadow">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-orange-100 rounded-full p-3">
                <Clock className="w-6 h-6 text-orange-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {t({ fr: 'Horaires d\'ouverture', en: 'Opening Hours', wo: 'Horaires' })}
              </h3>
            </div>
            <div className="space-y-4">
              {hours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                  <span className="text-lg text-gray-700 font-medium">
                    {typeof schedule.days === 'string' ? schedule.days : t(schedule.days)}
                  </span>
                  <span className="text-lg text-amber-700 font-bold">
                    {typeof schedule.time === 'string' ? schedule.time : t(schedule.time)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-600 hover:shadow-2xl transition-shadow">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Phone className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {t({ fr: 'Contact', en: 'Contact', wo: 'Contact' })}
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Phone className="w-5 h-5 text-blue-600" />
                <a href="tel:+221338234500" className="text-lg text-gray-700 hover:text-blue-600 transition-colors">
                  +221 33 823 45 00
                </a>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:contact@mcn.sn" className="text-lg text-gray-700 hover:text-blue-600 transition-colors">
                  contact@mcn.sn
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-600 hover:shadow-2xl transition-shadow">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-green-100 rounded-full p-3">
                <Info className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {t({ fr: 'Consignes du Musée', en: 'Museum Rules', wo: 'Règles bu Musée' })}
              </h3>
            </div>
            <div className="space-y-3">
              {rules.map((rule, index) => {
                const Icon = rule.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Icon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{t(rule.text)}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center mb-12 shadow-xl">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Accessibility className="w-8 h-8 text-white" />
            <h3 className="text-3xl font-bold text-white">
              {t({ fr: 'Accessibilité Universelle', en: 'Universal Accessibility', wo: 'Accessibilité Universelle' })}
            </h3>
          </div>
          <p className="text-xl text-white">
            {t({
              fr: 'Le MCN est accessible à toutes les personnes',
              en: 'The MCN is accessible to everyone',
              wo: 'MCN dafa accessible ci niep nitt'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-amber-600">
            <div className="bg-gradient-to-br from-amber-600 to-orange-600 p-6 text-white">
              <h3 className="text-3xl font-bold mb-2">
                {t({ fr: 'Visite Libre', en: 'Free Visit', wo: 'Visite Libre' })}
              </h3>
              <p className="text-amber-100">
                {t({ fr: 'Explorez à votre rythme', en: 'Explore at your own pace', wo: 'Xool ci sa yoon' })}
              </p>
            </div>
            <div className="p-6 space-y-4">
              {freeVisitPrices.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5 text-amber-600" />
                      <span className="text-gray-700 font-medium">{t(item.type)}</span>
                    </div>
                    <span className="text-amber-700 font-bold text-lg">{item.price}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-blue-600">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 text-white">
              <h3 className="text-3xl font-bold mb-2">
                {t({ fr: 'Visite Guidée', en: 'Guided Tour', wo: 'Visite Guidée' })}
              </h3>
              <p className="text-blue-100">
                {t({ fr: 'Avec un expert du musée', en: 'With a museum expert', wo: 'Ak expert bu musée' })}
              </p>
            </div>
            <div className="p-6 space-y-4">
              {guidedVisitPrices.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700 font-medium">{t(item.type)}</span>
                    </div>
                    <span className="text-blue-700 font-bold text-lg">{item.price}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.9617405447874!2d-17.448744!3d14.691906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec173f1e6f8a8fd%3A0x7a2d9e51d8f9c8e2!2sMusée%20des%20Civilisations%20Noires!5e0!3m2!1sfr!2ssn!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Museum Location"
          />
        </div>
      </div>
    </section>
  );
}
