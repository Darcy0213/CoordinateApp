'use client'

import CoorButton from '@common/buttons/button/CoorButton'
import { useAuth } from '@context/AuthContext'
import { Box } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Home() {
	const { logout } = useAuth()
	const router = useRouter()
	return (
		<main className={'Home'}>
			<Box marginLeft={'10px'}>
				<CoorButton
					label="Go Home"
					size="h4"
					color="success"
					intensity="low"
					iconPosition="end"
					iconName="help"
					onClick={() => router.push('/home')}
				/>
				<CoorButton
					label="Logout"
					size="h4"
					color="success"
					intensity="low"
					iconPosition="end"
					iconName="help"
					onClick={() => logout(router)}
				/>
			</Box>
		</main>
	)
}
