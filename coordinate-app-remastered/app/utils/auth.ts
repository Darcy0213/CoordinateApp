import { jwtDecode } from 'jwt-decode'

interface DecodedToken {
	exp: number
}

export const isTokenValid = (token: string | null): boolean => {
	if (!token) {
		return false
	}
	try {
		// Decode the token
		const decoded: DecodedToken = jwtDecode<DecodedToken>(token)
		// Check if the token is expired
		return decoded.exp > Date.now() / 1000
	} catch (error) {
		console.error('Error decoding token:', error)
		return false
	}
}
