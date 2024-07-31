'use client'
import { IconGenerator, iconsForUsersArray } from '@common/icons'
import { Typography, TypographyOwnProps } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { findIconOrColorById } from '@utils/colorMethods'
import { useEffect, useState } from 'react'
import CoorChipStyled from '../CoorChipStyled'
import { color, contrast, style } from '../types'
import { calculateChipStyle } from '../utils'
import { IconChipSize } from './types'

interface CoorChipIconProps {
	size: IconChipSize
	color: color
	contrast: contrast
	variant: style
	iconName: string
	iconLibrary?: 'MDI' | 'MUI'
	iconFromUser?: boolean
	symbol?: string
}

const CoorIconChip = ({
	size,
	color,
	contrast,
	variant = '100%',
	iconLibrary = 'MUI',
	iconName,
	iconFromUser = false,
	symbol
}: CoorChipIconProps) => {
	const theme = useTheme() // Use Material-UI theme
	let iconDimension = theme.dimensions.icon // Element dimensions from theme
	let iconWidth = iconDimension.width[size]
	let iconHeight = iconDimension.height[size]
	if (size === '7xl') {
		iconWidth = iconDimension.width['4xl']
		iconHeight = iconDimension.height['4xl']
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
		const newStyle = calculateChipStyle(color, contrast, variant, theme, size, true)
		setChipStyle(newStyle) // Update chip style state
	}, [theme, color, contrast, variant, size])

	const icons = iconsForUsersArray
	let iconDB = findIconOrColorById(icons, iconName as string) // Find icon by ID
	iconDB = iconDB ? iconDB : findIconOrColorById(icons, 'HelpOutline') // Use default icon if not found|

	let typographyVariant: string = 'sys.typo.st1_semibold'
	switch (size) {
		case '7xl':
			typographyVariant = 'sys.typo.h1'
			break
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

	return (
		<CoorChipStyled chipStyle={chipStyle}>
			{symbol ? (
				<Typography
					display={'flex'}
					justifyContent={'center'}
					width={iconWidth}
					height={iconHeight}
					variant={typographyVariant as TypographyOwnProps['variant']}
					sx={{ color: theme.palette.custom_palette.on_custom_palette.invert }}
				>
					{symbol}
				</Typography>
			) : iconFromUser ? (
				<iconDB.icon sx={{ color: '#FFFFFF', width: iconDimension.width[size], height: iconDimension.height[size] }} />
			) : (
				<IconGenerator
					widthToken={iconWidth as string}
					heightToken={iconHeight as string}
					iconName={iconName}
					iconLibrary={iconLibrary}
					colorToken={chipStyle.fontColor}
				/>
			)}
		</CoorChipStyled>
	)
}

export default CoorIconChip
