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
	return <div>{children}</div>
}
