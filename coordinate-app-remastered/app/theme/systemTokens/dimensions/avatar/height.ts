// material-ui

import { dimensions } from '@theme/referenceTokens/dimensions'
import { BasicSizes } from '@theme/types/theme'

// types

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

const AvatarHeight = (): BasicSizes => {
	return {
		'2xl': dimensions[100],
		xl: dimensions[40],
		lg: dimensions[32],
		md: dimensions[24],
		sm: dimensions[20],
		xs: dimensions[16]
	}
}

export default AvatarHeight
