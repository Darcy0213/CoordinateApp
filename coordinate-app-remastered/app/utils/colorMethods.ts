import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { CustomPaletteProps } from '@theme/types/theme'

export const hexToRgb = (hex: string) => {
	hex = hex.startsWith('#') ? hex.slice(1) : hex

	if (hex.length !== 6) {
		throw new Error('Expected a string of length 6.')
	}
	const bigint = parseInt(hex, 16)
	const r = (bigint >> 16) & 255
	const g = (bigint >> 8) & 255
	const b = bigint & 255
	return `${r}, ${g}, ${b}`
}

export const createBackgroundWithOpacity = (hexColor: string, opacity: string) => {
	const rgb = hexToRgb(hexColor)
	const opacityWithoutPercentSign = opacity.slice(0, -1)
	const opacityValue = Number(opacityWithoutPercentSign) / 100
	return `rgba(${rgb}, ${opacityValue})`
}

/* export const createLinearGradient = (color: string, opacity: number) => {
  return `linear-gradient(0deg, rgba(${color}, ${opacity}) 0%, rgba(${color}, ${opacity}) 100%)`;
}; */

export const createLinearGradient = (rgbaColor: string) => {
	return `linear-gradient(0deg, ${rgbaColor} 0%, ${rgbaColor} 100%)`
}

/* export const createLinearGradientThirdColor = (color: string, opacity: number, thirdColor: string, thirdOpacity: number) => {
	return `linear-gradient(0deg, rgba(${color}, ${opacity}) 0%, rgba(${color}, ${opacity}) 100%), rgba(${thirdColor}, ${thirdOpacity})`
}
 */
export const createLinearGradientThirdColor = (rgbaColor: string, rgbaSecondColor: string) => {
	return `linear-gradient(0deg,  ${rgbaColor} 0%,  ${rgbaColor} 100%),  ${rgbaSecondColor}`
}

export const convertPercentageToDecimal = (opacity: string): number => {
	// Check if the string contains a valid percentage format
	const percentageRegex = /^(\d+(\.\d+)?%)$/
	if (!percentageRegex.test(opacity)) {
		console.error('Invalid percentage format')
		throw new Error('Invalid percentage format') // Lanza un error en lugar de retornar null
	}

	// Remove the '%' sign and convert the string to a number
	const numericValue = parseFloat(opacity.replace('%', '')) / 100

	return numericValue
}

export const extractAndSortColors = (customPaletteColors: CustomPaletteProps): { color: string; contrast: string; variant: string; id: string }[] => {
	// Define categories to maintain order
	const categories = ['softest', 'soft', 'lowest', 'low', 'intermediate', 'medium', 'high']

	// Custom order for sorting colors
	const colorOrder = ['orange', 'yellow', 'lime', 'green', 'cyan', 'blue', 'purple', 'magenta', 'red', 'gray']

	// Function to sort color objects according to the defined order
	const sortByCustomOrder = (a: { name: string; id: string }, b: { name: string; id: string }) => {
		const indexA = colorOrder.indexOf(a.name.split('.')[0])
		const indexB = colorOrder.indexOf(b.name.split('.')[0])
		return indexA - indexB
	}

	// Collect and sort colors
	const sortedColors = categories.flatMap((category) =>
		Object.entries(customPaletteColors)
			.filter(([key]) => key !== 'on_custom_palette' && key !== 'on_surface')
			.flatMap(([key, value]) =>
				Object.entries(value)
					.filter(([innerKey]) => innerKey === category)
					.flatMap(([_, colorValue]) =>
						Object.entries(colorValue)
							.filter(([shadeKey]) => shadeKey === 'normal')
							.map(([shadeKey, shadeValue]) => ({
								color: `${key}`,
								contrast: category,
								variant: '100%',
								id: shadeValue as string,
								name: `${key}.${category}.${shadeKey}`
							}))
					)
			)
			.sort(sortByCustomOrder)
	)

	return sortedColors
}

export function findIconOrColorById(icons: any, searchId: string) {
	return icons && searchId && icons.find((item: any) => item.id.toLowerCase() === searchId.toLowerCase())
}
export function findIconById(
	icons: {
		name: string
		id: string
		icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
			muiName: string
		}
	}[],
	searchId: string
) {
	return icons && searchId && icons.find((item) => item.id.toLowerCase() === searchId.toLowerCase())
}

export function hexToRGBAWithOpacity(hex: string, opacityPercent: string) {
	// Remove '#' character from the hexadecimal value (if present)
	hex = hex.replace(/^#/, '')

	// Parse the hexadecimal value into RGB components
	const r = parseInt(hex.slice(0, 2), 16)
	const g = parseInt(hex.slice(2, 4), 16)
	const b = parseInt(hex.slice(4, 6), 16)

	// Parse the opacity from percentage string to decimal
	const opacityDecimal = parseFloat(opacityPercent) / 100

	// Ensure opacity is within the range of 0 to 1
	const validOpacity = Math.min(1, Math.max(0, opacityDecimal))

	// Create and return the RGBA value
	return `rgba(${r}, ${g}, ${b}, ${validOpacity})`
}
export function isNotHexColor(string: string) {
	return !/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(string)
}
