import { Theme } from '@mui/material/styles'

import { ChipColor } from '@globalTypes/general'
import { IconTypes } from '@globalTypes/icons'
import Link from 'next/link'
import { ListItemButton } from './list-item-button'

interface Props {
	theme: Theme
	iconName?: IconTypes
	iconLibrary?: 'MUI' | 'MDI'
	name: string
	path: string
	entityType: string
	parent: 'Workspace' | 'Home' | 'Organization'
	parentPath?: string
	parentIconName?: IconTypes
	submenu?: boolean
	onClick?: () => void
	childLevel?: number
	disabled?: boolean
	iconFromUser?: boolean
	iconColor?: ChipColor
}

const SimpleNavigationButton = ({
	parent,
	entityType,
	theme,
	iconName,
	iconLibrary = 'MUI',
	name,
	path,
	childLevel,
	parentIconName,
	parentPath,
	disabled,
	iconFromUser,
	iconColor,
	onClick,
	submenu
}: Props) => {
	return path && path !== '' ? (
		<Link
			href={path!}
			target={'_self'}
			style={{ textDecoration: 'none', pointerEvents: disabled ? 'none' : 'auto' }}
		>
			<ListItemButton
				parent={parent}
				entityType={entityType}
				theme={theme}
				iconName={iconName}
				name={name}
				parentIconName={parentIconName}
				parentPath={parentPath}
				childLevel={childLevel}
				disabled={disabled}
				iconFromUser={iconFromUser}
				iconColor={iconColor}
				onClick={onClick}
				submenu={submenu}
				iconLibrary={iconLibrary}
				path={path}
			/>
		</Link>
	) : (
		<ListItemButton
			parent={parent}
			entityType={entityType}
			theme={theme}
			iconName={iconName}
			name={name}
			childLevel={childLevel}
			disabled={disabled}
			parentIconName={parentIconName}
			iconFromUser={iconFromUser}
			iconColor={iconColor}
			onClick={onClick}
			submenu={submenu}
			iconLibrary={iconLibrary}
			path={path}
			parentPath={parentPath}
		/>
	)
}

export default SimpleNavigationButton
