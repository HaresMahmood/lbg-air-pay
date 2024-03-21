import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AccountDebitCard } from "./account-debit-card"

export function AccountCarousel() {
  // create a list of accounts for use witth AccountDebitCard in the Carousel
  
  let accounts = [
    {type: "Classic Account", balance: 1234.56, accountNumber: "12345678", sortCode: "12-34-56"},
    {type: "Gold Account", balance: 12345.67, accountNumber: "12345679", sortCode: "12-34-57"},
  ]

  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <AccountDebitCard type="Classic Account" balance={1234.56} accountNumber="12345678" sortCode="12-34-56" />
            </div>
          </CarouselItem>
        ))} */}

        {accounts.map((account, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <AccountDebitCard type={account.type} balance={account.balance} accountNumber={account.accountNumber} sortCode={account.sortCode} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
