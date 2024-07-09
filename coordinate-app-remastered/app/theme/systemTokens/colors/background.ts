// types

import { ThemeMode } from '@globalTypes/customization'
import { BackgroundColorsProps, PaletteThemeProps } from '@theme/types/theme'

const BackgroundColors = (colors: PaletteThemeProps, mode: ThemeMode): BackgroundColorsProps => {
	const color = colors
	const darkMode = mode === 'dark'
	const gray = color.sys_gray
	return {
		main: darkMode ? (gray?.[0] as string) : (gray?.[1000] as string),
		dim: darkMode ? (gray?.[0] as string) : (gray?.[900] as string),
		bright: darkMode ? (gray?.[100] as string) : (gray?.[1000] as string)
	}
}
export default BackgroundColors
