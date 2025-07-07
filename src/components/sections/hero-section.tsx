import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center text-white">
      <Image
        src="https://placehold.co/1600x900.png"
        alt="Delicious gourmet dish"
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="gourmet food"
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 text-center p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold font-headline text-shadow-lg animate-fade-in-down">
          Where Every Bite Tells a Story
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-shadow animate-fade-in-up">
          Discover a symphony of flavors crafted from the freshest ingredients. Your next favorite meal awaits.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/menu" passHref>
            <Button size="lg" className="text-lg py-7 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform transition-transform hover:scale-105">
              Order Online
            </Button>
          </Link>
          <Link href="/reserve" passHref>
            <Button size="lg" variant="outline" className="text-lg py-7 px-8 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black shadow-lg transform transition-transform hover:scale-105">
              Book a Table
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
