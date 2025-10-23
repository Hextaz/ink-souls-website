import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
    try {
      await supabase.auth.exchangeCodeForSession(code)
    } catch (error) {
      // Redirect to login page with error parameter if exchange fails
      const loginUrl = new URL('/login', requestUrl.origin)
      loginUrl.searchParams.set('error', 'auth_callback')
      return NextResponse.redirect(loginUrl.toString())
    }
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(new URL('/admin/dashboard', requestUrl.origin))
}
