import { Theme } from '@mui/material/styles'
import MainContainerStyled from './MainContainerStyled'
import { MainHeader } from './header'

interface MainContainerProps {
	children: React.ReactNode
	theme: Theme
}

export const MainContainer = ({ children, theme }: MainContainerProps) => {
	return (
		<MainContainerStyled
			className="main_container"
			theme={theme}
		>
			<MainHeader theme={theme} />

			{children}
		</MainContainerStyled>
	)
}
