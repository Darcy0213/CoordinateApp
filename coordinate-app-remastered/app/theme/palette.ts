import {
	AlertColorsProps,
	BackgroundColorsProps,
	ChipColorsProps,
	ColorStatesProps,
	CustomPaletteProps,
	CustomProps,
	MainColorsProps,
	OutlineColorsProps,
	PaletteThemeProps,
	PrimaryColorsProps,
	SecondaryColorsProps,
	SurfaceColorsProps,
	TertiaryColorsProps
} from './types/theme'

import { createTheme } from '@mui/material/styles'
import {
	AlertColors,
	BackgroundColors,
	ChipColors,
	CustomColors,
	CustomPaletteColors,
	MainColors,
	OutlineColors,
	PrimaryColors,
	SecondaryColors,
	StatesColors,
	SurfaceColors,
	TertiaryColors
} from './systemTokens'

import { PresetColor, ThemeMode } from '@globalTypes/customization'
import ThemeOption from './themes'

const Palette = (mode: ThemeMode, presetColor: PresetColor) => {
	const paletteColor: PaletteThemeProps = ThemeOption(presetColor, mode)

	const themeColorStates: ColorStatesProps = StatesColors(paletteColor, mode)
	const themeColorSurface: SurfaceColorsProps = SurfaceColors(paletteColor, mode)
	const themeColorBckg: BackgroundColorsProps = BackgroundColors(paletteColor, mode)
	const themeColorChip: ChipColorsProps = ChipColors(paletteColor, mode)
	const themeColorAlert: AlertColorsProps = AlertColors(paletteColor, mode)
	const themeColorPrimary: PrimaryColorsProps = PrimaryColors(paletteColor, mode)
	const themeColorSecondary: SecondaryColorsProps = SecondaryColors(paletteColor, mode)
	const themeColorTertiary: TertiaryColorsProps = TertiaryColors(paletteColor, mode)
	const themeColorOutline: OutlineColorsProps = OutlineColors(paletteColor, mode)
	const themeColorCustomPalette: CustomPaletteProps = CustomPaletteColors(paletteColor, mode)
	const themeColorMainPalette: MainColorsProps = MainColors(paletteColor, mode)
	const themeColorProps: CustomProps = CustomColors(paletteColor, mode)

	return createTheme({
		palette: {
			...paletteColor,
			state: themeColorStates,
			surface: themeColorSurface,
			bckg: themeColorBckg,
			chip: themeColorChip,
			alert: themeColorAlert,
			sys_primary: themeColorPrimary,
			sys_secondary: themeColorSecondary,
			sys_tertiary: themeColorTertiary,
			outline: themeColorOutline,
			custom_palette: themeColorCustomPalette,
			main: themeColorMainPalette,
			custom: themeColorProps
		}
	})
}
export default Palette
