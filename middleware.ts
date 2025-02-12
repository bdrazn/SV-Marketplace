import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  const isAuthenticated = !!token

  if (!isAuthenticated && req.nextUrl.pathname.startsWith("/protected")) {
    return NextResponse.redirect(new URL("/signin", req.url))
  }

  if (isAuthenticated) {
    const userRole = token.role as string

    if (req.nextUrl.pathname.startsWith("/protected/student") && userRole !== "student") {
      return NextResponse.redirect(new URL("/unauthorized", req.url))
    }

    if (req.nextUrl.pathname.startsWith("/protected/vendor") && userRole !== "vendor") {
      return NextResponse.redirect(new URL("/unauthorized", req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/protected/:path*", "/protected/student/:path*", "/protected/vendor/:path*"],
}

