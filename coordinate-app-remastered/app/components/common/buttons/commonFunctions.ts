import { Theme } from '@mui/material/styles'

import { color, customColor, intensity } from './types'
import { convertPercentageToDecimal, createBackgroundWithOpacity, createLinearGradient, createLinearGradientThirdColor, hexToRgb } from '@utils/colorMethods'
export function generateColorStyles(
	theme: Theme,
	color: color,
	intensity: intensity,
	hover: boolean,
	active: boolean | undefined,
	customColor?: customColor | undefined
) {
	// Define variables for style properties
	const outline30 = theme.palette.outline.opacity_30
	const hoverInvertState = theme.palette.state.hover_invert
	const focusInvertState = theme.palette.state.focus_invert
	const hoverState = theme.palette.state.hoverValues
	const focusState = theme.palette.state.focus
	// Initialize style properties with default values
	let fontColor = ''
	let backgroundColor = ''
	let backdropFilter = ''
	let outline = ''
	let outlineOffset = ''

	if (color === 'main') {
		const outlineVariant = theme.palette.outline.variant
		const surfaceColor = theme.palette.main
		fontColor = theme.palette.main.on_surface
		const outlineMain = theme.palette.outline.main
		switch (intensity) {
			case 'high':
				fontColor = surfaceColor.on_surface
				backgroundColor = surfaceColor.surface_high
				outline = `1px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
				outlineOffset = '0px'
				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hexToRgb(hoverInvertState.color), convertPercentageToDecimal(hoverInvertState.opacity))}, ${
						surfaceColor.surface_high
					}`
				}
				if (active) {
					outline = `2px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(hexToRgb(focusInvertState.color), convertPercentageToDecimal(focusInvertState.opacity))}, ${
						surfaceColor.surface_high
					}`
				}
				break
			case 'medium':
				fontColor = surfaceColor.on_surface
				backgroundColor = createBackgroundWithOpacity(surfaceColor.surface_medium.color, surfaceColor.surface_medium.opacity)
				backdropFilter = 'blur(25px)'
				outline = `1px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
				outlineOffset = '0px'
				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(
						hexToRgb(hoverState.color),
						convertPercentageToDecimal(hoverState.opacity)
					)}, ${createBackgroundWithOpacity(surfaceColor.surface_medium.color, surfaceColor.surface_medium.opacity)}`
				}
				if (active) {
					outline = `2px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(
						hexToRgb(focusState.color),
						convertPercentageToDecimal(focusState.opacity)
					)}, ${createBackgroundWithOpacity(surfaceColor.surface_medium.color, surfaceColor.surface_medium.opacity)}`
				}
				break
			case 'invert':
				fontColor = surfaceColor.on_surface
				backgroundColor = createBackgroundWithOpacity(surfaceColor.surface_lowest.color, surfaceColor.surface_lowest.opacity)
				backdropFilter = 'blur(25px)'
				if (hover && !active) {
					backgroundColor = createLinearGradientThirdColor(
						hexToRgb(hoverState.color),
						convertPercentageToDecimal(hoverState.opacity),
						hexToRgb(surfaceColor.surface_lowest.color),
						convertPercentageToDecimal(surfaceColor.surface_lowest.opacity)
					)
				}
				if (active) {
					backgroundColor = createLinearGradientThirdColor(
						hexToRgb(focusState.color),
						convertPercentageToDecimal(focusState.opacity),
						hexToRgb(surfaceColor.surface_lowest.color),
						convertPercentageToDecimal(surfaceColor.surface_lowest.opacity)
					)
				}
				break
			case 'low':
				fontColor = surfaceColor.on_surface_medium
				backgroundColor = createBackgroundWithOpacity(surfaceColor.surface_low.color, surfaceColor.surface_low.opacity)
				backdropFilter = 'blur(25px)'
				if (hover && !active) {
					backgroundColor = createLinearGradientThirdColor(
						hexToRgb(hoverState.color),
						convertPercentageToDecimal(hoverState.opacity),
						hexToRgb(surfaceColor.surface_low.color),
						convertPercentageToDecimal(surfaceColor.surface_low.opacity)
					)
				}
				if (active) {
					backgroundColor = createLinearGradientThirdColor(
						hexToRgb(focusState.color),
						convertPercentageToDecimal(focusState.opacity),
						hexToRgb(surfaceColor.surface_low.color),
						convertPercentageToDecimal(surfaceColor.surface_low.opacity)
					)
				}
				break
			case 'lowest':
				fontColor = surfaceColor.on_surface_invert
				backgroundColor = createBackgroundWithOpacity(surfaceColor.surface_lowest.color, surfaceColor.surface_lowest.opacity)

				if (hover && !active) {
					backgroundColor = createLinearGradientThirdColor(
						hexToRgb(hoverState.color),
						convertPercentageToDecimal(hoverState.opacity),
						hexToRgb(surfaceColor.surface_lowest.color),
						convertPercentageToDecimal(surfaceColor.surface_lowest.opacity)
					)
				}
				if (active) {
					backgroundColor = createLinearGradientThirdColor(
						hexToRgb(focusState.color),
						convertPercentageToDecimal(focusState.opacity),
						hexToRgb(surfaceColor.surface_lowest.color),
						convertPercentageToDecimal(surfaceColor.surface_lowest.opacity)
					)
				}
				break
			case 'outline':
				fontColor = surfaceColor.on_surface_invert
				backgroundColor = createBackgroundWithOpacity(surfaceColor.surface_outline.color, surfaceColor.surface_outline.opacity)
				outline = `1px solid ${outlineVariant}`
				outlineOffset = '0px'
				if (hover && !active) {
					outlineOffset = '-1px'
					outline = `1px solid ${outlineMain}`
					backgroundColor = createLinearGradientThirdColor(
						hexToRgb(hoverState.color),
						convertPercentageToDecimal(hoverState.opacity),
						hexToRgb(surfaceColor.surface_outline.color),
						convertPercentageToDecimal(surfaceColor.surface_outline.opacity)
					)
				}
				if (active) {
					outlineOffset = '-2px'
					outline = `2px solid ${outlineMain}`
					backgroundColor = createLinearGradientThirdColor(
						hexToRgb(focusState.color),
						convertPercentageToDecimal(focusState.opacity),
						hexToRgb(surfaceColor.surface_lowest.color),
						convertPercentageToDecimal(surfaceColor.surface_lowest.opacity)
					)
				}
				break
			default:
				// Define the default case or other cases as needed
				break
		}
	}
	if (color === 'error') {
		const alertError = theme.palette.alert.error
		switch (intensity) {
			case 'high':
				fontColor = alertError.on_surface.normal
				backgroundColor = alertError.surface.high
				outline = `1px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
				outlineOffset = '0px'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hexToRgb(hoverState.color), convertPercentageToDecimal(hoverState.opacity))}, ${
						alertError.surface.high
					}`
				}
				if (active) {
					outline = `2px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(hexToRgb(focusInvertState.color), convertPercentageToDecimal(focusInvertState.opacity))}, ${
						alertError.surface.high
					}`
				}

				break
			case 'medium':
				fontColor = alertError.on_surface.invert
				backgroundColor = alertError.surface.medium
				outline = `1px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'
				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hexToRgb(hoverState.color), convertPercentageToDecimal(hoverState.opacity))}, ${
						alertError.surface.medium
					}`
				}
				if (active) {
					outline = `2px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(hexToRgb(focusState.color), convertPercentageToDecimal(focusState.opacity))}, ${
						alertError.surface.medium
					}`
				}
				break
			case 'low':
				fontColor = alertError.on_surface.invert
				backgroundColor = alertError.surface.low
				outline = `1px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'
				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hexToRgb(hoverInvertState.color), convertPercentageToDecimal(hoverInvertState.opacity))}, ${
						alertError.surface.low
					}`
				}
				if (active) {
					outline = `2px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(hexToRgb(focusInvertState.color), convertPercentageToDecimal(focusInvertState.opacity))}, ${
						alertError.surface.medium
					}`
				}
				break
			case 'lowest':
				fontColor = alertError.on_surface.variant
				backgroundColor = alertError.surface.outline

				if (hover && !active) {
					backgroundColor = `${createLinearGradient(hexToRgb(hoverState.color), convertPercentageToDecimal(hoverState.opacity))}, ${
						alertError.surface.outline
					}`
				}
				if (active) {
					backgroundColor = `${createLinearGradient(hexToRgb(focusState.color), convertPercentageToDecimal(focusState.opacity))}, ${
						alertError.surface.outline
					}`
				}
				break
			case 'outline':
				fontColor = alertError.on_surface.variant
				backgroundColor = 'transparent'
				outline = `1px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
				outlineOffset = '0px'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hexToRgb(hoverState.color), convertPercentageToDecimal(hoverState.opacity))}, ${
						alertError.surface.outline
					}`
				}
				if (active) {
					outline = `2px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(hexToRgb(focusState.color), convertPercentageToDecimal(focusState.opacity))}, ${
						alertError.surface.outline
					}`
				}
				break

			case 'invert':
				break
		}
	}
	if (color === 'warning') {
		const alertWarning = theme.palette.alert.warning
		switch (intensity) {
			case 'high':
				fontColor = alertWarning.on_surface.normal
				backgroundColor = alertWarning.surface.high
				outline = `1px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
				outlineOffset = '0px'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hexToRgb(hoverInvertState.color), convertPercentageToDecimal(hoverInvertState.opacity))}, ${
						alertWarning.surface.high
					}`
				}
				if (active) {
					outline = `2px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(hexToRgb(focusInvertState.color), convertPercentageToDecimal(focusInvertState.opacity))}, ${
						alertWarning.surface.high
					}`
				}

				break
			case 'medium':
				fontColor = alertWarning.on_surface.invert
				backgroundColor = alertWarning.surface.medium
				outline = `1px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hexToRgb(hoverState.color), convertPercentageToDecimal(hoverState.opacity))}, ${
						alertWarning.surface.medium
					}`
				}
				if (active) {
					outline = `2px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(hexToRgb(focusState.color), convertPercentageToDecimal(focusState.opacity))}, ${
						alertWarning.surface.medium
					}`
				}
				break
			case 'low':
				fontColor = alertWarning.on_surface.invert
				backgroundColor = alertWarning.surface.low
				outline = `1px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hexToRgb(hoverInvertState.color), convertPercentageToDecimal(hoverInvertState.opacity))}, ${
						alertWarning.surface.low
					}`
				}
				if (active) {
					outline = `2px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(hexToRgb(focusInvertState.color), convertPercentageToDecimal(focusInvertState.opacity))}, ${
						alertWarning.surface.low
					}`
				}
				break
			case 'lowest':
				fontColor = alertWarning.on_surface.variant
				backgroundColor = alertWarning.surface.lowest
				backdropFilter = 'blur(25px)'
				if (hover && !active) {
					backgroundColor = `${createLinearGradient(hexToRgb(hoverState.color), convertPercentageToDecimal(hoverState.opacity))}, ${
						alertWarning.surface.lowest
					}`
				}
				if (active) {
					backgroundColor = `${createLinearGradient(hexToRgb(focusState.color), convertPercentageToDecimal(focusState.opacity))}, ${
						alertWarning.surface.lowest
					}`
				}
				break
			case 'outline':
				fontColor = alertWarning.on_surface.variant
				backgroundColor = alertWarning.surface.outline
				outline = `1px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'

				if (hover && !active) {
					outline = `1px solid ${theme.palette.custom_palette.orange.outline.low}`
					outlineOffset = '-1px'

					backgroundColor = `${createLinearGradient(hexToRgb(hoverState.color), convertPercentageToDecimal(hoverState.opacity))}, ${
						alertWarning.surface.outline
					}`
				}
				if (active) {
					outline = `1px solid ${theme.palette.custom_palette.orange.outline.low}`
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hexToRgb(focusState.color), convertPercentageToDecimal(focusState.opacity))}, ${
						alertWarning.surface.outline
					}`
				}

				break
		}
	}
	if (color === 'success') {
		const alertSuccess = theme.palette.alert.success
		switch (intensity) {
			case 'high':
				fontColor = alertSuccess.on_surface.normal
				backgroundColor = alertSuccess.surface.high
				outline = `1px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
				outlineOffset = '0px'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hexToRgb(hoverState.color), convertPercentageToDecimal(hoverState.opacity))}, ${
						alertSuccess.surface.high
					}`
				}
				if (active) {
					outline = `2px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(hexToRgb(focusState.color), convertPercentageToDecimal(focusState.opacity))}, ${
						alertSuccess.surface.high
					}`
				}

				break
			case 'medium':
				fontColor = alertSuccess.on_surface.invert
				backgroundColor = alertSuccess.surface.medium
				outline = `1px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hexToRgb(hoverState.color), convertPercentageToDecimal(hoverState.opacity))}, ${
						alertSuccess.surface.medium
					}`
				}
				if (active) {
					outline = `2px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(hexToRgb(focusState.color), convertPercentageToDecimal(focusState.opacity))}, ${
						alertSuccess.surface.medium
					}`
				}
				break
			case 'low':
				fontColor = alertSuccess.on_surface.invert
				backgroundColor = alertSuccess.surface.low
				outline = `1px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hexToRgb(hoverState.color), convertPercentageToDecimal(hoverState.opacity))}, ${
						alertSuccess.surface.low
					}`
				}
				if (active) {
					outline = `2px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(hexToRgb(focusState.color), convertPercentageToDecimal(focusState.opacity))}, ${
						alertSuccess.surface.low
					}`
				}
				break
			case 'lowest':
				fontColor = alertSuccess.on_surface.variant
				backgroundColor = alertSuccess.surface.lowest
				backdropFilter = 'blur(25px)'
				if (hover && !active) {
					backgroundColor = `${createLinearGradient(hexToRgb(hoverState.color), convertPercentageToDecimal(hoverState.opacity))}, ${
						alertSuccess.surface.lowest
					}`
				}
				if (active) {
					backgroundColor = `${createLinearGradient(hexToRgb(focusState.color), convertPercentageToDecimal(focusState.opacity))}, ${
						alertSuccess.surface.lowest
					}`
				}
				break
			case 'outline':
				fontColor = alertSuccess.on_surface.variant
				backgroundColor = alertSuccess.surface.outline
				outline = `1px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'
				if (hover && !active) {
					outline = `1px solid ${theme.palette.custom_palette.lime.medium.normal}`
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hexToRgb(hoverState.color), convertPercentageToDecimal(hoverState.opacity))}, ${
						alertSuccess.surface.outline
					}`
				}
				if (active) {
					outline = `1px solid ${theme.palette.custom_palette.lime.medium.normal}`
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hexToRgb(focusState.color), convertPercentageToDecimal(focusState.opacity))}, ${
						alertSuccess.surface.outline
					}`
				}

				break
		}
	}
	if (color === 'custom') {
		const customPalette = theme.palette.custom_palette
		const surfaceLowest = theme.palette.main.surface_lowest
		switch (intensity) {
			case 'high':
				fontColor = customPalette.on_surface[customColor as customColor].low
				backgroundColor = customPalette[customColor as customColor].low.normal
				outline = `1px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
				outlineOffset = '0px'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hexToRgb(hoverState.color), convertPercentageToDecimal(hoverState.opacity))}, ${
						customPalette[customColor as customColor].low.normal
					}`
				}
				if (active) {
					outline = `2px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(hexToRgb(focusState.color), convertPercentageToDecimal(focusState.opacity))}, ${
						customPalette[customColor as customColor].low.normal
					}`
				}

				break
			case 'medium':
				fontColor = customPalette.on_surface[customColor as customColor].high
				backgroundColor = customPalette[customColor as customColor].low['50%']
				console.log('backgroundColor', backgroundColor)
				outline = `1px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hexToRgb(hoverState.color), convertPercentageToDecimal(hoverState.opacity))}, ${
						customPalette[customColor as customColor].low['50%']
					}`
				}
				if (active) {
					outline = `2px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(hexToRgb(focusState.color), convertPercentageToDecimal(focusState.opacity))}, ${
						customPalette[customColor as customColor].low['50%']
					}`
				}
				break
			case 'low':
				fontColor = customPalette.on_surface[customColor as customColor].high
				backgroundColor = customPalette[customColor as customColor].low['30%']
				outline = `1px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hexToRgb(hoverState.color), convertPercentageToDecimal(hoverState.opacity))}, ${
						customPalette[customColor as customColor].low['30%']
					}`
				}
				if (active) {
					outline = `2px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(hexToRgb(focusState.color), convertPercentageToDecimal(focusState.opacity))}, ${
						customPalette[customColor as customColor].low['30%']
					}`
				}
				break
			case 'lowest':
				fontColor = customPalette.on_surface[customColor as customColor].high
				backgroundColor = createBackgroundWithOpacity(surfaceLowest.color, surfaceLowest.opacity)
				backdropFilter = 'blur(25px)'
				if (hover && !active) {
					backgroundColor = `${createLinearGradient(
						hexToRgb(hoverState.color),
						convertPercentageToDecimal(hoverState.opacity)
					)}, ${createBackgroundWithOpacity(surfaceLowest.color, surfaceLowest.opacity)}`
				}
				if (active) {
					backgroundColor = `${createLinearGradient(
						hexToRgb(focusState.color),
						convertPercentageToDecimal(focusState.opacity)
					)}, ${createBackgroundWithOpacity(surfaceLowest.color, surfaceLowest.opacity)}`
				}
				break
			case 'outline':
				fontColor = customPalette.on_surface[customColor as customColor].high
				backgroundColor = createBackgroundWithOpacity(surfaceLowest.color, surfaceLowest.color)
				outline = `1px solid ${createBackgroundWithOpacity(outline30.color, outline30.opacity)}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'
				if (hover && !active) {
					outline = `1px solid ${customPalette[customColor as customColor].outline}`
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(
						hexToRgb(hoverState.color),
						convertPercentageToDecimal(hoverState.opacity)
					)}, ${createBackgroundWithOpacity(theme.palette.main.surface_outline.color, theme.palette.main.surface_outline.color)}`
				}
				if (active) {
					outline = `1px solid ${customPalette[customColor as customColor].outline}`
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(
						hexToRgb(focusState.color),
						convertPercentageToDecimal(focusState.opacity)
					)}, ${createBackgroundWithOpacity(theme.palette.main.surface_outline.color, theme.palette.main.surface_outline.color)}`
				}

				break
		}
	}

	return { backdropFilter, backgroundColor, fontColor, outline, outlineOffset }
}
