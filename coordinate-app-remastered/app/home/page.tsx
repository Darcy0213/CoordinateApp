'use client'
// app/dashboard/page.tsx
import '@blocknote/core/fonts/inter.css'
import { BlockNoteView } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import { useCreateBlockNote } from '@blocknote/react'
import CoorButton from '@components/common/buttonsE/button/CoorButton'
import { Box } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function CoordinateHome() {
	// Creates a new editor instance.
	const router = useRouter()
	const editor = useCreateBlockNote()
	return (
		<Box>
			<BlockNoteView editor={editor} />
			<CoorButton
				label="Volver al inicio"
				size="h4"
				color="success"
				intensity="low"
				iconPosition="end"
				iconName="help"
				onClick={() => router.push('/')}
			/>
		</Box>
	)
}
