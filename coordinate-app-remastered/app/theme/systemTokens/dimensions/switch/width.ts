// material-ui

import { dimensions } from '@theme/referenceTokens/dimensions'
import { BasicSizes } from '@theme/types/theme'

// types

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

const SwitchWidth = (): BasicSizes => {
	return {
		xl: dimensions[72],
		lg: dimensions[56],
		md: dimensions[48],
		sm: dimensions[32],
		xs: dimensions[24]
	}
}

export default SwitchWidth
