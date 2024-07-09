// types

import { PresetColor, ThemeMode } from '@globalTypes/customization'
import { PaletteThemeProps } from '@theme/types/theme'
import Default from './default'

// ==============================|| PRESET THEME - THEME SELECTOR ||============================== //

const ThemeOption = (presetColor: PresetColor, mode: ThemeMode): PaletteThemeProps => {
	switch (presetColor) {
		/* case 'theme1':
			return Theme1(colors, mode)
		case 'theme2':
			return Theme2(colors, mode) */

		default:
			return Default(mode)
	}
}

export default ThemeOption
