import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { AccountAvatar } from "./account-avatar";

export function ReceiveTab() {

    const [amount, setAmount] = useState(0);

    return (
        <div className="pt-3 w-full h-full flex flex-col items-center gap-5 max-h-full">
            <CardDescription> Wait for someone nearby to send you funds </CardDescription>
            <DropdownMenuSeparator />
            <CardTitle className="font-semibold"> or </CardTitle>
            <DropdownMenuSeparator />
            <div className="w-full">
                <CardDescription> Request a specific amount </CardDescription>
            </div>
            <Card className="flex flex-col gap-3 p-3 h-full">
                <div className="flex flex-row gap-3 items-center">
                    <h1 className="text-6xl font-semibold">£</h1>
                    <Input placeholder="0.00" className="text-6xl font-semibold h-30 justify-center outline-none border-none" />
                </div>
            </Card>

            <div className="flex flex-row gap-3 w-full">
                <Button variant="outline" className="border-red-700"> Cancel</Button>
            
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="w-full"> Request</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Requested</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                
                                <Input
                                    id="name"
                                    defaultValue="Pedro Duarte"
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                
                                <Input
                                    id="username"
                                    defaultValue="@peduarte"
                                    className="col-span-3"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}