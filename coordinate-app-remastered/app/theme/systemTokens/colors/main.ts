import { ThemeMode } from '@components/customization/types'
import { opacity } from '@theme/referenceTokens/opacity'
import { MainColorsProps, PaletteThemeProps } from '@theme/types/theme'

const MainColors = (colors: PaletteThemeProps, mode: ThemeMode): MainColorsProps => {
	const color = colors
	const darkMode = mode === 'dark'
	const gray = color.sys_gray
	const opacityRT = opacity

	return {
		outline: darkMode ? opacityRT['8%_light'] : opacityRT['8%_dark'],
		surface_high: darkMode ? (gray?.[900] as string) : (gray?.[25] as string),
		surface_medium: darkMode ? opacityRT['75%_dark'] : opacityRT['75%_light'],
		surface_low: darkMode ? opacityRT['12%_light'] : opacityRT['12%_light'],
		surface_lowest: darkMode ? opacityRT['8%_light'] : opacityRT['8%_dark'],
		surface_outline: darkMode ? opacityRT['8%_light'] : opacityRT['8%_dark'],
		on_surface: darkMode ? (gray?.[0] as string) : (gray?.[1000] as string),
		on_surface_invert: darkMode ? (gray?.[1000] as string) : (gray?.[0] as string),
		on_surface_medium: darkMode ? (gray?.[400] as string) : (gray?.[100] as string)
	}
}
export default MainColors
