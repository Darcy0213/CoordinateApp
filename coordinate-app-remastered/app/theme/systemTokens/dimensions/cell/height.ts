import { dimensions } from '@theme/referenceTokens/dimensions'
import { HeightDimensions } from '@theme/types/theme'

const CellHeight = (): HeightDimensions => {
	return {
		min: dimensions[32]
	}
}

export default CellHeight
