import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { AccountAvatar } from "./account-avatar";

export function ReceiveTab() {

    let inputValue = "";
   
    return (
        <div className="pt-3 w-full flex flex-col gap-5 max-h-full">
        

            <Card className="bg-gray-100 flex flex-col gap-3 p-3 h-full">
            
            <Input placeholder="£0.00" className="text-6xl h-40 justify-center"  />
            <div className="flex-row w-full">
              <Button> Cancel</Button>
            <Button> Request</Button>  
                 </div>
            
            </Card>
        </div>
    );
}