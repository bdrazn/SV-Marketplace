import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">Welcome to StudentMarket</h1>
      <p className="text-xl text-center">Find and book services from talented vendors in your area</p>
      <div className="flex justify-center space-x-4">
        <Link href="/search">
          <Button size="lg">Find Services</Button>
        </Link>
        <Link href="/signup?role=vendor">
          <Button size="lg" variant="outline">
            Become a Vendor
          </Button>
        </Link>
      </div>
    </div>
  )
}

