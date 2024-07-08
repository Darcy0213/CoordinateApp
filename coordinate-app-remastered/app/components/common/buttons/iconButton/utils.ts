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
	const padding = theme.dimensions.element.iconButton.padding
	const radius = theme.dimensions.radius

	let borderRadius = ''
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
	switch (size) {
		case 'h4':
			paddingButton = `${padding.h4} ${padding.h4}`
			borderRadius = theme.dimensions.radius.h4
			break
		case 't1':
			paddingButton = `${padding.t1} ${padding.t1}`
			borderRadius = radius.t1
			break
		case 'st1':
			paddingButton = `${padding.st1} ${padding.st1}`
			borderRadius = radius.st1
			break
		case 'st2':
			paddingButton = `${padding.st2} ${padding.st2}`
			borderRadius = radius.st2
			break
		case 'st3':
			paddingButton = `${padding.st3} ${padding.st3}`
			borderRadius = radius.st3
			break
		default:
			paddingButton = '' // O manejar un caso predeterminado si es necesario
	}

	return { fontColor, backgroundColor, paddingButton, backdropFilter, outline, outlineOffset, borderRadius }
}
