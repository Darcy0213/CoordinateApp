import { Theme } from '@mui/material'
export function stringAvatar(
	name: string,
	color: any,
	palettePrimary?: string,
	width?: number | string,
	height?: number | string,
	fontSize?: string,
	theme?: Theme
) {
	return {
		sx: {
			bgcolor: color ? (color.includes('#') ? color : `#${color}`) : palettePrimary,
			color: 'white',
			width: width ? width : 26,
			height: height ? height : 26,
			fontSize: fontSize ? fontSize : '11px',
			border: name === '' ? `1px dashed ${theme?.palette.outline.main}` : 'none'
		},
		children: name.trim().includes(' ') ? `${name?.split(' ')[0][0]}${name?.split(' ')[1][0]}` : `${name[0]}`
	}
}

export function avatarAbbreviation(name: string) {
	return name.trim().includes(' ') ? `${name?.split(' ')[0][0]}${name?.split(' ')[1][0]}` : `${name[0]}`
}

export const getThemeColorByName = (color: string, theme: any) => {
	switch (color) {
		case 'primary':
			return theme.palette.primary.main
		case 'secondary':
			return theme.palette.secondary.main
		case 'error':
			return theme.palette.error.main
		case 'warning':
			return theme.palette.warning.main
		case 'success':
			return theme.palette.success.main
		default:
			return theme.palette.info.main
	}
}
