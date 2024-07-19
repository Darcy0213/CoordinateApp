import CommonLayout from '@components/layout/CommonLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home',
	description: 'Coordinate home page'
}

export default function Layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <CommonLayout>{children}</CommonLayout>
}
