import Image from 'next/image';

export function LocationSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">به ما سر بزنید</h2>
          <p className="text-lg text-muted-foreground mt-2">بی‌صبرانه منتظر خدمت‌رسانی به شما هستیم.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/800x600.png"
              alt="نقشه مکان رستوران"
              width={800}
              height={600}
              className="w-full"
              data-ai-hint="city map"
            />
          </div>
          <div className="text-lg">
            <h3 className="text-2xl font-bold font-headline">آدرس</h3>
            <p className="text-muted-foreground mt-2">خیابان گاسترونومی ۱۲۳، شهر غذا</p>

            <h3 className="text-2xl font-bold font-headline mt-6">ساعات کاری</h3>
            <ul className="text-muted-foreground mt-2 space-y-1">
              <li><strong>شنبه - چهارشنبه:</strong> ۱۱:۰۰ صبح - ۱۰:۰۰ شب</li>
              <li><strong>پنجشنبه:</strong> ۱۱:۰۰ صبح - ۱۱:۰۰ شب</li>
              <li><strong>جمعه:</strong> ۱۰:۰۰ صبح - ۹:۰۰ شب</li>
            </ul>

            <h3 className="text-2xl font-bold font-headline mt-6">تماس</h3>
            <p className="text-muted-foreground mt-2">
              <strong>تلفن:</strong> ۰۲۱-۱۲۳۴۵۶۷۸<br />
              <strong>ایمیل:</strong> contact@gastronomehub.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
