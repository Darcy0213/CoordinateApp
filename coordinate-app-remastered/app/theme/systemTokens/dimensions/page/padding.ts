import { dimensions } from '@theme/referenceTokens/dimensions'
import { BasicSizes } from '@theme/types/theme'

const PagePadding = (): BasicSizes => {
	return {
		lg: dimensions[160],
		md: dimensions[80],
		sm: dimensions[40],
		xs: dimensions[20],
		none: dimensions[0]
	}
}

export default PagePadding
