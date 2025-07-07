import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center text-white">
      <Image
        src="https://placehold.co/1600x900.png"
        alt="غذای لذیذ"
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="gourmet food"
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 text-center p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold font-headline text-shadow-lg animate-fade-in-down">
          جایی که هر لقمه داستانی دارد
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-shadow animate-fade-in-up">
          سمفونی طعم‌هایی را که از تازه‌ترین مواد اولیه ساخته شده‌اند، کشف کنید. وعده غذایی مورد علاقه بعدی شما در انتظار است.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/menu" passHref>
            <Button size="lg" className="text-lg py-7 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform transition-transform hover:scale-105">
              سفارش آنلاین
            </Button>
          </Link>
          <Link href="/reserve" passHref>
            <Button size="lg" variant="outline" className="text-lg py-7 px-8 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black shadow-lg transform transition-transform hover:scale-105">
              رزرو میز
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
