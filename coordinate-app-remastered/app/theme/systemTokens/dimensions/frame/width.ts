import { dimensions } from '@theme/referenceTokens/dimensions'
import { BasicSizes } from '@theme/types/theme'

const FrameWidth = (): BasicSizes => {
	return {
		lg: dimensions[160],
		md: dimensions[140],
		sm: dimensions[120]
	}
}

export default FrameWidth
