import { IconButton } from '@mui/material'
import { Theme, styled } from '@mui/material/styles'

// ==============================|| PIN BUTTON - STYLED ||============================== //

interface Props {
	theme: Theme
	isActive: boolean
}

const TabButtonStyled = styled(IconButton, {
	shouldForwardProp: (prop) => prop !== 'isActive'
})(({ theme, isActive }: Props) => ({
	padding: theme.dimensions.common.padding.md,
	'&:hover': {
		background: isActive ? theme.palette.state.active : theme.palette.state.hover
	},
	width: 'fit-content',
	height: 'fit-content',
	borderRadius: theme.dimensions.radius.lg,
	background: isActive ? theme.palette.state.active : 'transparent'
}))

export default TabButtonStyled
