import { dimensions } from '@theme/referenceTokens/dimensions'
import { ModalWidth } from '@theme/types/theme'

const ModalsWidth = (): ModalWidth => {
	return {
		object: dimensions[800],
		dialog: dimensions[300],
		menu: dimensions[500]
	}
}

export default ModalsWidth
