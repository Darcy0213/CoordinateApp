import { useAuth } from '@context/AuthContext'
import { Box } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface AuthFormProps {
	mode: 'login' | 'register'
}

const AuthForm = ({ mode }: AuthFormProps) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [organizationName, setOrganizationName] = useState('')
	const { login, register } = useAuth()
	const router = useRouter()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (mode === 'login') {
			await login(email, password)
			router.push('/')
		} else if (mode === 'register') {
			await register(email, password, firstName, lastName, organizationName)
			router.push('/login')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<Box
				display={'flex'}
				justifyContent={'center'}
			>
				<Box
					display={'flex'}
					flexDirection={'column'}
					gap={'10px'}
					width={'30%'}
				>
					{mode === 'register' && (
						<>
							<span>First name</span>
							<input
								type="text"
								placeholder="First name"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								required
							/>
							<span>Last name</span>
							<input
								type="text"
								placeholder="Last name"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								required
							/>
							<span>Organization name</span>
							<input
								type="text"
								placeholder="Organization Name"
								value={organizationName}
								onChange={(e) => setOrganizationName(e.target.value)}
								required
							/>{' '}
						</>
					)}

					<span>Email</span>
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<span>Password</span>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<Box
						display={'flex'}
						flexDirection={'column'}
						gap={'10px'}
						width={'30%'}
						alignSelf={'center'}
					>
						<button type="submit">{mode === 'login' ? 'Login' : 'Register'}</button>
						<button
							type="button"
							onClick={() => router.push(mode === 'login' ? '/register' : '/login')}
						>
							{mode === 'login' ? 'Register?' : 'Login?'}
						</button>
					</Box>
				</Box>
			</Box>
		</form>
	)
}

export default AuthForm
