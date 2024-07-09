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
	return <div>{children}</div>
}
