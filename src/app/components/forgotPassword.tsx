import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {PasswordInput} from "@/components/ui/password-input";
import Link from "next/link";


type Props = {
  email: string;
}
export default async function ForgotPassword({email}: Props) {

  return (
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Forgot password</CardTitle>
            <CardDescription>
              Enter your email address and we will send you a link to reset your password.
            </CardDescription>
            <CardDescription>
              Or <Link className="text-blue-400 underline" href="/login">login</Link>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="example@email.com" defaultValue={email} />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Send</Button>
          </CardFooter>
        </Card>
  )
}