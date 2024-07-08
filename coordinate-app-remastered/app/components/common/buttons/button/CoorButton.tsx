'use client'

import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { useEffect, useState } from 'react'

import IconGenerator from '@components/common/Icons/IconGenerator'
import { IconTypes } from '@components/common/Icons/types'
import { color, customColor, intensity } from '../types'
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
	iconName?: IconTypes | string
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
	// Extract spacing and dimension values from the theme
	const spacingButton = theme.dimensions.element.spacing
	const elementDimension = theme.dimensions.element
	// State for managing hover effect
	const [hover, setHover] = useState(forceHover ? forceHover : false)
	// State for dynamic button styles calculated based on props
	const [buttonStyle, setButtonStyle] = useState({
		fontColor: theme.palette.surface.on_surface_invert,
		backgroundColor: '',
		paddingButton: '',
		backdropFilter: '',
		outline: '',
		outlineOffset: '',
		borderRadius: ''
	})
	// Effect hook to update button styles based on dependencies based on hover, active, theme changes
	useEffect(() => {
		const newStyle = calculateButtonStyle(color, intensity, size, hover, active, theme, customColor)
		setButtonStyle(newStyle)
	}, [hover, active, theme, color, intensity, size, disabled, customColor])
	// Render the styled button with conditional props for icon positioning

	return (
		<CoorButtonStyled
			disableTouchRipple
			disableFocusRipple
			disableRipple
			onClick={onClick}
			spacing={spacingButton[size]}
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
							widthToken={elementDimension.width[size]}
							heightToken={elementDimension.height[size]}
							colorToken={disabled ? theme.palette.state.disable_on_surface : buttonStyle.fontColor}
						/>
					)
				})}
			{...(iconPosition &&
				iconPosition === 'end' &&
				iconName && {
					endIcon: (
						<IconGenerator
							iconName={iconName}
							widthToken={elementDimension.width[size]}
							heightToken={elementDimension.height[size]}
							colorToken={disabled ? theme.palette.state.disable_on_surface : buttonStyle.fontColor}
						/>
					)
				})}
		>
			<Typography
				sx={{ fontWeight: '400' }}
				variant={size !== 'st1' ? `sys.typo.${size}` : 'sys.typo.st1_semibold'}
			>
				{label}
			</Typography>
		</CoorButtonStyled>
	)
}

export default CoorButton
