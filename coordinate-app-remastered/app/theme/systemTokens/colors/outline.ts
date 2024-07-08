import { ThemeMode } from '@components/customization/types'
import { opacity } from '@theme/referenceTokens/opacity'
import { OutlineColorsProps, PaletteThemeProps } from '@theme/types/theme'

const OutlineColors = (colors: PaletteThemeProps, mode: ThemeMode): OutlineColorsProps => {
	const color = colors
	const darkMode = mode === 'dark'
	const gray = color.sys_gray
	const opacityRT = opacity

	return {
		main: darkMode ? (gray?.[400] as string) : (gray?.[500] as string),
		variant: darkMode ? (gray?.[100] as string) : (gray?.[700] as string),
		high: darkMode ? (gray?.[900] as string) : (gray?.[100] as string),
		soft: darkMode ? (gray?.[80] as string) : (gray?.[800] as string),
		opacity_30: darkMode
			? {
					color: opacityRT['30%_dark'].color,
					opacity: opacityRT['30%_dark'].opacity
			  }
			: {
					color: opacityRT['30%_light'].color,
					opacity: opacityRT['30%_light'].opacity
			  },
		magenta: darkMode ? (color.magenta?.[200] as string) : (color.magenta?.[700] as string),
		cyan: darkMode ? (color.cyan?.[200] as string) : (color.cyan?.[700] as string),
		yellow: darkMode ? (color.yellow?.[200] as string) : (color.yellow?.[700] as string),
		orange: darkMode ? (color.orange?.[200] as string) : (color.orange?.[700] as string),
		lime: darkMode ? (color.lime?.[200] as string) : (color.lime?.[700] as string),
		green: darkMode ? (color.green?.[200] as string) : (color.green?.[700] as string),
		red: darkMode ? (color.red?.[200] as string) : (color.red?.[700] as string),
		purple: darkMode ? (color.purple?.[200] as string) : (color.purple?.[700] as string),
		blue: darkMode ? (color.blue?.[200] as string) : (color.blue?.[700] as string)
	}
}
export default OutlineColors
