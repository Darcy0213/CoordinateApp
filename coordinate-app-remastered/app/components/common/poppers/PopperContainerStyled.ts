import { Box, styled, Theme } from '@mui/material'

interface Props {
	theme: Theme
	radiusTop?: boolean
}

const PopperContainerStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'theme' })<Props>(({ theme, radiusTop }: Props) => ({
	backgroundColor: 'rgba(255, 255, 255, 0.6)' /*PENDING TOKEN*/,
	backdropFilter: 'blur(37.5px)',
	border: `1px solid ${theme.palette.outline.variant}`,
	borderRadius: radiusTop ? `0px 0px ${theme.dimensions.radius.lg} ${theme.dimensions.radius.lg}` : theme.dimensions.radius.lg,
	padding: theme.dimensions.frame.padding.md,
	boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.15), 0px 2px 4px 0px rgba(0, 0, 0, 0.07)'
}))
export default PopperContainerStyled
