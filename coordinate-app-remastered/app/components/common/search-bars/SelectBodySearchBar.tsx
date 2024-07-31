'use client'
import { InputBase } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { typography } from '@theme/referenceTokens'

interface Props {
	setSearchText: React.Dispatch<React.SetStateAction<string>>
	placeholder: string
}

export default function SelectBodySearchBar({ setSearchText, placeholder }: Props) {
	// Get the current theme
	const theme = useTheme()

	// Get the surface color from the theme palette
	const surfaceColor = theme.palette.surface
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
					color: `${surfaceColor.on_surface_variant}!important`
				}
			}}
			placeholder={placeholder}
			fullWidth
			onChange={(e) => setSearchText(e.target.value)}
			onKeyDown={(e) => {
				// Prevent event propagation if the key is not Escape
				if (e.key !== 'Escape') {
					e.stopPropagation()
				}
			}}
		/>
	)
}
