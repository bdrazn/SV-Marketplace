"use client"

import type React from "react"
import { useState } from "react"

const Booking = () => {
  const [service, setService] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking attempt", { service, date, time })
    // In a real app, you would handle the booking process here
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book a Service</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="service" className="block mb-1">
            Service
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select a service</option>
            <option value="web-dev">Web Development</option>
            <option value="design">Graphic Design</option>
            <option value="writing">Content Writing</option>
          </select>
        </div>
        <div>
          <label htmlFor="date" className="block mb-1">
            Date
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="time" className="block mb-1">
            Time
          </label>
          <input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded">
          Book Service
        </button>
      </form>
    </div>
  )
}

export default Booking

