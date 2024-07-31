import { Box, styled, Theme } from '@mui/material'

interface Props {
	theme: Theme
	active: boolean
}

const CategoryChipStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'theme' })(({ theme, active }: Props) => ({
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'row',
	alignItems: 'center',
	cursor: 'pointer',
	gap: theme.dimensions.common.spacing.sm,
	padding: theme.dimensions.common.padding.md,
	width: 'max-content',
	color: `${active ? theme.palette.surface.on_surface : theme.palette.surface.on_surface_variant}!important`,
	'&:hover': {
		cursor: 'pointer',
		background: !active ? theme.palette.state.hover : '',
		zIndex: 100,
		color: `${theme.palette.surface.on_surface}!important`
	}
}))
export default CategoryChipStyled
