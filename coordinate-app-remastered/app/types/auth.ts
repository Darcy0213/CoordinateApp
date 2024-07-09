export interface AuthContextType {
	user: loggedUser | null
	isLoggedIn: boolean
	isInitialized: boolean
	login: (email: string, password: string) => Promise<void>
	logout: (router: any) => void
	register: (email: string, password: string, firstName: string, lastName: string, organizationName: string) => Promise<void>
	resetPassword: (email: string) => Promise<void>
	updateProfile: () => void
}

export type loggedUser = {
	id: string
	email: string
	name: string
}

export interface JwtPayload {
	id: string
	mail: string
	name: string
}
