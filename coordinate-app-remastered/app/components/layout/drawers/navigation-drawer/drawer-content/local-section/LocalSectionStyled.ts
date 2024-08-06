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
	backgroundColor: 'rgba(252, 251, 255, 0.75)',
	backdropFilter: 'blur(37.5px)',
	boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.15), 0px 2px 4px 0px rgba(0, 0, 0, 0.07)',
	borderRadius: theme.dimensions.radius.md,
	width: '100%',
	height: 'auto',
	overflowY: 'auto'
}))

export default LocalSectionStyled
