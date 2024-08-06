import { ChipColor } from '@globalTypes/general'
import { IconTypes } from '@globalTypes/icons'

export interface ObjectType {
	id: number
	name: string
	icon: string
	personRole: string
	MaxGroupHierarchy: number | null
	menu: 'Organization' | 'Home' | 'Workspace'
	lastParent?: boolean
	isFatherType: boolean
	parent?: string
	childLevel?: number
	children?: ObjectType[] | null
	color: ChipColor
}

export interface ItemsState {
	[key: string]: ObjectType[] // Esto permite tener un array de ItemType bajo cualquier clave string
}

export interface Workspace {
	id: string
	name: string
	icon: string
	color: ChipColor
	status: string
	personRole: string
}

export interface OrganizationData {
	id: string
	name: string
	workspaces: Workspace[]
}

export interface WorkspaceData extends Workspace {
	organizationId: string
}

export interface ChildElement {
	id: number
	name: string
	icon: IconTypes
	path: string
	disabled: boolean
	listButtonType: 'normal' // Asumiendo que todos los hijos son de tipo 'normal'
	// Añade más propiedades aquí si es necesario
}

export interface Element {
	id: number
	name: string
	icon: IconTypes
	path: string
	disabled: boolean
	listButtonType: 'normal' | 'expandable'
	iconLibrary?: 'MUI' | 'MDI'
	childs?: ChildElement[]
	submenu?: boolean
}

export const librarySubmenu: Element[] = [
	{
		id: 1,
		name: 'Object types',
		icon: 'deployedCode' as IconTypes,
		path: '',
		disabled: false,
		listButtonType: 'normal',
		iconLibrary: 'MDI'
	},
	{
		id: 2,
		name: 'Property types',
		icon: 'fields' as IconTypes,
		path: '',
		disabled: false,
		listButtonType: 'normal'
	},
	{
		id: 3,
		name: 'Relations',
		icon: 'CompareArrows' as IconTypes,
		path: '',
		disabled: false,
		listButtonType: 'normal'
	}
]

export const MembersSubmenu: Element[] = [
	{
		id: 1,
		name: 'Members',
		icon: 'groups' as IconTypes,
		path: '/people/members',
		disabled: false,
		listButtonType: 'normal'
	},
	{
		id: 2,
		name: 'Groups',
		icon: 'groupsMenu' as IconTypes,
		path: '/people/groups',
		disabled: false,
		listButtonType: 'normal'
	}
]

export const commonLocalElements: Element[] = [
	{
		id: 1,
		name: 'Timeline',
		icon: 'date' as IconTypes,
		path: '/timeline',
		disabled: true,
		listButtonType: 'normal'
	},
	{
		id: 2,
		name: 'Drive',
		icon: 'drive' as IconTypes,
		path: '/organization-files',
		disabled: true,
		listButtonType: 'normal'
	},
	{
		id: 3,
		name: 'Library',
		icon: 'templates' as IconTypes,
		path: '',
		disabled: false,
		listButtonType: 'normal',
		submenu: true
	},
	{
		id: 4,
		name: 'Members & Access',
		icon: 'supervisorAccount' as IconTypes,
		path: '',
		disabled: false,
		listButtonType: 'normal',
		submenu: true,
		iconLibrary: 'MDI'
	},
	{
		id: 5,
		name: 'Settings',
		icon: 'settings' as IconTypes,
		path: '/settings',
		disabled: false,
		listButtonType: 'normal'
	}
]

// Function to disable elements based on IDs

export function disableElements(elements: Element[], idsToDisable: number[]): Element[] {
	// Loop through each element in the original array
	return elements.map((element) => {
		// Check if the element's ID is present in the list of IDs to disable
		if (idsToDisable.includes(element.id)) {
			// If it is, create a new element object with the disabled property set to true
			element = { ...element, disabled: true }
		}

		// Check if the element has child elements
		if (element.childs && element.childs.length > 0) {
			// If it does, recursively call the function on the child elements
			// Update the child elements with disabled property if their ID is in the list
			element = {
				...element,
				childs: element.childs.map((child) => (idsToDisable.includes(child.id) ? { ...child, disabled: true } : child))
			}
		}

		// Return the original element or the modified element with disabled property
		return element
	})
}

// Function to remove elements based on IDs

export function removeElementsById(elements: Element[], idsToRemove: number[]): Element[] {
	// Use reduce function to accumulate filtered elements
	return elements.reduce((acc: Element[], element) => {
		// Check if the element's ID is not present in the list of IDs to remove
		if (!idsToRemove.includes(element.id)) {
			// If it's not there, add the element to the accumulator

			// Check if the element has child elements
			if (element.childs && element.childs.length > 0) {
				// If it does, filter the child elements based on their IDs
				const filteredChilds = element.childs.filter((child) => !idsToRemove.includes(child.id))
				// Add the element with filtered child elements to the accumulator
				acc.push({ ...element, childs: filteredChilds })
			} else {
				// If it doesn't have child elements, simply add it to the accumulator
				acc.push(element)
			}
		}
		// Return the accumulated array
		return acc
	}, [])
}

// Function to update element paths based on a mapping

export function updatePaths(elements: Element[], newPathMapping: { [key: number]: string }): Element[] {
	// Loop through each element in the original array
	return elements.map((element) => {
		// Check if there's a new path for the element's ID in the mapping object
		const updatedElement = newPathMapping[element.id]
			? { ...element, path: newPathMapping[element.id] } // Update path if found
			: element // Otherwise, keep the element unchanged

		// Check if the element has child elements
		if (updatedElement.childs && updatedElement.childs.length > 0) {
			// If it does, recursively call the function on the child elements
			// Update the child elements' paths using the mapping object
			const updatedChilds = updatedElement.childs.map((child) => (newPathMapping[child.id] ? { ...child, path: newPathMapping[child.id] } : child))

			// Return the updated element with updated child elements
			return { ...updatedElement, childs: updatedChilds }
		}

		// Return the original or updated element
		return updatedElement
	})
}
