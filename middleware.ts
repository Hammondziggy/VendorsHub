import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function middleware(request: NextRequest) {
  const supabase = createClient();
  const { data: { session }, error } = await supabase.auth.getSession();

  console.log('Session:', session);
  console.log('Error:', error);

  const isAuthPage = request.nextUrl.pathname.startsWith('/auth');

  if (session) {
    // If the user is authenticated and trying to access the auth page, redirect to homepage
    if (isAuthPage) {
      console.log('User is authenticated, redirecting to home page');
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  // If the user is not authenticated, redirect to the signup page
  if (!isAuthPage) {
    console.log('User is not authenticated, redirecting to signup page');
    return NextResponse.redirect(new URL('/auth/signup', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Matcher pattern for all routes except static files and images
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
