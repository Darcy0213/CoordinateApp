import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Box } from '@mui/material'

import { Theme } from '@mui/material/styles'

interface Props {
	theme: Theme
	drawerHovered: boolean
}

const CommonLayoutStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'theme' && prop !== 'hovered' })(
	({ theme, drawerHovered }: Props) => css`
		padding-top: ${theme.dimensions.screen.padding.default};
		padding-bottom: ${theme.dimensions.screen.padding.default};
		padding-right: ${theme.dimensions.screen.padding.default};
		padding-left: ${drawerHovered ? '0px' : theme.dimensions.screen.padding.default};
		display: flex;
		height: 100vh;
		background: ${theme.palette.sys_primary.background.lowest};
	`
)
export default CommonLayoutStyled
