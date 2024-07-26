import { ThemeMode } from '@globalTypes/customization'
import { opacity } from '@theme/referenceTokens'

import { PaletteThemeProps, SurfaceColorsProps } from '@theme/types/theme'

const SurfaceColors = (colors: PaletteThemeProps, mode: ThemeMode): SurfaceColorsProps => {
	const color = colors
	const darkMode = mode === 'dark'
	const gray = color.sys_gray
	const opacityRT = opacity
	return {
		lowest: darkMode ? (gray[900] as string) : (gray[25] as string),
		low: darkMode ? gray[900] : gray[50],
		medium: darkMode ? opacityRT['8_light'] : opacityRT['8_dark'],
		container: darkMode ? opacityRT['12_light'] : opacityRT['12_dark'],
		high: darkMode ? opacityRT['75_light'] : opacityRT['75_dark'],
		highest: darkMode ? (gray[25] as string) : gray[900]
	}
}
export default SurfaceColors
