'use client'

import AuthForm from '@components/AuthForm'
import { Box } from '@mui/material'

export default function AuthPage() {
	return (
		<Box>
			<h1>Login</h1>
			<AuthForm mode="login" />
		</Box>
	)
}
