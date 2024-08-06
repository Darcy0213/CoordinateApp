import { ChangeEvent } from 'react'

// material-ui
import { Box, Card, FormControlLabel, Grid, Radio, RadioGroup, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { useConfigContext } from '@context/ConfigContext'
import { FontFamily } from '@globalTypes/customization'

// ==============================|| CUSTOMIZATION - FONT FAMILY ||============================== //

const ThemeFont = () => {
	const theme = useTheme()

	const { fontFamily, onChangeFontFamily } = useConfigContext()

	const handleFontChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChangeFontFamily(event.target.value as FontFamily)
	}

	const fonts = [
		{
			id: 'inter',
			value: `'Inter', sans-serif`,
			label: 'Inter'
		},
		{
			id: 'roboto',
			value: `'Roboto', sans-serif`,
			label: 'Roboto'
		},
		{
			id: 'poppins',
			value: `'Poppins', sans-serif`,
			label: 'Poppins'
		},
		{
			id: 'arial',
			value: `'Arial', sans-serif`,
			label: 'Arial'
		},
		{
			id: 'public-sans',
			value: `'Public Sans', sans-serif`,
			label: 'Public Sans'
		},

		{
			id: 'open-sans',
			value: `'Open Sans', sans-serif`,
			label: 'Open Sans'
		}
	]

	return (
		<RadioGroup
			row
			aria-label="payment-card"
			name="payment-card"
			value={fontFamily}
			onChange={handleFontChange}
		>
			<Grid
				container
				spacing={1.75}
				sx={{ ml: 0 }}
			>
				{fonts.map((item, index) => (
					<Grid
						className="font-family-grid"
						item
						key={index}
					>
						<FormControlLabel
							control={
								<Radio
									value={item.value}
									sx={{ display: 'none' }}
								/>
							}
							sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
							label={
								<Card sx={{ bgcolor: fontFamily === item.value ? 'primary.lighter' : 'secondary.lighter', p: 1 }}>
									<Box sx={{ minWidth: 60, bgcolor: 'background.paper', p: '4px', '&:hover': { bgcolor: 'background.paper' } }}>
										<Stack
											spacing={0.5}
											alignItems="center"
										>
											<Typography
												variant="h5"
												color="textPrimary"
												sx={{ fontFamily: item.value }}
											>
												Aa
											</Typography>
											<Typography
												variant="caption"
												color="textSecondary"
											>
												{item.label}
											</Typography>
										</Stack>
									</Box>
								</Card>
							}
						/>
					</Grid>
				))}
			</Grid>
		</RadioGroup>
	)
}

export default ThemeFont
