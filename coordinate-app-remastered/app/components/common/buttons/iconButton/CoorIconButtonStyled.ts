import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { IconButton, Theme } from '@mui/material'
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
}

const CoorIconButtonStyled = styled(IconButton, {
	shouldForwardProp: (prop) =>
		prop !== 'theme' &&
		prop !== 'fontColor' &&
		prop !== 'backgroundColor' &&
		prop !== 'padding' &&
		prop !== 'spacing' &&
		prop !== 'backdropFilter' &&
		prop !== 'outline' &&
		prop !== 'outlineOffset' &&
		prop !== 'borderRadius'
})(
	({ theme, fontColor, backgroundColor, padding, spacing, backdropFilter, outline, outlineOffset, borderRadius }: Props) => css` 
    color: ${fontColor},
    padding: ${padding},
    textTransform: "none",
    backdropFilter: ${backdropFilter},
    background:${backgroundColor},
    outline: ${outline},
    outlineOffset: ${outlineOffset},
    borderRadius: ${borderRadius},
    height: "fit-content",
    width: "fit-content",
    ":hover": {
      color: ${fontColor},
      background: ${backgroundColor},
    },

    "&:disabled": {
      color: ${theme.palette.state.disable_on_surface},
      background: ${createBackgroundWithOpacity(theme.palette.main.surface_lowest.color, theme.palette.main.surface_lowest.opacity)},
      border: "none",
      outline: "none",
    },
  `
)
export default CoorIconButtonStyled
