import { Badge } from '@mui/material'
import { Theme } from '@mui/material/styles'

import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

import { IconGenerator } from '@common/icons'
import { NotificationsNumber } from 'app/recoil/atoms'
import TabButtonStyled from './TabButtonStyled'
interface Props {
	name: string
	theme: Theme
	isActive: boolean
	disabled?: boolean
	onClick?: () => void
}
const NotificationsButton = ({ isActive, name, theme, onClick, disabled }: Props) => {
	// Access element dimensions from theme
	const icon = theme.dimensions.icon

	// Get notifications number from Recoil
	const notificationsNumber = useRecoilValue(NotificationsNumber)

	// Manage "read" state (number of notifications)
	const [read, setRead] = useState(notificationsNumber)

	// Update "read" state when notificationsNumber changes
	useEffect(() => {
		if (notificationsNumber > 0) {
			setRead(notificationsNumber)
		}
	}, [notificationsNumber])

	return (
		<TabButtonStyled
			theme={theme}
			isActive={isActive}
			disabled={disabled}
			aria-label={name}
			onClick={() => {
				onClick && onClick()
			}}
			sx={{
				'& .MuiBadge-colorPrimary': {
					backgroundColor: theme.palette.main.surface_medium,
					color: '#ffffff',
					fontSize: '11px',
					padding: '3.5px',
					right: '2px',
					top: '4px'
				}
			}}
		>
			<Badge
				badgeContent={read}
				color="primary"
			>
				<IconGenerator
					iconName={isActive ? 'notificationFilled' : 'notificationOutlined'}
					widthToken={icon.width['2xl'] as string}
					heightToken={icon.height['2xl'] as string}
					colorToken={isActive ? theme.palette.surface.on_surface : theme.palette.surface.on_surface_variant}
				/>
			</Badge>
		</TabButtonStyled>
	)
}

export default NotificationsButton
