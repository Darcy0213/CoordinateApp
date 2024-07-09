'use client'
import ApiAxios from '@api/ApiAxios'
import { AuthContextType, JwtPayload, loggedUser } from '@globalTypes/index'

import { isTokenValid } from '@utils/auth'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<loggedUser | null>(null)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [isInitialized, setIsInitialized] = useState(false)

	useEffect(() => {
		const initAuth = async () => {
			const token = Cookies.get('token')
			// Check if the token is valid
			if (token && isTokenValid(token)) {
				try {
					// Decode the token
					const decodedUser: JwtPayload = jwtDecode(token)
					// Set the user in the context
					setUser({ id: decodedUser?.id, email: decodedUser?.mail, name: decodedUser?.name })
					setIsLoggedIn(true)
				} catch (error) {
					console.error('Error decoding token:', error)
				}
			}
			setIsInitialized(true)
		}

		initAuth()
	}, [])

	// Login function
	const login = async (email: string, password: string) => {
		try {
			const { token, user, preferences } = await ApiAxios.post<{ token: string; user: any; preferences: any }>({
				route: '/login',
				data: { email, password }
			})

			Cookies.set('token', token, { secure: true, sameSite: 'strict' })
			localStorage.setItem('userPreferences', JSON.stringify(preferences))
			setUser(user)
			setIsLoggedIn(true)
		} catch (error) {
			console.error('Failed to login:', error)
			throw error
		}
	}

	// Logout function
	const logout = (router: AppRouterInstance) => {
		Cookies.remove('token')
		localStorage.removeItem('userPreferences')
		setUser(null)
		setIsLoggedIn(false)
		router.push('/login')
	}

	// Register function
	const register = async (email: string, password: string, firstName: string, lastName: string, organizationName: string) => {
		try {
			await ApiAxios.post({ route: '/register', data: { email, password, firstName, lastName, organizationName } })
		} catch (error) {
			console.error('Failed to register:', error)
			throw error
		}
	}

	// Reset password function
	const resetPassword = async (email: string) => {
		try {
			await ApiAxios.put({ route: '/reset-password', data: { email } })
		} catch (error) {
			console.error('Failed to reset password:', error)
			throw error
		}
	}

	const updateProfile = () => {}

	if (!isInitialized) {
		return <div>Loading...</div>
	}

	return (
		<AuthContext.Provider value={{ user, isLoggedIn, isInitialized, login, logout, register, resetPassword, updateProfile }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}
