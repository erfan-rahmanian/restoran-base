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

export default function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { signUp, googleSignIn, user } = useAppContext();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      router.push('/menu');
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
        toast({ variant: "destructive", title: "خطا", description: "لطفاً تمام فیلدها را پر کنید." });
        return;
    }
     if (password.length < 6) {
      toast({ variant: "destructive", title: "خطا", description: "رمز عبور باید حداقل ۶ کاراکتر باشد." });
      return;
    }
    setIsLoading(true);
    try {
      await signUp(fullName, email, password);
      toast({ title: "ثبت نام موفقیت آمیز بود!", description: "حساب کاربری شما ایجاد شد." });
      router.push('/menu');
    } catch (error: any) {
      console.error(error);
      let errorMessage = "خطایی در ثبت نام رخ داد. لطفاً دوباره تلاش کنید.";
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = "این ایمیل قبلا استفاده شده است. لطفاً با ایمیل دیگری امتحان کنید یا وارد شوید.";
      }
      toast({ variant: "destructive", title: "خطا در ثبت نام", description: errorMessage });
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
       <div className="hidden bg-secondary lg:flex flex-col items-center justify-center p-12 text-center">
        <ChefHat className="h-20 w-20 text-primary" />
        <h2 className="mt-6 text-4xl font-bold font-headline">به هاب غذا بپیوندید</h2>
        <p className="mt-4 text-lg text-muted-foreground">
            برای لذت بردن از یک تجربه سفارش بی‌نظیر، ذخیره غذاهای مورد علاقه و دریافت پیشنهادات ویژه، یک حساب کاربری ایجاد کنید.
        </p>
      </div>
      <div className="flex items-center justify-center py-12">
        <Card className="mx-auto w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl font-headline">ثبت نام</CardTitle>
            <CardDescription>
              برای ایجاد حساب کاربری اطلاعات خود را وارد کنید
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="full-name">نام کامل</Label>
                    <Input id="full-name" placeholder="ماکس رابینسون" required value={fullName} onChange={e => setFullName(e.target.value)} disabled={isLoading} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">ایمیل</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">رمز عبور</Label>
                  <Input id="password" type="password" required value={password} onChange={e => setPassword(e.target.value)} disabled={isLoading} />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                   {isLoading && <Loader2 className="me-2 h-4 w-4 animate-spin" />}
                   ایجاد حساب کاربری
                </Button>
              </div>
            </form>
            <Button variant="outline" className="w-full mt-4" onClick={handleGoogleSignIn} disabled={isLoading}>
              ثبت نام با گوگل
            </Button>
            <div className="mt-4 text-center text-sm">
              قبلا حساب کاربری ساخته‌اید؟{" "}
              <Link href="/login" className="underline">
                وارد شوید
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
