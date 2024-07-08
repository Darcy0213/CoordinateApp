import { ThemeMode } from '@components/customization/types'
import { ChipColorsProps, PaletteThemeProps } from '@theme/types/theme'

const ChipColors = (colors: PaletteThemeProps, mode: ThemeMode): ChipColorsProps => {
	const color = colors
	const darkMode = mode === 'dark'

	return {
		blue: darkMode ? (color.blue?.[700] as string) : (color.blue?.[100] as string),
		on_blue: darkMode ? (color.blue?.[50] as string) : (color.blue?.[800] as string),
		on_blue_variant: darkMode ? (color.blue?.[400] as string) : (color.blue?.[600] as string),

		red: darkMode ? (color.red?.[700] as string) : (color.red?.[100] as string),
		on_red: darkMode ? (color.red?.[50] as string) : (color.red?.[800] as string),
		on_red_variant: darkMode ? (color.red?.[400] as string) : (color.red?.[600] as string),

		purple: darkMode ? (color.purple?.[700] as string) : (color.purple?.[100] as string),
		on_purple: darkMode ? (color.purple?.[50] as string) : (color.purple?.[800] as string),
		on_purple_variant: darkMode ? (color.purple?.[400] as string) : (color.purple?.[600] as string),

		magenta: darkMode ? (color.magenta?.[700] as string) : (color.magenta?.[100] as string),
		on_magenta: darkMode ? (color.magenta?.[50] as string) : (color.magenta?.[800] as string),
		on_magenta_variant: darkMode ? (color.magenta?.[400] as string) : (color.magenta?.[600] as string),

		cyan: darkMode ? (color.cyan?.[700] as string) : (color.cyan?.[100] as string),
		on_cyan: darkMode ? (color.cyan?.[50] as string) : (color.cyan?.[800] as string),
		on_cyan_variant: darkMode ? (color.cyan?.[400] as string) : (color.cyan?.[600] as string),

		orange: darkMode ? (color.orange?.[700] as string) : (color.orange?.[100] as string),
		on_orange: darkMode ? (color.orange?.[50] as string) : (color.orange?.[800] as string),
		on_orange_variant: darkMode ? (color.orange?.[400] as string) : (color.orange?.[600] as string),

		yellow: darkMode ? (color.yellow?.[700] as string) : (color.yellow?.[100] as string),
		on_yellow: darkMode ? (color.yellow?.[50] as string) : (color.yellow?.[800] as string),
		on_yellow_variant: darkMode ? (color.yellow?.[400] as string) : (color.yellow?.[600] as string),

		lime: darkMode ? (color.lime?.[800] as string) : (color.lime?.[100] as string),
		on_lime: darkMode ? (color.lime?.[50] as string) : (color.lime?.[800] as string),
		on_lime_variant: darkMode ? (color.lime?.[400] as string) : (color.lime?.[600] as string),

		green: darkMode ? (color.green?.[800] as string) : (color.green?.[100] as string),
		on_green: darkMode ? (color.green?.[50] as string) : (color.green?.[800] as string),
		on_green_variant: darkMode ? (color.green?.[400] as string) : (color.green?.[600] as string),

		on_gray: darkMode ? (color.sys_gray?.[700] as string) : (color.sys_gray?.[50] as string),
		gray: darkMode ? (color.sys_gray?.[100] as string) : (color.sys_gray?.[800] as string),
		on_gray_variant: darkMode ? (color.sys_gray?.[500] as string) : (color.sys_gray?.[100] as string)
	}
}
export default ChipColors
