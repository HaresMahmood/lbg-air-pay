import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type AccountDebitCardProps = {
  type: string
  balance: number
  accountNumber: string
  sortCode: string
}

export function AccountDebitCard({
     type: type, balance, accountNumber, sortCode
}: AccountDebitCardProps) {  
    return (
    <Card className="aspect-[1.586] w-[300px] flex flex-col">
      <CardHeader>
        <CardDescription> {type} </CardDescription>
        <CardTitle className="text-3xl"> £{balance} </CardTitle>
        <CardDescription>After pending transactions</CardDescription>
      </CardHeader>
      <CardContent>
        
      </CardContent>
      <CardFooter className="flex justify-between">
        <CardDescription> {sortCode} • {accountNumber} </CardDescription>
      </CardFooter>
    </Card>
    )
}