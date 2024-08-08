import { CoorIconButton } from '@common/buttons'
import { Box, Tooltip, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'

interface Props {
	theme: Theme
	name: string
	disabled?: boolean
	actionName?: string
	actionType?: 'Add'
	onClick?: () => void
}
const Title = ({ theme, name, onClick, actionName, actionType, disabled }: Props) => {
	return (
		<Box
			padding={theme.dimensions.common.padding.lg}
			display={'flex'}
		>
			<Box flex={'1 0 0'}>
				<Typography
					color={theme.palette.sys_primary.on_surface.default}
					variant="sys.typo.st1"
					textTransform="uppercase"
				>
					{name}
				</Typography>
			</Box>

			{actionType === 'Add' && (
				<Tooltip
					title={actionName}
					sx={{ pointerEvents: disabled ? 'none' : 'initial' }}
				>
					<span>
						<CoorIconButton
							size="sm"
							iconName="add"
							onClick={onClick}
							intensity="lowest"
							color="main"
							disabled={disabled}
						/>
					</span>
				</Tooltip>
			)}
		</Box>
	)
}

export default Title
