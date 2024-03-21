// Importing necessary components from their respective paths
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";
import { AccountAvatar } from "./account-avatar";

// SendTab component
export function SendTab() {
    return (
        <div className="pt-3 w-full flex flex-col gap-5 max-h-full">
            <div className="flex flex-col gap-3">
                <CardTitle className="text-xl">Favourites</CardTitle>
                <div className="snap-mandatory snap-x w-fit overflow-x-auto flex flex-row gap-5">
                    <AccountAvatar name="John Doe" avatarUrl="" />
                    <AccountAvatar name="John Doe" avatarUrl="" />
                    <AccountAvatar name="John Doe" avatarUrl="" />
                </div>
            </div>
            <CardTitle className="text-xl">Nearby</CardTitle>

            <Card className="flex flex-col gap-3 p-3 h-full">
                <AccountAvatar name="Alice Smith" avatarUrl="" accountNumber="87654321" sortCode="65-43-21" orientation="horizontal" />
                <DropdownMenuSeparator />
                <AccountAvatar name="Bob Johnson" avatarUrl="" accountNumber="12348765" sortCode="56-34-12" orientation="horizontal" />
                <DropdownMenuSeparator />
                <AccountAvatar name="Charlie Brown" avatarUrl="" accountNumber="56781234" sortCode="21-65-43" orientation="horizontal" />
                <DropdownMenuSeparator />
                <AccountAvatar name="David Williams" avatarUrl="" accountNumber="43218765" sortCode="43-21-65" orientation="horizontal" />
                <DropdownMenuSeparator />
                <AccountAvatar name="Eve Davis" avatarUrl="" accountNumber="76543218" sortCode="34-12-56" orientation="horizontal" />
                <DropdownMenuSeparator />
                <AccountAvatar name="Frank Miller" avatarUrl="" accountNumber="21876543" sortCode="12-56-34" orientation="horizontal" />
            </Card>

        </div>
    )
}