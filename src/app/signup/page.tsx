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
import { ChefHat } from "lucide-react"

export default function SignupPage() {
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
            <div className="grid gap-4">
              <div className="grid gap-2">
                  <Label htmlFor="full-name">نام کامل</Label>
                  <Input id="full-name" placeholder="ماکس رابینسون" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">ایمیل</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">رمز عبور</Label>
                <Input id="password" type="password" />
              </div>
              <Button type="submit" className="w-full">
                ایجاد حساب کاربری
              </Button>
              <Button variant="outline" className="w-full">
                ثبت نام با گوگل
              </Button>
            </div>
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
