import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MdArrowBack } from "react-icons/md"

export default function AirPay() {
    return (
        <div className="w-full flex flex-col gap-7 p-7">
            <div className="flex flex-row gap-3 items-center">
                <Button variant="ghost" size="icon">
                    <MdArrowBack size={26} />
                </Button>
                <h3 className="text-2xl font-semibold"> Air Pay </h3>
            </div>

            <div className="flex flex-col gap-3">
                <CardDescription className=""> You are visible as </CardDescription>
                <div className="flex flex-row gap-3 items-center">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>BH</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-row justify-between items-center">
                        <div>
                            <h3 className="font-semibold"> Brett Hamilton </h3>
                            <CardDescription className="text-xs"> 12-34-56 • 12345678 </CardDescription>
                        </div>
                        <Button variant="ghost" size="icon">
                            <MdArrowBack size={26} />
                        </Button>
                    </div>
                </div>
            </div>

            <Tabs defaultValue="send" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="send">Send</TabsTrigger>
                    <TabsTrigger value="receive">Receive</TabsTrigger>
                </TabsList>
                <TabsContent value="sends">
                    <Card>
                    <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>
                        Make changes to your account here. Click save when youre done.
                        </CardDescription>
                    </CardHeader>
                    </Card>
                </TabsContent>
                <TabsContent value="receive">
                    <Card>
                    <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>
                        Change your password here. After saving, youll be logged out.
                        </CardDescription>
                    </CardHeader>
                    
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                    </Card>
                </TabsContent>
                </Tabs>
        </div>
    )
}
