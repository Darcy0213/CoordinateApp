import { ChipColor } from '@globalTypes/general'
import { Avatar, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { avatarAbbreviation, getThemeColorByName } from '@utils/avatarMethods'

interface Props {
	name: string
	color?: string | ChipColor
	image?: string
	size?: 'lg' | 'md' | 'sm' | 'xs' //h1: large, h2: medium, t2: small
	hoverPointer?: boolean
}

export default function CustomAvatar({ name, color, image, size = 'md', hoverPointer = false }: Props) {
	//MUI active theme
	const theme = useTheme()
	let width
	let height

	if (size === 'lg') {
		width = '24px' // /*PEDING TOKEN*/
		height = '24px' // /*PEDING TOKEN*/
	} else if (size === 'md') {
		width = theme.dimensions.avatar.width.md
		height = theme.dimensions.avatar.height.md
	} else if (size === 'sm') {
		width = theme.dimensions.avatar.width.sm
		height = theme.dimensions.avatar.height.sm
	} else if (size === 'xs') {
		width = theme.dimensions.avatar.width.xs
		height = theme.dimensions.avatar.height.xs
	}

	const typographyVariant = size === 'md' ? 'sys.typo.h5' : size === 'sm' ? 'sys.typo.t2' : 'sys.typo.st3'

	return image ? (
		<Avatar
			alt={name}
			src={image.includes('http') ? image : `https://buckettestjiggenhljchokygg.s3.amazonaws.com/Images/${image}`}
			sx={{
				width: width,
				height: height,
				bgcolor: color ? `#${color}` : getThemeColorByName('primary', theme),
				color: 'white',
				'&:hover': {
					cursor: hoverPointer ? 'pointer!important' : 'default!important'
				}
			}}
		>
			<Typography variant={typographyVariant}>{avatarAbbreviation(name)}</Typography>
		</Avatar>
	) : (
		<Avatar
			className="MuiAvatar-root"
			sx={{
				width: width,
				height: height,
				bgcolor: color ? `#${color}` : getThemeColorByName('primary', theme),
				color: 'white',
				'&:hover': {
					cursor: hoverPointer ? 'pointer!important' : 'default!important'
				}
			}}
		>
			<Typography variant={typographyVariant}>{avatarAbbreviation(name)}</Typography>
		</Avatar>
	)
}
