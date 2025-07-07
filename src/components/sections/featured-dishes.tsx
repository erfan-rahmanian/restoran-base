import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const featuredDishes = [
  {
    name: 'اسکالپ دریایی',
    description: 'با پوره ذرت و سس کره قهوه‌ای.',
    price: '28.50',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'seared scallops'
  },
  {
    name: 'استیک ریبای',
    description: '۳۰ روز خوابانده شده، با پوره سیب زمینی ترافل.',
    price: '45.00',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'ribeye steak'
  },
  {
    name: 'ریزوتو قارچ',
    description: 'ریزوتوی خامه‌ای با قارچ‌های وحشی و پارمزان.',
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
          <h2 className="text-3xl md:text-4xl font-bold font-headline">غذاهای ویژه ما</h2>
          <p className="text-lg text-muted-foreground mt-2">با اشتیاق توسط سرآشپزان متخصص ما تهیه شده است.</p>
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
                <p className="text-xl font-bold text-primary">{dish.price} تومان</p>
                <Button variant="ghost">سفارش دهید</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Link href="/menu">
                <Button size="lg" variant="outline" className="group">
                    مشاهده منوی کامل <ArrowLeft className="me-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
