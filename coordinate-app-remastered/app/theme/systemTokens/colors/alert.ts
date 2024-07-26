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
				medium: red[50] as string,
				low: red[50] as string,
				lowest: darkMode ? opacity['8_light'] : opacity['8_dark'],
				outline: darkMode ? opacity['8_light'] : opacity['8_dark']
			},
			on_surface: {
				normal: red?.[50] as string,
				invert: darkMode ? (red?.[50] as string) : (red?.[900] as string),
				variant: red?.[700] as string
			}
		},
		success: {
			surface: {
				high: lime?.[700] as string,
				medium: lime?.[50] as string,
				low: lime?.[50] as string,
				lowest: darkMode ? opacity['8_light'] : opacity['8_dark'],
				outline: darkMode ? opacity['8_light'] : opacity['8_dark']
			},
			on_surface: {
				normal: lime?.[50] as string,
				invert: darkMode ? (lime?.[50] as string) : (lime?.[900] as string),
				variant: lime?.[700] as string
			}
		},
		warning: {
			surface: {
				high: orange?.[500] as string,
				medium: orange?.[50] as string,
				low: orange?.[50] as string,
				lowest: darkMode ? opacity['8_light'] : opacity['8_dark'],
				outline: darkMode ? opacity['8_light'] : opacity['8_dark']
			},
			on_surface: {
				normal: orange?.[50] as string,
				invert: darkMode ? (orange?.[50] as string) : (orange?.[900] as string),
				variant: orange?.[500] as string
			}
		}
	}
}
export default AlertColors
