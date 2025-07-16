'use client';

import { useAppContext } from '@/context/app-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function CheckoutPage() {
  const { cart, getCartTotal, user, loading } = useAppContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const total = getCartTotal();

  useEffect(() => {
    if (!loading && !user) {
      toast({
        title: 'نیاز به ورود',
        description: 'برای ادامه پرداخت لطفاً وارد شوید.',
        variant: 'destructive',
      });
      router.push('/login');
    }
  }, [user, loading, router, toast]);

  useEffect(() => {
    if (!loading && user && cart.length === 0) {
      router.push('/menu');
    }
  }, [cart, user, loading, router]);


  if (loading || !user) {
    return (
      <div className="container py-12 md:py-16 text-center flex flex-col items-center justify-center min-h-[50vh]">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground">در حال بارگذاری اطلاعات کاربری...</p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: 'خطا',
        description: 'برای ثبت سفارش باید وارد شوید.',
        variant: 'destructive',
      });
      return;
    }

    if (!db) {
      toast({
        title: 'خطا',
        description: 'اتصال به پایگاه داده برقرار نیست.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const finalTotal = total * 1.09;

    const orderData = {
      userId: user.uid,
      createdAt: serverTimestamp(),
      items: cart.map(({ menuItem, quantity }) => ({
        id: menuItem.id,
        name: menuItem.name,
        price: menuItem.price,
        quantity: quantity,
      })),
      total: parseFloat(finalTotal.toFixed(2)),
      status: 'در حال آماده سازی',
      deliveryDetails: {
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        name: formData.get('name') as string,
        address: formData.get('address') as string,
        city: formData.get('city') as string,
        state: formData.get('state') as string,
        zip: formData.get('zip') as string,
      },
      paymentMethod: formData.get('payment') as string,
    };

    try {
      await addDoc(collection(db, 'orders'), orderData);
      
      toast({
          title: "سفارش ثبت شد!",
          description: "سفارش شما با موفقیت ثبت شد و در پایگاه داده ذخیره شد.",
      });

      router.push('/confirmation');

    } catch (error) {
      console.error("Error adding document: ", error);
      toast({
        title: 'خطا در ثبت سفارش',
        description: 'مشکلی در ذخیره سفارش شما پیش آمد. لطفاً دوباره تلاش کنید.',
        variant: 'destructive',
      });
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-4xl font-bold font-headline text-center mb-12">پرداخت</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">اطلاعات تماس</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">ایمیل</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required defaultValue={user.email || ''} />
                </div>
                 <div className="grid gap-2">
                  <Label htmlFor="phone">شماره تلفن</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="۰۹۱۲۳۴۵۶۷۸۹" required />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">جزئیات تحویل</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">نام کامل</Label>
                  <Input id="name" name="name" placeholder="علی علوی" required defaultValue={user.displayName || ''}/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">آدرس</Label>
                  <Input id="address" name="address" placeholder="خ اصلی ۱۲۳" required />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="city">شهر</Label>
                    <Input id="city" name="city" placeholder="شهر غذا" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="state">استان</Label>
                    <Input id="state" name="state" placeholder="تهران" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="zip">کد پستی</Label>
                    <Input id="zip" name="zip" placeholder="12345" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">پرداخت</CardTitle>
                </CardHeader>
                <CardContent>
                    <RadioGroup defaultValue="card" name="payment" className="space-y-2">
                        <div className="flex items-center space-x-2 space-x-reverse">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card">کارت اعتباری/بانکی</Label>
                        </div>
                         <div className="flex items-center space-x-2 space-x-reverse">
                            <RadioGroupItem value="cash" id="cash" />
                            <Label htmlFor="cash">پرداخت در محل</Label>
                        </div>
                    </RadioGroup>
                </CardContent>
            </Card>
          </div>

          <div className="md:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">خلاصه سفارش</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cart.map(({ menuItem, quantity }) => (
                  <div key={menuItem.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Image
                        src={menuItem.image}
                        alt={menuItem.name}
                        width={48}
                        height={48}
                        className="rounded-md object-cover"
                        data-ai-hint={menuItem.aiHint}
                      />
                      <div>
                        <p className="font-semibold">{menuItem.name}</p>
                        <p className="text-sm text-muted-foreground">تعداد: {quantity}</p>
                      </div>
                    </div>
                    <p className="font-medium">{(menuItem.price * quantity).toFixed(2)} تومان</p>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between font-semibold">
                  <p>جمع کل</p>
                  <p>{total.toFixed(2)} تومان</p>
                </div>
                 <div className="flex justify-between text-muted-foreground">
                  <p>مالیات و هزینه‌ها</p>
                  <p>{(total * 0.09).toFixed(2)} تومان</p>
                </div>
                <Separator />
                <div className="flex justify-between text-xl font-bold">
                  <p>مجموع</p>
                  <p>{(total * 1.09).toFixed(2)} تومان</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                   {isSubmitting && <Loader2 className="me-2 h-4 w-4 animate-spin" />}
                   {isSubmitting ? 'در حال ثبت...' : 'ثبت سفارش'}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
