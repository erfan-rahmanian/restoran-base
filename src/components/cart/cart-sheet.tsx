'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/app-context';
import Image from 'next/image';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { Separator } from '../ui/separator';
import Link from 'next/link';

interface CartSheetProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function CartSheet({ isOpen, onOpenChange }: CartSheetProps) {
  const { cart, updateCartQuantity, removeFromCart, getCartTotal } = useCart();
  const total = getCartTotal();

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-headline text-2xl">Your Cart</SheetTitle>
        </SheetHeader>
        {cart.length > 0 ? (
          <>
            <div className="flex-1 overflow-y-auto -mx-6 px-6">
              <ul className="divide-y divide-border">
                {cart.map(({ menuItem, quantity }) => (
                  <li key={menuItem.id} className="flex py-4 items-center">
                    <Image
                      src={menuItem.image}
                      alt={menuItem.name}
                      width={80}
                      height={80}
                      className="rounded-md object-cover"
                      data-ai-hint={menuItem.aiHint}
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="font-semibold">{menuItem.name}</h3>
                      <p className="text-primary font-medium">${menuItem.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateCartQuantity(menuItem.id, quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span>{quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateCartQuantity(menuItem.id, quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => removeFromCart(menuItem.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <SheetFooter className="mt-auto">
                <div className="w-full space-y-4">
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                        <span>Subtotal</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                     <SheetClose asChild>
                        <Link href="/checkout" className="w-full">
                            <Button size="lg" className="w-full">
                                Proceed to Checkout
                            </Button>
                        </Link>
                    </SheetClose>
                </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <ShoppingCart className="w-24 h-24 text-muted-foreground/50" />
            <h3 className="text-xl font-semibold mt-4">Your cart is empty</h3>
            <p className="text-muted-foreground mt-2">Add some delicious items from our menu!</p>
             <SheetClose asChild>
                <Link href="/menu" passHref>
                    <Button className="mt-6">Explore Menu</Button>
                </Link>
             </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
