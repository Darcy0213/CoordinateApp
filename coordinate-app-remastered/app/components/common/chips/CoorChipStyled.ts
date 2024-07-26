import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Box } from '@mui/material'

interface Props {
	chipStyle: {
		fontColor: string
		backgroundColor: string
		paddingChip: string
		outline: string
		outlineOffset: string
		borderRadius: string
	}
}

const CoorChipStyled = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'chipStyle'
})(({ chipStyle }: Props) => {
	return css`
		padding: ${chipStyle.paddingChip};
		background: ${chipStyle.backgroundColor};
		outline: ${chipStyle.outline};
		outline-offset: ${chipStyle.outlineOffset};
		border-radius: ${chipStyle.borderRadius};
		height: fit-content;
		width: fit-content;
		display: flex;
		align-items: center;
		justify-content: center;
	`
})

export default CoorChipStyled
