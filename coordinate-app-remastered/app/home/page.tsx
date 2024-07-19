'use client'

import { CoorButton } from '@common/buttons/button'
import { useRouter } from 'next/navigation'

export default function CoordinateHome() {
	// Creates a new editor instance.

	const router = useRouter()

	return (
		<CoorButton
			label="Volver al inicio"
			size="h4"
			color="success"
			intensity="low"
			iconPosition="end"
			iconName="help"
			onClick={() => router.push('/')}
		/>
	)
}
