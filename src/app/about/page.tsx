import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center text-white">
        <Image
          src="https://placehold.co/1600x700.png"
          alt="Our restaurant's kitchen"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="restaurant kitchen"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 text-center p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline">Our Story</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            From a humble beginning to a culinary landmark in Food City.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-headline text-primary">A Passion for Flavor</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Gastronome Hub was born from a simple yet powerful idea: to create a place where food is not just eaten, but experienced. Our journey started in a small kitchen, with a handful of family recipes and a dream to share our love for authentic, high-quality cuisine with the world.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                We believe in the power of fresh, locally-sourced ingredients. Every dish on our menu is a testament to our commitment to quality, creativity, and the rich traditions of culinary arts. We partner with local farmers and purveyors to ensure that every bite you take is fresh, flavorful, and unforgettable.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/800x600.png"
                alt="Founder of the restaurant"
                width={800}
                height={600}
                className="w-full"
                data-ai-hint="chef portrait"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet Our Head Chef</h2>
            <div className="flex flex-col items-center mt-8">
                <Avatar className="w-32 h-32 mb-4 border-4 border-primary">
                  <AvatarImage src="https://placehold.co/200x200.png" alt="Head Chef" data-ai-hint="professional chef" />
                  <AvatarFallback>CH</AvatarFallback>
                </Avatar>
                <h3 className="font-headline text-2xl">Chef Antoine Dubois</h3>
                <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto italic">
                "For me, cooking is an art form—a way to connect with people and create joy. Each plate is a canvas, and the ingredients are my colors. Welcome to my kitchen."
                </p>
            </div>
        </div>
      </section>
    </>
  );
}
