import { ThemeMode } from '@globalTypes/customization'
import { CustomProps, PaletteThemeProps } from '@theme/types/theme'

const CustomColors = (colors: PaletteThemeProps, mode: ThemeMode): CustomProps => {
	const color = colors

	const gray = color.sys_gray

	return {
		lime: {
			1: color.lime?.[100] as string,
			2: color.lime?.[200] as string,
			3: color.lime?.[300] as string,
			4: color.lime?.[500] as string,
			5: color.lime?.[600] as string,
			6: color.lime?.[700] as string,
			7: color.lime?.[800] as string
		},
		green: {
			1: color.green?.[100] as string,
			2: color.green?.[200] as string,
			3: color.green?.[300] as string,
			4: color.green?.[500] as string,
			5: color.green?.[600] as string,
			6: color.green?.[700] as string,
			7: color.green?.[800] as string
		},
		cyan: {
			1: color.cyan?.[100] as string,
			2: color.cyan?.[200] as string,
			3: color.cyan?.[300] as string,
			4: color.cyan?.[500] as string,
			5: color.cyan?.[600] as string,
			6: color.cyan?.[700] as string,
			7: color.cyan?.[800] as string
		},
		blue: {
			1: color.blue?.[100] as string,
			2: color.blue?.[200] as string,
			3: color.blue?.[300] as string,
			4: color.blue?.[400] as string,
			5: color.blue?.[600] as string,
			6: color.blue?.[700] as string,
			7: color.blue?.[800] as string
		},
		yellow: {
			1: color.yellow?.[100] as string,
			2: color.yellow?.[200] as string,
			3: color.yellow?.[300] as string,
			4: color.yellow?.[500] as string,
			5: color.yellow?.[600] as string,
			6: color.yellow?.[700] as string,
			7: color.yellow?.[800] as string
		},
		orange: {
			1: color.orange?.[100] as string,
			2: color.orange?.[200] as string,
			3: color.orange?.[300] as string,
			4: color.orange?.[500] as string,
			5: color.orange?.[600] as string,
			6: color.orange?.[700] as string,
			7: color.orange?.[800] as string
		},
		red: {
			1: color.red?.[100] as string,
			2: color.red?.[200] as string,
			3: color.red?.[300] as string,
			4: color.red?.[500] as string,
			5: color.red?.[600] as string,
			6: color.red?.[700] as string,
			7: color.red?.[800] as string
		},
		magenta: {
			1: color.magenta?.[100] as string,
			2: color.magenta?.[200] as string,
			3: color.magenta?.[300] as string,
			4: color.magenta?.[500] as string,
			5: color.magenta?.[600] as string,
			6: color.magenta?.[700] as string,
			7: color.magenta?.[800] as string
		},
		purple: {
			1: color.purple?.[100] as string,
			2: color.purple?.[200] as string,
			3: color.purple?.[300] as string,
			4: color.purple?.[500] as string,
			5: color.purple?.[600] as string,
			6: color.purple?.[700] as string,
			7: color.purple?.[800] as string
		},
		gray: {
			1: color.sys_gray[700] as string,
			2: color.sys_gray[600] as string,
			3: color.sys_gray[400] as string,
			4: color.sys_gray[300] as string,
			5: color.sys_gray[200] as string,
			6: color.sys_gray[80] as string,
			7: color.sys_gray[50] as string
		},
		on_surface: {
			default: gray[1000] as string,
			invert: gray[25] as string
		}
	}
}
export default CustomColors
