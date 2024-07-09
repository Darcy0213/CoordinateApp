import { ThemeMode } from '@globalTypes/customization'
import { PaletteThemeProps, PrimaryColorsProps } from '@theme/types/theme'

const PrimaryColors = (colors: PaletteThemeProps, mode: ThemeMode): PrimaryColorsProps => {
	const color = colors
	const darkMode = mode === 'dark'

	const blue = color.blue

	return {
		main: darkMode ? (blue?.[400] as string) : (blue?.[500] as string),
		on_primary: darkMode ? (blue?.[900] as string) : (blue?.[50] as string),
		container: darkMode ? (blue?.[800] as string) : (blue?.[100] as string),
		on_primary_container: darkMode ? (blue?.[50] as string) : (blue?.[900] as string)
	}
}
export default PrimaryColors
