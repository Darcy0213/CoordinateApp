import { ThemeMode } from '@globalTypes/customization'
import { opacity } from '@theme/referenceTokens'

import { PaletteThemeProps, SurfaceColorsProps } from '@theme/types/theme'
import { createBackgroundWithOpacity } from '@utils/colorMethods'

const SurfaceColors = (colors: PaletteThemeProps, mode: ThemeMode): SurfaceColorsProps => {
	const color = colors
	const darkMode = mode === 'dark'
	const gray = color.sys_gray
	const opacityRT = opacity
	return {
		container: {
			normal: darkMode ? (gray?.[60] as string) : (gray?.[900] as string), //
			opacity: {
				75: { invert: darkMode ? opacityRT['75_dark'] : opacityRT['75_light'], normal: darkMode ? opacityRT['75_light'] : opacityRT['75_dark'] },
				50: { invert: darkMode ? opacityRT['50_dark'] : opacityRT['50_light'], normal: darkMode ? opacityRT['50_light'] : opacityRT['50_dark'] },
				30: { invert: darkMode ? opacityRT['30_dark'] : opacityRT['30_light'], normal: darkMode ? opacityRT['30_light'] : opacityRT['30_dark'] },
				16: { invert: darkMode ? opacityRT['16_dark'] : opacityRT['16_light'], normal: darkMode ? opacityRT['16_light'] : opacityRT['16_dark'] },
				8: { invert: darkMode ? opacityRT['8_dark'] : opacityRT['8_light'], normal: darkMode ? opacityRT['8_light'] : opacityRT['8_dark'] },
				2: { invert: darkMode ? opacityRT['2_dark'] : opacityRT['2_light'], normal: darkMode ? opacityRT['2_light'] : opacityRT['2_dark'] }
			}
		},
		container_opacity: darkMode ? opacityRT['12_dark'] : opacityRT['12_light'],
		container_lowest: darkMode ? (gray?.[25] as string) : (gray?.[900] as string),
		container_low: darkMode ? (gray?.[50] as string) : (gray?.[900] as string),
		container_high: darkMode ? (gray?.[75] as string) : (gray?.[800] as string),
		container_highest: darkMode ? (gray?.[80] as string) : (gray?.[700] as string),
		container_medium: darkMode ? createBackgroundWithOpacity(gray?.[900] as string, '60%') : createBackgroundWithOpacity(gray?.[25] as string, '%60'),
		on_surface: darkMode ? (gray?.[1000] as string) : (gray?.[0] as string),
		on_surface_medium: darkMode ? (gray?.[400] as string) : (gray?.[500] as string),
		on_surface_invert: darkMode ? (gray?.[25] as string) : (gray?.[900] as string),
		on_surface_variant: darkMode ? (gray?.[500] as string) : (gray?.[200] as string),
		on_surface_soft: darkMode ? (gray?.[300] as string) : (gray?.[700] as string),
		container_invert: darkMode ? (gray?.[700] as string) : (gray?.[200] as string),
		on_surface_container_invert: darkMode ? (gray?.[50] as string) : (gray?.[900] as string)
	}
}
export default SurfaceColors
