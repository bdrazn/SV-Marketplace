import { NextResponse } from "next/server"
import { execute } from "@/lib/db"

export async function POST(request: Request) {
  const { serviceId, date, time } = await request.json()

  try {
    // In a real application, you would get the student_id from the authenticated user's session
    const studentId = 1 // Placeholder

    await execute("INSERT INTO bookings (student_id, service_id, booking_date, booking_time) VALUES (?, ?, ?, ?)", [
      studentId,
      serviceId,
      date,
      time,
    ])

    return NextResponse.json({ message: "Booking created successfully" })
  } catch (error) {
    console.error("Database query error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

