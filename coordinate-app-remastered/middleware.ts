import { jwtDecode } from 'jwt-decode'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
	//Const to get the token from the cookies
	const token = request.cookies.get('token')?.value

	const publicPaths = ['/login', '/register']

	//If there is no token and the path is not public, redirect to login
	if (!token && !publicPaths.includes(request.nextUrl.pathname)) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	//If there is a token, verify if it is valid
	if (token) {
		try {
			const decoded: { exp: number } = jwtDecode(token)
			//If the token is expired, redirect to login
			if (decoded.exp < Date.now() / 1000) {
				return NextResponse.redirect(new URL('/login', request.url))
			}
		} catch (error) {
			return NextResponse.redirect(new URL('/login', request.url))
		}
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/', '/home'] // Matches all paths
}
