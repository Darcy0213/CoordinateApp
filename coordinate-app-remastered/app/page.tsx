'use client'
import CoorButton from '@components/common/buttonsE/button/CoorButton'
import { Box } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Home() {
	const router = useRouter()
	return (
		<main className={'Home'}>
			Hola
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
			</Box>
		</main>
	)
}
