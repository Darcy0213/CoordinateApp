import { dimensions } from '@theme/referenceTokens/dimensions'
import { CellWidthDimensions } from '@theme/types/theme'

const CellWidth = (): CellWidthDimensions => {
	return {
		min: {
			sm: dimensions[34],
			md: dimensions[100],
			lg: dimensions[200]
		}
	}
}

export default CellWidth
