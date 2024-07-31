import { Theme } from '@mui/material/styles'

import { createLinearGradient, createLinearGradientThirdColor } from '@utils/colorMethods'
import { color, customColor, intensity } from './types'
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
	const focusInvertState = theme.palette.state.focus
	const hoverState = theme.palette.state.hover
	const focusState = theme.palette.state.focus
	const activeSurface = theme.palette.state.active_surface
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
				outline = `1px solid ${outline30}`
				outlineOffset = '0px'
				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hoverInvertState)}, ${surfaceColor.surface_high}`
				}
				if (active) {
					outline = `2px solid ${outline30}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(focusInvertState)}, ${surfaceColor.surface_high}`
				}
				break
			case 'medium':
				fontColor = surfaceColor.on_surface
				backgroundColor = surfaceColor.surface_medium
				backdropFilter = 'blur(25px)'
				outline = `1px solid ${outline30}`
				outlineOffset = '0px'
				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hoverState)}, ${surfaceColor.surface_medium}`
				}
				if (active) {
					outline = `2px solid ${outline30}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(focusState)}, ${surfaceColor}`
				}
				break
			case 'invert':
				fontColor = surfaceColor.on_surface
				backgroundColor = surfaceColor.surface_lowest
				backdropFilter = 'blur(25px)'
				if (hover && !active) {
					backgroundColor = createLinearGradientThirdColor(hoverState, surfaceColor.surface_lowest)
				}
				if (active) {
					backgroundColor = createLinearGradientThirdColor(focusState, surfaceColor.surface_lowest)
				}
				break
			case 'low':
				fontColor = surfaceColor.on_surface_medium
				backgroundColor = surfaceColor.surface_low
				backdropFilter = 'blur(25px)'
				if (hover && !active) {
					backgroundColor = createLinearGradientThirdColor(hoverState, surfaceColor.surface_low)
				}
				if (active) {
					backgroundColor = createLinearGradientThirdColor(focusState, surfaceColor.surface_low)
				}
				break
			case 'lowest':
				fontColor = surfaceColor.on_surface_invert
				backgroundColor = surfaceColor.surface_lowest

				if (hover && !active) {
					backgroundColor = createLinearGradientThirdColor(hoverState, surfaceColor.surface_lowest)
				}
				if (active) {
					backgroundColor = createLinearGradientThirdColor(activeSurface, surfaceColor.surface_lowest)
				}
				break
			case 'outline':
				fontColor = surfaceColor.on_surface_invert
				backgroundColor = surfaceColor.surface_outline
				outline = `1px solid ${outlineVariant}`
				outlineOffset = '0px'
				if (hover && !active) {
					outlineOffset = '-1px'
					outline = `1px solid ${outlineMain}`
					backgroundColor = createLinearGradientThirdColor(hoverState, surfaceColor.surface_outline)
				}
				if (active) {
					outlineOffset = '-2px'
					outline = `2px solid ${outlineMain}`
					backgroundColor = createLinearGradientThirdColor(focusState, surfaceColor.surface_lowest)
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
				outline = `1px solid ${outline30}`
				outlineOffset = '0px'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hoverState)}, ${alertError.surface.high}`
				}
				if (active) {
					outline = `2px solid ${outline30}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(focusInvertState)}, ${alertError.surface.high}`
				}

				break
			case 'medium':
				fontColor = alertError.on_surface.invert
				backgroundColor = alertError.surface.medium
				outline = `1px solid ${outline30}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'
				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hoverState)}, ${alertError.surface.medium}`
				}
				if (active) {
					outline = `2px solid ${outline30}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(focusState)}, ${alertError.surface.medium}`
				}
				break
			case 'low':
				fontColor = alertError.on_surface.invert
				backgroundColor = alertError.surface.low
				outline = `1px solid ${outline30}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'
				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hoverInvertState)}, ${alertError.surface.low}`
				}
				if (active) {
					outline = `2px solid ${outline30}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(focusInvertState)}, ${alertError.surface.medium}`
				}
				break
			case 'lowest':
				fontColor = alertError.on_surface.variant
				backgroundColor = alertError.surface.outline

				if (hover && !active) {
					backgroundColor = `${createLinearGradient(hoverState)}, ${alertError.surface.outline}`
				}
				if (active) {
					backgroundColor = `${createLinearGradient(focusState)}, ${alertError.surface.outline}`
				}
				break
			case 'outline':
				fontColor = alertError.on_surface.variant
				backgroundColor = 'transparent'
				outline = `1px solid ${outline30}`
				outlineOffset = '0px'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hoverState)}, ${alertError.surface.outline}`
				}
				if (active) {
					outline = `2px solid ${outline30}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(focusState)}, ${alertError.surface.outline}`
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
				outline = `1px solid ${outline30}`
				outlineOffset = '0px'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hoverInvertState)}, ${alertWarning.surface.high}`
				}
				if (active) {
					outline = `2px solid ${outline30}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(focusInvertState)}, ${alertWarning.surface.high}`
				}

				break
			case 'medium':
				fontColor = alertWarning.on_surface.invert
				backgroundColor = alertWarning.surface.medium
				outline = `1px solid ${outline30}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hoverState)}, ${alertWarning.surface.medium}`
				}
				if (active) {
					outline = `2px solid ${outline30}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(focusState)}, ${alertWarning.surface.medium}`
				}
				break
			case 'low':
				fontColor = alertWarning.on_surface.invert
				backgroundColor = alertWarning.surface.low
				outline = `1px solid ${outline30}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hoverInvertState)}, ${alertWarning.surface.low}`
				}
				if (active) {
					outline = `2px solid ${outline30}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(focusInvertState)}, ${alertWarning.surface.low}`
				}
				break
			case 'lowest':
				fontColor = alertWarning.on_surface.variant
				backgroundColor = alertWarning.surface.lowest
				backdropFilter = 'blur(25px)'
				if (hover && !active) {
					backgroundColor = `${createLinearGradient(hoverState)}, ${alertWarning.surface.lowest}`
				}
				if (active) {
					backgroundColor = `${createLinearGradient(focusState)}, ${alertWarning.surface.lowest}`
				}
				break
			case 'outline':
				fontColor = alertWarning.on_surface.variant
				backgroundColor = alertWarning.surface.outline
				outline = `1px solid ${outline30}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'

				if (hover && !active) {
					outline = `1px solid ${theme.palette.custom_palette.orange.outline.low}`
					outlineOffset = '-1px'

					backgroundColor = `${createLinearGradient(hoverState)}, ${alertWarning.surface.outline}`
				}
				if (active) {
					outline = `1px solid ${theme.palette.custom_palette.orange.outline.low}`
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(focusState)}, ${alertWarning.surface.outline}`
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
				outline = `1px solid ${outline30}`
				outlineOffset = '0px'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hoverState)}, ${alertSuccess.surface.high}`
				}
				if (active) {
					outline = `2px solid ${outline30}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(focusState)}, ${alertSuccess.surface.high}`
				}

				break
			case 'medium':
				fontColor = alertSuccess.on_surface.invert
				backgroundColor = alertSuccess.surface.medium
				outline = `1px solid ${outline30}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hoverState)}, ${alertSuccess.surface.medium}`
				}
				if (active) {
					outline = `2px solid ${outline30}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(focusState)}, ${alertSuccess.surface.medium}`
				}
				break
			case 'low':
				fontColor = alertSuccess.on_surface.invert
				backgroundColor = alertSuccess.surface.low
				outline = `1px solid ${outline30}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hoverState)}, ${alertSuccess.surface.low}`
				}
				if (active) {
					outline = `2px solid ${outline30}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(focusState)}, ${alertSuccess.surface.low}`
				}
				break
			case 'lowest':
				fontColor = alertSuccess.on_surface.variant
				backgroundColor = alertSuccess.surface.lowest
				backdropFilter = 'blur(25px)'
				if (hover && !active) {
					backgroundColor = `${createLinearGradient(hoverState)}, ${alertSuccess.surface.lowest}`
				}
				if (active) {
					backgroundColor = `${createLinearGradient(focusState)}, ${alertSuccess.surface.lowest}`
				}
				break
			case 'outline':
				fontColor = alertSuccess.on_surface.variant
				backgroundColor = alertSuccess.surface.outline
				outline = `1px solid ${outline30}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'
				if (hover && !active) {
					outline = `1px solid ${theme.palette.custom_palette.lime.medium.normal}`
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hoverState)}, ${alertSuccess.surface.outline}`
				}
				if (active) {
					outline = `1px solid ${theme.palette.custom_palette.lime.medium.normal}`
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(focusState)}, ${alertSuccess.surface.outline}`
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
				outline = `1px solid ${outline30}`
				outlineOffset = '0px'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hoverState)}, ${customPalette[customColor as customColor].low.normal}`
				}
				if (active) {
					outline = `2px solid ${outline30}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(focusState)}, ${customPalette[customColor as customColor].low.normal}`
				}

				break
			case 'medium':
				fontColor = customPalette.on_surface[customColor as customColor].high
				backgroundColor = customPalette[customColor as customColor].low['50%']
				console.log('backgroundColor', backgroundColor)
				outline = `1px solid ${outline30}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hoverState)}, ${customPalette[customColor as customColor].low['50%']}`
				}
				if (active) {
					outline = `2px solid ${outline30}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(focusState)}, ${customPalette[customColor as customColor].low['50%']}`
				}
				break
			case 'low':
				fontColor = customPalette.on_surface[customColor as customColor].high
				backgroundColor = customPalette[customColor as customColor].low['30%']
				outline = `1px solid ${outline30}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'

				if (hover && !active) {
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hoverState)}, ${customPalette[customColor as customColor].low['30%']}`
				}
				if (active) {
					outline = `2px solid ${outline30}`
					outlineOffset = '-2px'
					backgroundColor = `${createLinearGradient(focusState)}, ${customPalette[customColor as customColor].low['30%']}`
				}
				break
			case 'lowest':
				fontColor = customPalette.on_surface[customColor as customColor].high
				backgroundColor = surfaceLowest
				backdropFilter = 'blur(25px)'
				if (hover && !active) {
					backgroundColor = `${createLinearGradient(hoverState)}, ${surfaceLowest}`
				}
				if (active) {
					backgroundColor = `${createLinearGradient(focusState)}, ${surfaceLowest}`
				}
				break
			case 'outline':
				fontColor = customPalette.on_surface[customColor as customColor].high
				backgroundColor = surfaceLowest
				outline = `1px solid ${outline30}`
				outlineOffset = '0px'
				backdropFilter = 'blur(25px)'
				if (hover && !active) {
					outline = `1px solid ${customPalette[customColor as customColor].outline}`
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(hoverState)}, ${theme.palette.main.surface_outline}`
				}
				if (active) {
					outline = `1px solid ${customPalette[customColor as customColor].outline}`
					outlineOffset = '-1px'
					backgroundColor = `${createLinearGradient(focusState)}, ${theme.palette.main.surface_outline}`
				}

				break
		}
	}

	return { backdropFilter, backgroundColor, fontColor, outline, outlineOffset }
}
