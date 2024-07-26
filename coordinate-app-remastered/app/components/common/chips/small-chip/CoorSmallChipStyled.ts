import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { SmallChipSize } from './types'

interface Props {
	theme: Theme
	size: SmallChipSize
}

const CoorSmallChipStyled = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'theme' && prop !== 'size'
})(({ theme, size }: Props) => {
	return css`
		padding: ${theme.dimensions.buttonChip.padding[size]} ${theme.dimensions.buttonChip.padding_non_side?.[size]};
		background: ${theme.palette.custom_palette.gray.softest.normal};
		justify-content: center;
		width: fit-content;
		height: fit-content;
		display: inline-flex;
		border-radius: ${theme.dimensions.radius[size]};
	`
})

export default CoorSmallChipStyled
