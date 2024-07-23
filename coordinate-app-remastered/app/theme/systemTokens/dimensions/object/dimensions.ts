// material-ui

import { dimensions } from '@theme/referenceTokens/dimensions'

// types

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

const ObjectPageDimensions = () => {
	return {
		width: dimensions[800],
		height: dimensions[800],
		padding: { lg: dimensions[80], md: dimensions[40], sm: dimensions[24], xs: dimensions[12], '2xs': dimensions[8], none: dimensions[0] },
		spacing: dimensions[12]
	}
}

export default ObjectPageDimensions
