import { ListItemButton } from '@mui/material'
import { styled, Theme } from '@mui/material/styles'

// ==============================|| PIN BUTTON - STYLED ||============================== //

interface Props {
	theme: Theme
	isActive: boolean
	lastParent?: boolean
}

const ListItemButtonStyled = styled(ListItemButton, {
	shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'selectedState' && prop !== 'lastParent'
})(({ theme, isActive, lastParent }: Props) => ({
	gap: theme.dimensions.common.spacing.md,
	padding: theme.dimensions.common.padding.lg,
	borderRadius: theme.dimensions.radius.md,
	'&:hover': {
		background: theme.palette.state.hover
	},
	background:
		isActive && lastParent === true ? theme.palette.state.focus : isActive && lastParent === undefined ? theme.palette.state.focus : 'transparent'
}))

export default ListItemButtonStyled
