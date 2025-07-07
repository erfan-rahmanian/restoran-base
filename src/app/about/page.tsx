import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center text-white">
        <Image
          src="https://placehold.co/1600x700.png"
          alt="آشپزخانه رستوران ما"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="restaurant kitchen"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 text-center p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline">داستان ما</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            از یک شروع فروتنانه تا یک نماد آشپزی در شهر غذا.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-headline text-primary">اشتیاق برای طعم</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                هاب غذا از یک ایده ساده اما قدرتمند متولد شد: ایجاد مکانی که در آن غذا فقط خورده نمی‌شود، بلکه تجربه می‌شود. سفر ما از یک آشپزخانه کوچک، با چند دستور پخت خانوادگی و رویای به اشتراک گذاشتن عشقمان به غذاهای اصیل و با کیفیت با جهان آغاز شد.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                ما به قدرت مواد اولیه تازه و محلی ایمان داریم. هر غذای موجود در منوی ما گواهی بر تعهد ما به کیفیت، خلاقیت و سنت‌های غنی هنر آشپزی است. ما با کشاورزان و تامین‌کنندگان محلی همکاری می‌کنیم تا اطمینان حاصل کنیم که هر لقمه‌ای که می‌خورید تازه، خوش‌طعم و فراموش‌نشدنی است.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/800x600.png"
                alt="بنیانگذار رستوران"
                width={800}
                height={600}
                className="w-full"
                data-ai-hint="chef portrait"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">آشنایی با سرآشپز ما</h2>
            <div className="flex flex-col items-center mt-8">
                <Avatar className="w-32 h-32 mb-4 border-4 border-primary">
                  <AvatarImage src="https://placehold.co/200x200.png" alt="سرآشپز" data-ai-hint="professional chef" />
                  <AvatarFallback>CH</AvatarFallback>
                </Avatar>
                <h3 className="font-headline text-2xl">سرآشپز آنتوان دوبوآ</h3>
                <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto italic">
                "برای من، آشپزی یک هنر است—راهی برای ارتباط با مردم و ایجاد شادی. هر بشقاب یک بوم نقاشی است و مواد اولیه رنگ‌های من هستند. به آشپزخانه من خوش آمدید."
                </p>
            </div>
        </div>
      </section>
    </>
  );
}
