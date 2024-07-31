import { IconGenerator } from '@common/icons'
import { Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

interface Props {
	name: string
	icon?: string
	color?: string
	active?: boolean
}

export default function SimpleIconItem({ name, active = false, icon, color }: Props) {
	const theme = useTheme()

	return (
		<Stack
			direction="row"
			display="flex"
			alignItems="center"
			justifyContent={'space-between'}
			sx={{ width: '100%' }}
		>
			<Stack
				direction="row"
				display="flex"
				alignItems="center"
				spacing={theme.dimensions.frame.spacing.sm}
			>
				{icon && (
					<IconGenerator
						colorToken={color ? color : theme.palette.surface.on_surface}
						iconName={icon as string}
						heightToken={theme.dimensions.icon.width.sm}
						widthToken={theme.dimensions.icon.width.sm}
					/>
				)}
				<Typography
					variant="sys.typo.st1"
					color={color ? color : theme.palette.surface.on_surface}
				>
					{name}
				</Typography>
			</Stack>
			{active && (
				<IconGenerator
					colorToken={theme.palette.surface.on_surface}
					widthToken={theme.dimensions.icon.width.md}
					heightToken={theme.dimensions.icon.height.md}
					iconName="Check"
				/>
			)}
		</Stack>
	)
}
