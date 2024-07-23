import { dimensions } from '@theme/referenceTokens/dimensions'
import { BasicSizes } from '@theme/types/theme'

const CellSpacing = (): BasicSizes => {
	return {
		lg: dimensions[12],
		md: dimensions[8],
		sm: dimensions[4]
	}
}

export default CellSpacing
