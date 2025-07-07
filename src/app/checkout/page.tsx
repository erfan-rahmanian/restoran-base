'use client';

import { useCart } from '@/context/app-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';

export default function CheckoutPage() {
  const { cart, getCartTotal, clearCart } = useCart();
  const router = useRouter();
  const { toast } = useToast();
  const total = getCartTotal();

  if (cart.length === 0) {
    router.push('/menu');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
        title: "Order Placed!",
        description: "Your order has been successfully placed.",
    });
    router.push('/confirmation');
  };

  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-4xl font-bold font-headline text-center mb-12">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
                 <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(123) 456-7890" required />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Delivery Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="123 Main St" required />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Food City" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="FC" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" placeholder="12345" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Payment</CardTitle>
                </CardHeader>
                <CardContent>
                    <RadioGroup defaultValue="card" className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card">Credit/Debit Card</Label>
                        </div>
                         <div className="flex items-center space-x-2">
                            <RadioGroupItem value="cash" id="cash" />
                            <Label htmlFor="cash">Cash on Delivery</Label>
                        </div>
                    </RadioGroup>
                </CardContent>
            </Card>
          </div>

          <div className="md:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Order Summary</CardTitle>
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
                        <p className="text-sm text-muted-foreground">Qty: {quantity}</p>
                      </div>
                    </div>
                    <p className="font-medium">${(menuItem.price * quantity).toFixed(2)}</p>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between font-semibold">
                  <p>Subtotal</p>
                  <p>${total.toFixed(2)}</p>
                </div>
                 <div className="flex justify-between text-muted-foreground">
                  <p>Taxes & Fees</p>
                  <p>${(total * 0.08).toFixed(2)}</p>
                </div>
                <Separator />
                <div className="flex justify-between text-xl font-bold">
                  <p>Total</p>
                  <p>${(total * 1.08).toFixed(2)}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" size="lg" className="w-full">
                  Place Order
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
