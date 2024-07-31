import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Box } from '@mui/material'

import { Theme } from '@mui/material/styles'

interface Props {
	theme: Theme
}

const CommonLayoutStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'theme' })(
	({ theme }: Props) => css`
		gap: ${theme.dimensions.screen.spacing.default};
		padding: ${theme.dimensions.screen.padding.default};
		display: flex;
		height: 100vh;
		background: ${theme.palette.surface.container_low};
	`
)
export default CommonLayoutStyled
