import { dimensions } from '@theme/referenceTokens/dimensions'
import { BasicSizes } from '@theme/types/theme'

const FrameSpacing = (): BasicSizes => {
	return {
		'4xl': dimensions[24],
		'3xl': dimensions[20],
		'2xl': dimensions[20],
		xl: dimensions[16],
		lg: dimensions[12],
		md: dimensions[8],
		sm: dimensions[6],
		xs: dimensions[4],
		none: dimensions[0]
	}
}

export default FrameSpacing
