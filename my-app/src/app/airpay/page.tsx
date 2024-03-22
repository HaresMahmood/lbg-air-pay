'use client'

// Importing necessary components from their respective paths
import { AccountAvatar } from "@/components/page/account-avatar"
import { ReceiveTab } from "@/components/page/receive-tab"
import { SendTab } from "@/components/page/send-tab"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MdArrowBack, MdArrowDropDown } from "react-icons/md"
import Link from "next/link"

// Main component
export default function AirPay() {
    return (
        <div className="w-full h-screen flex flex-col gap-7 p-7">
            <div className="flex flex-row gap-3 items-center">
                <Link href="/">
                    <Button variant="ghost" size="icon">
                        <MdArrowBack size={26} />
                    </Button>
                </Link>
                <h3 className="text-2xl font-semibold"> Air Pay </h3>
            </div>

            <Card className="flex flex-col gap-3 w-full p-2">
                <CardDescription className=""> You are visible as </CardDescription>
                <div className="flex flex-row justify-between items-center w-full">
                    <AccountAvatar name="Brett Hamilton" avatarUrl="" accountNumber="12345678" sortCode="12-34-56" orientation="horizontal" />
                    <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant="ghost" size="icon">
                            <MdArrowDropDown size={26} />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem className="flex flex-col gap-1 items-start">
                            <p className="font-semibold">Classic Account</p>
                            <CardDescription>12345678</CardDescription>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex flex-col gap-1 items-start">
                            <p className="font-semibold">Gold Account</p>
                            <CardDescription>12345678</CardDescription>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </Card>

            <Tabs defaultValue="send" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="send">Send</TabsTrigger>
                    <TabsTrigger value="receive">Receive</TabsTrigger>
                </TabsList>
                {/* <div className="h-0.5 bg-gray-200 w-full" /> */}
                <TabsContent value="send">
                  <SendTab />
                </TabsContent>

               
                <TabsContent value="receive">
                    
                    <ReceiveTab />
                </TabsContent>
                </Tabs>
        </div>
    )
}
