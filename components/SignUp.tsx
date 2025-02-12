"use client"

import type React from "react"
import { useState } from "react"

const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("student")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Sign up attempt", { name, email, password, role })
    // In a real app, you would handle user registration here
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Role</label>
          <div className="space-x-4">
            <label>
              <input type="radio" value="student" checked={role === "student"} onChange={() => setRole("student")} />{" "}
              Student
            </label>
            <label>
              <input type="radio" value="vendor" checked={role === "vendor"} onChange={() => setRole("vendor")} />{" "}
              Vendor
            </label>
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUp

