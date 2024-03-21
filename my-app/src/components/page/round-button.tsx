import { IconType } from "react-icons/lib";
import { Button } from "../ui/button"
import { Card, CardHeader, CardDescription, CardTitle, CardContent, CardFooter } from "../ui/card"
import React from "react";

type RoundButtonProps = {
  text: string
  icon?: IconType;
//   color: string
//   onClick: () => void
}

export function RoundButton({
   text, icon
}: RoundButtonProps) {  
    return (
      <div 
        className="bg-none flex flex-col gap-2 items-center justify-center text-center text-gray-700"
        // onClick={onClick}
      >
        <div className="bg-gray-300 rounded-full flex items-center justify-center text-2xl p-5"> 
            {icon && React.createElement(icon)}
        </div>
        {text} 
      </div>
    )
}