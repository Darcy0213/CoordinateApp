import { ThemeMode } from '@globalTypes/customization'
import { opacity } from '@theme/referenceTokens/opacity'
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
				75: {
					invert: darkMode ? opacityRT['75%_dark'] : opacityRT['75%_light'],
					normal: darkMode ? opacityRT['75%_light'] : opacityRT['75%_dark']
				},
				50: {
					invert: darkMode ? opacityRT['50%_dark'] : opacityRT['50%_light'],
					normal: darkMode ? opacityRT['50%_light'] : opacityRT['50%_dark']
				},
				30: {
					invert: darkMode ? opacityRT['30%_dark'] : opacityRT['30%_light'],
					normal: darkMode ? opacityRT['30%_light'] : opacityRT['30%_dark']
				},
				16: {
					invert: darkMode ? opacityRT['16%_dark'] : opacityRT['16%_light'],
					normal: darkMode ? opacityRT['16%_light'] : opacityRT['16%_dark']
				},
				8: {
					invert: darkMode ? opacityRT['8%_dark'] : opacityRT['8%_light'],
					normal: darkMode ? opacityRT['8%_light'] : opacityRT['8%_dark']
				},
				2: {
					invert: darkMode ? opacityRT['2%_dark'] : opacityRT['2%_light'],
					normal: darkMode ? opacityRT['2%_light'] : opacityRT['2%_dark']
				}
			}
		},
		container_opacity: darkMode ? opacityRT['12%_dark'] : opacityRT['12%_light'],
		container_lowest: darkMode ? (gray?.[25] as string) : (gray?.[900] as string),
		container_low: darkMode ? (gray?.[50] as string) : (gray?.[900] as string),
		container_high: darkMode ? (gray?.[75] as string) : (gray?.[800] as string),
		container_highest: darkMode ? (gray?.[80] as string) : (gray?.[700] as string),
		container_medium: darkMode ? createBackgroundWithOpacity(gray?.[950] as string, '60%') : createBackgroundWithOpacity(gray?.[35] as string, '%60'),
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
