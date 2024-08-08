import { Theme } from '@mui/material/styles'
import { DrawerStateType } from 'app/recoil/selectors'
import MainContainerStyled from './MainContainerStyled'
import { MainHeader } from './header'

interface MainContainerProps {
	children: React.ReactNode
	theme: Theme
	drawerProperties: DrawerStateType
}

export const MainContainer = ({ children, theme, drawerProperties }: MainContainerProps) => {
	return (
		<MainContainerStyled
			className="main_container"
			theme={theme}
			drawerProperties={drawerProperties}
		>
			<MainHeader theme={theme} />

			{children}
		</MainContainerStyled>
	)
}
