import { Building2, Users, Award, Globe as Globe2, TreePine } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Building2,
      value: '14,000m²',
      label: {
        fr: 'Surface d\'exposition',
        en: 'Exhibition space',
        wo: 'Surface d\'exposition'
      }
    },
    {
      icon: Users,
      value: '100,000+',
      label: {
        fr: 'Visiteurs par an',
        en: 'Visitors per year',
        wo: 'Visiteurs par an'
      }
    },
    {
      icon: Award,
      value: '5,000+',
      label: {
        fr: 'Œuvres exposées',
        en: 'Artworks displayed',
        wo: 'Œuvres exposées'
      }
    },
    {
      icon: Globe2,
      value: '54',
      label: {
        fr: 'Pays représentés',
        en: 'Countries represented',
        wo: 'Pays représentés'
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t({
              fr: 'À Propos du Musée',
              en: 'About the Museum',
              wo: 'À Propos bu Musée'
            })}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-amber-50">
              <img
                src="https://mcn-sn.com/wp-content/uploads/2024/12/baobab.png"
                alt="Grand Baobab - Edouard Duval-Carrié"
                className="w-full h-full object-contain p-8"
              />
            </div>
            <div className="mt-4 text-center">
              <div className="flex items-center justify-center space-x-2 text-amber-700">
                <TreePine className="w-5 h-5" />
                <span className="font-semibold">
                  {t({
                    fr: 'Le Grand Baobab - Edouard Duval-Carrié',
                    en: 'The Great Baobab - Edouard Duval-Carrié',
                    wo: 'Grand Baobab - Edouard Duval-Carrié'
                  })}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-800 leading-relaxed">
                {t({
                  fr: 'Projet au long cours, pensé tour à tour par un militant anticolonialiste (Lamine Senghor), un penseur de la négritude (Léopold Sedar Senghor) et un chantre de la renaissance africaine (Abdoulaye Wade), le Musée des Civilisations noires (MCN) a été inauguré le 6 décembre 2018 par le Président Macky Sall.',
                  en: 'A long-term project, conceived successively by an anti-colonialist activist (Lamine Senghor), a thinker of negritude (Léopold Sedar Senghor) and a champion of African renaissance (Abdoulaye Wade), the Museum of Black Civilizations was inaugurated on December 6, 2018 by President Macky Sall.',
                  wo: 'Projet bu long cours, pensé tour à tour par militant anticolonialiste (Lamine Senghor), penseur bu négritude (Léopold Sedar Senghor) ak chantre bu renaissance africaine (Abdoulaye Wade).'
                })}
              </p>

              <p className="text-gray-800 leading-relaxed">
                {t({
                  fr: 'Le MCN œuvre depuis lors pour la valorisation de l\'apport des Civilisations noires au patrimoine universel de l\'humanité. Le visiteur qui franchit la porte de la case à impluvium qui a inspiré son architecture rencontre tout autour du grand Baobab de l\'artiste haïtien Edouard Duval-Carrié, l\'exposition : l\'Afrique, berceau de l\'humanité.',
                  en: 'The MCN has since worked to promote the contribution of Black Civilizations to the universal heritage of humanity. Visitors who cross the threshold of the impluvium house that inspired its architecture encounter, around the great Baobab by Haitian artist Edouard Duval-Carrié, the exhibition: Africa, cradle of humanity.',
                  wo: 'MCN dafa liggéy depuis lors pour valorisation bu apport bu Civilisations noires ci patrimoine universel bu humanité.'
                })}
              </p>

              <p className="text-gray-800 leading-relaxed">
                {t({
                  fr: 'À travers les fascinantes œuvres qui font les diverses expositions, le visiteur peut se faire une idée de la dispersion des peuples noirs à travers le monde. Il peut imaginer les formations sociales, les modes de production, les représentations symboliques, les rites initiatiques, produits par les civilisations noires depuis la nuit des temps.',
                  en: 'Through the fascinating works that make up the various exhibitions, visitors can get an idea of the dispersion of Black peoples across the world. They can imagine the social formations, modes of production, symbolic representations, and initiation rites produced by Black civilizations since time immemorial.',
                  wo: 'À travers œuvres yu fascinant, visiteur bi mën na xam dispersion bu peuples noirs ci monde bi.'
                })}
              </p>

              <p className="text-gray-800 leading-relaxed">
                {t({
                  fr: 'Il rencontre le rôle joué par les peuples noirs dans les guerres mondiales et l\'avènement d\'un monde libre. Il peut se remémorer les débats et les combats des intellectuels, des artistes et écrivains noirs dans les luttes pour l\'émancipation, sans compter leur apport dans la naissance du Panafricanisme et les droits civiques.',
                  en: 'Visitors encounter the role played by Black peoples in world wars and the advent of a free world. They can recall the debates and struggles of Black intellectuals, artists and writers in emancipation struggles, not to mention their contribution to the birth of Pan-Africanism and civil rights.',
                  wo: 'Dafa gis rôle bu peuples noirs ci guerres mondiales ak avènement bu monde libre.'
                })}
              </p>

              <p className="text-gray-800 leading-relaxed">
                {t({
                  fr: 'Le visiteur quitte la case en ayant foi en la communauté de destin qui lie les peuples noirs (africains, états-uniens, caraïbéens, européens, australiens, afro-latins, indiens…). Le MCN étant enraciné depuis sa conceptualisation au pays de la teranga, il valorise l\'hospitalité, l\'interculturalité, et insuffle le respect de la diversité culturelle vers l\'engendrement d\'un monde post-racial.',
                  en: 'Visitors leave with faith in the shared destiny that binds Black peoples (African, American, Caribbean, European, Australian, Afro-Latin, Indian…). Rooted since its conception in the land of teranga, the MCN values hospitality, interculturality, and instills respect for cultural diversity towards the creation of a post-racial world.',
                  wo: 'Visiteur bi dafa dem ak foi ci communauté bu destin bu lie peuples noirs.'
                })}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-100"
                  >
                    <Icon className="w-7 h-7 text-amber-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600">
                      {t(stat.label)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
