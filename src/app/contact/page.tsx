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
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Get In Touch</h1>
                <p className="text-lg text-muted-foreground mt-2">We'd love to hear from you. Whether you have a question, feedback, or a special request, feel free to reach out.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" placeholder="Your Name" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="Your Email" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" placeholder="Your message..." />
                                </div>
                                <Button type="submit" className="w-full">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-8">
                    <div>
                        <h2 className="font-headline text-2xl mb-4">Contact Information</h2>
                        <div className="space-y-4 text-lg">
                            <div className="flex items-center gap-4">
                                <MapPin className="h-6 w-6 text-primary"/>
                                <span className="text-muted-foreground">123 Gastronomy St, Food City, FC 12345</span>
                            </div>
                             <div className="flex items-center gap-4">
                                <Phone className="h-6 w-6 text-primary"/>
                                <span className="text-muted-foreground">(123) 456-7890</span>
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
                        alt="Map showing restaurant location"
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