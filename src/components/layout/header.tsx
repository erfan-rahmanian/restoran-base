'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu as MenuIcon, ChefHat } from 'lucide-react';
import { CartSheet } from '@/components/cart/cart-sheet';
import { useCart } from '@/context/app-context';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { useState } from 'react';

const navLinks = [
  { href: '/menu', label: 'منو' },
  { href: '/reserve', label: 'رزرو' },
  { href: '/about', label: 'درباره ما' },
  { href: '/contact', label: 'تماس' },
];

export function Header() {
  const { cart } = useCart();
  const [isCartOpen, setCartOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-4">
             <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">باز کردن منو</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <ChefHat className="h-7 w-7 text-primary" />
                    <h1 className="text-xl font-bold font-headline">هاب غذا</h1>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map(link => (
                      <Link key={link.href} href={link.href} className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                   <div className="flex flex-col gap-2 mt-4">
                     <Link href="/login" passHref>
                      <Button variant="outline" className="w-full" onClick={() => setMobileMenuOpen(false)}>ورود</Button>
                    </Link>
                    <Link href="/signup" passHref>
                      <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>ثبت نام</Button>
                    </Link>
                   </div>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                <ChefHat className="h-7 w-7 text-primary" />
                <h1 className="text-xl font-bold font-headline">هاب غذا</h1>
            </Link>
          </div>


          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/signup" passHref>
              <Button className="hidden sm:inline-flex">ثبت نام</Button>
            </Link>
            <Link href="/login" passHref>
              <Button variant="outline" className="hidden sm:inline-flex">ورود</Button>
            </Link>
            <Button variant="ghost" size="icon" className="relative" onClick={() => setCartOpen(true)}>
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 left-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">باز کردن سبد خرید</span>
            </Button>
          </div>
        </div>
      </header>
      <CartSheet isOpen={isCartOpen} onOpenChange={setCartOpen} />
    </>
  );
}
