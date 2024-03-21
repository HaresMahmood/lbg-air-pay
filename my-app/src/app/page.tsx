import { AccountCarousel } from "@/components/page/account-carousel"
import { RoundButton } from "@/components/page/round-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { MdCreditCard, MdNfc, MdNotifications, MdSavings, MdSupportAgent } from "react-icons/md"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AccountDebitCard } from "@/components/page/account-debit-card"

export default function Home() {
    let accounts = [
    {type: "Classic Account", balance: 1234.56, accountNumber: "12345678", sortCode: "12-34-56"},
    {type: "Gold Account", balance: 12345.67, accountNumber: "12345679", sortCode: "12-34-57"},
  ]
  return (
    <div className="w-full flex flex-col gap-3 p-7">
      <div className="flex flex-row justify-between items-center">
        <div>
          <p> Welcome back </p>
          <h3 className="text-2xl font-semibold"> Brett Hamilton </h3>
        </div>

        <Button variant="ghost" size="icon">
          <MdNotifications size={26} />
        </Button>
      </div>


      <div className="snap-mandatory snap-x w-full overflow-x-auto flex flex-row gap-5">
          {accounts.map((account, index) => (
          <div key={index} className="pl-1 w-fit">
            <div className="p-1">
              <AccountDebitCard type={account.type} balance={account.balance} accountNumber={account.accountNumber} sortCode={account.sortCode} />
            </div>
          </div>
        ))}
      </div>

      <div className="snap-mandatory snap-x w-full overflow-x-auto flex flex-row gap-5">
        <Link href="/airpay">
          <RoundButton text="Air Pay" icon={MdNfc} /> 
        </Link>
        <RoundButton text="Transfer" icon={MdCreditCard} />   
        <RoundButton text="Savings" icon={MdSavings} />  
        <RoundButton text="Support" icon={MdSupportAgent} />  
        <RoundButton text="Transfer" icon={MdCreditCard} />  
      </div>

      <div className="font-semibold"> Recent Activities </div>
      <div className="font-light text-xs">Monday  21/08/23</div>
      <Card className=" w-full flex flex-col">
      <CardHeader>
        <div>
          
          <div>Reboot 2024 Prize fund</div>
                              <CardDescription>+£300.00</CardDescription>
 </div>
        
      </CardHeader>     
    </Card>
    </div>
  )
}
