import { ThemeMode } from '@globalTypes/customization'
import { CustomPaletteProps, PaletteThemeProps } from '@theme/types/theme'

const CustomPaletteColors = (colors: PaletteThemeProps, mode: ThemeMode): CustomPaletteProps => {
	const color = colors

	const gray = color.sys_gray

	return {
		on_custom_palette: {
			invert: gray?.[25] as string,
			normal: gray?.[1000] as string
		},
		on_surface: {
			yellow: {
				low: color.yellow?.[50] as string,
				high: color.yellow?.[900] as string
			},
			red: {
				low: color.red?.[50] as string,
				high: color.red?.[900] as string
			},
			purple: {
				low: color.purple?.[50] as string,
				high: color.purple?.[900] as string
			},
			orange: {
				low: color.orange?.[50] as string,
				high: color.orange?.[900] as string
			},
			blue: {
				low: color.blue?.[50] as string,
				high: color.blue?.[900] as string
			},
			cyan: {
				low: color.cyan?.[50] as string,
				high: color.cyan?.[900] as string
			},
			magenta: {
				low: color.magenta?.[50] as string,
				high: color.magenta?.[900] as string
			},
			lime: {
				low: color.lime?.[50] as string,
				high: color.lime?.[900] as string
			},
			green: {
				low: color.green?.[50] as string,
				high: color.green?.[900] as string
			}
		},
		lime: {
			low: {
				normal: color.lime?.[500] as string,
				'50%': color.lime?.['500-50%'] as string,
				'30%': color.lime?.['500-30%'] as string
			},
			medium: {
				normal: color.lime?.[700] as string,
				'30%': color.lime?.['700-30%'] as string,
				'50%': color.lime?.['700-50%'] as string
			},
			high: {
				normal: color.lime?.[800] as string,
				'30%': color.lime?.['800-30%'] as string,
				'50%': color.lime?.['800-50%'] as string
			},
			softest: { normal: color.lime?.[100] as string },
			soft: { normal: color.lime?.[200] as string },
			intermediate: { normal: color.lime?.[600] as string },
			lowest: { normal: color.lime?.[300] as string },
			outline: {
				medium: color.lime?.[700] as string,
				low: color.lime?.[500] as string,
				high: color.lime?.[800] as string
			}
		},
		green: {
			low: {
				normal: color.green?.[500] as string,
				'50%': color.green?.['500-50%'] as string,
				'30%': color.green?.['500-30%'] as string
			},
			medium: {
				normal: color.green?.[700] as string,
				'30%': color.green?.['700-30%'] as string,
				'50%': color.green?.['700-50%'] as string
			},
			high: {
				normal: color.green?.[800] as string,
				'30%': color.green?.['800-30%'] as string,
				'50%': color.green?.['800-50%'] as string
			},
			outline: {
				medium: color.green?.[700] as string,
				low: color.green?.[500] as string,
				high: color.green?.[800] as string
			},
			softest: { normal: color.green?.[100] as string },
			soft: { normal: color.green?.[200] as string },
			intermediate: { normal: color.green?.[600] as string },
			lowest: { normal: color.green?.[300] as string }
		},
		cyan: {
			low: {
				normal: color.cyan?.[500] as string,
				'50%': color.cyan?.['500-50%'] as string,
				'30%': color.cyan?.['500-30%'] as string
			},
			medium: {
				normal: color.cyan?.[700] as string,
				'30%': color.cyan?.['700-30%'] as string,
				'50%': color.cyan?.['700-50%'] as string
			},
			high: {
				normal: color.cyan?.[800] as string,
				'30%': color.cyan?.['800-30%'] as string,
				'50%': color.cyan?.['800-50%'] as string
			},
			outline: {
				medium: color.cyan?.[700] as string,
				low: color.cyan?.[500] as string,
				high: color.cyan?.[800] as string
			},
			softest: { normal: color.cyan?.[100] as string },
			soft: { normal: color.cyan?.[200] as string },
			intermediate: { normal: color.cyan?.[600] as string },
			lowest: { normal: color.cyan?.[300] as string }
		},
		blue: {
			low: {
				normal: color.blue?.[400] as string,
				'50%': color.blue?.['400-50%'] as string,
				'30%': color.blue?.['400-30%'] as string
			},
			medium: {
				normal: color.blue?.[700] as string,
				'30%': color.blue?.['700-30%'] as string,
				'50%': color.blue?.['700-50%'] as string
			},
			high: {
				normal: color.blue?.[800] as string,
				'30%': color.blue?.['800-30%'] as string,
				'50%': color.blue?.['800-50%'] as string
			},
			outline: {
				medium: color.blue?.[700] as string,
				low: color.blue?.[400] as string,
				high: color.blue?.[800] as string
			},
			softest: { normal: color.blue?.[100] as string },
			soft: { normal: color.blue?.[200] as string },
			intermediate: { normal: color.blue?.[600] as string },
			lowest: { normal: color.blue?.[300] as string }
		},
		yellow: {
			low: {
				normal: color.yellow?.[500] as string,
				'50%': color.yellow?.['500-50%'] as string,
				'30%': color.yellow?.['500-30%'] as string
			},
			medium: {
				normal: color.yellow?.[700] as string,
				'30%': color.yellow?.['700-30%'] as string,
				'50%': color.yellow?.['700-50%'] as string
			},
			high: {
				normal: color.yellow?.[800] as string,
				'30%': color.yellow?.['800-30%'] as string,
				'50%': color.yellow?.['800-50%'] as string
			},
			outline: {
				medium: color.yellow?.[700] as string,
				low: color.yellow?.[500] as string,
				high: color.yellow?.[800] as string
			},
			softest: { normal: color.yellow?.[100] as string },
			soft: { normal: color.yellow?.[200] as string },
			intermediate: { normal: color.yellow?.[600] as string },
			lowest: { normal: color.yellow?.[300] as string }
		},
		red: {
			low: {
				normal: color.red?.[500] as string,
				'50%': color.red?.['500-50%'] as string,
				'30%': color.red?.['500-30%'] as string
			},
			medium: {
				normal: color.red?.[700] as string,
				'30%': color.red?.['700-30%'] as string,
				'50%': color.red?.['700-50%'] as string
			},
			high: {
				normal: color.red?.[800] as string,
				'30%': color.red?.['800-30%'] as string,
				'50%': color.red?.['800-50%'] as string
			},
			outline: {
				medium: color.red?.[700] as string,
				low: color.red?.[500] as string,
				high: color.red?.[800] as string
			},
			softest: { normal: color.red?.[100] as string },
			soft: { normal: color.red?.[200] as string },
			intermediate: { normal: color.red?.[600] as string },
			lowest: { normal: color.red?.[300] as string }
		},
		orange: {
			low: {
				normal: color.orange?.[500] as string,
				'50%': color.orange?.['500-50%'] as string,
				'30%': color.orange?.['500-30%'] as string
			},
			medium: {
				normal: color.orange?.[700] as string,
				'30%': color.orange?.['700-30%'] as string,
				'50%': color.orange?.['700-50%'] as string
			},
			high: {
				normal: color.orange?.[800] as string,
				'30%': color.orange?.['800-30%'] as string,
				'50%': color.orange?.['800-50%'] as string
			},
			outline: {
				medium: color.orange?.[700] as string,
				low: color.orange?.[500] as string,
				high: color.orange?.[800] as string
			},
			softest: { normal: color.orange?.[100] as string },
			soft: { normal: color.orange?.[200] as string },
			intermediate: { normal: color.orange?.[600] as string },
			lowest: { normal: color.orange?.[300] as string }
		},
		magenta: {
			low: {
				normal: color.magenta?.[500] as string,
				'50%': color.magenta?.['500-50%'] as string,
				'30%': color.magenta?.['500-30%'] as string
			},
			medium: {
				normal: color.magenta?.[700] as string,
				'30%': color.magenta?.['700-30%'] as string,
				'50%': color.magenta?.['700-50%'] as string
			},
			high: {
				normal: color.magenta?.[800] as string,
				'30%': color.magenta?.['800-30%'] as string,
				'50%': color.magenta?.['800-50%'] as string
			},
			outline: {
				medium: color.magenta?.[700] as string,
				low: color.magenta?.[500] as string,
				high: color.magenta?.[800] as string
			},
			softest: { normal: color.magenta?.[100] as string },
			soft: { normal: color.magenta?.[200] as string },
			intermediate: { normal: color.magenta?.[600] as string },
			lowest: { normal: color.magenta?.[300] as string }
		},
		purple: {
			low: {
				normal: color.purple?.[500] as string,
				'50%': color.purple?.['500-50%'] as string,
				'30%': color.purple?.['500-30%'] as string
			},
			medium: {
				normal: color.purple?.[700] as string,
				'30%': color.purple?.['700-30%'] as string,
				'50%': color.purple?.['700-50%'] as string
			},
			high: {
				normal: color.purple?.[800] as string,
				'30%': color.purple?.['800-30%'] as string,
				'50%': color.purple?.['800-50%'] as string
			},
			outline: {
				medium: color.purple?.[700] as string,
				low: color.purple?.[500] as string,
				high: color.purple?.[800] as string
			},
			softest: { normal: color.purple?.[100] as string },
			soft: { normal: color.purple?.[200] as string },
			intermediate: { normal: color.purple?.[600] as string },
			lowest: { normal: color.purple?.[300] as string }
		},
		gray: {
			low: {
				normal: gray?.[300] as string,
				'50%': gray?.['500-50%'] as string,
				'30%': gray?.['500-30%'] as string
			},
			medium: {
				normal: gray?.[80] as string,
				'30%': gray?.['700-30%'] as string,
				'50%': gray?.['700-50%'] as string
			},
			high: {
				normal: gray?.[75] as string,
				'30%': gray?.['800-30%'] as string,
				'50%': gray?.['800-50%'] as string
			},
			outline: {
				medium: gray?.[700] as string,
				low: gray?.[500] as string,
				high: gray?.[800] as string
			},
			softest: { normal: gray?.[700] as string },
			soft: { normal: gray?.[600] as string },
			intermediate: { normal: gray?.[200] as string },
			lowest: { normal: gray?.[400] as string }
		}
	}
}
export default CustomPaletteColors
