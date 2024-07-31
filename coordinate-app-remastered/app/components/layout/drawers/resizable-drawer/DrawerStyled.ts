import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Drawer from '@mui/material/Drawer'
import { Theme } from '@mui/material/styles'

interface Props {
	theme: Theme
	drawerWidth: number
}

const ResizableDrawerStyled = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'theme' && prop !== 'drawerWidth' })(
	({ theme, drawerWidth }: Props) => css`
		flex-shrink: 0;
		width: ${drawerWidth}px;
		box-shadow: ${theme.effects.elevation[1].boxShadow};
		backdrop-filter: ${theme.effects.elevation[1].backdropFilter};
		border-radius: ${theme.dimensions.radius['2xl']};
		& .MuiDrawer-paper {
			position: relative;
			background: #fcfbff;
			width: ${drawerWidth}px;
			box-sizing: border-box;
			border-radius: ${theme.dimensions.radius['2xl']};
			background: ${theme.palette.surface.container_medium};
		}
	`
)
export default ResizableDrawerStyled
