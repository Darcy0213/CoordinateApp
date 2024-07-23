import { dimensions } from '@theme/referenceTokens/dimensions'
import { BasicSizes } from '@theme/types/theme'

const ButtonChipSpacing = (): BasicSizes => {
	return {
		xl: dimensions[12],
		lg: dimensions[8],
		md: dimensions[6],
		sm: dimensions[4],
		xs: dimensions[2]
	}
}

export default ButtonChipSpacing
