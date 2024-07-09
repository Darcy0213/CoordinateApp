import { ThemeMode } from '@globalTypes/customization'
import { PaletteThemeProps, TertiaryColorsProps } from '@theme/types/theme'

const TertiaryColors = (colors: PaletteThemeProps, mode: ThemeMode): TertiaryColorsProps => {
	const color = colors
	const darkMode = mode === 'dark'

	const purple = color.purple

	return {
		main: darkMode ? (purple?.[400] as string) : (purple?.[500] as string),
		on_tertiary: darkMode ? (purple?.[900] as string) : (purple?.[50] as string),
		container: darkMode ? (purple?.[700] as string) : (purple?.[200] as string),
		on_tertiary_container: darkMode ? (purple?.[50] as string) : (purple?.[900] as string)
	}
}
export default TertiaryColors
