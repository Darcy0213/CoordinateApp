import '@blocknote/core/fonts/inter.css'
import '@blocknote/mantine/style.css'
import { CommonLayout } from '@components/layout'
import MuiXLicense from '@components/MuiXLicense'
import { AuthProvider } from '@context/AuthContext'
import { ConfigProvider } from '@context/ConfigContext'
import ReactQueryProvider from '@context/ReactQueryProvider'
import RecoilProvider from '@context/RecoilProvider'
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
					<ReactQueryProvider>
						<ConfigProvider>
							<ThemeCustomization>
								<AuthProvider>
									<RecoilProvider>
										<MuiXLicense />
										<CommonLayout>{children}</CommonLayout>
									</RecoilProvider>
								</AuthProvider>
							</ThemeCustomization>
						</ConfigProvider>
					</ReactQueryProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}
