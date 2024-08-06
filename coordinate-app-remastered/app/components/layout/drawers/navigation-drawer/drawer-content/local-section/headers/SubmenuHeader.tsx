import { CoorIconChip } from '@common/chips'
import { style } from '@common/chips/types'
import { IconGenerator } from '@common/icons'
import { ChipColor } from '@globalTypes/general'
import { IconTypes } from '@globalTypes/icons'
import { Box, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'

interface Props {
	theme: Theme
	parentIconName: string
	color: ChipColor
	parentName: string
	icon: IconTypes
	name: string
	onClick?: () => void
}

const HeaderSubmenu = ({ theme, parentIconName, color, parentName, icon, name, onClick }: Props) => {
	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			padding={theme.dimensions.common.padding.lg}
			gap={theme.dimensions.common.spacing.lg}
		>
			<Box
				className="submenu_header_local_navigation"
				display={'flex'}
				flexDirection={'row'}
				gap={theme.dimensions.common.spacing.lg}
				alignItems={'center'}
				sx={{
					cursor: 'pointer',
					'&:hover': { backgroundColor: theme.palette.state.hover }
				}}
				onClick={onClick}
				borderRadius={theme.dimensions.radius.lg}
			>
				{parentIconName && (
					<CoorIconChip
						iconFromUser
						iconName={parentIconName as string}
						size="xs"
						color={color?.color}
						contrast={color?.contrast}
						variant={color?.variant as style}
					/>
				)}

				<Typography variant="sys.typo.st3">{parentName === '' ? 'Name' : parentName}</Typography>
			</Box>
			<Box
				display={'flex'}
				flexDirection={'row'}
				alignItems={'center'}
				gap={theme.dimensions.common.spacing.lg}
			>
				<IconGenerator
					colorToken={theme.palette.surface.on_surface_variant}
					iconName={icon}
					widthToken={theme.dimensions.common.width['2xl'] as string}
					heightToken={theme.dimensions.common.height['2xl'] as string}
				/>

				<Typography variant="sys.typo.t1">{name}</Typography>
			</Box>
		</Box>
	)
}

export default HeaderSubmenu
