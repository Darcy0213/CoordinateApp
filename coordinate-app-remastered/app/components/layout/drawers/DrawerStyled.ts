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
		& .MuiDrawer-paper {
			position: relative;
			background: #fcfbff;
			width: ${drawerWidth}px;
			box-sizing: border-box;

			box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.15), 0px 1px 1.5px 0.5px rgba(0, 0, 0, 0.07);
		}
	`
)
export default ResizableDrawerStyled
