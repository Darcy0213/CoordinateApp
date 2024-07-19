import '@mui/material/styles'
import { CustomDimensionsProps } from './theme'
declare module '@mui/material/styles' {
	interface Theme {
		customShadows: CustomShadowProps
		dimensions: CustomDimensionsProps
		elevation: Elevation
		background: Background
	}

	interface TypographyVariants {
		'sys.typo.h1'?: React.CSSProperties
		'sys.typo.h2'?: React.CSSProperties
		'sys.typo.h3'?: React.CSSProperties
		'sys.typo.h4'?: React.CSSProperties
		'sys.typo.h5'?: React.CSSProperties
		'sys.typo.t1'?: React.CSSProperties
		'sys.typo.t2'?: React.CSSProperties
		'sys.typo.st1'?: React.CSSProperties
		'sys.typo.st2'?: React.CSSProperties
		'sys.typo.st3'?: React.CSSProperties
		'sys.typo.st2_semibold'?: React.CSSProperties
		'sys.typo.st1_semibold'?: React.CSSProperties
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		'sys.typo.h1'?: React.CSSProperties
		'sys.typo.h2'?: React.CSSProperties
		'sys.typo.h3'?: React.CSSProperties
		'sys.typo.h4'?: React.CSSProperties
		'sys.typo.h5'?: React.CSSProperties
		'sys.typo.t1'?: React.CSSProperties
		'sys.typo.t2'?: React.CSSProperties
		'sys.typo.st1'?: React.CSSProperties
		'sys.typo.st2'?: React.CSSProperties
		'sys.typo.st3'?: React.CSSProperties
		'sys.typo.st2_semibold'?: React.CSSProperties
		'sys.typo.st1_semibold'?: React.CSSProperties
	}

	interface ModalWidth {
		object: string
		dialog: string
	}

	interface BasicDimensions {
		none?: string
		st3: string
		st2: string
		st1: string
		t2: string
		t1: string
		h5: string
		h4: string
		h3: string
		h2: string
		h1: string
		round?: string
		avatarGroup?: string
	}
	interface SimpleDimensions {
		st3?: string
		st2?: string
		t1?: string
		h5?: string
		h2?: string
		h3?: string
		h4?: string
		h1?: string
		t2?: string
		st1?: string
	}

	interface PagePadding extends SimpleDimensions {
		table?: string
		small?: string
		medium?: string
		large?: string
	}

	interface AdvancedDimensions extends BasicDimensions {
		non_icon_side?: BasicDimensions
		non_icon?: BasicDimensions
		avatar_group?: string
	}

	interface WidthDimensions {
		max: string
		min: string
	}
	interface CellWidthDimensions {
		max: string
		min: {
			sm: string
			md: string
			lg: string
		}
	}
	interface HeightDimensions {
		max?: string
		min: string
	}
}
