import { NextResponse } from "next/server"
import { query } from "@/lib/db"

export async function GET() {
  try {
    const services = await query("SELECT id, name FROM services")
    return NextResponse.json(services)
  } catch (error) {
    console.error("Database query error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

