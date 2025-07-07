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

export default function LoginPage() {
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
            <div className="grid gap-4">
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
                <div className="flex items-center">
                  <Label htmlFor="password">رمز عبور</Label>
                  <Link
                    href="#"
                    className="ms-auto inline-block text-sm underline"
                  >
                    رمز عبور خود را فراموش کرده‌اید؟
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                ورود
              </Button>
              <Button variant="outline" className="w-full">
                ورود با گوگل
              </Button>
            </div>
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
