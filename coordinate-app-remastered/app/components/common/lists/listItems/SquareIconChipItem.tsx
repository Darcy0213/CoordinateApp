import { CoorInstanceChip } from '@common/chips'
import { style } from '@common/chips/types'
import { IconGenerator } from '@common/icons'
import { ChipColor } from '@globalTypes/general'
import { Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'

interface Props {
	name: string
	color?: ChipColor
	icon?: string
	active?: boolean
}

export default function SquareIconChipItem({ name, color, icon, active = false }: Props) {
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
				gap={'4px' /*PENDING TOKEN*/ /* theme.dimensions.element.spacing.st1 */}
			>
				<CoorInstanceChip
					size="xs"
					contrast={color?.contrast ? color?.contrast : 'high'}
					color={color?.color ? color?.color : 'blue'}
					iconName={icon ?? 'help'}
					variant={(color?.variant ? color?.variant : '100%') as style}
					text={name}
				/>
			</Stack>
			{active && (
				<IconGenerator
					colorToken={theme.palette.surface.on_surface}
					widthToken={theme.dimensions.common.width.md}
					heightToken={theme.dimensions.common.height.md}
					iconName="Check"
				/>
			)}
		</Stack>
	)
}
