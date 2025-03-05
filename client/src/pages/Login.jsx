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

const Login = () =>  {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="singup">Singup</TabsTrigger>
        <TabsTrigger value="login">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="singup">
        <Card>
          <CardHeader>
            <CardTitle>Singup</CardTitle>
            <CardDescription>
              Create a new account and click singup when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input type="text" placeholder="Eg. Suman" required="true" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Email</Label>
              <Input type="email" placeholder="Eg. suman@gmail.com" required="true"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input type="password" placeholder="Eg. xyz" required="true"/>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Singup</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Login your password here. After singup, you'll be logged in.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Email</Label>
              <Input type="email" placeholder="Eg. suman@gmail.com" required="true"/>

            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Password</Label>
              <Input type="password" placeholder="Eg. xyz" required="true"/>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default Login;