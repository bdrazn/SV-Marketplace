import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          StudentMarket
        </Link>
        <div className="space-x-4">
          <Link to="/search" className="text-gray-600 hover:text-gray-900">
            Search
          </Link>
          <Link to="/signin" className="text-gray-600 hover:text-gray-900">
            Sign In
          </Link>
          <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header

