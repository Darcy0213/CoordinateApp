// types

import { ThemeMode } from '@globalTypes/customization'
import { opacity } from '@theme/referenceTokens'

import { ColorStatesProps, PaletteThemeProps } from '@theme/types/theme'

const StatesColors = (colors: PaletteThemeProps, mode: ThemeMode): ColorStatesProps => {
	const color = colors
	const darkMode = mode === 'dark'

	const gray = color.sys_gray
	const blue = color.blue
	const opacityRT = opacity

	return {
		hover: darkMode ? opacityRT['8_dark'] : opacityRT['8_light'],
		hover_invert: darkMode ? opacityRT['8_light'] : opacityRT['8_dark'],
		active: darkMode ? gray[900] : gray[100],
		active_surface: darkMode ? opacityRT['16_dark'] : opacityRT['16_light'],
		focus: darkMode ? gray[900] : gray[100],
		row_selected: opacityRT['12_blue'],
		drag: darkMode ? opacityRT['16_dark'] : opacityRT['16_light'],
		disabled: darkMode ? gray[300] : gray[600]
	}
}
export default StatesColors
