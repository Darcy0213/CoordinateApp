import { Tooltip } from '@mui/material'
import { Theme } from '@mui/material/styles'

import { IconGenerator } from '@common/icons'
import { IconTypes } from '@globalTypes/icons'
import Link from 'next/link'
import TabButtonStyled from './TabButtonStyled'
interface Props {
	name: string
	iconName: IconTypes
	path: string
	theme: Theme
	isActive: boolean
	iconLibrary?: 'MUI' | 'MDI'
	disabled?: boolean
	onClick?: () => void
}

const TabButton = ({ isActive, name, iconName, path, theme, onClick, disabled, iconLibrary = 'MUI' }: Props) => {
	const icon = theme.dimensions.icon

	return path && path !== '' ? (
		<Link
			href={path}
			target={'_self'}
			style={{ textDecoration: 'none', pointerEvents: disabled ? 'none' : 'auto' }}
		>
			<Tooltip
				title={name}
				placement="right"
				sx={{ pointerEvents: disabled ? 'none' : 'auto' }}
			>
				<span>
					<TabButtonStyled
						theme={theme}
						isActive={isActive}
						disabled={disabled}
						aria-label={name}
						onClick={() => {
							onClick && onClick()
						}}
					>
						<IconGenerator
							iconLibrary={iconLibrary}
							iconName={iconName}
							widthToken={icon.width.lg}
							heightToken={icon.height.lg}
							colorToken={isActive ? theme.palette.surface.on_surface : theme.palette.surface.on_surface_variant}
						/>
					</TabButtonStyled>
				</span>
			</Tooltip>
		</Link>
	) : (
		<Tooltip
			title={name}
			placement="right"
			sx={{ pointerEvents: disabled ? 'none' : 'auto' }}
		>
			<span>
				<TabButtonStyled
					theme={theme}
					isActive={isActive}
					disabled={disabled}
					aria-label={name}
					onClick={() => {
						onClick && onClick()
					}}
				>
					<IconGenerator
						iconLibrary={iconLibrary}
						iconName={iconName}
						widthToken={icon.width.lg}
						heightToken={icon.height.lg}
						colorToken={isActive ? theme.palette.surface.on_surface : theme.palette.surface.on_surface_variant}
					/>
				</TabButtonStyled>
			</span>
		</Tooltip>
	)
}

export default TabButton
