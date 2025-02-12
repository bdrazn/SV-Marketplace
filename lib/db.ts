import sqlite3 from "sqlite3"
import { open } from "sqlite"

let db: any = null

export async function getDb() {
  if (db) {
    return db
  }

  db = await open({
    filename: "./prisma/database.sqlite",
    driver: sqlite3.Database,
  })

  return db
}

export async function query(sql: string, params: any[] = []) {
  const db = await getDb()
  return db.all(sql, params)
}

export async function execute(sql: string, params: any[] = []) {
  const db = await getDb()
  return db.run(sql, params)
}

