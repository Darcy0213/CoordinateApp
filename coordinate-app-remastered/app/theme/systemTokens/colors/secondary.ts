import { ThemeMode } from '@components/customization/types'
import { PaletteThemeProps, SecondaryColorsProps } from '@theme/types/theme'

const SecondaryColors = (colors: PaletteThemeProps, mode: ThemeMode): SecondaryColorsProps => {
	const color = colors
	const darkMode = mode === 'dark'

	const gray = color.sys_gray

	return {
		main: darkMode ? (gray?.[600] as string) : (gray?.[300] as string),
		on_secondary: darkMode ? (gray?.[100] as string) : (gray?.[800] as string),
		container: darkMode ? (gray?.[200] as string) : (gray?.[700] as string),
		on_secondary_container: darkMode ? (gray?.[900] as string) : (gray?.[50] as string)
	}
}
export default SecondaryColors
