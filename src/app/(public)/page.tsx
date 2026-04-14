import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Stats from '@/components/Stats';
import Partners from '@/components/Partners';
import News from '@/components/News';
import Certifications from '@/components/Certifications';
import { OurStrengthCard } from '@/components/card/our-strength.card';
import { GoldStandardCard } from '@/components/card/gold-standard.card';
import { IntroCard } from '@/components/card/intro.card';

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroCard />
      <Categories />
      <div className="w-full bg-white">
        <OurStrengthCard />
      </div>
      <Stats />
      <Partners />
      <GoldStandardCard />

      <News />
      <Certifications />
    </main>
  );
}
