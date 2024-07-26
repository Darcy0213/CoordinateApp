'use client'

import { IconGenerator } from '@common/icons'
import { Typography, TypographyOwnProps } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import { ButtonStyle, color, customColor, intensity } from '../types'
import CoorButtonStyled from './CoorButtonStyled'
import { size } from './types'
import { calculateButtonStyle } from './utils'

interface CoorButtonProps {
	label: string
	size: size
	color: color
	intensity: intensity
	customColor?: customColor
	iconPosition?: 'start' | 'end'
	iconName?: string
	forceHover?: boolean
	active?: boolean
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined | (() => void)
	fullWidth?: boolean
	disabled?: boolean
}

const CoorButton = ({
	label,
	size,
	color,
	intensity,
	iconPosition,
	iconName,
	onClick,
	fullWidth,
	disabled,
	active,
	forceHover,
	customColor
}: CoorButtonProps) => {
	const theme = useTheme()
	// Extract  dimension values from the theme
	const iconDimension = theme.dimensions.icon
	// State for managing hover effect
	const [hover, setHover] = useState(forceHover ? forceHover : false)
	// State for dynamic button styles calculated based on props
	const [buttonStyle, setButtonStyle] = useState<ButtonStyle>({
		fontColor: theme.palette.surface.container,
		backgroundColor: '',
		paddingButton: '',
		backdropFilter: '',
		outline: '',
		outlineOffset: '',
		borderRadius: '',
		spacingButton: ''
	})
	// Effect hook to update button styles based on dependencies based on hover, active, theme changes
	useEffect(() => {
		const newStyle = calculateButtonStyle(color, intensity, size, hover, active, theme, customColor)
		setButtonStyle(newStyle)
	}, [hover, active, theme, color, intensity, size, disabled, customColor])
	// Render the styled button with conditional props for icon positioning

	let typographyVariant: string = 'sys.typo.st1_semibold'

	switch (size) {
		case 'xl':
			typographyVariant = 'sys.typo.h4'
			break
		case 'lg':
			typographyVariant = 'sys.typo.t1'
			break
		case 'md':
			typographyVariant = 'sys.typo.st1_semibold'
			break
		case 'xs':
			typographyVariant = 'sys.typo.st3'
			break
		default:
			typographyVariant = 'sys.typo.st1_semibold'
	}

	return (
		<CoorButtonStyled
			disableTouchRipple
			disableFocusRipple
			disableRipple
			onClick={onClick}
			spacing={buttonStyle.spacingButton as string}
			padding={buttonStyle.paddingButton}
			backdropFilter={buttonStyle.backdropFilter}
			outline={buttonStyle.outline}
			outlineOffset={buttonStyle.outlineOffset}
			borderRadius={buttonStyle.borderRadius}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			fontColor={buttonStyle.fontColor as string}
			backgroundColor={buttonStyle.backgroundColor as string}
			theme={theme}
			disabled={disabled}
			fullWidth={fullWidth}
			{...(iconPosition &&
				iconPosition === 'start' &&
				iconName && {
					startIcon: (
						<IconGenerator
							iconName={iconName}
							widthToken={iconDimension.width[size] as string}
							heightToken={iconDimension.height[size] as string}
							colorToken={disabled ? theme.palette.state.disabled : buttonStyle.fontColor}
						/>
					)
				})}
			{...(iconPosition &&
				iconPosition === 'end' &&
				iconName && {
					endIcon: (
						<IconGenerator
							iconName={iconName}
							widthToken={iconDimension.width[size] as string}
							heightToken={iconDimension.height[size] as string}
							colorToken={disabled ? theme.palette.state.disabled : buttonStyle.fontColor}
						/>
					)
				})}
		>
			<Typography
				sx={{ fontWeight: '400' }}
				variant={typographyVariant as TypographyOwnProps['variant']}
			>
				{label}
			</Typography>
		</CoorButtonStyled>
	)
}

export default CoorButton
