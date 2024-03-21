import { MdContactless, MdTaskAlt } from "react-icons/md";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

type RequestDialogProps = {
    amount: string
}

export function SuccessDialog({ amount }: RequestDialogProps) {
    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Success!</DialogTitle>
                <DialogDescription>
                    Successfully received £{amount} from the Rico Solanki
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="flex items-center justify-center">
                    <MdTaskAlt size={200} />
                </div>
            </div>
        </DialogContent>
    )
}