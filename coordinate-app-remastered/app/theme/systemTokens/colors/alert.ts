import { ThemeMode } from '@globalTypes/customization'
import { opacity } from '@theme/referenceTokens/opacity'
import { AlertColorsProps, PaletteThemeProps } from '@theme/types/theme'

const AlertColors = (colors: PaletteThemeProps, mode: ThemeMode): AlertColorsProps => {
	const color = colors
	const red = color.red
	const lime = color.lime
	const orange = color.orange
	const darkMode = mode === 'dark'

	return {
		error: {
			surface: {
				high: red?.[700] as string,
				medium: opacity['50_red'] as string,
				low: opacity['30_red'] as string,
				lowest: darkMode ? opacity['8_light'] : opacity['8_dark'],
				outline: darkMode ? opacity['8_light'] : opacity['8_dark']
			},
			on_surface: {
				normal: red?.[50] as string,
				invert: red?.[900] as string,
				variant: red?.[700] as string
			}
		},
		success: {
			surface: {
				high: lime?.[700] as string,
				medium: opacity['50_lime'] as string,
				low: opacity['30_lime'] as string,
				lowest: darkMode ? opacity['8_light'] : opacity['8_dark'],
				outline: darkMode ? opacity['8_light'] : opacity['8_dark']
			},
			on_surface: {
				normal: lime?.[50] as string,
				invert: lime?.[900] as string,
				variant: lime?.[700] as string
			}
		},
		warning: {
			surface: {
				high: orange?.[700] as string,
				medium: opacity['50_orange'] as string,
				low: opacity['30_orange'] as string,
				lowest: darkMode ? opacity['8_light'] : opacity['8_dark'],
				outline: darkMode ? opacity['8_light'] : opacity['8_dark']
			},
			on_surface: {
				normal: orange?.[50] as string,
				invert: orange?.[900] as string,
				variant: orange?.[700] as string
			}
		}
	}
}
export default AlertColors
