import { Theme } from '@emotion/react'
import { Box, SxProps, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useEffect, useState } from 'react'

import CoorChipIcon from '../icon-chip/CoorIconChip'
import { color, contrast, style } from '../types'
import { size } from './types'

interface CoorInstanceChipProps {
	size: size
	color: color
	contrast: contrast
	variant: style
	iconName: string
	breadcrumb?: boolean
	iconLibrary?: 'MDI' | 'MUI'
	text: string
	symbol?: string
	textStyles?: SxProps<Theme>
}

const CoorInstanceChip = ({
	text,
	size,
	color,
	contrast,
	variant = '100%',
	iconLibrary = 'MUI',
	breadcrumb = false,
	iconName,
	symbol,
	textStyles = {}
}: CoorInstanceChipProps) => {
	const theme = useTheme() // Use Material-UI theme
	const [hover, setHover] = useState(false)

	useEffect(() => {
		if (!breadcrumb) setHover(false)
	}, [hover, breadcrumb])

	return (
		<Box
			onMouseEnter={() => breadcrumb && setHover(true)}
			onMouseLeave={() => breadcrumb && setHover(false)}
			className="CoorInstanceChip"
			sx={{
				width: 'fit-content',
				height: 'fit-content',
				display: 'inline-flex',
				alignItems: 'center',
				backdropFilter: 'blur(25px)',
				borderRadius: theme.dimensions.radius[size],
				gap: theme.dimensions.buttonChip.spacing[size]
			}}
		>
			<CoorChipIcon
				size={size}
				color={color}
				contrast={contrast}
				variant={variant}
				iconName={iconName}
				iconLibrary={iconLibrary}
				symbol={symbol}
			/>

			<Typography
				variant={`sys.typo.st1`}
				sx={{
					textDecoration: hover ? 'underline' : 'none',
					color: theme.palette.custom_palette.on_custom_palette.invert,
					...textStyles
				}}
			>
				{text}
			</Typography>
		</Box>
	)
}

export default CoorInstanceChip
