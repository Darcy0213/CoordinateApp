import { Box } from '@mui/material'
import { Theme } from '@mui/material/styles'

import { useEffect, useState } from 'react'

import { SetterOrUpdater, useRecoilState, useSetRecoilState } from 'recoil'

import { disableElements, Element, ObjectType, updatePaths, WorkspaceData } from '../../items'

import Header from './header'

import { IconTypes } from '@globalTypes/icons'
import {
	CurrentOrganization,
	emptyWorkspaceInfo,
	ExpandedItemState,
	GlobalTabType,
	LocalTabType,
	NewWorkspaceAtom,
	RightDrawerState,
	WorkspaceInfo
} from 'app/recoil/atoms'
import { useRouter } from 'next/navigation'
import { MenuDivider, SimpleNavigationButton, Title } from '../../lists-items'
import ObjectsSection from '../ObjectsSection'
import { useQueryGetObjects, useQueryGetWorkspacesByOrganizationId } from './useApi'

interface Props {
	theme: Theme
	commonLocalElements: Element[]
	setSelectedGlobalTab: SetterOrUpdater<GlobalTabType>
	globalTabSelected: GlobalTabType
	setCurrentWorkspace: SetterOrUpdater<WorkspaceInfo>
	localTabSelected: LocalTabType
	setExpandedItems: SetterOrUpdater<ExpandedItemState[]>
	expandedItems: ExpandedItemState[]
}

const OrganizationMenu = ({
	setSelectedGlobalTab,
	theme,
	commonLocalElements,
	globalTabSelected,
	setCurrentWorkspace,
	localTabSelected,
	expandedItems,
	setExpandedItems
}: Props) => {
	/* // **Permissions:**
	const { createPermission: createWorkspacePermission } = useOrganizationalGeneralPermissions('Workspace') */
	// **Expandable list:**
	const [currentIdToExpand, setCurrentIdToExpand] = useState<undefined | number>(undefined)
	const { data: dataObjects, refetch: refetchObjects }: { data: any; refetch: any } = useQueryGetObjects(currentIdToExpand)
	const [objects, setDataObjects] = useState<ObjectType[]>([])

	/* // **Workspaces:**
	const {
		refetch: refetchWorkspaces,
		actions: { setWorkspaceRole }
	} = useNewWorkspacePermissions() */
	const setOpenNewWorkspaceModal = useSetRecoilState(NewWorkspaceAtom)
	const [currentOrganization, setCurrentOrganization] = useRecoilState(CurrentOrganization)

	// **Navigation:**
	const setDrawerOpen = useSetRecoilState(RightDrawerState)
	const navigate = useRouter()

	// **Data fetching:**
	const { data: dataWorkspaces, refetch }: { data: any; refetch: any } = useQueryGetWorkspacesByOrganizationId(currentOrganization.id)
	const [workspaces, setWorkspaces] = useState<WorkspaceData[] | null>(null)

	// **Menu configuration:**
	let commonElements = disableElements(commonLocalElements, [1, 5]) // Disable specific elements (e.g., buttons)

	const newPathMapping = {
		2: `/organization-files`, // Map menu item ID 2 to a new path
		3: `/library` // Map menu item ID 3 to a new path
	}
	commonElements = updatePaths(commonElements, newPathMapping) // Update paths for specific menu items

	/* // **Data fetching on state changes:**
	useEffect(() => {
		refetch() // Refetch data when necessary (unclear from context)
	}, [currentOrganization.id, refetchWorkspaces, globalTabSelected]) // Specify dependencies for refetches */

	// **Update workspaces state on data availability:**
	useEffect(() => {
		if (dataWorkspaces?.length > 0) {
			setWorkspaces(dataWorkspaces) // Update workspaces state with fetched data

			//Set organization workspaces in local storage
			localStorage.setItem('workspacesList', JSON.stringify(dataWorkspaces))
		}
	}, [dataWorkspaces]) // Update workspaces only when data changes
	// **Update workspaces state on tab selection:**
	useEffect(() => {
		if (localTabSelected.type === 'Organization') {
			refetch()
		}
	}, [localTabSelected])

	// **Update objects state on data availability:**
	useEffect(() => {
		if (dataObjects && dataObjects.length > 0) {
			setDataObjects(dataObjects) // Update objects state with fetched data for expandable list
		}
	}, [dataObjects])

	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			gap={theme.dimensions.frame.spacing.sm}
		>
			<Header
				theme={theme}
				currentOrganization={currentOrganization}
			/>
			{commonElements.map((element, i) => (
				<SimpleNavigationButton
					key={i}
					path={element.path}
					iconName={element.icon}
					theme={theme}
					name={element.name}
					disabled={element.disabled}
					entityType={element.name}
					parent="Organization"
					submenu={element.submenu}
					onClick={() => {
						setCurrentWorkspace(emptyWorkspaceInfo)
						localStorage.removeItem('currentWorkspace')
					}}
				/>
			))}

			<MenuDivider />
			<Title
				theme={theme}
				name="Objects"
				actionType="Add"
				actionName="Add object"
				disabled
				onClick={() => console.log('Create objects')}
			/>
			<ObjectsSection
				menu="Organization"
				setExpandedItems={setExpandedItems}
				expandedItems={expandedItems}
				theme={theme}
				dataObjects={objects}
				currentIdToExpand={currentIdToExpand}
				setCurrentIdToExpand={setCurrentIdToExpand}
			/>
			<MenuDivider />
			<Title
				theme={theme}
				name="Spaces"
				actionType="Add"
				actionName="Add workspace"
				disabled={/* !createWorkspacePermission */ false}
				onClick={() => setOpenNewWorkspaceModal(true)}
			/>
			{workspaces?.map((workspace, i) => (
				<SimpleNavigationButton
					key={i}
					path={''}
					iconName={workspace.icon as IconTypes}
					theme={theme}
					name={workspace.name}
					iconFromUser
					iconColor={workspace.color}
					entityType="Workspace"
					parent="Workspace"
					onClick={() => {
						setCurrentOrganization({ name: currentOrganization.name, id: workspace.organizationId, image: '' })
						const workspaceInfo = {
							name: workspace.name,
							id: workspace.id,
							icon: workspace.icon,
							color: workspace.color,
							personRole: workspace.personRole,
							organizationId: workspace.organizationId
						}
						setCurrentWorkspace(workspaceInfo)
						setSelectedGlobalTab({ name: '', type: '' })
						setDrawerOpen(false)
						/* setWorkspaceRole(workspace?.personRole) */
						localStorage.setItem('currentWorkspace', JSON.stringify(workspaceInfo))
						navigate.push(`/${workspace?.name}`)
					}}
				/>
			))}
		</Box>
	)
}

export default OrganizationMenu
