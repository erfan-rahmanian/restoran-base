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
              هاب غذا
            </Link>
            <p className="text-muted-foreground mt-2 max-w-sm">
              بهترین خلاقیت‌های آشپزی را تجربه کنید که با اشتیاق ساخته شده و با عشق سرو می‌شود.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 text-center md:text-start">
            <div>
              <h3 className="font-bold mb-2 font-headline">لینک‌های سریع</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/menu" className="hover:text-primary">منو</Link></li>
                <li><Link href="/reserve" className="hover:text-primary">رزرو</Link></li>
                <li><Link href="/about" className="hover:text-primary">درباره ما</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2 font-headline">تماس</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>خیابان گاسترونومی ۱۲۳، شهر غذا</li>
                <li>۰۲۱-۱۲۳۴۵۶۷۸</li>
                <li>contact@gastronomehub.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} هاب غذا. تمام حقوق محفوظ است.</p>
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
