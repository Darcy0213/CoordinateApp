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
	return <div>{children}</div>
}
