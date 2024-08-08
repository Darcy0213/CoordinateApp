import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Box } from '@mui/material'

import { Theme } from '@mui/material/styles'
import { DrawerStateType } from 'app/recoil/selectors'

interface Props {
	theme: Theme
	drawerProperties: DrawerStateType
}

const MainContainerStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'theme' && prop !== 'drawerClosed' })(
	({ theme, drawerProperties }: Props) => css`
		flex-direction: column;
		display: flex;
		width: -webkit-fill-available;
		height: -webkit-fill-available;
		border-radius: ${theme.dimensions.radius['xl']};
		box-shadow: ${theme.effects.elevation[1].boxShadow};
		backdrop-filter: ${theme.effects.elevation[1].backdropFilter};
		border: 0.5px solid ${theme.palette.sys_primary.outline.medium};
		margin-left: ${!drawerProperties.open || drawerProperties.mode === 'hovered' ? '0px' : theme.dimensions.screen.padding.default};
		margin-right: ${theme.dimensions.screen.padding.default};
	`
)
export default MainContainerStyled
