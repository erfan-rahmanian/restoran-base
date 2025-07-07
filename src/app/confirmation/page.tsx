'use client';

import { useEffect, useState } from 'react';
import { useCart } from '@/context/app-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { RecommendationModal } from '@/components/ai/recommendation-modal';

export default function ConfirmationPage() {
  const { cart, clearCart } = useCart();
  const [orderSummary, setOrderSummary] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      const summary = cart
        .map(item => `${item.quantity}x ${item.menuItem.name}`)
        .join(', ');
      setOrderSummary(summary);
      
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 1500); // Open modal after 1.5 seconds

      // Clear cart on component mount
      clearCart();

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <div className="container py-16 md:py-24 flex justify-center">
        <Card className="w-full max-w-2xl text-center p-8 shadow-2xl">
          <CardHeader>
            <div className="mx-auto bg-green-100 dark:bg-green-900/50 rounded-full p-4 w-fit">
              <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="font-headline text-3xl mt-4">Thank You for Your Order!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg">
              Your order has been placed successfully. You will receive an email confirmation shortly.
            </p>
            <div className="mt-8 space-x-4">
              <Link href="/" passHref>
                <Button variant="outline">Back to Home</Button>
              </Link>
              <Button onClick={() => setIsModalOpen(true)}>Get Recommendations</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      {orderSummary && (
        <RecommendationModal
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          orderSummary={orderSummary}
        />
      )}
    </>
  );
}
