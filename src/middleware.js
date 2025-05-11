import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get the pathname of the request
  const { pathname } = request.nextUrl;

  // Auth pages paths
  const authPages = ['/sign-in', '/sign-up'];
  
  // Protected routes that require authentication
  const protectedRoutes = ['/dashboard', '/dashboard/issues'];
  
  // Get auth cookie/token from request cookies
  // In a real app, you would verify this token on the server
  const hasAuthCookie = request.cookies.has('auth');
  
  // Check if the requested page is a protected route and user is not authenticated
  if (protectedRoutes.some(route => pathname.startsWith(route)) && !hasAuthCookie) {
    const url = new URL('/sign-in', request.url);
    // Add the redirect URL as a query parameter
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }
  
  // If user is authenticated and trying to access auth pages, redirect to dashboard
  if (hasAuthCookie && authPages.some(page => pathname === page)) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  // Otherwise, continue with the request
  return NextResponse.next();
}

export const config = {
  // Define which paths this middleware should run on
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
}; 