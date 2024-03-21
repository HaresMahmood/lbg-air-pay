'use client'

// Importing necessary components from their respective paths
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { AccountAvatar } from "./account-avatar";
import { MdContactless } from "react-icons/md";
import { SuccessDialog } from "./success-dialog";
import { RequestDialog } from "./request-dialog";

// ReceiveTab component
export function ReceiveTab() {

    const [amount, setAmount] = useState(0);
    const [success, setSuccess] = useState(false);

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
                    <Input
                        placeholder="0.00"
                        className="text-6xl font-semibold h-30 justify-center outline-none border-none"
                        onChange={(e) => setAmount(parseFloat(e.target.value))}
                    />
                </div>
            </Card>

            <div className="flex flex-row gap-3 w-full">
                <Button variant="outline" className="border-red-700"> Cancel</Button>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            className="w-full"
                            onClick={() => {
                                setTimeout(async () => {
                                    // Wait 5 seconds before displaying success message
                                    console.log(`Requesting £${amount}`);
                                    setSuccess(true);

                                    // Check if the browser supports Web NFC
                                    if ("NDEFReader" in window) {
                                        const ndef = new NDEFReader();
                                        try {
                                            await ndef.scan();
                                            ndef.addEventListener("reading", (event: any) => {
                                                const { message, serialNumber } = event;
                                                console.log(`> Serial Number: ${serialNumber}`);
                                                console.log(`> Records: (${message.records.length})`);
                                            });
                                        } catch (error) {
                                            console.error(`Error! Scan failed to start: ${error}.`);
                                        }
                                    } else {
                                        console.log("Web NFC is not supported on this browser.");
                                    }

                                }, 5000);
                            }}
                        >
                            Request
                        </Button>
                    </DialogTrigger>
                    {success ?
                        <SuccessDialog amount={amount} />
                        : <RequestDialog amount={amount} />
                    }
                </Dialog>
            </div>
        </div>
    );
}