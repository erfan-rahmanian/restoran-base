import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const featuredDishes = [
  {
    name: 'Seared Scallops',
    description: 'With corn purée and brown butter vinaigrette.',
    price: '28.50',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'seared scallops'
  },
  {
    name: 'Ribeye Steak',
    description: 'Aged 30 days, served with truffle mashed potatoes.',
    price: '45.00',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'ribeye steak'
  },
  {
    name: 'Mushroom Risotto',
    description: 'Creamy risotto with wild mushrooms and parmesan.',
    price: '24.00',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'mushroom risotto'
  },
];

export function FeaturedDishes() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Featured Dishes</h2>
          <p className="text-lg text-muted-foreground mt-2">Crafted with passion by our expert chefs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <Card key={dish.name} className="overflow-hidden border-2 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                  data-ai-hint={dish.aiHint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl">{dish.name}</CardTitle>
                <p className="text-muted-foreground mt-2">{dish.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-6 pt-0">
                <p className="text-xl font-bold text-primary">${dish.price}</p>
                <Button variant="ghost">Order Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Link href="/menu">
                <Button size="lg" variant="outline" className="group">
                    View Full Menu <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
