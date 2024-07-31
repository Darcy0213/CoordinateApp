import { Theme } from '@mui/material/styles'
import { ChipStyle, color, contrast, largeChipSize, style } from './types'

export function calculateChipStyle(
	color: color,
	contrast: contrast,
	style: style,
	theme: Theme,
	size: largeChipSize,
	isIconOnly: boolean = false // Assuming false as default for backward compatibility
): ChipStyle {
	// Generates the background color, font color, outline color, and outline offset based on theme and input parameters.
	const { backgroundColor, fontColor, outline, outlineOffset } = generateColorStyles(theme, color, contrast, style)

	// Determines the border radius from the theme based on the size input.
	const radius = theme.dimensions.radius
	const borderRadius: string = size === '7xl' ? (radius['4xl'] as string) : (radius[size] as string)

	let paddingChip: string
	const dimensions = theme.dimensions.buttonChip

	if (isIconOnly) {
		// Calculates the padding for the chip icon button based on the size; uses a default if specific size isn't found.
		// This branch is for icon-only chips.
		paddingChip = size === 'sm' ? (dimensions.padding['2sm'] as string) : dimensions.padding[size] || ''
	} else {
		// Calculates padding based on size; uses a default if specific size isn't found.
		// This branch is for chips with text.
		const padding = dimensions.padding[size] || ''
		const paddingNonIconSide = dimensions.padding_non_side?.[size] || padding
		paddingChip = `${padding} ${paddingNonIconSide} ${padding} ${padding}`
	}

	// Returns the calculated style properties for the chip.
	return { backgroundColor, fontColor, outline, outlineOffset, borderRadius, paddingChip }
}

