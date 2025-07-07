import Image from 'next/image';

export function LocationSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Visit Us</h2>
          <p className="text-lg text-muted-foreground mt-2">We can't wait to serve you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/800x600.png"
              alt="Map showing restaurant location"
              width={800}
              height={600}
              className="w-full"
              data-ai-hint="city map"
            />
          </div>
          <div className="text-lg">
            <h3 className="text-2xl font-bold font-headline">Address</h3>
            <p className="text-muted-foreground mt-2">123 Gastronomy Street, Food City, FC 12345</p>

            <h3 className="text-2xl font-bold font-headline mt-6">Opening Hours</h3>
            <ul className="text-muted-foreground mt-2 space-y-1">
              <li><strong>Monday - Friday:</strong> 11:00 AM - 10:00 PM</li>
              <li><strong>Saturday:</strong> 10:00 AM - 11:00 PM</li>
              <li><strong>Sunday:</strong> 10:00 AM - 9:00 PM</li>
            </ul>

            <h3 className="text-2xl font-bold font-headline mt-6">Contact</h3>
            <p className="text-muted-foreground mt-2">
              <strong>Phone:</strong> (123) 456-7890<br />
              <strong>Email:</strong> contact@gastronomehub.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
