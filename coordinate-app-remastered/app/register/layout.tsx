import { Box, Typography } from '@mui/material'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Register',
	description: 'Coordinates register page'
}

export default function Layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Box>
			<Typography variant="sys.typo.h2">Layout register page</Typography>
			{children}
		</Box>
	)
}
