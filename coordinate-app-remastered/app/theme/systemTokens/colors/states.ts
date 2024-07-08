// types

import { ThemeMode } from '@components/customization/types'
import { opacity } from '@theme/referenceTokens/opacity'
import { ColorStatesProps, PaletteThemeProps } from '@theme/types/theme'

const StatesColors = (colors: PaletteThemeProps, mode: ThemeMode): ColorStatesProps => {
	const color = colors
	const darkMode = mode === 'dark'

	const gray = color.sys_gray
	const blue = color.blue
	const opacityRT = opacity

	return {
		hover: darkMode
			? {
					color: opacityRT['8%_dark'].color,
					opacity: opacityRT['8%_dark'].opacity
			  }
			: {
					color: opacityRT['8%_light'].color,
					opacity: opacityRT['8%_light'].opacity
			  },
		hoverValues: darkMode ? opacityRT['8%_dark'] : opacityRT['8%_light'],
		focus: darkMode
			? {
					color: opacityRT['12%_dark'].color,
					opacity: opacityRT['12%_dark'].opacity
			  }
			: {
					color: opacityRT['12%_light'].color,
					opacity: opacityRT['12%_light'].opacity
			  },
		press: darkMode
			? {
					color: opacityRT['12%_dark'].color,
					opacity: opacityRT['12%_dark'].opacity
			  }
			: {
					color: opacityRT['12%_light'].color,
					opacity: opacityRT['12%_light'].opacity
			  },
		drag: darkMode
			? {
					color: opacityRT['16%_dark'].color,
					opacity: opacityRT['16%_dark'].opacity
			  }
			: {
					color: opacityRT['16%_light'].color,
					opacity: opacityRT['16%_light'].opacity
			  },
		focus_outline: blue?.[700] as string,
		selected_blue: {
			color: opacityRT['12%_blue'].color,
			opacity: opacityRT['12%_blue'].opacity
		},
		clear: {
			color: opacityRT['0%_light'].color,
			opacity: opacityRT['0%_light'].opacity
		},
		disable_surface: darkMode ? (gray?.[100] as string) : (gray?.[800] as string),
		disable_on_surface: darkMode ? (gray?.[300] as string) : (gray?.[600] as string),
		hover_invert: darkMode
			? {
					color: opacityRT['8%_light'].color,
					opacity: opacityRT['8%_light'].opacity
			  }
			: {
					color: opacityRT['8%_dark'].color,
					opacity: opacityRT['8%_dark'].opacity
			  },
		focus_invert: darkMode
			? {
					color: opacityRT['12%_light'].color,
					opacity: opacityRT['12%_light'].opacity
			  }
			: {
					color: opacityRT['12%_dark'].color,
					opacity: opacityRT['12%_dark'].opacity
			  }
	}
}
export default StatesColors
