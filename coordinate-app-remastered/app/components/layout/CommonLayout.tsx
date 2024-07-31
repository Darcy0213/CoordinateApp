'use client'
import { useTheme } from '@mui/material'
import CommonLayoutStyled from './CommonLayoutStyled'
import { ResizableDrawer } from './drawers'
import { MainContainer } from './main-container'

interface Props {
	children: React.ReactNode
}

const CommonLayout: React.FC<Props> = ({ children }: Props) => {
	const theme = useTheme()
	return (
		<CommonLayoutStyled
			theme={theme}
			className={'CommonLayout'}
		>
			<MainContainer theme={theme}>{children}</MainContainer>
			<ResizableDrawer theme={theme} />
		</CommonLayoutStyled>
	)
}

export default CommonLayout
