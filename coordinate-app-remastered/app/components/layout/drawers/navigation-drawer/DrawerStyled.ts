import Drawer from '@mui/material/Drawer'
import { styled, Theme } from '@mui/material/styles'
import { DrawerMode, DrawerWidthClosed, DrawerWidthOpen } from 'app/recoil/selectors'

interface Props {
	theme: Theme
	openDrawer: boolean
	modeDrawer: DrawerMode
}

const NavigationDrawerStyled = styled(Drawer, {
	shouldForwardProp: (prop) => prop !== 'modeDrawer' && prop !== 'openDrawer' && prop !== 'theme'
})(({ theme, modeDrawer, openDrawer }: Props) => ({
	width: openDrawer ? DrawerWidthOpen : DrawerWidthClosed,
	flexShrink: 0,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: openDrawer ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen
	}),
	...(modeDrawer === 'hovered' && {
		top: '60px',
		height: '94vh'
	}),

	'& .MuiDrawer-paper': {
		width: openDrawer ? DrawerWidthOpen : DrawerWidthClosed,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: openDrawer ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen
		}),
		height: '-webkit-fill-available',
		...(modeDrawer === 'hovered' && {
			top: '60px',
			height: '-webkit-fill-available'
		}),
		boxShadow: theme.effects.elevation[1].boxShadow,
		backdropFilter: theme.effects.elevation[1].backdropFilter,
		borderRadius: '8px',
		backgroundColor: theme.palette.surface.container_lowest,
		marginLeft: `calc( ${theme.dimensions.screen.padding.default} + 1px)`,
		marginTop: `calc( ${theme.dimensions.screen.padding.default} + 1px)`,
		marginBottom: `calc( ${theme.dimensions.screen.padding.default} + 1px)`
	}
}))

export default NavigationDrawerStyled
