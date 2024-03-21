import { IconType } from "react-icons/lib";
import { Button } from "../ui/button"
import { Card, CardHeader, CardDescription, CardTitle, CardContent, CardFooter } from "../ui/card"
import React from "react";

type RoundButtonProps = {
  text: string
  icon?: IconType;
}

export function RoundButton({
   text, icon
}: RoundButtonProps) {  
    const baseColors = ["bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-red-100", "bg-purple-100", "bg-pink-100", "bg-indigo-100", "bg-gray-100"]
    const randomColor = baseColors[Math.floor(Math.random() * baseColors.length)];

    return (
      <div 
      className={`flex flex-col gap-2 items-center justify-center text-center text-gray-700`}
      >
      <div 
        className={`${randomColor} rounded-full flex items-center justify-center text-2xl p-5`}
        > 
        {icon && React.createElement(icon)}
      </div>
      {text} 
      </div>
    )
}