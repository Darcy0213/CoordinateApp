import { ThemeMode } from '@globalTypes/customization'
import { opacity } from '@theme/referenceTokens'
import { PaletteThemeProps, PrimaryColorsProps } from '@theme/types/theme'

const PrimaryColors = (colors: PaletteThemeProps, mode: ThemeMode): PrimaryColorsProps => {
	const color = colors
	const darkMode = mode === 'dark'

	const blue = color.blue
	const gray = color.sys_gray

	return {
		main: darkMode ? (blue?.[400] as string) : (blue?.[500] as string),
		on_primary: darkMode ? (blue?.[900] as string) : (blue?.[50] as string),
		container: darkMode ? (blue?.[800] as string) : (blue?.[100] as string),
		on_primary_container: darkMode ? (blue?.[50] as string) : (blue?.[900] as string),
		background: {
			lowest: darkMode ? (gray?.[25] as string) : (gray?.[900] as string),
			low: darkMode ? (gray?.[50] as string) : (blue?.[900] as string),
			medium: darkMode ? (opacity['8_light'] as string) : (opacity['8_dark'] as string),
			high: darkMode ? (opacity['8_dark'] as string) : (opacity['8_light'] as string),
			highest: darkMode ? (opacity['2_dark'] as string) : (opacity['8_light'] as string),
			preview: darkMode ? (opacity['75_light'] as string) : (opacity['75_light'] as string)
		},
		surface: {
			lowest: darkMode ? (gray?.[25] as string) : (gray?.[900] as string),
			low: darkMode ? (gray?.[50] as string) : (gray?.[800] as string),
			medium: darkMode ? (opacity['8_light'] as string) : (opacity['8_dark'] as string),
			container: darkMode ? (opacity['12_dark'] as string) : (opacity['12_light'] as string),
			high: darkMode ? (opacity['75_dark'] as string) : (opacity['75_light'] as string),
			highest: darkMode ? (gray[900] as string) : (gray[25] as string)
		},
		on_surface: {
			default: darkMode ? (gray?.[1000] as string) : (gray?.[0] as string),
			variant: darkMode ? (gray?.[500] as string) : (gray?.[200] as string),
			low: darkMode ? (gray?.[400] as string) : (gray?.[500] as string),
			invert: darkMode ? (gray?.[25] as string) : (gray?.[900] as string)
		},
		outline: {
			lowest: darkMode ? (opacity['2_dark'] as string) : (opacity['2_light'] as string),
			low: darkMode ? (opacity['8_dark'] as string) : (opacity['8_light'] as string),
			variant: darkMode ? (opacity['30_dark'] as string) : (opacity['30_light'] as string),
			medium: darkMode ? (gray[100] as string) : (gray[700] as string),
			high: darkMode ? (gray[400] as string) : (gray[500] as string),
			highest: darkMode ? (gray[900] as string) : (gray[100] as string)
		}
	}
}
export default PrimaryColors
