'use client'
import IconGenerator from '@common/icons/IconGenerator'
import { useTheme } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import { color, customColor, intensity } from '../types'
import CoorIconButtonStyled from './CoorIconButtonStyled'
import { size } from './types'
import { calculateButtonStyle } from './utils'

interface CoorButtonProps {
	size: size
	color: color
	intensity: intensity
	customColor?: customColor
	iconName?: string
	iconLibrary?: 'MUI' | 'MDI'
	forceHover?: boolean
	active?: boolean
	onClick?: (() => void) | ((event: React.MouseEvent<HTMLButtonElement>) => void)
	disabled?: boolean
}
const CoorIconButton = ({
	size,
	color,
	intensity,
	iconName,
	onClick,
	disabled,
	active,
	forceHover,
	customColor,
	iconLibrary = 'MUI'
}: CoorButtonProps) => {
	const theme = useTheme() // Use Material-UI theme

	// Extract button dimensions from theme

	const iconDimensions = theme.dimensions.icon

	// State to manage hover effect
	const [hover, setHover] = useState(forceHover ? forceHover : false)

	// State to store dynamically calculated button styles
	const [buttonStyle, setButtonStyle] = useState({
		fontColor: '',
		backgroundColor: '',
		paddingButton: '',
		backdropFilter: '',
		outline: '',
		outlineOffset: '',
		borderRadius: ''
	})

	// Effect hook to update button style on state change like hover, active, theme
	useEffect(() => {
		// Calculate new style based on current props and state
		const newStyle = calculateButtonStyle(color, intensity, size, hover, active, theme, customColor)
		setButtonStyle(newStyle) // Update button style state
	}, [hover, active, theme])

	return (
		<CoorIconButtonStyled
			onClick={onClick}
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
		>
			{iconName && (
				<IconGenerator
					iconName={iconName}
					widthToken={iconDimensions.width[size] as string}
					heightToken={iconDimensions.height[size] as string}
					colorToken={disabled ? theme.palette.state.disabled : buttonStyle.fontColor}
					iconLibrary={iconLibrary}
				/>
			)}
		</CoorIconButtonStyled>
	)
}

export default CoorIconButton
