'use client'
import { Box, useTheme } from '@mui/material'
import { OpenDrawerFromHover } from 'app/recoil/atoms'
import { DrawerState } from 'app/recoil/selectors'
import { usePathname } from 'next/navigation'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import CommonLayoutStyled from './CommonLayoutStyled'
import { NavigationDrawer, ResizableDrawer } from './drawers'
import { MainContainer } from './main-container'

const noLayoutNeeded = ['/login', '/register']

interface Props {
	children: React.ReactNode
}

const CommonLayout: React.FC<Props> = ({ children }: Props) => {
	const theme = useTheme()

	//Constans to manage the drawer state
	const setOpenDrawerFromHover = useSetRecoilState(OpenDrawerFromHover)
	const drawerProperties = useRecoilValue(DrawerState)
	const drawerClosed = !drawerProperties.open && drawerProperties.mode !== 'hovered'

	//Constans to check if the current path should use the layout
	const pathname = usePathname()
	const shouldUseLayout = !noLayoutNeeded.includes(pathname)

	return shouldUseLayout ? (
		<CommonLayoutStyled
			theme={theme}
			className={'CommonLayout'}
			drawerHovered={drawerClosed}
		>
			{/*Section to hover when navigation drawer is closed and to open it with hovered mode */}
			{drawerClosed && (
				<Box
					className="section_for_hover"
					height={'auto'}
					width={'11px'}
					sx={{ backgroundColor: theme.palette.sys_primary.background.lowest }}
					onMouseEnter={() => setOpenDrawerFromHover(true)}
				/>
			)}
			{/*Navigation Drawer*/}
			<NavigationDrawer
				drawerProperties={drawerProperties}
				setOpenWithHover={setOpenDrawerFromHover}
			/>

			{/*Main Container*/}
			<MainContainer
				theme={theme}
				drawerProperties={drawerProperties}
			>
				{children}
			</MainContainer>

			{/*Resizable Drawer*/}
			<ResizableDrawer theme={theme} />
		</CommonLayoutStyled>
	) : (
		<>{children}</>
	)
}

export default CommonLayout
