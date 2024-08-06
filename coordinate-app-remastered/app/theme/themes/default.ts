import { ThemeMode } from '@globalTypes/customization'
import {
	sys_blue,
	sys_cyan,
	sys_gray,
	sys_green,
	sys_lime,
	sys_magenta,
	sys_orange,
	sys_purple,
	sys_red,
	sys_yellow
} from '@theme/referenceTokens/colors'
import { PaletteThemeProps } from '@theme/types/theme'

const Default = (mode: ThemeMode): PaletteThemeProps => {
	return {
		blue: {
			100: sys_blue['blue-100'],
			200: sys_blue['blue-200'],
			300: sys_blue['blue-300'],
			400: sys_blue['blue-400'],

			50: sys_blue['blue-50'],
			500: sys_blue['blue-500'],

			600: sys_blue['blue-600'],
			700: sys_blue['blue-700'],

			800: sys_blue['blue-800'],

			900: sys_blue['blue-900']
		},
		cyan: {
			100: sys_cyan['cyan-100'],
			200: sys_cyan['cyan-200'],
			300: sys_cyan['cyan-300'],
			400: sys_cyan['cyan-400'],
			50: sys_cyan['cyan-50'],
			500: sys_cyan['cyan-500'],

			600: sys_cyan['cyan-600'],
			700: sys_cyan['cyan-700'],

			800: sys_cyan['cyan-800'],

			900: sys_cyan['cyan-900']
		},
		sys_gray: {
			0: sys_gray['gray-0'],
			100: sys_gray['gray-100'],
			200: sys_gray['gray-200'],
			300: sys_gray['gray-300'],
			400: sys_gray['gray-400'],
			50: sys_gray['gray-50'],
			25: sys_gray['gray-25'],
			75: sys_gray['gray-75'],
			80: sys_gray['gray-80'],
			500: sys_gray['gray-500'],
			600: sys_gray['gray-600'],
			700: sys_gray['gray-700'],
			800: sys_gray['gray-800'],
			900: sys_gray['gray-900'],
			1000: sys_gray['gray-1000']
		},
		green: {
			100: sys_green['green-100'],
			200: sys_green['green-200'],
			300: sys_green['green-300'],
			400: sys_green['green-400'],
			50: sys_green['green-50'],
			500: sys_green['green-500'],

			600: sys_green['green-600'],
			700: sys_green['green-700'],

			800: sys_green['green-800'],

			900: sys_green['green-900']
		},
		lime: {
			100: sys_lime['lime-100'],
			200: sys_lime['lime-200'],
			300: sys_lime['lime-300'],
			400: sys_lime['lime-400'],

			50: sys_lime['lime-50'],
			500: sys_lime['lime-500'],

			600: sys_lime['lime-600'],
			700: sys_lime['lime-700'],

			800: sys_lime['lime-800'],

			900: sys_lime['lime-900']
		},
		magenta: {
			100: sys_magenta['magenta-100'],
			200: sys_magenta['magenta-200'],
			300: sys_magenta['magenta-300'],
			400: sys_magenta['magenta-400'],
			50: sys_magenta['magenta-50'],
			500: sys_magenta['magenta-500'],

			600: sys_magenta['magenta-600'],
			700: sys_magenta['magenta-700'],

			800: sys_magenta['magenta-800'],

			900: sys_magenta['magenta-900']
		},
		orange: {
			100: sys_orange['orange-100'],
			200: sys_orange['orange-200'],
			300: sys_orange['orange-300'],
			400: sys_orange['orange-400'],
			50: sys_orange['orange-50'],
			500: sys_orange['orange-500'],

			600: sys_orange['orange-600'],
			700: sys_orange['orange-700'],

			800: sys_orange['orange-800'],

			900: sys_orange['orange-900']
		},
		purple: {
			100: sys_purple['purple-100'],
			200: sys_purple['purple-200'],
			300: sys_purple['purple-300'],
			400: sys_purple['purple-400'],
			50: sys_purple['purple-50'],
			500: sys_purple['purple-500'],

			600: sys_purple['purple-600'],
			700: sys_purple['purple-700'],

			800: sys_purple['purple-800'],

			900: sys_purple['purple-900']
		},
		red: {
			100: sys_red['red-100'],
			200: sys_red['red-200'],
			300: sys_red['red-300'],
			400: sys_red['red-400'],
			50: sys_red['red-50'],
			500: sys_red['red-500'],

			600: sys_red['red-600'],
			700: sys_red['red-700'],

			800: sys_red['red-800'],

			900: sys_red['red-900']
		},
		yellow: {
			100: sys_yellow['yellow-100'],
			200: sys_yellow['yellow-200'],
			300: sys_yellow['yellow-300'],
			400: sys_yellow['yellow-400'],
			50: sys_yellow['yellow-50'],
			500: sys_yellow['yellow-500'],

			600: sys_yellow['yellow-600'],
			700: sys_yellow['yellow-700'],

			800: sys_yellow['yellow-800'],

			900: sys_yellow['yellow-900']
		}
	}
}
export default Default
