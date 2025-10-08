import { HeroSlider } from '../components/HeroSlider';
import { QRDemo } from '../components/QRDemo';
import { CollectionShowcase } from '../components/CollectionShowcase';
import { About } from '../components/About';
import { VirtualTour } from '../components/VirtualTour';
import { News } from '../components/News';
import { CaseMag } from '../components/CaseMag';
import { Testimonials } from '../components/Testimonials';
import { ContactInfo } from '../components/ContactInfo';
import { Footer } from '../components/Footer';

interface HomePageProps {
  onExplore: () => void;
}

export function HomePage({ onExplore }: HomePageProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSlider onExplore={onExplore} />
     
      <section id="qr-demo">
        <QRDemo />
      </section>
      <section id="collection">
        <CollectionShowcase onExploreCollection={onExplore} />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="news">
        <News />
      </section>
      <section id="casemag">
        <CaseMag />
      </section>
      <section id="virtual-tour">
        <VirtualTour onStartTour={onExplore} />
      </section>
      <Testimonials />
      <section id="contact">
        <ContactInfo />
      </section>
      <Footer />
    </div>
  );
}
