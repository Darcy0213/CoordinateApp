import { CustomAvatar } from '@common/avatars'
import { CoorIconButton } from '@common/buttons'
import { CoorIconChip } from '@common/chips'
import { color, contrast, style } from '@common/chips/types'
import { ChipColor } from '@globalTypes/general'
import { Box, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'

interface Props {
	theme: Theme
	name: string
	image: string
	iconName: string
	color: ChipColor
	onClick?: () => void
}
const HeaderStructure = ({ theme, name, image, color, iconName, onClick }: Props) => {
	return (
		<Box
			className="header_local_navigation"
			display={'flex'}
			flexDirection={'row'}
			gap={theme.dimensions.common.spacing.lg}
			padding={theme.dimensions.common.padding.lg}
			alignItems={'center'}
			borderRadius={theme.dimensions.radius.lg}
			sx={{
				'&:hover': { backgroundColor: theme.palette.state.hover }
			}}
		>
			{/* Avatar or Icon and name section */}
			<Box
				onClick={onClick}
				sx={{ cursor: 'pointer' }}
				flex={'1 0 0'}
				flexDirection={'row'}
				display={'flex'}
				gap={theme.dimensions.common.spacing.lg}
				alignItems={'center'}
			>
				{image && (
					<CustomAvatar
						size="md"
						name={name}
						image={image}
						color={color}
					/>
				)}
				{iconName && (
					<CoorIconChip
						iconFromUser
						iconName={iconName as string}
						size="md"
						color={color?.color as color}
						contrast={color?.contrast as contrast}
						variant={color?.variant as style}
					/>
				)}

				<Typography
					sx={{ color: theme.palette.sys_primary.on_surface.default }}
					variant="sys.typo.t1"
				>
					{name === '' ? 'Name' : name}
				</Typography>
			</Box>
			{/* meatball menu */}

			<CoorIconButton
				onClick={() => {}}
				intensity="lowest"
				color="main"
				iconName="kebabMenu"
				size="sm"
			/>
		</Box>
	)
}

export default HeaderStructure
