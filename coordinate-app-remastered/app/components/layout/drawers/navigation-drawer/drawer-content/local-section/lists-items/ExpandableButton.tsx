import { Box, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'

import { SetterOrUpdater } from 'recoil'

import { IconGenerator } from '@common/icons'
import { IconTypes } from '@globalTypes/icons'
import { ExpandedItemState } from 'app/recoil/atoms'
import ListItemButtonStyled from './list-item-button/ListItemButtonStyled'

interface Props {
	theme: Theme
	iconName: IconTypes
	name: string
	id: string
	menu: 'Organization' | 'Home' | 'Workspace'
	parent?: string
	childType: 'Workspace' | 'Object'
	setExpandedItems: SetterOrUpdater<ExpandedItemState[]>
	expandedItems: ExpandedItemState[]
	lastParent?: boolean
	isParent?: boolean
	onClick?: () => void
	childLevel?: number
}

const ExpandableNavigationButton = ({
	childLevel,
	theme,
	iconName,
	name,
	id,
	menu,
	parent,
	childType,
	setExpandedItems,
	expandedItems,
	onClick,
	isParent,
	lastParent
}: Props) => {
	const elementDimensions = theme.dimensions.common
	const surfaceStyles = theme.palette.surface

	const isActive = expandedItems.some((item) => item.idItem === id && item.menu === menu)

	// Function to toggle the expansion of an item and its descendants
	const toggleExpand = (idItem: string, menu: string, type: string, parent: string) => {
		// Update the expandedItems state using a callback
		setExpandedItems((currentExpandedItems) => {
			// Helper function to remove an item and its descendants from an array
			const removeItemAndDescendants = (items: ExpandedItemState[], itemIdToRemove: string, itemMenuToRemove: string) => {
				// Filter items that are not directly being removed
				const filteredItems = items.filter((item) => item.idItem !== itemIdToRemove && item.menu !== itemMenuToRemove)

				// Find children of the removed item and remove them recursively
				const childrenOfRemovedItem = items.filter((item) => item.parent === itemIdToRemove && item.menu === itemMenuToRemove)
				let result = filteredItems

				for (const child of childrenOfRemovedItem) {
					result = removeItemAndDescendants(result, child.idItem, child.menu)
				}

				return result
			}

			// Check if the item is already expanded
			const existingIndex = currentExpandedItems.findIndex((item) => item.idItem === idItem && item.menu === menu)

			if (existingIndex >= 0) {
				// If the item is already expanded, remove it and its descendants
				return removeItemAndDescendants(currentExpandedItems, idItem, menu)
			} else {
				// If the item is not expanded, add it to the expanded items
				return [...currentExpandedItems, { idItem, menu, type, parent }]
			}
		})
	}

	return (
		<ListItemButtonStyled
			theme={theme}
			isActive={isActive}
			lastParent={lastParent}
			sx={{ display: 'flex' }}
		>
			{childLevel &&
				Array.from({ length: childLevel }, (_, index) => (
					<Box
						key={index}
						width={elementDimensions.width.lg}
						height={elementDimensions.height.lg}
					/>
				))}
			{isParent ? (
				<Box
					display="flex"
					alignItems={'center'}
					onClick={() => {
						onClick && onClick()
						toggleExpand(id, menu, childType, parent ? parent : '')
					}}
				>
					<IconGenerator
						iconName={isActive ? 'low' : 'breadCrumb'}
						widthToken={elementDimensions.width.lg}
						heightToken={elementDimensions.height.lg}
						colorToken={isActive && lastParent === true ? surfaceStyles.on_surface : surfaceStyles.on_surface_variant}
					/>
				</Box>
			) : (
				<Box
					width={elementDimensions.width.lg}
					height={elementDimensions.height.lg}
				/>
			)}
			<Box
				alignItems="center"
				display="flex"
				gap={elementDimensions.spacing.md}
			>
				<IconGenerator
					iconName={iconName}
					widthToken={elementDimensions.width.sm}
					heightToken={elementDimensions.height.sm}
					colorToken={isActive && lastParent === true ? surfaceStyles.on_surface : surfaceStyles.on_surface_variant}
				/>

				<Typography
					sx={{ flex: 1 }}
					variant="sys.typo.st1_semibold"
					color={isActive && lastParent === true ? surfaceStyles.on_surface : surfaceStyles.on_surface_variant}
				>
					{name}
				</Typography>
			</Box>
		</ListItemButtonStyled>
	)
}

export default ExpandableNavigationButton
