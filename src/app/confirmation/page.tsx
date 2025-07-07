'use client';

import { useEffect } from 'react';
import { useCart } from '@/context/app-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ConfirmationPage() {
  const { cart, clearCart } = useCart();

  useEffect(() => {
    if (cart.length > 0) {
      clearCart();
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
            <CardTitle className="font-headline text-3xl mt-4">از سفارش شما متشکریم!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg">
              سفارش شما با موفقیت ثبت شد. به زودی یک ایمیل تایید دریافت خواهید کرد.
            </p>
            <div className="mt-8">
              <Link href="/" passHref>
                <Button variant="outline">بازگشت به صفحه اصلی</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
