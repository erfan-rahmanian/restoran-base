import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'سارا ج.',
    quote: "یک تجربه غذایی فراموش نشدنی! فضا، خدمات و مهمتر از همه، غذا فوق‌العاده بود. استیک ریبای به طور کامل پخته شده بود.",
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'woman portrait'
  },
  {
    name: 'مایکل ب.',
    quote: "من به رستوران‌های زیادی رفته‌ام، اما هاب غذا برجسته است. توجه به جزئیات در هر غذا باورنکردنی است. من به شدت اسکالپ دریایی را توصیه می‌کنم.",
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'man portrait'
  },
  {
    name: 'امیلی ل.',
    quote: "مکان مناسب برای یک مناسبت خاص. ما سالگرد خود را اینجا جشن گرفتیم و مانند خانواده سلطنتی با ما رفتار شد. دسر просто божественный بود!",
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'smiling person'
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">مهمانان ما چه می‌گویند</h2>
          <p className="text-lg text-muted-foreground mt-2">ما مفتخریم که به بسیاری از مشتریان خوشحال خدمت کرده‌ایم.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-background p-6 shadow-lg">
              <CardContent className="flex flex-col items-center text-center p-0">
                <Avatar className="w-20 h-20 mb-4 border-4 border-primary">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                <p className="font-bold mt-4 font-headline">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
