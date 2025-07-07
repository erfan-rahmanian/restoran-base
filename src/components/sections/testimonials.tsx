import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Sarah J.',
    quote: "An unforgettable dining experience! The ambiance, the service, and most importantly, the food was spectacular. The ribeye steak was cooked to perfection.",
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'woman portrait'
  },
  {
    name: 'Michael B.',
    quote: "I've been to many restaurants, but Gastronome Hub stands out. The attention to detail in every dish is incredible. I highly recommend the seared scallops.",
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'man portrait'
  },
  {
    name: 'Emily L.',
    quote: "The perfect spot for a special occasion. We celebrated our anniversary here and were treated like royalty. The dessert was simply divine!",
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'smiling person'
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Guests Say</h2>
          <p className="text-lg text-muted-foreground mt-2">We are honored to have served so many happy customers.</p>
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
