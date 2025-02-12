"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

const mockVendors = [
  { id: "1", name: "John Doe", skills: ["Web Development", "Graphic Design"] },
  { id: "2", name: "Jane Smith", skills: ["Content Writing", "SEO"] },
]

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState(mockVendors)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setResults(
      mockVendors.filter(
        (vendor) =>
          vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          vendor.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase())),
      ),
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Search Vendors</h1>
      <form onSubmit={handleSearch} className="mb-8">
        <input
          type="text"
          placeholder="Search for skills or services"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>
      <div className="space-y-4">
        {results.map((vendor) => (
          <div key={vendor.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{vendor.name}</h2>
            <p>Skills: {vendor.skills.join(", ")}</p>
            <Link to={`/vendor/${vendor.id}`} className="text-blue-500 hover:underline">
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search

