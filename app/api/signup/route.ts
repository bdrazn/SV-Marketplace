import { NextResponse } from "next/server"
import { execute } from "@/lib/db"

export async function POST(request: Request) {
  const { name, email, password, role } = await request.json()

  try {
    await execute("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)", [name, email, password, role])

    return NextResponse.json({ message: "User created successfully" })
  } catch (error) {
    console.error("Database query error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

