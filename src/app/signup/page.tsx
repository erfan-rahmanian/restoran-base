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
        <h2 className="mt-6 text-4xl font-bold font-headline">Join Gastronome Hub</h2>
        <p className="mt-4 text-lg text-muted-foreground">
            Create an account to enjoy a seamless ordering experience, save your favorite dishes, and get exclusive offers.
        </p>
      </div>
      <div className="flex items-center justify-center py-12">
        <Card className="mx-auto w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl font-headline">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input id="full-name" placeholder="Max Robinson" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button type="submit" className="w-full">
                Create an account
              </Button>
              <Button variant="outline" className="w-full">
                Sign up with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
