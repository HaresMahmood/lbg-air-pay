import { MdArrowDropDown } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { CardDescription } from "../ui/card";

type AccountAvatarProps = {
    name: string;
    avatarUrl: string;
    accountNumber?: string;
    sortCode?: string;
    trailingContent?: React.ReactNode;
    onClick?: () => void;
    orientation?: "vertical" | "horizontal";
}

export function AccountAvatar({ name, avatarUrl, accountNumber, trailingContent, sortCode, onClick, orientation = "vertical" }: AccountAvatarProps) {
    return (
        <div
            onClick={onClick}
        >
            {orientation === "vertical" ? (
                <div className="flex flex-col items-center gap-2 overflow-x-hidden">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>BH</AvatarFallback>
                    </Avatar>
                    <p className="text-xs font-semibold text-ellipsis">{name}</p>
                </div>
            ) : (
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-row gap-3 items-center">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>BH</AvatarFallback>
                        </Avatar>

                        <div>
                            <h3 className="font-semibold"> {name} </h3>
                            <CardDescription className="text-xs"> {sortCode} • {accountNumber} </CardDescription>
                        </div>
                    </div>
                    {trailingContent}
                </div>
            )}
        </div>
    )
}