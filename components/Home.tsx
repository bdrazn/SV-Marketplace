import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to StudentMarket</h1>
      <p className="text-xl mb-8">Find and book services from talented vendors in your area</p>
      <div className="space-x-4">
        <Link to="/search" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Find Services
        </Link>
        <Link to="/signup" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300">
          Become a Vendor
        </Link>
      </div>
    </div>
  )
}

export default Home

