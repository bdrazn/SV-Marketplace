"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Vendor {
  id: number
  name: string
  skills: string[]
}

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState<Vendor[]>([])

  useEffect(() => {
    fetchVendors()
  }, [])

  const fetchVendors = async () => {
    const response = await fetch("/api/vendors")
    const data = await response.json()
    setResults(data)
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch(`/api/vendors?search=${searchTerm}`)
    const data = await response.json()
    setResults(data)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Search Vendors</h1>
      <form onSubmit={handleSearch} className="flex gap-2">
        <Input
          type="text"
          placeholder="Search for skills or services"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit">Search</Button>
      </form>
      <div className="space-y-4">
        {results.map((vendor) => (
          <div key={vendor.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{vendor.name}</h2>
            <p>Skills: {vendor.skills.join(", ")}</p>
            <Link href={`/vendor/${vendor.id}`}>
              <Button variant="outline" className="mt-2">
                View Profile
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

