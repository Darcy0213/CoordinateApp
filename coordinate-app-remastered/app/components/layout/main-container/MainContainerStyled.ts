import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Box } from '@mui/material'

import { Theme } from '@mui/material/styles'

interface Props {
	theme: Theme
}

const MainContainerStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'theme' })(
	({ theme }: Props) => css`
		flex-direction: column;
		display: flex;
		width: -webkit-fill-available;
		height: -webkit-fill-available;
		border-radius: ${theme.dimensions.radius['xl']};
		box-shadow: ${theme.effects.elevation[1].boxShadow};
		backdrop-filter: ${theme.effects.elevation[1].backdropFilter};
	`
)
export default MainContainerStyled
