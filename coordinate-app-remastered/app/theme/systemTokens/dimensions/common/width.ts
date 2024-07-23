// material-ui

import { dimensions } from '@theme/referenceTokens/dimensions'
import { BasicSizes } from '@theme/types/theme'

// types

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

const CommonWidth = (): BasicSizes => {
	return {
		'4xl': dimensions[48],
		'3xl': dimensions[32],
		'2xl': dimensions[28],
		xl: dimensions[24],
		lg: dimensions[20],
		md: dimensions[16],
		sm: dimensions[14],
		xs: dimensions[12]
	}
}

export default CommonWidth