export function generateColorStyles(theme: Theme, color: color, contrast: contrast, style: style) {
	let backgroundColor: string = ''
	let fontColor: string = ''
	let outline: string = ''
	let outlineOffset: string = ''
	if (color === 'blue') {
		if (contrast === 'softest') {
			backgroundColor = '#CCE0FF'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'soft') {
			backgroundColor = '#84B8FF'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'lowest') {
			backgroundColor = '#579DFF'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'low') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(56, 139, 255, 0.30)'
					fontColor = '#000000'
					outline = `1px solid #388BFF`
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#00000'
					outline = `1px solid #388BFF`
					outlineOffset = '-1px'
					break

				case '30%':
					backgroundColor = 'rgba(56, 139, 255, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'

					break
				case '100%':
					backgroundColor = '#388BFF'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		} else if (contrast === 'intermediate') {
			backgroundColor = '#0C66E4'
			fontColor = '#FFFFFF'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'medium') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(0, 85, 204, 0.30)'
					fontColor = '#000000'
					outline = `1px solid #05C`
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#000000'
					outline = `1px solid #05C`
					outlineOffset = '-1px'
					break
				case '30%':
					backgroundColor = 'rgba(0, 85, 204, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'

					break
				case '100%':
					backgroundColor = '#05C'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		} else if (contrast === 'high') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(9, 50, 108, 0.30)'
					fontColor = '#000000'
					outline = `1px solid #09326C`
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#000000'
					outline = `1px solid #09326C`
					outlineOffset = '-1px'
					break

				case '30%':
					backgroundColor = 'rgba(9, 50, 108, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'
					break

				case '100%':
					backgroundColor = '#09326C'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		}
	}
	if (color === 'cyan') {
		if (contrast === 'softest') {
			backgroundColor = '#C1F0F5'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'soft') {
			backgroundColor = '#8BDBE5'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'lowest') {
			backgroundColor = '#60C6D2'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'low') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(29, 154, 170, 0.30)'
					fontColor = '#000000'
					outline = `1px solid #1D9AAA`
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#00000'
					outline = `1px solid #1D9AAA`
					outlineOffset = '-1px'
					break

				case '30%':
					backgroundColor = 'rgba(29, 154, 170, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'

					break
				case '100%':
					backgroundColor = '#1D9AAA'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		} else if (contrast === 'intermediate') {
			backgroundColor = '#1D7F8C'
			fontColor = '#FFFFFF'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'medium') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(32, 107, 116, 0.30)'
					fontColor = '#000000'
					outline = `1px solid #206B74`
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#000000'
					outline = `1px solid #206B74`
					outlineOffset = '-1px'
					break
				case '30%':
					backgroundColor = 'rgba(32, 107, 116, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'

					break
				case '100%':
					backgroundColor = '#206B74'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		} else if (contrast === 'high') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(20, 71, 76, 0.30)'
					fontColor = '#000000'
					outline = `1px solid #1D474C`
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#000000'
					outline = `1px solid #1D474C`
					outlineOffset = '-1px'
					break

				case '30%':
					backgroundColor = 'rgba(20, 71, 76, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'
					break

				case '100%':
					backgroundColor = '#1D474C'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		}
	}
	if (color === 'lime') {
		if (contrast === 'softest') {
			backgroundColor = '#D3F1A7'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'soft') {
			backgroundColor = '#B3DF72'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'lowest') {
			backgroundColor = '#94C748'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'low') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(102, 146, 35, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #669223'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#00000'
					outline = '1px solid #669223'
					outlineOffset = '-1px'
					break

				case '30%':
					backgroundColor = 'rgba(102, 146, 35, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'

					break
				case '100%':
					backgroundColor = '#669223'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		} else if (contrast === 'intermediate') {
			backgroundColor = '#5B7F24'
			fontColor = '#FFFFFF'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'medium') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(76, 107, 31, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #4C6B1F'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#000000'
					outline = '1px solid #4C6B1F'
					outlineOffset = '-1px'
					break
				case '30%':
					backgroundColor = 'rgba(76, 107, 31, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'

					break
				case '100%':
					backgroundColor = '#4C6B1F'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		}
		if (contrast === 'high') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(55, 71, 31, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #37471F'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#000000'
					outline = '1px solid #37471F'
					outlineOffset = '-1px'
					break

				case '30%':
					backgroundColor = 'rgba(55, 71, 31, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'
					break

				case '100%':
					backgroundColor = '#37471F'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		}
	}
	if (color === 'green') {
		if (contrast === 'softest') {
			backgroundColor = '#BAF3DB'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'soft') {
			backgroundColor = '#7EE2B8'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'lowest') {
			backgroundColor = '#4BCE97'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'low') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(34, 160, 107, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #22A06B'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#00000'
					outline = '1px solid #22A06B'
					outlineOffset = '-1px'
					break

				case '30%':
					backgroundColor = 'rgba(34, 160, 107, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'

					break
				case '100%':
					backgroundColor = '#22A06B'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		} else if (contrast === 'intermediate') {
			backgroundColor = '#1F845A'
			fontColor = '#FFFFFF'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'medium') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(33, 110, 78, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #216E4E'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#000000'
					outline = '1px solid #216E4E'
					outlineOffset = '-1px'
					break
				case '30%':
					backgroundColor = 'rgba(33, 110, 78, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'

					break
				case '100%':
					backgroundColor = '#216E4E'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		} else if (contrast === 'high') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(22, 75, 53, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #164B35'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#000000'
					outline = '1px solid #164B35'
					outlineOffset = '-1px'
					break

				case '30%':
					backgroundColor = 'rgba(22, 75, 53, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'
					break

				case '100%':
					backgroundColor = '#164B35'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		}
	}
	if (color === 'yellow') {
		if (contrast === 'softest') {
			backgroundColor = '#F8E6A0'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'soft') {
			backgroundColor = '#F5CD47'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'lowest') {
			backgroundColor = '#E2B203'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'low') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(179, 134, 0, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #B38600'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#00000'
					outline = '1px solid #B38600'
					outlineOffset = '-1px'
					break

				case '30%':
					backgroundColor = 'rgba(179, 134, 0, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'

					break
				case '100%':
					backgroundColor = '#B38600'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		} else if (contrast === 'intermediate') {
			backgroundColor = '#946F00'
			fontColor = '#FFFFFF'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'medium') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(127, 95, 1, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #7F5F01'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#000000'
					outline = '1px solid #7F5F01'
					outlineOffset = '-1px'
					break
				case '30%':
					backgroundColor = 'rgba(127, 95, 1, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'

					break
				case '100%':
					backgroundColor = '#7F5F01'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		} else if (contrast === 'high') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(83, 63, 4, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #533F04'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#000000'
					outline = '1px solid #533F04'
					outlineOffset = '-1px'
					break

				case '30%':
					backgroundColor = 'rgba(83, 63, 4, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'
					break

				case '100%':
					backgroundColor = '#533F04'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		}
	}
	if (color === 'orange') {
		if (contrast === 'softest') {
			backgroundColor = '#FFE2BD'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'soft') {
			backgroundColor = '#FEC57B'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'lowest') {
			backgroundColor = '#FAA53D'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'low') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(217, 112, 8, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #D97008'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#00000'
					outline = '1px solid #D97008'
					outlineOffset = '-1px'
					break

				case '30%':
					backgroundColor = 'rgba(217, 112, 8, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'

					break
				case '100%':
					backgroundColor = '#D97008'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		} else if (contrast === 'intermediate') {
			backgroundColor = '#B65C02'
			fontColor = '#FFFFFF'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'medium') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(151, 79, 12, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #974F0C'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#000000'
					outline = '1px solid #974F0C'
					outlineOffset = '-1px'
					break
				case '30%':
					backgroundColor = 'rgba(151, 79, 12, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'

					break
				case '100%':
					backgroundColor = '#974F0C'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		} else if (contrast === 'high') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(95, 56, 17, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #5F3811'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#000000'
					outline = '1px solid #5F3811'
					outlineOffset = '-1px'
					break

				case '30%':
					backgroundColor = 'rgba(95, 56, 17, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'
					break

				case '100%':
					backgroundColor = '#5F3811'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		}
	}
	if (color === 'red') {
		if (contrast === 'softest') {
			backgroundColor = '#FFD2CC'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'soft') {
			backgroundColor = '#FF9C8F'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'lowest') {
			backgroundColor = '#F87462'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'low') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(227, 73, 53, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #E34935'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#00000'
					outline = '1px solid #E34935'
					outlineOffset = '-1px'
					break

				case '30%':
					backgroundColor = 'rgba(227, 73, 53, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'

					break
				case '100%':
					backgroundColor = '#E34935'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		} else if (contrast === 'intermediate') {
			backgroundColor = '#CA3521'
			fontColor = '#FFFFFF'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'medium') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(174, 42, 25, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #AE2A19'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#000000'
					outline = '1px solid #AE2A19'
					outlineOffset = '-1px'
					break
				case '30%':
					backgroundColor = 'rgba(174, 42, 25, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'

					break
				case '100%':
					backgroundColor = '#AE2A19'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		} else if (contrast === 'high') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(96, 30, 22, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #601E16'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#000000'
					outline = '1px solid #601E16'
					outlineOffset = '-1px'
					break

				case '30%':
					backgroundColor = 'rgba(96, 30, 22, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'
					break

				case '100%':
					backgroundColor = '#601E16'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		}
	}
	if (color === 'purple') {
		if (contrast === 'softest') {
			backgroundColor = '#DFD8FD'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'soft') {
			backgroundColor = '#B8ACF6'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'lowest') {
			backgroundColor = '#9F8FEF'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'low') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(130, 112, 219, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #8270DB'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#00000'
					outline = '1px solid #8270DB'
					outlineOffset = '-1px'
					break

				case '30%':
					backgroundColor = 'rgba(130, 112, 219, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'

					break
				case '100%':
					backgroundColor = '#8270DB'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		} else if (contrast === 'intermediate') {
			backgroundColor = '#6E5DC6'
			fontColor = '#FFFFFF'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'medium') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(94, 77, 178, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #5E4DB2'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#000000'
					outline = '1px solid #5E4DB2'
					outlineOffset = '-1px'
					break
				case '30%':
					backgroundColor = 'rgba(94, 77, 178, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'

					break
				case '100%':
					backgroundColor = '#5E4DB2'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		} else if (contrast === 'high') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(53, 44, 99, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #352C63'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#000000'
					outline = '1px solid #352C63'
					outlineOffset = '-1px'
					break

				case '30%':
					backgroundColor = 'rgba(53, 44, 99, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'
					break

				case '100%':
					backgroundColor = '#352C63'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		}
	}
	if (color === 'magenta') {
		if (contrast === 'softest') {
			backgroundColor = '#FDD0EC'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'soft') {
			backgroundColor = '#F797D2'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'lowest') {
			backgroundColor = '#E774BB'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'low') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(204, 81, 157, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #CC519D'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#00000'
					outline = '1px solid #CC519D'
					outlineOffset = '-1px'
					break

				case '30%':
					backgroundColor = 'rgba(204, 81, 157, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'

					break
				case '100%':
					backgroundColor = '#CC519D'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		} else if (contrast === 'intermediate') {
			backgroundColor = '#AE4787'
			fontColor = '#FFFFFF'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'medium') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(148, 61, 115, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #943D73'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#000000'
					outline = '1px solid #943D73'
					outlineOffset = '-1px'
					break
				case '30%':
					backgroundColor = 'rgba(148, 61, 115, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'

					break
				case '100%':
					backgroundColor = '#943D73'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		} else if (contrast === 'high') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(80, 37, 63, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #50253F'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = '#FFFFFF'
					fontColor = '#000000'
					outline = '1px solid #50253F'
					outlineOffset = '-1px'
					break

				case '30%':
					backgroundColor = 'rgba(80, 37, 63, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'
					break

				case '100%':
					backgroundColor = '#50253F'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		}
	}
	if (color === 'gray') {
		if (contrast === 'softest') {
			backgroundColor = '#E6E6E6'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'soft') {
			backgroundColor = '#CACACA'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'lowest') {
			backgroundColor = '#A0A0A0'
			fontColor = '#000000'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'low') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(24, 24, 24, 0.08)'
					fontColor = '#000000'
					outline = '1px solid #E6E6E6'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = 'rgba(244, 244, 244, 0.08)'
					fontColor = '#00000'
					outline = '1px solid #E6E6E6'
					outlineOffset = '-1px'
					break

				case '30%':
					backgroundColor = 'rgba(24, 24, 24, 0.08)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'

					break
				case '100%':
					backgroundColor = '#7A7A7A'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		} else if (contrast === 'intermediate') {
			backgroundColor = '#626262'
			fontColor = '#FFFFFF'
			outline = 'none'
			outlineOffset = '0'
		} else if (contrast === 'medium') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(24, 24, 24, 0.16)'
					fontColor = '#000000'
					outline = '1px solid #E6E6E6'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = 'rgba(244, 244, 244, 0.08)'
					fontColor = '#000000'
					outline = '1px solid #AFAFAF'
					outlineOffset = '-1px'
					break
				case '30%':
					backgroundColor = 'rgba(24, 24, 24, 0.16)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'

					break
				case '100%':
					backgroundColor = '#393939'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		} else if (contrast === 'high') {
			switch (style) {
				case 'outline+30%':
					backgroundColor = 'rgba(24, 24, 24, 0.30)'
					fontColor = '#000000'
					outline = '1px solid #E6E6E6'
					outlineOffset = '-1px'
					break

				case 'outline':
					backgroundColor = 'rgba(244, 244, 244, 0.08)'
					fontColor = '#000000'
					outline = '1px solid #4A4A4A'
					outlineOffset = '-1px'
					break

				case '30%':
					backgroundColor = 'rgba(24, 24, 24, 0.30)'
					fontColor = '#000000'
					outline = 'none'
					outlineOffset = '0'
					break

				case '100%':
					backgroundColor = '#272727'
					fontColor = '#FFFFFF'
					outline = 'none'
					outlineOffset = '0'
					break
			}
		}
	}

	return { backgroundColor, fontColor, outline, outlineOffset }
}
