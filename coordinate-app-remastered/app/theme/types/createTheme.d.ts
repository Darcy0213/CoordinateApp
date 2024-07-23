import '@mui/material/styles'
import { CustomDimensionsProps } from './theme'
declare module '@mui/material/styles' {
	interface Theme {
		dimensions: CustomDimensionsProps
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
}
