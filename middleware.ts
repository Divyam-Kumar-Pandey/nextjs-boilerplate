import { NextResponse, NextRequest, userAgent } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const url = req.nextUrl.pathname;
  const ua = userAgent(req);
  if(url.startsWith("/customer/dashboard")) {
    if(ua.device.type === "mobile") {
      return NextResponse.rewrite(new URL("/mobile/customer/dashboard", req.url));
    }
  }
  console.log(ua);
  return res;
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico, sitemap.xml, robots.txt (metadata files)
       */
      '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
  }