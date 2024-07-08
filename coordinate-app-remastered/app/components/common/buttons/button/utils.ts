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
			paddingButton = `${theme.dimensions.element.buttonTextIcon.padding.vertical.h4} ${theme.dimensions.element.buttonTextIcon.padding.horizontal.h4}`
			borderRadius = theme.dimensions.radius.h4

			break
		case 't1':
			paddingButton = `${theme.dimensions.element.buttonTextIcon.padding.vertical.t1} ${theme.dimensions.element.buttonTextIcon.padding.horizontal.t1}`
			borderRadius = theme.dimensions.radius.t1

			break
		case 'st1':
			paddingButton = `${theme.dimensions.element.buttonTextIcon.padding.vertical.st1} ${theme.dimensions.element.buttonTextIcon.padding.horizontal.st1}`
			borderRadius = theme.dimensions.radius.st1
			break
		case 'st3':
			paddingButton = `${theme.dimensions.element.buttonTextIcon.padding.vertical.st3} ${theme.dimensions.element.buttonTextIcon.padding.horizontal.st3}`
			borderRadius = theme.dimensions.radius.st3

			break
		default:
			paddingButton = ''
	}

	return { fontColor, backgroundColor, paddingButton, backdropFilter, outline, outlineOffset, borderRadius }
}
