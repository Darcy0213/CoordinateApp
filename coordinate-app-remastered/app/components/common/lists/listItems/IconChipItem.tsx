import { CoorLargeChip } from '@common/chips'
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

export default function IconChipItem({ name, color, icon, active = false }: Props) {
	const theme = useTheme()
	return (
		<Stack
			direction="row"
			display="flex"
			alignItems="center"
			justifyContent={'space-between'}
			sx={{ width: '100%' }}
			spacing={theme.dimensions.frame.spacing.sm}
		>
			<CoorLargeChip
				size="xs"
				contrast={color?.contrast ? color?.contrast : 'high'}
				color={color?.color ? color?.color : 'blue'}
				iconName={icon ?? 'help'}
				variant={(color?.variant ? color?.variant : '100%') as style}
				text={name}
			/>

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
