'use client'
import { IconGenerator } from '@common/icons'
import { CategoryType } from '@common/selects'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { CoorSmallChip } from '../small-chip'
import CategoryChipStyled from './CategoryChipStyled'

interface Props {
	category: CategoryType
	active?: boolean
	onClick?: (item: string) => void
	numberOfItems?: number
}

export default function CategoryChip({ category, active = false, onClick = () => {}, numberOfItems }: Props) {
	const theme = useTheme()

	return (
		<CategoryChipStyled
			onClick={(e) => onClick(category.name)}
			theme={theme}
			active={active}
		>
			{category.icon && (
				<IconGenerator
					colorToken={active ? theme.palette.surface.on_surface : theme.palette.surface.on_surface_variant}
					iconName={category?.icon as string}
					heightToken={theme.dimensions.common.width.sm}
					widthToken={theme.dimensions.common.width.sm}
				/>
			)}
			<Typography
				variant={active ? 'sys.typo.st1_semibold' : 'sys.typo.st1'}
				sx={{ textTransform: 'capitalize' }}
			>
				{category.name}
			</Typography>

			<CoorSmallChip
				size={'xs'}
				text={numberOfItems ? numberOfItems : category?.options?.length}
			/>
		</CategoryChipStyled>
	)
}
