import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BirdMigration from '@/components/BirdMigration';
import BirdingEtiquette from '@/components/BirdingEtiquette';
import WaterRitual from '@/components/WaterRitual';
import ParentChildActivities from '@/components/ParentChildActivities';
import Schedule from '@/components/Schedule';
import ReserveMap from '@/components/ReserveMap';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  useEffect(() => {
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const href = target.getAttribute('href');
        if (href && href.length > 1) {
          const element = document.querySelector(href);
          if (element) {
            e.preventDefault();
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleHashClick);
    return () => document.removeEventListener('click', handleHashClick);
  }, []);

  return (
    <div className="min-h-screen bg-cream-100">
      <Navigation />
      <main>
        <HeroSection />
        <BirdMigration />
        <BirdingEtiquette />
        <WaterRitual />
        <ParentChildActivities />
        <Schedule />
        <ReserveMap />
      </main>
      <Footer />
    </div>
  );
}
