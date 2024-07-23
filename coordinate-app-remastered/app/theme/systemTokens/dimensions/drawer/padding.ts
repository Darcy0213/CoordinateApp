import { dimensions } from '@theme/referenceTokens/dimensions'
import { BasicSizes } from '@theme/types/theme'

const DrawerPadding = (): BasicSizes => {
	return {
		lg: dimensions[40],
		md: dimensions[24],
		sm: dimensions[12],
		xs: dimensions[4]
	}
}

export default DrawerPadding
