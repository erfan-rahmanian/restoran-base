'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/context/app-context';
import type { MenuItem } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

interface MenuItemCardProps {
  item: MenuItem;
}

const filterTagTranslations: Record<string, string> = {
  'vegetarian': 'گیاهی',
  'spicy': 'تند',
  'gluten-free': 'بدون گلوتن'
}


export function MenuItemCard({ item }: MenuItemCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="flex flex-col h-full overflow-hidden border-2 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="aspect-video relative">
          <Image
            src={item.image}
            alt={item.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={item.aiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-2xl">{item.name}</CardTitle>
        <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
        <div className="mt-3 flex gap-2 flex-wrap">
            {item.tags.map(tag => (
                <Badge key={tag} variant="outline" className="capitalize">
                    {filterTagTranslations[tag] || tag}
                </Badge>
            ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-6 pt-0 mt-auto">
        <p className="text-xl font-bold text-primary">{item.price.toFixed(2)} تومان</p>
        <Button onClick={() => addToCart(item)}>افزودن به سبد</Button>
      </CardFooter>
    </Card>
  );
}
