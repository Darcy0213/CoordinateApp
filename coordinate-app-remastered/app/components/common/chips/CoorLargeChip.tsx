import { Typography, TypographyOwnProps } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { IconGenerator } from '@common/icons'
import { useEffect, useState } from 'react'
import CoorChipStyled from './CoorChipStyled'
import { color, contrast, size, style } from './types'
import { calculateChipStyle } from './utils'

interface CoorLargeChipProps {
	size: size
	color: color
	contrast: contrast
	variant: style
	iconName: string
	iconLibrary?: 'MDI' | 'MUI'
	text: string
}

const CoorLargeChip = ({ size, text, contrast, variant, iconName, iconLibrary, color }: CoorLargeChipProps) => {
	const theme = useTheme()

	let typographyVariant: string = 'sys.typo.st1_semibold'
	switch (size) {
		case 'xl':
			typographyVariant = 'sys.typo.h5'
			break
		case 'lg':
			typographyVariant = 'sys.typo.t2'
			break
		case 'md':
			typographyVariant = 'sys.typo.st1'
			break
		case 'sm':
			typographyVariant = 'sys.typo.st2'
			break

		case 'xs':
			typographyVariant = 'sys.typo.st3'
			break
		default:
			typographyVariant = 'sys.typo.st1_semibold'
	}

	// State to store dynamically calculated chip styles
	const [chipStyle, setChipStyle] = useState({
		fontColor: '',
		backgroundColor: '',
		paddingChip: '',
		outline: '',
		outlineOffset: '',
		borderRadius: ''
	})

	// Effect hook to update chip style on theme
	useEffect(() => {
		const newStyle = calculateChipStyle(color, contrast, variant, theme, size)
		setChipStyle(newStyle) // Update chip style state
	}, [theme, color])

	return (
		<CoorChipStyled
			chipStyle={chipStyle}
			sx={{
				gap: theme.dimensions.buttonChip.spacing[size]
			}}
		>
			<IconGenerator
				widthToken={theme.dimensions.icon.width[size] as string}
				heightToken={theme.dimensions.icon.height[size] as string}
				iconName={iconName}
				iconLibrary={iconLibrary}
				colorToken={chipStyle.fontColor}
			/>
			<Typography
				sx={{ color: chipStyle.fontColor }}
				variant={typographyVariant as TypographyOwnProps['variant']}
			>
				{text}
			</Typography>
		</CoorChipStyled>
	)
}
export default CoorLargeChip
