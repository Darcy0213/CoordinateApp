import MuiXLicense from '@components/common/MuiXLicense'
import { ConfigProvider } from '@context/ConfigContext'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

import ThemeCustomization from '@theme/theme'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Coordinate App',
	description: 'Your app to coordinate things'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{' '}
				<AppRouterCacheProvider>
					<ConfigProvider>
						<ThemeCustomization>
							<MuiXLicense />
							{children}
						</ThemeCustomization>
					</ConfigProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}
