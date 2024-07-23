import { dimensions } from '@theme/referenceTokens/dimensions'

const WidthScreen = (laptopDesktop: boolean, tablet: boolean) => {
	return {
		min: dimensions[1200],
		max: dimensions[1536]
	}
}

export default WidthScreen
