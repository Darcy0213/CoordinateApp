import { dimensions } from '@theme/referenceTokens/dimensions'
import { BasicSizes } from '@theme/types/theme'

const FramePadding = (): BasicSizes => {
	return {
		'4xl': dimensions[24],
		'3xl': dimensions[20],
		'2xl': dimensions[20],
		xl: dimensions[18],
		lg: dimensions[12],
		md: dimensions[8],
		sm: dimensions[4],
		xs: dimensions[2],
		none: dimensions[0]
	}
}

export default FramePadding
