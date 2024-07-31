'use client'
import { ListItem } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { ReactNode } from 'react'

interface Props {
	children: ReactNode
	onClick?: React.MouseEventHandler<HTMLLIElement> | undefined
	gap?: boolean
	disabled?: boolean
}

export default function CoorListItem({ children, onClick, gap, disabled = false }: Props) {
	// MUI active theme
	const theme = useTheme()

	return (
		<ListItem
			sx={{
				margin: 0,
				padding: theme.dimensions.common.padding.md,
				width: '100%',
				height: 'fit-content',
				display: 'flex',
				alignItems: 'center',
				...(!disabled && {
					'&:hover': {
						background: theme.palette.state.hover,
						cursor: 'pointer !important'
					}
				}),
				borderRadius: theme.dimensions.radius.md,
				...(gap && { marginBottom: theme.dimensions.frame.spacing.md })
			}}
			onClick={onClick}
		>
			{children}
		</ListItem>
	)
}
