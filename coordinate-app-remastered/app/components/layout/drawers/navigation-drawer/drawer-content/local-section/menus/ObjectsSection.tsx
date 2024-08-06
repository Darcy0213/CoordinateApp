import { IconTypes } from '@globalTypes/icons'
import useGetLocationInfo from '@hooks/useGetLocationInfo'
import { Box } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { ExpandedItemState } from 'app/recoil/atoms'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SetterOrUpdater } from 'recoil'
import SimpleBar from 'simplebar-react'
import { ObjectType } from '../items'
import { ExpandableObjectButton } from '../lists-items'

interface Props {
	setExpandedItems: SetterOrUpdater<ExpandedItemState[]>
	expandedItems: ExpandedItemState[]
	theme: Theme
	dataObjects: ObjectType[]
	currentIdToExpand: number | undefined
	setCurrentIdToExpand: React.Dispatch<React.SetStateAction<number | undefined>>
	menu: 'Organization' | 'Workspace'
}
const ObjectsSection = ({ setExpandedItems, expandedItems, theme, dataObjects, currentIdToExpand, setCurrentIdToExpand, menu }: Props) => {
	// State variables to store initial objects and control element width
	const [initialObjects, setObjects] = useState<ObjectType[] | null>(null)
	const [widthProp, setWidthProp] = useState<string>('auto')
	const { workspaceName, workspaceId, organizationId } = useGetLocationInfo()
	const router = useRouter()

	// useEffect hook to initialize or update objects state
	useEffect(() => {
		// Check if dataObjects is available and has elements
		if (dataObjects && dataObjects.length > 0) {
			// Initial render
			if (initialObjects === null) {
				setObjects(dataObjects)
				// Handle expanding specific objects
			} else if (currentIdToExpand !== undefined) {
				setObjects((currentObjects) => {
					// Recursively add children to expand specific objects
					const newObjects = addChildrenRecursively(currentObjects, currentIdToExpand, dataObjects)
					return newObjects
				})
			} else if (currentIdToExpand === undefined) {
				// Check if the number of objects has changed
				if (dataObjects.length !== initialObjects.length) {
					setObjects(dataObjects)
				}
			}
		}
	}, [dataObjects, currentIdToExpand])

	// useEffect hook to control widthProp based on expanded items
	useEffect(() => {
		// Check if expanded items exist
		if (expandedItems.length > 0) {
			// Check if a menu with the given name exists in expanded items
			const menuExists = hasMenu(menu, expandedItems)
			// Set width to max-content for menus, auto otherwise
			if (menuExists) {
				setWidthProp('max-content')
			} else {
				setWidthProp('auto')
			}
		} else {
			// Set width to auto by default
			setWidthProp('auto')
		}
	}, [expandedItems, menu])

	// Function to check if a menu exists within expanded items
	function hasMenu(menuName: string, objects: ExpandedItemState[]): boolean {
		// Iterate through expanded items
		for (const object of objects) {
			// Check if the object has a menu property and matches the given name
			if (object.hasOwnProperty('menu') && object.menu === menuName) {
				return true
			}
		}
		// Return false if no matching menu is found
		return false
	}
	// Function to recursively add children to objects in a hierarchical structure
	function addChildrenRecursively(
		// Array of objects to be processed
		objects: ObjectType[] | null,
		// ID of the parent object to which children should be added
		parentId: number,
		// Array of children to be added
		childrenToAdd: ObjectType[],
		// Current level in the hierarchy (default: 0)
		currentLevel: number = 0
	): ObjectType[] | null {
		// If objects is null, return null
		if (!objects) return null

		// Map over the objects array and update each object
		return objects.map((obj) => {
			// Initially set lastParent to false for each object
			obj.lastParent = false

			// If the current object is the parent to which children should be added
			if (obj.id === parentId) {
				// Map over the children to be added and create new children with updated properties
				const updatedChildren = childrenToAdd.map((child, index) => {
					const newChild = {
						...child, // Copy existing properties
						childLevel: currentLevel + 1, // Set the child's level
						menu: menu, // Set the menu property (presumably from a global variable)
						parent: obj.name, // Set the parent name
						childType: 'Object' // Set the child type
					}
					return newChild
				})

				// Set lastParent to true for the parent object
				obj.lastParent = true

				// Return the object with updated children
				return { ...obj, children: updatedChildren }

				// If the object has children, recursively process those children
			} else if (obj.children) {
				const updatedChildren = addChildrenRecursively(obj.children, parentId, childrenToAdd, currentLevel + 1)

				// Set lastParent to false for non-parent objects
				obj.lastParent = false

				// Return the object with updated children
				return { ...obj, children: updatedChildren }
			}

			// If the object doesn't have a childLevel, assign it the current level
			if (obj.childLevel === undefined) {
				obj.childLevel = currentLevel
			}

			// Return the object with any potential level updates
			return obj
		})
	}
	return (
		<SimpleBar style={{ overflowX: 'auto', maxHeight: '440px', maxWidth: '225px' }}>
			<Box
				gap={theme.dimensions.common.spacing.xs}
				display={'flex'}
				flexDirection={'column'}
				width={'auto'}
			>
				{initialObjects?.map((object: ObjectType) => {
					const isActive = expandedItems.some((item) => item.idItem === object.name)

					return (
						<Box
							key={object.id}
							gap={theme.dimensions.common.spacing.xs}
							display={'flex'}
							flexDirection={'column'}
						>
							<ExpandableObjectButton
								color={object.color}
								setExpandedItems={setExpandedItems}
								expandedItems={expandedItems}
								lastParent={object.lastParent}
								childType="Object"
								id={object.name}
								theme={theme}
								menu={menu}
								parent=""
								isParent={object.isFatherType}
								name={object.name}
								iconName={object.icon as IconTypes}
								onClick={() => {
									setCurrentIdToExpand(object.id)
								}}
								onClickElement={() => {
									router.push(`${workspaceName}/library/objects/?objectType=${object?.id}`)
									localStorage.setItem(
										'activeLocalTab',
										JSON.stringify({
											id: object.name,
											type: object.name,
											iconName: object.icon,
											isSubmenu: false,
											iconColor: object.color,
											entity: 'Object'
										})
									)
								}}
								disabled={false}
							/>

							{isActive && object.children
								? object.children.map((child) => (
										<ExpandableObjectButton
											color={child.color}
											isParent={child.isFatherType}
											key={child.id}
											theme={theme}
											iconName={child.icon as IconTypes}
											name={child.name}
											lastParent={child.lastParent}
											id={child.name}
											menu={child.menu}
											parent={child.parent}
											childType={'Object'}
											setExpandedItems={setExpandedItems}
											expandedItems={expandedItems}
											childLevel={child.childLevel}
											onClick={() => {
												setCurrentIdToExpand(child.id)
											}}
											onClickChild={setCurrentIdToExpand}
											onClickElement={() => {
												router.push(`${workspaceName}/library/objects/?objectType=${child?.id}`)
												localStorage.setItem(
													'activeLocalTab',
													JSON.stringify({
														id: child.name,
														type: child.name,
														iconName: child.icon,
														isSubmenu: false,
														iconColor: child.color,
														entity: 'Object'
													})
												)
											}}
											onClickElementChild={router}
											childrenData={child.children}
											disabled={menu === 'Organization'}
										/>
								  ))
								: null}
						</Box>
					)
				})}
			</Box>
		</SimpleBar>
	)
}

export default ObjectsSection
