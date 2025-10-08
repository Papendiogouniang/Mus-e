import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect } from 'react';

interface HeroSliderProps {
  onExplore: () => void;
}

export function HeroSlider({ onExplore }: HeroSliderProps) {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://mcn-sn.com/wp-content/uploads/2024/12/13.jpeg',
      title: {
        fr: 'Découvrez les Civilisations Noires',
        en: 'Discover Black Civilizations',
        wo: 'Discover Civilisations Noires'
      },
      subtitle: {
        fr: 'Une expérience immersive et interactive pour explorer notre patrimoine culturel exceptionnel',
        en: 'An immersive and interactive experience to explore our exceptional cultural heritage',
        wo: 'Expérience bu immersive ngir xool patrimoine culturel bi exceptional'
      }
    },
    {
      image: 'https://mcn-sn.com/wp-content/uploads/2024/12/dd1.png',
      title: {
        fr: 'Arts Traditionnels Africains',
        en: 'Traditional African Arts',
        wo: 'Arts Traditionnels Africains'
      },
      subtitle: {
        fr: 'Masques, sculptures et objets rituels d\'une richesse inestimable',
        en: 'Masks, sculptures and ritual objects of invaluable wealth',
        wo: 'Masques, sculptures ak objets rituels bu délicieux'
      }
    },
    {
      image: 'https://mcn-sn.com/wp-content/uploads/2024/12/dd2.jpg',
      title: {
        fr: 'Architecture & Patrimoine',
        en: 'Architecture & Heritage',
        wo: 'Architecture & Patrimoine'
      },
      subtitle: {
        fr: 'Structures monumentales et sites historiques préservés',
        en: 'Monumental structures and preserved historical sites',
        wo: 'Structures monumentales ak sites historiques'
      }
    },
    {
      image: 'https://www.reforme.net/wp-content/uploads/2018/12/IMG_3846_WEB.jpg',
      title: {
        fr: 'Art Contemporain Africain',
        en: 'Contemporary African Art',
        wo: 'Art Contemporain Africain'
      },
      subtitle: {
        fr: 'Créations modernes et expressions artistiques innovantes',
        en: 'Modern creations and innovative artistic expressions',
        wo: 'Créations modernes ak expressions artistiques innovantes'
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-amber-950 to-orange-950 text-white min-h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 opacity-30">
            <img
              src={slide.image}
              alt="MCN"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 min-h-screen flex items-center">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-3 mb-8 animate-fade-in">
            <Sparkles className="w-7 h-7 text-amber-400 animate-pulse" />
            <span className="text-amber-400 font-bold text-xl tracking-wide uppercase">
              {t({
                fr: 'Innovation Culturelle Digitale',
                en: 'Digital Cultural Innovation',
                wo: 'Innovation Culturelle Digitale'
              })}
            </span>
          </div>

          <div className="min-h-[280px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 absolute'
                }`}
              >
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight bg-gradient-to-r from-white via-amber-100 to-orange-200 bg-clip-text text-transparent">
                  {t(slide.title)}
                </h1>

                <p className="text-2xl sm:text-3xl text-gray-100 mb-10 leading-relaxed font-light">
                  {t(slide.subtitle)}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={onExplore}
              className="group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 hover:scale-105 flex items-center justify-center space-x-3"
            >
              <span>
                {t({
                  fr: 'Explorer Maintenant',
                  en: 'Explore Now',
                  wo: 'Explore Léegi'
                })}
              </span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>

            <button
              onClick={onExplore}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/40 hover:border-white/60 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105"
            >
              {t({
                fr: 'Scanner un QR Code',
                en: 'Scan QR Code',
                wo: 'Scanner QR Code'
              })}
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-12">
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-3">5000+</div>
              <div className="text-gray-200 text-lg font-medium">
                {t({
                  fr: 'Œuvres',
                  en: 'Artworks',
                  wo: 'Œuvres'
                })}
              </div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-3">14000m²</div>
              <div className="text-gray-200 text-lg font-medium">
                {t({
                  fr: 'Surface',
                  en: 'Surface',
                  wo: 'Surface'
                })}
              </div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-3">3</div>
              <div className="text-gray-200 text-lg font-medium">
                {t({
                  fr: 'Langues',
                  en: 'Languages',
                  wo: 'Làkk'
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-amber-500 text-white p-4 rounded-full transition-all duration-300 border-2 border-white/30 hover:border-amber-400 hover:scale-110 shadow-xl"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-amber-500 text-white p-4 rounded-full transition-all duration-300 border-2 border-white/30 hover:border-amber-400 hover:scale-110 shadow-xl"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-4 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? 'bg-gradient-to-r from-amber-400 to-orange-500 w-12 shadow-lg shadow-amber-500/50'
                : 'bg-white/50 hover:bg-white/80 w-4'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
