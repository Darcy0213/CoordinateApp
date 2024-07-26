import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { IconButton, Theme } from '@mui/material'

interface Props {
	theme: Theme
	fontColor: string
	backgroundColor: string
	padding: string
	backdropFilter: string
	outline: string
	outlineOffset: string
	borderRadius: string
}

const CoorIconButtonStyled = styled(IconButton, {
	shouldForwardProp: (prop) =>
		prop !== 'theme' &&
		prop !== 'fontColor' &&
		prop !== 'backgroundColor' &&
		prop !== 'padding' &&
		prop !== 'backdropFilter' &&
		prop !== 'outline' &&
		prop !== 'outlineOffset' &&
		prop !== 'borderRadius'
})(
	({ theme, fontColor, backgroundColor, padding, backdropFilter, outline, outlineOffset, borderRadius }: Props) => css`
		color: ${fontColor};
		padding: ${padding};
		text-transform: none;
		backdrop-filter: ${backdropFilter};
		background: ${backgroundColor};
		outline: ${outline};
		outline-offset: ${outlineOffset};
		border-radius: ${borderRadius};
		height: fit-content;
		width: fit-content;
		&:hover {
			color: ${fontColor};
			background: ${backgroundColor};
		}

		&:disabled {
			color: ${theme.palette.state.disabled};
			background: ${theme.palette.main.surface_lowest};
			border: none;
			outline: none;
		}
	`
)
export default CoorIconButtonStyled
