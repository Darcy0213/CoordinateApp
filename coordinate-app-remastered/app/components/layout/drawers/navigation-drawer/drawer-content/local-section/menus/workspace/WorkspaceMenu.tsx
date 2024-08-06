import { Box, Divider } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { Element, ObjectType, disableElements, updatePaths } from '../../items'

/* import useWorkspacePermissions from 'hooks/permissions/workspace/useWorkspacePermissions' */
import { useEffect, useState } from 'react'
import { SetterOrUpdater } from 'recoil'

import Header from './header'

import useGetLocationInfo from '@hooks/useGetLocationInfo'
import { ExpandedItemState, GlobalTabType, LocalTabType, WorkspaceInfo } from 'app/recoil/atoms'
import { SimpleNavigationButton, Title } from '../../lists-items'
import ObjectsSection from '../ObjectsSection'
import { useQueryGetObjects } from './useApi'

interface Props {
	theme: Theme
	commonLocalElements: Element[]
	setExpandedItems: SetterOrUpdater<ExpandedItemState[]>
	expandedItems: ExpandedItemState[]
	globalTabSelected: GlobalTabType
	setGlobalTabSelected: SetterOrUpdater<GlobalTabType>
	currentWorkspace: WorkspaceInfo
	localTabSelected: LocalTabType
}

const WorkspaceMenu = ({
	theme,
	globalTabSelected,
	localTabSelected,
	commonLocalElements,
	setExpandedItems,
	expandedItems,
	currentWorkspace,
	setGlobalTabSelected
}: Props) => {
	const [workspaceInfo, setWorkspaceInfo] = useState(currentWorkspace)
	const { workspaceRole } = useGetLocationInfo()
	// **Permissions:**
	/* const { updatePermission } = useWorkspacePermissions(
		workspaceRole, // Use person's role for permission checks
		'Workspace' // Specify workspace permission type
	) */

	// **Expandable list:**
	const [currentIdToExpand, setCurrentIdToExpand] = useState<undefined | number>(undefined)

	// **Data fetching and state management:**
	const { data: dataObjects, refetch: refetchObjects }: { data: any; refetch: any } = useQueryGetObjects(
		workspaceInfo.id, // Use workspace ID from navigation state
		workspaceInfo.personRole, // Use user's role for data filtering
		currentIdToExpand // Consider current expanded item ID
	)
	const [objects, setDataObjects] = useState<ObjectType[]>([])

	// **Menu configuration:**
	let commonElements = disableElements(commonLocalElements, [1, 5]) // Disable specific elements (e.g., buttons)

	const newPathMapping = {
		2: `/${workspaceInfo.name}/drive`, // Map menu item ID 2 to workspace drive path
		3: `/${workspaceInfo.name}/library` // Map menu item ID 3 to workspace library path
	}
	commonElements = updatePaths(commonElements, newPathMapping) // Update paths for specific menu items based on workspace name

	// **Data fetching on state changes:**
	useEffect(() => {
		refetchObjects() // Refetch data when workspace ID or global tab selection changes
		setWorkspaceInfo(currentWorkspace) // Update workspace info state
	}, [currentWorkspace, globalTabSelected, localTabSelected])

	// **Update objects state on data availability:**
	useEffect(() => {
		if (dataObjects && dataObjects.length > 0) {
			setDataObjects(dataObjects) // Update objects state with fetched data for expandable list
		}
	}, [dataObjects])

	useEffect(() => {
		refetchObjects()
		setGlobalTabSelected({ name: '', type: '' })
		localStorage.setItem('activeGlobalTab', JSON.stringify({ name: '', type: '' }))
	}, [])

	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			gap={theme.dimensions.frame.spacing.xs}
		>
			<Header
				theme={theme}
				currentWorkspace={currentWorkspace}
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
					parent="Workspace"
					submenu={element.submenu}
				/>
			))}
			<Divider sx={{ height: '1px' }} />
			<Title
				theme={theme}
				name="Objects"
				actionType="Add"
				actionName="Add object"
				disabled={/* !updatePermission */ false}
				onClick={() => console.log('Create objects')}
			/>
			<ObjectsSection
				menu="Workspace"
				setExpandedItems={setExpandedItems}
				expandedItems={expandedItems}
				theme={theme}
				dataObjects={objects}
				currentIdToExpand={currentIdToExpand}
				setCurrentIdToExpand={setCurrentIdToExpand}
			/>
		</Box>
	)
}

export default WorkspaceMenu
