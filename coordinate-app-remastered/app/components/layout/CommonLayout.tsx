'use client'
import { Box, useTheme } from '@mui/material'
import { OpenDrawerFromHover, OpenDrawerFromTopbar } from 'app/recoil/atoms'
import { DrawerState } from 'app/recoil/selectors'
import { usePathname } from 'next/navigation'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import CommonLayoutStyled from './CommonLayoutStyled'
import { ResizableDrawer } from './drawers'
import NavigationDrawer from './drawers/navigation-drawer/Drawer'
import { MainContainer } from './main-container'

interface Props {
	children: React.ReactNode
}

const noLayoutNeeded = ['/login', '/register']

const CommonLayout: React.FC<Props> = ({ children }: Props) => {
	const theme = useTheme()
	const setOpenDrawerFromHover = useSetRecoilState(OpenDrawerFromHover)
	const openDrawerFromTopbar = useRecoilValue(OpenDrawerFromTopbar)
	const drawerProperties = useRecoilValue(DrawerState)

	const pathname = usePathname()
	const shouldUseLayout = !noLayoutNeeded.includes(pathname)
	return shouldUseLayout ? (
		<CommonLayoutStyled
			theme={theme}
			className={'CommonLayout'}
		>
			{!openDrawerFromTopbar && drawerProperties.mode !== 'hovered' && (
				<Box
					className="section_for_hover"
					height={'auto'}
					width={'8px'}
					sx={{ backgroundColor: theme.palette.surface.container_lowest }}
					onMouseEnter={() => setOpenDrawerFromHover(true)}
				/>
			)}
			<NavigationDrawer setOpenWithHover={setOpenDrawerFromHover} />
			<MainContainer theme={theme}>{children}</MainContainer>
			<ResizableDrawer theme={theme} />
		</CommonLayoutStyled>
	) : (
		<>{children}</>
	)
}

export default CommonLayout
