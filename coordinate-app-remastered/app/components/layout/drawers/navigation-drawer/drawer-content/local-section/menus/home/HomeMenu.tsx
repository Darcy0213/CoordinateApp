import { IconTypes } from '@globalTypes/icons'
import { Box } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { CurrentOrganization, CurrentWorkspace, ExpandedItemState, GlobalTabType, RightDrawerState, WorkspaceInfo } from 'app/recoil/atoms'
import { useRouter } from 'next/navigation'
import { SetterOrUpdater, useSetRecoilState } from 'recoil'
import { Element, OrganizationData, disableElements, removeElementsById } from '../../items'
import { ExpandableNavigationButton, MenuDivider, SimpleNavigationButton, Title } from '../../lists-items'
import Header from './Header'

interface Props {
	theme: Theme
	commonLocalElements: Element[]
	setSelectedGlobalTab: SetterOrUpdater<GlobalTabType>
	setExpandedItems: SetterOrUpdater<ExpandedItemState[]>
	expandedItems: ExpandedItemState[]
	organizations: OrganizationData[] | null
}

const HomeMenu = ({ theme, commonLocalElements, setSelectedGlobalTab, setExpandedItems, expandedItems, organizations }: Props) => {
	// **Navigation state and actions:**
	const setDrawerOpen = useSetRecoilState(RightDrawerState) // Set right drawer state
	const setCurrentOrganization = useSetRecoilState(CurrentOrganization) // Set current organization state
	const setCurrentWorkspace = useSetRecoilState(CurrentWorkspace) // Set current workspace state

	const navigate = useRouter() // Perform navigation

	// **Menu configuration:**
	let commonElements = disableElements(commonLocalElements, [1, 2, 3, 5]) // Disable specific menu elements
	commonElements = removeElementsById(commonElements, [4]) // Remove elements with ID 4

	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			gap={theme.dimensions.frame.spacing.xs}
		>
			<Header
				theme={theme}
				navigate={navigate}
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
					parent="Home"
				/>
			))}
			<MenuDivider />
			<Title
				theme={theme}
				name="OBJECTS"
				actionType="Add"
				actionName="Add object"
				onClick={() => console.log('In progress')}
				disabled
			/>
			<Title
				theme={theme}
				name="SPACES"
				actionType="Add"
				actionName="Add space"
				onClick={() => console.log('In progress')}
				disabled
			/>
			<MenuDivider />
			<Title
				theme={theme}
				name={'SHARED WITH ME'}
			/>

			{organizations !== null &&
				organizations?.length > 0 &&
				organizations?.map((organization, i) => (
					<Box
						key={i}
						gap={theme.dimensions.frame.spacing.xs}
						flexDirection={'column'}
						display={'flex'}
					>
						<ExpandableNavigationButton
							iconName={'company'}
							theme={theme}
							name={organization.name}
							id={organization.id}
							menu="Home"
							childType="Workspace"
							setExpandedItems={setExpandedItems}
							expandedItems={expandedItems}
							isParent={true}
							lastParent={true}
						/>
						<Box>
							{expandedItems.some((item) => item.idItem === organization.id) &&
								organization?.workspaces?.map((workspace, j) => (
									<SimpleNavigationButton
										key={j}
										path={''}
										iconName={workspace.icon as IconTypes}
										theme={theme}
										name={workspace.name}
										childLevel={1}
										iconFromUser={true}
										iconColor={workspace.color}
										entityType="Workspace"
										parent="Workspace"
										onClick={() => {
											setCurrentOrganization({ name: organization.name, id: organization.id, image: '' })
											const workspaceInfo: WorkspaceInfo = {
												name: workspace.name,
												id: workspace.id,
												icon: workspace.icon,
												color: workspace.color,
												personRole: workspace.personRole,
												organizationId: organization.id
											}

											setCurrentWorkspace(workspaceInfo)
											setSelectedGlobalTab({ name: '', type: '' })
											setDrawerOpen(false)
											localStorage.setItem('currentOrganization', JSON.stringify({ name: organization.name, id: organization.id, image: '' }))
											localStorage.setItem('currentWorkspace', JSON.stringify(workspaceInfo))
											navigate.push(`/${workspace?.name}`)
										}}
									/>
								))}
						</Box>
					</Box>
				))}
		</Box>
	)
}

export default HomeMenu
