import { NextResponse } from "next/server"
import { query } from "@/lib/db"

export async function POST(request: Request) {
  const { email, password } = await request.json()

  try {
    const users = await query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password])

    if (users.length > 0) {
      // In a real application, you would use proper authentication and session management here
      return NextResponse.json({ message: "Sign in successful" })
    } else {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }
  } catch (error) {
    console.error("Database query error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

