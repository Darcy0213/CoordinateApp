// material-ui

import { ModalHeight } from '@mui/material'
import { dimensions } from '@theme/referenceTokens/dimensions'

// types

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

const ModalsHeight = (): ModalHeight => {
	return {
		object: dimensions[800]
	}
}

export default ModalsHeight
