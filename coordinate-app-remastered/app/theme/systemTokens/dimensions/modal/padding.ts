// material-ui

import { dimensions } from '@theme/referenceTokens/dimensions'
import { BasicSizes } from '@theme/types/theme'

// types

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

const ModalPadding = (): BasicSizes => {
	return {
		lg: dimensions[18],
		md: dimensions[12],
		sm: dimensions[8],
		xs: dimensions[4]
	}
}

export default ModalPadding
