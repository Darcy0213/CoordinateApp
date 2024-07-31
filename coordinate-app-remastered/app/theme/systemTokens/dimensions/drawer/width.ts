import { dimensions } from '@theme/referenceTokens/dimensions'
import { WidthDimensions } from '@theme/types/theme'

const DrawerWidth = (): WidthDimensions => {
	return {
		max: dimensions[750], //Refers to the max resizability of the drawer
		min: dimensions[300], //Refers to the min resizability of the drawer
		navigation: dimensions[270] // Refers to the navigation drawer width
	}
}

export default DrawerWidth
