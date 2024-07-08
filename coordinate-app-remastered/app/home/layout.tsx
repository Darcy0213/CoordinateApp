import { Box, Typography } from '@mui/material'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home',
	description: 'Coordinates home page'
}

export default function Layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Box>
			<Typography variant="sys.typo.h2">Esto es el layout de la app</Typography>
			{children}
		</Box>
	)
}
