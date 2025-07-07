import Link from 'next/link';
import { ChefHat, Twitter, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline">
              <ChefHat className="h-8 w-8 text-primary" />
              Gastronome Hub
            </Link>
            <p className="text-muted-foreground mt-2 max-w-sm">
              Experience the finest culinary creations, crafted with passion and served with love.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
            <div>
              <h3 className="font-bold mb-2 font-headline">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/menu" className="hover:text-primary">Menu</Link></li>
                <li><Link href="/reserve" className="hover:text-primary">Reservations</Link></li>
                <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2 font-headline">Contact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>123 Gastronomy St, Food City</li>
                <li>(123) 456-7890</li>
                <li>contact@gastronomehub.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Gastronome Hub. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram /></a>
            <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
