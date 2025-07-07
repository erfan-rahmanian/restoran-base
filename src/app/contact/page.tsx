import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="container py-16 md:py-24">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">در تماس باشید</h1>
                <p className="text-lg text-muted-foreground mt-2">خوشحال می‌شویم از شما بشنویم. چه سوال، بازخورد یا درخواست خاصی داشته باشید، با ما تماس بگیرید.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">برای ما پیام بفرستید</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">نام کامل</Label>
                                    <Input id="name" placeholder="نام شما" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">ایمیل</Label>
                                    <Input id="email" type="email" placeholder="ایمیل شما" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="message">پیام</Label>
                                    <Textarea id="message" placeholder="پیام شما..." />
                                </div>
                                <Button type="submit" className="w-full">ارسال پیام</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-8">
                    <div>
                        <h2 className="font-headline text-2xl mb-4">اطلاعات تماس</h2>
                        <div className="space-y-4 text-lg">
                            <div className="flex items-center gap-4">
                                <MapPin className="h-6 w-6 text-primary"/>
                                <span className="text-muted-foreground">خیابان گاسترونومی ۱۲۳، شهر غذا</span>
                            </div>
                             <div className="flex items-center gap-4">
                                <Phone className="h-6 w-6 text-primary"/>
                                <span className="text-muted-foreground">۰۲۱-۱۲۳۴۵۶۷۸</span>
                            </div>
                             <div className="flex items-center gap-4">
                                <Mail className="h-6 w-6 text-primary"/>
                                <span className="text-muted-foreground">contact@gastronomehub.com</span>
                            </div>
                        </div>
                    </div>
                     <div className="rounded-lg overflow-hidden shadow-lg">
                        <Image
                        src="https://placehold.co/800x600.png"
                        alt="نقشه مکان رستوران"
                        width={800}
                        height={500}
                        className="w-full"
                        data-ai-hint="city map"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
