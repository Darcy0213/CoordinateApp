import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Button from '@mui/material/Button'
import { Theme } from '@mui/material/styles'
import { createBackgroundWithOpacity } from '@utils/colorMethods'

interface Props {
	theme: Theme
	fontColor: string
	backgroundColor: string
	padding: string
	spacing: string
	backdropFilter: string
	outline: string
	outlineOffset: string
	borderRadius: string
	fullWidth?: boolean
}

const CoorButtonStyled = styled(Button, {
	shouldForwardProp: (prop) =>
		prop !== 'theme' &&
		prop !== 'fontColor' &&
		prop !== 'backgroundColor' &&
		prop !== 'padding' &&
		prop !== 'spacing' &&
		prop !== 'backdropFilter' &&
		prop !== 'outline' &&
		prop !== 'outlineOffset' &&
		prop !== 'borderRadius' &&
		prop !== 'fullWidth'
})(
	({ fullWidth, theme, fontColor, backgroundColor, padding, spacing, backdropFilter, outline, outlineOffset, borderRadius }: Props) => css`
		color: ${fontColor};
		padding: ${padding};
		text-transform: none;
		backdrop-filter: ${backdropFilter};
		background: ${backgroundColor};
		outline: ${outline};
		outline-offset: ${outlineOffset};
		border-radius: ${borderRadius};

		height: fit-content;
		min-width: fit-content;
		display: flex;
		width: ${fullWidth ? '-webkit-fill-available' : 'fit-content'};

		&:hover {
			color: ${fontColor};
			background: ${backgroundColor};
		}

		& .MuiButton-startIcon {
			margin-left: 0px;
			margin-right: ${spacing};
		}

		& .MuiButton-endIcon {
			margin-right: 0px;
			margin-left: ${spacing};
		}

		&:disabled {
			color: ${theme.palette.state.disable_on_surface};
			background: ${createBackgroundWithOpacity(theme.palette.main.surface_lowest.color, theme.palette.main.surface_lowest.opacity)};
			border: none;
			outline: none;
		}
	`
)

export default CoorButtonStyled
