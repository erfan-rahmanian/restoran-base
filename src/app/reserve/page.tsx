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
        title: 'اطلاعات ناقص',
        description: 'لطفاً تاریخ، زمان و تعداد مهمانان را انتخاب کنید.',
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
                    <CardTitle className="font-headline text-3xl mt-4">رزرو تایید شد!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-lg">
                        از اینکه یک میز با ما رزرو کردید متشکریم. ما یک تاییدیه به ایمیل شما ارسال کرده‌ایم و مشتاق دیدار شما هستیم!
                    </p>
                    <Button onClick={() => setIsReserved(false)} className="mt-8">رزرو مجدد</Button>
                </CardContent>
            </Card>
        </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-secondary">
        <div className="container py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-start">
                <PartyPopper className="h-12 w-12 text-primary mx-auto md:mx-0" />
                <h1 className="text-4xl md:text-5xl font-bold font-headline mt-4">میز خود را رزرو کنید</h1>
                <p className="text-lg text-muted-foreground mt-4 max-w-md mx-auto md:mx-0">
                    جای خود را برای یک تجربه غذایی فراموش‌نشدنی امن کنید. میز خود را تنها با چند کلیک رزرو کنید.
                </p>
            </div>

            <Card className="w-full max-w-md mx-auto shadow-2xl">
            <CardHeader>
                <CardTitle className="font-headline text-2xl text-center">جزئیات رزرو</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid gap-2">
                    <Label>نام کامل</Label>
                    <Input placeholder="علی علوی" required />
                 </div>
                 <div className="grid gap-2">
                    <Label>ایمیل</Label>
                    <Input type="email" placeholder="ali.alavi@example.com" required />
                 </div>
                <div className="grid gap-2">
                    <Label>انتخاب تاریخ</Label>
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
                        <Label>زمان</Label>
                        <Select onValueChange={setTime} value={time}>
                            <SelectTrigger>
                                <SelectValue placeholder="انتخاب زمان" />
                            </SelectTrigger>
                            <SelectContent>
                            {['۱۲:۰۰', '۱۳:۰۰', '۱۴:۰۰', '۱۸:۰۰', '۱۹:۰۰', '۲۰:۰۰', '۲۱:۰۰'].map(t => (
                                <SelectItem key={t} value={t}>{t}</SelectItem>
                            ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <Label>تعداد مهمانان</Label>
                         <Select onValueChange={setGuests} value={guests}>
                            <SelectTrigger>
                                <SelectValue placeholder="تعداد" />
                            </SelectTrigger>
                            <SelectContent>
                                {[...Array(8)].map((_, i) => (
                                    <SelectItem key={i + 1} value={`${i + 1}`}>
                                        {i + 1} نفر
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <Button type="submit" size="lg" className="w-full">
                    رزرو میز
                </Button>
                </form>
            </CardContent>
            </Card>
        </div>
        </div>
    </div>
  );
}
