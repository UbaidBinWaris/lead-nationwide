import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const proxy = auth((req) => {
  const adminPagePath = process.env.ADMIN_PAGE || '/l8I32auyIM';
  const isLoginPage = req.nextUrl.pathname.startsWith(`${adminPagePath}/login`);
  const isAdminPage = req.nextUrl.pathname.startsWith(adminPagePath);

  // Protect admin dashboard routes
  if (isAdminPage && !isLoginPage) {
    if (!req.auth) {
      const url = req.nextUrl.clone();
      url.pathname = `${adminPagePath}/login`;
      return NextResponse.redirect(url);
    }
  }

  // If already authenticated and trying to access login, redirect to dashboard
  if (isLoginPage && req.auth) {
    const url = req.nextUrl.clone();
    url.pathname = adminPagePath;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config = {
  // Match all request paths except for static files, api routes, and Next.js internal paths
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
