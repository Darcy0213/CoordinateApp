'use client'

import { ButtonsExamples, CoorButton, IconButtonsExamples } from '@common/buttons'
import { ChipsExamples } from '@common/chips'
import { useAuth } from '@context/AuthContext'
import { Box } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Home() {
	const { logout } = useAuth()
	const router = useRouter()
	return (
		<main className={'Home'}>
			<Box
				marginLeft={'10px'}
				gap={'10px'}
				flexDirection={'column'}
				display={'flex'}
			>
				<CoorButton
					label="Go Home"
					size="xl"
					color="success"
					intensity="high"
					iconPosition="end"
					iconName="help"
					onClick={() => router.push('/home')}
				/>
				<CoorButton
					label="Logout"
					size="lg"
					color="error"
					intensity="high"
					iconPosition="end"
					iconName="help"
					onClick={() => logout(router)}
				/>
				<ChipsExamples />
				<IconButtonsExamples />
				<ButtonsExamples />
			</Box>
		</main>
	)
}
