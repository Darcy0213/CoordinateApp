'use client'
import { Box, useTheme } from '@mui/material'
import { ResizableDrawer } from './drawers/Drawer'

interface Props {
	children: React.ReactNode
}

const CommonLayout: React.FC<Props> = ({ children }: Props) => {
	const theme = useTheme()
	return (
		<Box
			className={'CommonLayout'}
			sx={{ background: '#FCFBFF' }}
			gap={'8px'}
			display={'flex'}
			padding={'8px'}
			height={'100vh'}
		>
			<Box
				className={'MainContent'}
				flexDirection={'column'}
				display={'flex'}
				width={'-webkit-fill-available'}
				height={'-webkit-fill-available'}
				boxShadow={'0px 1px 1px 0px rgba(0, 0, 0, 0.15), 0px 1px 1.5px 0.5px rgba(0, 0, 0, 0.07)'}
			>
				<Box
					display={'flex'}
					className="header"
					padding={`${theme.dimensions.frame.padding.sm} ${theme.dimensions.frame.padding.lg}`}
				>
					Header
				</Box>
				{children}
			</Box>
			<ResizableDrawer />
		</Box>
	)
}

export default CommonLayout
