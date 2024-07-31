'use client'
import { IconGenerator } from '@common/icons'
import { Box, InputBase } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { typography } from '@theme/referenceTokens'

interface Props {
	setValue: React.Dispatch<React.SetStateAction<string>>
	value: string
	placeholder: string
	disableStartAdornment?: boolean
}

export default function SelectProfileImageSearchBar({ value, setValue, placeholder, disableStartAdornment = false }: Props) {
	// Get the current theme
	const theme = useTheme()

	// Get the surface color from the theme palette
	const surfaceColor = theme.palette.surface

	const startAdormentTest = disableStartAdornment
		? {}
		: {
				startAdornment: (
					<Box
						sx={{
							paddingLeft: theme.dimensions.common.padding.md,
							display: 'flex',
							alignItems: 'center',
							paddingRight: theme.dimensions.common.padding.md
						}}
					>
						<IconGenerator
							iconName={'searchFilled'}
							widthToken={theme.dimensions.icon.width.md}
							heightToken={theme.dimensions.icon.height.md}
							colorToken={surfaceColor.on_surface_variant}
						/>
					</Box>
				)
		  }

	return (
		<InputBase
			// Set the styles for the input base
			sx={{
				'& .MuiInputBase-input': {
					height: 'fit-content',
					fontSize: `${typography['14-16.regular.0'].fontSize}!important` /*PENDING TOKEN*/,
					fontWeight: `${typography['14-16.regular.0'].fontWeight}!important` /*PENDING TOKEN*/,
					lineHeight: `${typography['14-16.regular.0'].lineHeight}!important` /*PENDING TOKEN*/,
					margin: 0,
					padding: `${theme.dimensions.common.padding.md} ${theme.dimensions.common.padding.md}}`,
					paddingLeft: '0px',
					color: `${surfaceColor.on_surface_variant}!important`
				}
			}}
			{...startAdormentTest}
			placeholder={placeholder}
			fullWidth
			value={value}
			onChange={(e) => setValue(e.target.value)}
			onKeyDown={(e) => {
				// Prevent event propagation if the key is not Escape
				if (e.key !== 'Escape') {
					e.stopPropagation()
				}
			}}
		/>
	)
}
