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
	const padding = theme.dimensions.buttonChip.padding
	const radius = theme.dimensions.radius

	let borderRadius: string = ''
	let paddingButton: string = ''
	// Destructure generated color styles based on provided parameters
	const { backdropFilter, backgroundColor, fontColor, outline, outlineOffset } = generateColorStyles(
		theme,
		color,
		intensity,
		hover,
		active,
		customColor
	)
	// Determine padding and border radius based on the button's size
	switch (size) {
		case 'xl':
			paddingButton = padding.xl as string
			borderRadius = radius.xl as string
			break
		case 'lg':
			paddingButton = padding.lg as string
			borderRadius = radius.lg as string
			break
		case 'md':
			paddingButton = padding.md as string
			borderRadius = radius.md as string
			break
		case 'sm':
			paddingButton = padding['2sm'] as string
			borderRadius = radius.sm as string
			break
		case 'xs':
			paddingButton = padding.xs as string
			borderRadius = radius.xs as string
			break
		default:
			paddingButton = ''
	}

	return { fontColor, backgroundColor, paddingButton, backdropFilter, outline, outlineOffset, borderRadius }
}
