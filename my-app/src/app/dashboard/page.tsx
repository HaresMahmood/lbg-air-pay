import { AccountCarousel } from "@/components/page/account-carousel"
import { RoundButton } from "@/components/page/round-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Bell, BellRing, Check } from "lucide-react"
import { MdCreditCard, MdNfc, MdSavings, MdSupportAgent } from "react-icons/md"

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-3 p-7">
      <div className="flex flex-row justify-between items-center">
        <div>
          <p> Welcome back </p>
          <h3 className="text-2xl font-semibold"> Brett Hamilton </h3>
        </div>

        <Button variant="ghost" size="icon">
          <BellRing />
        </Button>
      </div>

      <AccountCarousel />

      <div className="snap-mandatory snap-x w-full overflow-x-auto flex flex-row gap-5">
        <RoundButton text="Air Pay" icon={MdNfc} /> 
        <RoundButton text="Transfer" icon={MdCreditCard} />   
        <RoundButton text="Savings" icon={MdSavings} />  
        <RoundButton text="Support" icon={MdSupportAgent} />  
        <RoundButton text="Transfer" icon={MdCreditCard} />  
      </div>
    </div>
  )
}
