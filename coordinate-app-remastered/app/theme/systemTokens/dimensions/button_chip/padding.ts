import { dimensions } from '@theme/referenceTokens/dimensions'
import { BasicSizes } from '@theme/types/theme'

const ButtonChipPadding = (): BasicSizes => {
	return {
		'7xl': dimensions[26],
		'6xl': dimensions[18],
		'5xl': dimensions[13],
		'4xl': dimensions[11],
		'3xl': dimensions[19],
		'2xl': dimensions[9],
		xl: dimensions[8],
		lg: dimensions[6],
		md: dimensions[4],
		'2sm': dimensions[3],
		sm: dimensions[2],
		xs: dimensions[2]
	}
}

export default ButtonChipPadding
