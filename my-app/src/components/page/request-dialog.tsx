import { MdContactless } from "react-icons/md";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

type RequestDialogProps = {
    amount: number
}

export function RequestDialog({ amount }: RequestDialogProps) {
    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Requesting £{amount}</DialogTitle>
                <DialogDescription>
                    Hold the payment method on the back of this device for 5 seconds
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="flex items-center justify-center">
                    <MdContactless size={200} />
                </div>
            </div>
        </DialogContent>
    )
}