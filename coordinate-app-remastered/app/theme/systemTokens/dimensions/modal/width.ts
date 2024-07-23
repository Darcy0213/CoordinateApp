// material-ui

import { ModalWidth } from '@mui/material'
import { dimensions } from '@theme/referenceTokens/dimensions'

// types

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

const ModalsWidth = (laptopDesktop: boolean): ModalWidth => {
	return {
		object: dimensions[800],
		dialog: dimensions[300],
		menu: dimensions[500]
	}
}

export default ModalsWidth
