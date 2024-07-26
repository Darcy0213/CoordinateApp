import { Theme } from '@mui/material/styles'
import { generateColorStyles } from '../commonFunctions'
import { ButtonStyle, color, customColor, intensity } from '../types'
import { size } from './types'

export function calculateButtonStyle(
	color: color,
	intensity: intensity,
	size: size,
	hover: boolean,
	active: boolean | undefined,
	theme: Theme,
	customColor?: customColor | undefined
): ButtonStyle {
	let borderRadius = ''
	let spacingButton = ''
	// Destructure generated color styles based on provided parameters
	const { backdropFilter, backgroundColor, fontColor, outline, outlineOffset } = generateColorStyles(
		theme,
		color,
		intensity,
		hover,
		active,
		customColor
	)

	let paddingButton: string
	// Determine padding and border radius based on the button's size
	const dimensions = theme.dimensions.buttonChip
	const radius = theme.dimensions.radius
	switch (size) {
		case 'xl':
			paddingButton = `${dimensions.padding.xl} ${theme.dimensions.buttonChip.padding['5xl']}`
			borderRadius = radius.xl as string
			spacingButton = dimensions.spacing.lg as string

			break
		case 'lg':
			paddingButton = `${dimensions.padding.lg} ${dimensions.padding['4xl']}`
			borderRadius = radius.lg as string
			spacingButton = dimensions.spacing.md as string

			break
		case 'md':
			paddingButton = `${dimensions.padding.md} ${dimensions.padding['2xl']}`
			borderRadius = radius.md as string
			spacingButton = dimensions.spacing.sm as string
			break
		case 'xs':
			paddingButton = `${dimensions.padding.xs} ${dimensions.padding['2sm']}`
			borderRadius = radius.xs as string
			spacingButton = dimensions.spacing.xs as string

			break
		default:
			paddingButton = ''
	}

	return { fontColor, backgroundColor, paddingButton, backdropFilter, outline, outlineOffset, borderRadius, spacingButton }
}
