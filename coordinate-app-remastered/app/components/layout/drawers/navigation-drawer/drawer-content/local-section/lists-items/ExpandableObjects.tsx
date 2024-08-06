import { CoorLargeChip } from '@common/chips'
import { style } from '@common/chips/types'
import { IconGenerator } from '@common/icons'
import { ChipColor } from '@globalTypes/general'
import { IconTypes } from '@globalTypes/icons'
import useGetLocationInfo from '@hooks/useGetLocationInfo'
import { Box } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { ExpandedItemState } from 'app/recoil/atoms'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { SetterOrUpdater } from 'recoil'
import ListItemButtonStyled from './list-item-button/ListItemButtonStyled'

interface Props {
	theme: Theme
	iconName: IconTypes
	color: ChipColor
	name: string
	id: string
	menu: 'Organization' | 'Home' | 'Workspace'
	disabled?: boolean
	parent?: string
	childType: 'Workspace' | 'Object'
	setExpandedItems: SetterOrUpdater<ExpandedItemState[]>
	expandedItems: ExpandedItemState[]
	lastParent?: boolean
	isParent?: boolean
	onClick?: () => void
	onClickChild?: React.Dispatch<React.SetStateAction<number | undefined>>
	childLevel?: number
	childrenData?: any[] | null
	onClickElement?: () => void
	onClickElementChild?: AppRouterInstance
}

const ExpandableObjectButton = ({
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
	onClickChild,
	childrenData,
	isParent,
	lastParent,
	color,
	onClickElement,
	onClickElementChild,
	disabled
}: Props) => {
	const elementDimensions = theme.dimensions.common
	const iconDimensions = theme.dimensions.icon
	const surfaceStyles = theme.palette.surface

	const { workspaceName, workspaceId, organizationId } = useGetLocationInfo()

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
		<>
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
							width={elementDimensions.width.md}
							height={elementDimensions.height.md}
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
							widthToken={iconDimensions.width.md}
							heightToken={iconDimensions.height.md}
							colorToken={isActive && lastParent === true ? surfaceStyles.on_surface : surfaceStyles.on_surface_variant}
						/>
					</Box>
				) : (
					<Box
						width={elementDimensions.width.md}
						height={elementDimensions.height.md}
					/>
				)}
				<Box
					sx={{ pointerEvents: disabled ? 'none' : 'auto' }}
					onClick={onClickElement && onClickElement}
				>
					<CoorLargeChip
						size="sm"
						iconName={iconName}
						contrast={color.contrast}
						variant={'100%' as style}
						color={color.color}
						text={name}
					/>{' '}
				</Box>
			</ListItemButtonStyled>

			{isActive &&
				childrenData?.map((child) => (
					<ExpandableObjectButton
						color={child.color}
						key={child.id}
						theme={theme}
						iconName={child.iconName as IconTypes}
						lastParent={child.lastParent}
						name={child.name}
						id={child.name}
						menu={child.menu}
						parent={child.parent}
						childType={child.childType}
						setExpandedItems={setExpandedItems}
						expandedItems={expandedItems}
						childrenData={child.children}
						childLevel={child.childLevel}
						isParent={child.isFatherType}
						onClick={() => {
							onClickChild && onClickChild(child.id)
						}}
						onClickChild={onClickChild}
						onClickElement={() => {
							onClickElementChild && onClickElementChild.push(`${workspaceName}/library/objects/?objectType=${child?.id}`)
							localStorage.setItem(
								'activeLocalTab',
								JSON.stringify({ id: child.name, type: child.name, iconName: child.icon, isSubmenu: false, iconColor: child.color, entity: 'Object' })
							)
						}}
						onClickElementChild={onClickElementChild}
					/>
				))}
		</>
	)
}

export default ExpandableObjectButton
