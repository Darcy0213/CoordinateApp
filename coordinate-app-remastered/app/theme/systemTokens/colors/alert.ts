import { ThemeMode } from '@components/customization/types'
import { opacity } from '@theme/referenceTokens/opacity'
import { AlertColorsProps, PaletteThemeProps } from '@theme/types/theme'
import { hexToRGBAWithOpacity } from '@utils/colorMethods'

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
				medium: red?.['700-50%'] as string,
				low: red?.['700-30%'] as string,
				lowest: darkMode
					? hexToRGBAWithOpacity(opacity['8%_light'].color, opacity['8%_light'].opacity)
					: hexToRGBAWithOpacity(opacity['8%_dark'].color, opacity['8%_dark'].opacity),
				outline: darkMode
					? hexToRGBAWithOpacity(opacity['8%_light'].color, opacity['8%_light'].opacity)
					: hexToRGBAWithOpacity(opacity['8%_dark'].color, opacity['8%_dark'].opacity)
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
				medium: lime?.['700-50%'] as string,
				low: lime?.['700-30%'] as string,
				lowest: darkMode
					? hexToRGBAWithOpacity(opacity['8%_light'].color, opacity['8%_light'].opacity)
					: hexToRGBAWithOpacity(opacity['8%_dark'].color, opacity['8%_dark'].opacity),
				outline: darkMode
					? hexToRGBAWithOpacity(opacity['8%_light'].color, opacity['8%_light'].opacity)
					: hexToRGBAWithOpacity(opacity['8%_dark'].color, opacity['8%_dark'].opacity)
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
				medium: orange?.['500-50%'] as string,
				low: orange?.['500-30%'] as string,
				lowest: darkMode
					? hexToRGBAWithOpacity(opacity['8%_light'].color, opacity['8%_light'].opacity)
					: hexToRGBAWithOpacity(opacity['8%_dark'].color, opacity['8%_dark'].opacity),
				outline: darkMode
					? hexToRGBAWithOpacity(opacity['8%_light'].color, opacity['8%_light'].opacity)
					: hexToRGBAWithOpacity(opacity['8%_dark'].color, opacity['8%_dark'].opacity)
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
