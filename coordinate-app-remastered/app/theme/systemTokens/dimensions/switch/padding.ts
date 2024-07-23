// material-ui

import { dimensions } from '@theme/referenceTokens/dimensions'
import { BasicSizes } from '@theme/types/theme'

// types

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

const SwitchPadding = (): BasicSizes => {
	return {
		xl: dimensions[5],
		lg: dimensions[4],
		md: dimensions[3],
		sm: dimensions[2],
		xs: dimensions[2]
	}
}

export default SwitchPadding
