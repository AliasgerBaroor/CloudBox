import { NextResponse } from "next/server"


export const middleware = (request) => {
    return NextResponse.redirect(new URL("/auth/signup", request.url))
}

export const config = {
    matcher : ["/auth/confirm-mail/:path*"]
}