import { NextResponse } from "next/server"
import { query } from "@/lib/db"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get("search")

  let sql = `
    SELECT DISTINCT u.id, u.name, GROUP_CONCAT(s.name) as skills
    FROM users u
    LEFT JOIN vendor_skills vs ON u.id = vs.vendor_id
    LEFT JOIN skills s ON vs.skill_id = s.id
    WHERE u.role = 'vendor'
  `

  const params: any[] = []

  if (search) {
    sql += ` AND (u.name LIKE ? OR s.name LIKE ?)`
    params.push(`%${search}%`, `%${search}%`)
  }

  sql += " GROUP BY u.id"

  try {
    const vendors = await query(sql, params)
    return NextResponse.json(
      vendors.map((v: any) => ({
        ...v,
        skills: v.skills ? v.skills.split(",") : [],
      })),
    )
  } catch (error) {
    console.error("Database query error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

