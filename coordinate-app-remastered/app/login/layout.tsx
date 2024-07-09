import { Box, Typography } from '@mui/material'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Login',
	description: 'Coordinates login page'
}

export default function Layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Box>
			<Typography variant="sys.typo.h2">Layout login page</Typography>
			{children}
		</Box>
	)
}
