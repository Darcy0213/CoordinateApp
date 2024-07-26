import { Typography, TypographyOwnProps } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CoorSmallChipStyled from './CoorSmallChipStyled'
import { SmallChipSize } from './types'

interface CoorSmallChipProps {
	size: SmallChipSize
	text: string | number
}

const CoorSmallChip = ({ size, text }: CoorSmallChipProps) => {
	const theme = useTheme()

	let typographyVariant: string = 'sys.typo.st1_semibold'
	switch (size) {
		case 'md':
			typographyVariant = 'sys.typo.st1'
			break
		case 'sm':
			typographyVariant = 'sys.typo.st2'
			break

		case 'xs':
			typographyVariant = 'sys.typo.st3'
			break
		default:
			typographyVariant = 'sys.typo.st1_semibold'
	}

	return (
		<CoorSmallChipStyled
			theme={theme}
			size={size}
		>
			<Typography
				sx={{ color: theme.palette.custom_palette.on_custom_palette.invert }}
				variant={typographyVariant as TypographyOwnProps['variant']}
			>
				{text}
			</Typography>
		</CoorSmallChipStyled>
	)
}
export default CoorSmallChip
