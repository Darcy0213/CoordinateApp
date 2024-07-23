import { dimensions } from '@theme/referenceTokens/dimensions'
import { BasicSizes } from '@theme/types/theme'

const Radius = (): BasicSizes => ({
	round: dimensions[80],
	'4xl': dimensions[10],
	'3xl': dimensions[10],
	'2xl': dimensions[8],
	xl: dimensions[8],
	lg: dimensions[6],
	md: dimensions[4],
	sm: dimensions[4],
	xs: dimensions[4],
	none: dimensions[0]
})

export default Radius
