'use client'
import { CoorIconChip } from '@common/chips'
import { color, contrast, style } from '@common/chips/types'
import { IconGenerator } from '@common/icons'
import { LocationSelect } from '@common/selects'
import { statusTypes } from '@globalTypes/saveStatus'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { CloudStatusType, LocationInfo } from 'app/recoil/atoms'

import { MouseEvent, useCallback, useRef, useState } from 'react'
import { SaveIndicatorContainerStyled, StatusDotStyled } from './SaveIndicatorStyles'

interface Props {
	status: CloudStatusType
	onDrawer?: boolean
	mode?: 'create' | 'edit'
	locationEntity?: LocationInfo
	setLocationEntity?: React.Dispatch<React.SetStateAction<LocationInfo>>
}

const SaveIndicator = ({ status, onDrawer = false, mode = 'create', locationEntity, setLocationEntity }: Props) => {
	//Get theme
	const theme = useTheme()

	//Function to create the status data object with the colors and titles
	const createStatusData = (palette: typeof theme.palette.custom_palette) => ({
		notSaved: { title: 'Not Saved', connector: '', color: palette.red.medium.normal },
		saved: { title: 'Saved', connector: 'in', color: palette.lime.low.normal },
		saving: { title: 'Saving', connector: 'in', color: palette.blue.low.normal },
		draft: { title: 'Draft', connector: 'in', color: palette.yellow.low.normal },
		new: { title: 'Draft', connector: 'in', color: palette.yellow.low.normal },
		error: { title: 'Error saving', connector: '', color: palette.orange.low.normal }
	})

	//Create the status data object
	const statusData: statusTypes = createStatusData(theme.palette.custom_palette)

	//Constant to handle the popper state
	const [openLocationPopper, setOpenLocationPopper] = useState<boolean>(false)

	//Ref to the anchor element to use on the popper as parent
	const anchorRef = useRef<HTMLDivElement>(null)

	// useCallback for performance optimization
	const handleIndicatorClick = useCallback(
		(e: MouseEvent<HTMLDivElement>) => {
			setOpenLocationPopper(true)
			e.stopPropagation()
		},
		[] // Empty dependency array ensures it's created once
	)

	return (
		<>
			{status && (
				<SaveIndicatorContainerStyled
					direction="row"
					ref={anchorRef}
					theme={theme}
					mode={mode}
					backgroundColor={theme.palette.state.hover}
					openLocationPopper={openLocationPopper}
					{...(onDrawer && mode === 'create' && { onClick: handleIndicatorClick })}
					onDrawer={onDrawer}
				>
					<Box sx={{ display: 'flex', gap: theme.dimensions.common.spacing.sm, alignItems: 'center' }}>
						<StatusDotStyled
							component="span"
							display="block"
							statusData={statusData}
							status={status}
						/>
						<Typography
							variant="sys.typo.st1"
							color={theme.palette.surface.on_surface}
						>
							{statusData[status].title}
							{(locationEntity?.id || mode === 'create') && onDrawer && statusData[status].connector}
						</Typography>
					</Box>

					{/* Conditionally render location details */}
					{(locationEntity?.id || mode === 'create') && onDrawer && (
						<Box sx={{ display: 'flex', gap: theme.dimensions.common.spacing.md, alignItems: 'center' }}>
							<CoorIconChip
								size="md"
								color={(locationEntity?.color?.color ?? 'blue') as color}
								contrast={(locationEntity?.color?.contrast ?? 'high') as contrast}
								variant={(locationEntity?.color?.variant ?? '100%') as style}
								iconName={locationEntity?.icon ?? 'help'}
							/>
							<Typography variant="sys.typo.st1">{locationEntity?.id ? locationEntity.name : 'Location'}</Typography>
							{mode === 'create' && (
								<IconGenerator
									colorToken={theme.palette.surface.on_surface}
									iconName="KeyboardArrowDown"
									heightToken={theme.dimensions.common.width.md}
									widthToken={theme.dimensions.common.height.md}
								/>
							)}
						</Box>
					)}
				</SaveIndicatorContainerStyled>
			)}

			{/* Conditionally render LocationSelect */}
			{mode === 'create' && anchorRef && locationEntity && setLocationEntity && (
				<LocationSelect
					open={openLocationPopper}
					setOpen={setOpenLocationPopper}
					parent={anchorRef}
					selected={locationEntity}
					setSelected={setLocationEntity}
				/>
			)}
		</>
	)
}

export default SaveIndicator
