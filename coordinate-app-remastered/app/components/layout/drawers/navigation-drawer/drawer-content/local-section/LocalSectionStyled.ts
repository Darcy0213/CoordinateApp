import { Box } from '@mui/material'
import { Theme, styled } from '@mui/material/styles'

// ==============================|| PIN BUTTON - STYLED ||============================== //

interface Props {
	theme: Theme
}

const LocalSectionStyled = styled(Box)(({ theme }: Props) => ({
	flexDirection: 'column',
	display: 'flex',
	padding: theme.dimensions.common.padding.sm,
	backgroundColor: theme.palette.sys_primary.background.low,
	backdropFilter: theme.effects.elevation[1].backdropFilter,
	boxShadow: theme.effects.elevation[1].boxShadow,
	borderRadius: theme.dimensions.radius.md,
	width: '100%',
	height: 'auto',
	overflowY: 'auto'
}))

export default LocalSectionStyled
