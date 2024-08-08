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
		easing: theme.transitions.easing.sharp
	}),
	...(modeDrawer === 'hovered' && {
		top: '48px',
		height: '94vh'
	}),

	'& .MuiDrawer-paper': {
		position: 'relative',
		width: openDrawer ? DrawerWidthOpen : DrawerWidthClosed,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp
		}),
		height: '-webkit-fill-available',
		...(modeDrawer === 'hovered' && {
			height: '-webkit-fill-available'
		}),
		boxShadow: theme.effects.elevation[1].boxShadow,
		backdropFilter: theme.effects.elevation[1].backdropFilter,
		borderRadius: theme.dimensions.radius.xl,
		border: `0.5px solid ${theme.palette.sys_primary.outline.medium}`,
		backgroundColor: theme.palette.sys_primary.background.lowest
	}
}))

export default NavigationDrawerStyled
