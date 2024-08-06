import { ChangeEvent } from 'react'

import { IconGenerator } from '@common/icons'
import { useConfigContext } from '@context/ConfigContext'
import { ThemeMode } from '@globalTypes/customization'
import { Card, FormControlLabel, Grid, Radio, RadioGroup, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// assets

// ==============================|| CUSTOMIZATION - MODE ||============================== //

const ThemeModeLayout = () => {
	const theme = useTheme()
	const colors = theme.palette
	const dimensions = theme.dimensions.icon
	const { mode, onChangeMode } = useConfigContext()

	const handleModeChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChangeMode(event.target.value as ThemeMode)
	}

	return (
		<RadioGroup
			row
			aria-label="payment-card"
			name="payment-card"
			value={mode}
			onChange={handleModeChange}
		>
			<Grid
				container
				spacing={1.75}
				sx={{ ml: 0 }}
				justifyContent={'center'}
			>
				<Grid item>
					<FormControlLabel
						control={
							<Radio
								value="light"
								sx={{ display: 'none' }}
							/>
						}
						sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
						label={
							<Card sx={{ bgcolor: mode === 'light' ? 'primary.lighter' : 'secondary.lighter', p: 1 }}>
								<Stack
									spacing={1.25}
									alignItems="center"
								>
									<IconGenerator
										iconName={'lightMode'}
										widthToken={dimensions.width.md}
										heightToken={dimensions.height.md}
										colorToken={colors.sys_gray?.darker as string}
									/>

									<Typography variant="caption">Light</Typography>
								</Stack>
							</Card>
						}
					/>
				</Grid>
				<Grid item>
					<FormControlLabel
						control={
							<Radio
								value="dark"
								sx={{ display: 'none' }}
							/>
						}
						sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
						label={
							<Card sx={{ bgcolor: mode === 'dark' ? 'primary.lighter' : 'secondary.lighter', p: 1 }}>
								<Stack
									spacing={1.25}
									alignItems="center"
								>
									<IconGenerator
										iconName={'darkMode'}
										widthToken={dimensions.width.md}
										heightToken={dimensions.height.md}
										colorToken={colors.sys_gray?.darker as string}
									/>

									<Typography variant="caption">Dark</Typography>
								</Stack>
							</Card>
						}
					/>
				</Grid>
			</Grid>
		</RadioGroup>
	)
}

export default ThemeModeLayout
