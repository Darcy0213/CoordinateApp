import { useTheme } from '@mui/material/styles'
import { useMemo } from 'react'
import { SetterOrUpdater } from 'recoil'

import { DrawerStateType } from 'app/recoil/selectors'

import DrawerStyled from './DrawerStyled'
import { DrawerContent } from './drawer-content'

interface Props {
	setOpenWithHover: SetterOrUpdater<boolean | null>
	drawerProperties: DrawerStateType
}

const NavigationDrawer = ({ setOpenWithHover, drawerProperties }: Props) => {
	const theme = useTheme()

	// Define a function to handle drawer closing based on a new state
	const onCloseDrawer = (newState: boolean) => () => {
		// Update the open state with hover interaction
		setOpenWithHover(newState)
	}

	// Memoize the drawer content component for performance optimization
	const drawerContent = useMemo(() => <DrawerContent />, [])

	return (
		<DrawerStyled
			{...(drawerProperties.mode === 'hovered' && { onMouseLeave: onCloseDrawer(false) })}
			className="new-navigation-drawer"
			anchor="left"
			theme={theme}
			open={drawerProperties.open}
			variant={drawerProperties.mode === 'hovered' ? 'temporary' : 'persistent'}
			modeDrawer={drawerProperties.mode}
			openDrawer={drawerProperties.open}
			onClose={onCloseDrawer(false)}
			hideBackdrop
		>
			{drawerContent}
		</DrawerStyled>
	)
}

export default NavigationDrawer
