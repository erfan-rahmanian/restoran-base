import { HeroSection } from '@/components/sections/hero-section';
import { FeaturedDishes } from '@/components/sections/featured-dishes';
import { Testimonials } from '@/components/sections/testimonials';
import { LocationSection } from '@/components/sections/location-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedDishes />
      <Testimonials />
      <LocationSection />
    </div>
  );
}
