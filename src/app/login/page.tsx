'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChefHat, Loader2 } from "lucide-react"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/app-context";
import { useToast } from "@/hooks/use-toast";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { logIn, googleSignIn, user } = useAppContext();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      router.push('/menu');
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
        toast({ variant: "destructive", title: "خطا", description: "لطفاً ایمیل و رمز عبور را وارد کنید." });
        return;
    }
    setIsLoading(true);
    try {
      await logIn(email, password);
      toast({ title: "خوش آمدید!", description: "با موفقیت وارد شدید." });
      router.push('/menu');
    } catch (error: any) {
      console.error(error);
      toast({ variant: "destructive", title: "خطا در ورود", description: "ایمیل یا رمز عبور نامعتبر است." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      toast({ title: "خوش آمدید!", description: "با موفقیت با حساب گوگل وارد شدید." });
      router.push('/menu');
    } catch (error) {
      console.error(error);
      toast({ variant: "destructive", title: "خطا", description: "ورود با گوگل با مشکل مواجه شد. لطفاً دوباره تلاش کنید." });
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-8rem)] lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <Card className="mx-auto w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-headline">ورود</CardTitle>
            <CardDescription>
              برای ورود به حساب کاربری خود، ایمیل خود را وارد کنید
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">ایمیل</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">رمز عبور</Label>
                    <Link
                      href="#"
                      className="ms-auto inline-block text-sm underline"
                    >
                      رمز عبور خود را فراموش کرده‌اید؟
                    </Link>
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading && <Loader2 className="me-2 h-4 w-4 animate-spin" />}
                  ورود
                </Button>
              </div>
            </form>
            <Button variant="outline" className="w-full mt-4" onClick={handleGoogleSignIn} disabled={isLoading}>
              ورود با گوگل
            </Button>
            <div className="mt-4 text-center text-sm">
              حساب کاربری ندارید؟{" "}
              <Link href="/signup" className="underline">
                ثبت نام
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="hidden bg-secondary lg:flex flex-col items-center justify-center p-12 text-center">
        <ChefHat className="h-20 w-20 text-primary" />
        <h2 className="mt-6 text-4xl font-bold font-headline">به هاب غذا خوش آمدید</h2>
        <p className="mt-4 text-lg text-muted-foreground">
            برای دسترسی به تاریخچه سفارشات، آدرس‌های ذخیره شده و پرداخت سریع‌تر وارد شوید.
        </p>
      </div>
    </div>
  )
}
