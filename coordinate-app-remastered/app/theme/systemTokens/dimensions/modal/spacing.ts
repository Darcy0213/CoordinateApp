import { dimensions } from '@theme/referenceTokens/dimensions'
import { BasicSizes } from '@theme/types/theme'

const ModalSpacing = (): BasicSizes => {
	return {
		lg: dimensions[18],
		md: dimensions[12],
		sm: dimensions[8],
		xs: dimensions[4]
	}
}

export default ModalSpacing
