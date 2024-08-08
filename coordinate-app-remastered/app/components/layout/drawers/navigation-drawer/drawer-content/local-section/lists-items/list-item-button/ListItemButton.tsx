import { Box, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'

import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

import { CoorIconChip } from '@common/chips'
import { color, contrast, style } from '@common/chips/types'
import { IconGenerator } from '@common/icons'
import { ChipColor } from '@globalTypes/general'
import { IconTypes } from '@globalTypes/icons'
import { CommonLocalTabSelected } from 'app/recoil/atoms'
import ListItemButtonStyled from './ListItemButtonStyled'

interface Props {
	theme: Theme
	iconName?: IconTypes
	iconLibrary?: 'MUI' | 'MDI'
	name: string
	entityType: string
	parent: 'Workspace' | 'Home' | 'Organization'
	path: string
	parentPath?: string
	parentIconName?: IconTypes
	submenu?: boolean
	onClick?: () => void
	childLevel?: number
	disabled?: boolean
	iconFromUser?: boolean
	iconColor?: ChipColor
}

const ListItemButton = ({
	parent,
	entityType,
	theme,
	iconName,
	iconLibrary = 'MUI',
	name,
	childLevel,
	parentIconName,
	disabled,
	iconFromUser,
	iconColor,
	onClick,
	submenu,
	path,
	parentPath
}: Props) => {
	const [localTabSelected, setActiveLocalTab] = useRecoilState(CommonLocalTabSelected)
	const [color, setColor] = useState<ChipColor | undefined>(iconColor)
	const elementDimensions = theme.dimensions.common

	const isActive = localTabSelected.id === name

	useEffect(() => {
		if (iconColor) {
			setColor(iconColor)
		}
	}, [iconColor])

	return (
		<ListItemButtonStyled
			theme={theme}
			isActive={isActive}
			disabled={disabled}
			onClick={() => {
				setActiveLocalTab({ id: name, type: entityType, parent: parent, isSubmenu: submenu ? true : false })
				localStorage.setItem(
					'activeLocalTab',
					JSON.stringify({
						id: name,
						type: entityType,
						parentIconName: parentIconName ? parentIconName : '',
						parent: parent,
						isSubmenu: submenu ? true : false,
						iconColor: color,
						iconName: iconName,
						path: path,
						parentPath: parentPath
					})
				)
				onClick && onClick()
			}}
		>
			{childLevel && (
				<Box
					width={elementDimensions.width.lg}
					height={elementDimensions.height.lg}
				/>
			)}

			{iconFromUser && color ? (
				<CoorIconChip
					iconFromUser
					iconName={iconName as string}
					size="sm"
					color={color.color as color}
					contrast={color?.contrast as contrast}
					variant={color?.variant as style}
				/>
			) : (
				iconName && (
					<IconGenerator
						colorToken={isActive ? theme.palette.sys_primary.on_surface.default : theme.palette.sys_primary.on_surface.variant}
						iconName={iconName}
						widthToken={elementDimensions.width.lg}
						heightToken={elementDimensions.height.lg}
						iconLibrary={iconLibrary}
					/>
				)
			)}
			<Typography
				variant="sys.typo.st1_semibold"
				color={isActive ? theme.palette.sys_primary.on_surface.default : theme.palette.sys_primary.on_surface.variant}
			>
				{name}
			</Typography>
		</ListItemButtonStyled>
	)
}

export default ListItemButton
