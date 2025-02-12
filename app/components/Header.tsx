import Link from "next/link"
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          StudentMarket
        </Link>
        <div className="space-x-4">
          <Link href="/search">
            <Button variant="ghost">Search</Button>
          </Link>
          <Link href="/signin">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header

