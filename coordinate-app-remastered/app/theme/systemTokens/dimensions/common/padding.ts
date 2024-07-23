// material-ui

import { dimensions } from '@theme/referenceTokens/dimensions'
import { BasicSizes } from '@theme/types/theme'

// types

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

const CommonPadding = (): BasicSizes => {
	return {
		'4xl': dimensions[12],
		'3xl': dimensions[10],
		'2xl': dimensions[10],
		xl: dimensions[8],
		lg: dimensions[6],
		md: dimensions[4],
		sm: dimensions[3],
		xs: dimensions[2]
	}
}

export default CommonPadding
