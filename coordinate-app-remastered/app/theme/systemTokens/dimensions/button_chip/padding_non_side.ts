import { dimensions } from '@theme/referenceTokens/dimensions'
import { BasicSizes } from '@theme/types/theme'

const ButtonChipPaddingNonSide = (): BasicSizes => {
	return {
		'4xl': dimensions[22],
		'3xl': dimensions[16],
		'2xl': dimensions[14],
		xl: dimensions[12],
		lg: dimensions[10],
		md: dimensions[8],
		sm: dimensions[4],
		xs: dimensions[4]
	}
}

export default ButtonChipPaddingNonSide
