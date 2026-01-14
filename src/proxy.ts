import { NextRequest, NextResponse } from "next/server";

export default function proxy(req: NextRequest){
  const acessToken = req.cookies.get('acessToken')
  if(!acessToken) return NextResponse.redirect(new URL('/login', req.url))
    NextResponse.next()
}

export const config = {
  matcher: ['/','/dashboard/:path*', '/product/:path*', '/order/:path*', '/category/:path*'],
};