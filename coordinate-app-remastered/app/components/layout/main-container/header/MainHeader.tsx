import { Box, Theme } from '@mui/material'
import HeaderContent from './HeaderContent'

interface MainHeaderProps {
	theme: Theme
}

const MainHeader: React.FC<MainHeaderProps> = ({ theme }) => {
	return (
		<Box padding={theme.dimensions.frame.padding.md}>
			<HeaderContent theme={theme} />
		</Box>
	)
}

export default MainHeader
