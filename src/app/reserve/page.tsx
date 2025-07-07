'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { PartyPopper, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ReservationPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string | undefined>();
  const [guests, setGuests] = useState<string | undefined>();
  const [isReserved, setIsReserved] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time || !guests) {
      toast({
        title: 'Incomplete Information',
        description: 'Please select a date, time, and number of guests.',
        variant: 'destructive',
      });
      return;
    }
    setIsReserved(true);
  };

  if (isReserved) {
    return (
        <div className="container py-24 flex justify-center">
            <Card className="w-full max-w-lg text-center p-8 shadow-2xl">
                <CardHeader>
                    <div className="mx-auto bg-green-100 rounded-full p-4 w-fit">
                        <CheckCircle className="h-16 w-16 text-green-600" />
                    </div>
                    <CardTitle className="font-headline text-3xl mt-4">Reservation Confirmed!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-lg">
                        Thank you for booking a table with us. We've sent a confirmation to your email and look forward to seeing you!
                    </p>
                    <Button onClick={() => setIsReserved(false)} className="mt-8">Make Another Reservation</Button>
                </CardContent>
            </Card>
        </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-secondary">
        <div className="container py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <PartyPopper className="h-12 w-12 text-primary mx-auto md:mx-0" />
                <h1 className="text-4xl md:text-5xl font-bold font-headline mt-4">Book Your Table</h1>
                <p className="text-lg text-muted-foreground mt-4 max-w-md mx-auto md:mx-0">
                    Secure your spot for an unforgettable dining experience. Reserve your table in just a few clicks.
                </p>
            </div>

            <Card className="w-full max-w-md mx-auto shadow-2xl">
            <CardHeader>
                <CardTitle className="font-headline text-2xl text-center">Reservation Details</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid gap-2">
                    <Label>Full Name</Label>
                    <Input placeholder="John Doe" required />
                 </div>
                 <div className="grid gap-2">
                    <Label>Email</Label>
                    <Input type="email" placeholder="john.doe@example.com" required />
                 </div>
                <div className="grid gap-2">
                    <Label>Select Date</Label>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border p-0"
                        disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label>Time</Label>
                        <Select onValueChange={setTime} value={time}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                            {['12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'].map(t => (
                                <SelectItem key={t} value={t}>{t}</SelectItem>
                            ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <Label>Guests</Label>
                         <Select onValueChange={setGuests} value={guests}>
                            <SelectTrigger>
                                <SelectValue placeholder="Guests" />
                            </SelectTrigger>
                            <SelectContent>
                                {[...Array(8)].map((_, i) => (
                                    <SelectItem key={i + 1} value={`${i + 1}`}>
                                        {i + 1} guest{i > 0 ? 's' : ''}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <Button type="submit" size="lg" className="w-full">
                    Book Table
                </Button>
                </form>
            </CardContent>
            </Card>
        </div>
        </div>
    </div>
  );
}
