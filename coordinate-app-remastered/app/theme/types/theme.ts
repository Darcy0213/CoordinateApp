// material-ui
import { CoordinatePaletteColorOptions, SysCustomPalette } from '@mui/material'

// ==============================|| DEFAULT THEME - TYPES  ||============================== //

export type PaletteThemeProps = {
	blue: CoordinatePaletteColorOptions
	red: CoordinatePaletteColorOptions
	yellow: CoordinatePaletteColorOptions
	cyan: CoordinatePaletteColorOptions
	magenta: CoordinatePaletteColorOptions
	green: CoordinatePaletteColorOptions
	sys_gray: CoordinatePaletteColorOptions
	lime: CoordinatePaletteColorOptions
	orange: CoordinatePaletteColorOptions
	purple: CoordinatePaletteColorOptions
}

export interface PalettesProps {
	[key: string]: string[]
}
export type ColorStatesProps = {
	hover: { color: string; opacity: string }
	hoverValues: { color: string; opacity: string }
	focus: { color: string; opacity: string }
	press: { color: string; opacity: string }
	drag: { color: string; opacity: string }
	focus_outline: string
	selected_blue: { color: string; opacity: string }
	clear: { color: string; opacity: string }
	disable_surface: string
	disable_on_surface: string
	hover_invert: { color: string; opacity: string }
	focus_invert: { color: string; opacity: string }
}

export type SurfaceColorsProps = {
	container_lowest: string
	container_low: string
	container_opacity: { color: string; opacity: string }
	container: { normal: string; opacity: Opacity }
	container_high: string
	container_highest: string
	container_medium: string
	on_surface: string
	on_surface_medium: string
	on_surface_invert: string
	on_surface_variant: string
	on_surface_soft: string
	container_invert: string
	on_surface_container_invert: string
}

export type MainColorsProps = {
	surface_high: string
	surface_medium: { color: string; opacity: string }
	surface_low: { color: string; opacity: string }
	surface_lowest: { color: string; opacity: string }
	surface_outline: { color: string; opacity: string }
	on_surface: string
	on_surface_invert: string
	on_surface_medium: string
	outline: { color: string; opacity: string }
}

export type Opacity = {
	75: OpacityCategories
	50: OpacityCategories
	30: OpacityCategories
	16: OpacityCategories
	8: OpacityCategories
	2: OpacityCategories
}

export type OpacityCategories = {
	invert: { color: string; opacity: string }
	normal: { color: string; opacity: string }
}

export type BackgroundColorsProps = {
	main: string
	dim: string
	bright: string
}

export type ChipColorsProps = {
	blue: string
	on_blue: string
	on_blue_variant: string
	red: string
	on_red: string
	on_red_variant: string
	purple: string
	on_purple: string
	on_purple_variant: string
	magenta: string
	on_magenta: string
	on_magenta_variant: string
	cyan: string
	on_cyan: string
	on_cyan_variant: string
	orange: string
	on_orange: string
	on_orange_variant: string
	yellow: string
	on_yellow: string
	on_yellow_variant: string
	lime: string
	on_lime: string
	on_lime_variant: string
	green: string
	on_green: string
	on_green_variant: string
	on_gray: string
	gray: string
	on_gray_variant: string
}

type IntensityTypes = {
	high: string
	medium: string
	low: string
	lowest: string
	outline: string
}

type OnSurfaceTypes = {
	normal: string
	invert: string
	variant: string
}

type AlertPropTypes = {
	surface: IntensityTypes
	on_surface: OnSurfaceTypes
}

export type AlertColorsProps = {
	error: AlertPropTypes
	success: AlertPropTypes
	warning: AlertPropTypes
}

export type PrimaryColorsProps = {
	main: string
	on_primary: string
	container: string
	on_primary_container: string
}

export type SecondaryColorsProps = {
	main: string
	on_secondary: string
	container: string
	on_secondary_container: string
}

export type TertiaryColorsProps = {
	main: string
	on_tertiary: string
	container: string
	on_tertiary_container: string
}

export type OutlineColorsProps = {
	main: string
	variant: string
	high: string
	soft: string
	opacity_30: { color: string; opacity: string }
	magenta: string
	cyan: string
	yellow: string
	orange: string
	lime: string
	green: string
	red: string
	purple: string
	blue: string
}

export type CustomPaletteProps = {
	on_custom_palette: {
		invert: string
		normal: string
	}
	blue: SysCustomPalette
	cyan: SysCustomPalette
	green: SysCustomPalette
	lime: SysCustomPalette
	yellow: SysCustomPalette
	orange: SysCustomPalette
	red: SysCustomPalette
	magenta: SysCustomPalette
	purple: SysCustomPalette
	gray: SysCustomPalette
	on_surface: {
		yellow: {
			low: string
			high: string
		}
		red: {
			low: string
			high: string
		}
		green: {
			low: string
			high: string
		}
		orange: {
			low: string
			high: string
		}
		blue: {
			low: string
			high: string
		}
		cyan: {
			low: string
			high: string
		}
		purple: {
			low: string
			high: string
		}
		magenta: {
			low: string
			high: string
		}
		lime: {
			low: string
			high: string
		}
	}
}

export type CustomDimensionsProps = {
	common: {
		padding: BasicSizes
		padding_non_side: BasicSizes
		height: BasicSizes
		width: BasicSizes
		spacing: BasicSizes
	}
	switch: SwitchTypes
	radius: BasicSizes
	frame: FrameDimensions
	cell: CellDimensions
	page: PageDimensions
	avatar: AvatarTypes
	buttonChip: {
		padding: BasicSizes
		spacing: BasicSizes
		padding_non_side: BasicSizes
	}
	icon: {
		width: BasicSizes
		height: BasicSizes
	}
	screen: {
		width: { min: string; max: string }
		spacing: { default: string }
		padding: { default: string }
	}
	modal: { width: ModalWidth; height: ModalHeight; padding: BasicSizes; spacing: BasicSizes }
	drawer: { padding: BasicSizes; spacing: BasicSizes; width: WidthDimensions }
	object: {
		width: string
		height: string
		padding: BasicSizes
		spacing: string
	}
}
export interface PageSpacing {
	default: string
}
export type PageDimensions = {
	padding: BasicSizes
	spacing: PageSpacing
}
export type FrameDimensions = {
	padding: BasicSizes
	spacing: BasicSizes
}

export type CellDimensions = {
	padding: BasicSizes
	spacing: BasicSizes
	height: HeightDimensions
	width: CellWidthDimensions
}

export type AvatarTypes = {
	height: BasicSizes
	width: BasicSizes
}

export type SwitchTypes = {
	padding: BasicSizes
	height: BasicSizes
	width: BasicSizes
}

export interface WidthDimensions {
	max: string
	min: string
	navigation?: string
}
export interface CellWidthDimensions {
	min: {
		sm: string
		md: string
		lg: string
	}
}
export interface HeightDimensions {
	max?: string
	min: string
}

export interface BasicSizes {
	round?: string
	'7xl'?: string
	'6xl'?: string
	'5xl'?: string
	'4xl'?: string
	'3xl'?: string
	'2xl'?: string
	xl?: string
	lg: string
	md: string
	'2sm'?: string
	sm: string
	xs?: string
	none?: string
}

export interface ModalWidth {
	object: string
	dialog: string
	menu: string
}

export interface ModalHeight {
	object: string
}
