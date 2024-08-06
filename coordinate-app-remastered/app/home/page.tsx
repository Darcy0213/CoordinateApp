'use client'

import { CoorButton } from '@common/buttons'

import { useRouter } from 'next/navigation'

export default function CoordinateHome() {
	// Creates a new editor instance.

	const router = useRouter()

	return (
		<CoorButton
			label="Volver al inicio"
			size="xl"
			color="success"
			intensity="low"
			iconPosition="end"
			iconName="help"
			onClick={() => router.push('/')}
		/>
	)
}
