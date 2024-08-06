import { ChipColor } from '@globalTypes/general'
import { Theme } from '@mui/material/styles'
import { CurrentOrganization, CurrentWorkspace, ExpandedItemState, GlobalTabType, LocalTabType } from 'app/recoil/atoms'
import { useEffect, useState } from 'react'
import { SetterOrUpdater, useRecoilState, useRecoilValue } from 'recoil'
import LocalSectionStyled from './LocalSectionStyled'
import { OrganizationData, Workspace, commonLocalElements } from './items'
import { ConfigurationMenu, HomeMenu, Library, MembersAndAccess, OrganizationMenu, WorkspaceMenu } from './menus'
import { useQueryGetOrganizations } from './menus/home/useApi'

interface Props {
	theme: Theme
	globalTabSelected: GlobalTabType
	setActiveGlobalTab: SetterOrUpdater<GlobalTabType>
	setExpandedItems: SetterOrUpdater<ExpandedItemState[]>
	expandedItems: ExpandedItemState[]

	localTabSelected: LocalTabType
	setLocalTab: SetterOrUpdater<LocalTabType>
}

const LocalSection = ({ theme, localTabSelected, globalTabSelected, setActiveGlobalTab, setExpandedItems, expandedItems, setLocalTab }: Props) => {
	const [currentWorkspace, setCurrentWorkspace] = useRecoilState(CurrentWorkspace)
	const currentOrganization = useRecoilValue(CurrentOrganization)
	/* console.log('currentOrganization******', currentOrganization) */
	/* //Use the const refetchPermissions to refetch the permissions when a change is detected
	const { refetch: refetchPermissions } = useNewWorkspacePermissions() */

	const { data: organizationData, refetch }: { data: any; refetch: any } = useQueryGetOrganizations() // Fetch organizations data

	const [organizations, setOrganizations] = useState<OrganizationData[] | null>(null) // Manage organizations state
	useEffect(() => {
		if (globalTabSelected.name === 'Home') {
			refetch() // Refetch organizations data on component mount
		}
	}, [globalTabSelected.name])

	// **Update organizations state on data availability:**
	useEffect(() => {
		setOrganizations(organizationData) // Set organizations state with fetched data
	}, [organizationData])

	useEffect(() => {
		//Extract all workspaces from the fetched organizations without duplicates
		const allWorkspaces = organizations?.reduce((acc, org) => {
			org?.workspaces?.forEach((ws: Workspace) => {
				if (!acc.find((w: Workspace) => w.id === ws.id)) {
					acc.push(ws)
				}
			})
			return acc
		}, [] as Workspace[])

		if (allWorkspaces?.length) {
			localStorage.setItem('workspacesList', JSON.stringify(allWorkspaces))
		}

		//Update current workspace when organizations are fetched due to changes in roles
		const foundOrg = organizations?.find((org) => org.id === currentOrganization.id)

		if (foundOrg) {
			// Find the current workspace in the fetched organizations
			const workspace = foundOrg.workspaces.find((ws) => ws.id === currentWorkspace.id)
			// Update the current workspace with the fetched data
			setCurrentWorkspace({
				name: workspace?.name as string,
				id: workspace?.id as string,
				icon: workspace?.icon as string,
				color: workspace?.color as ChipColor,
				personRole: workspace?.personRole as string,
				organizationId: currentOrganization.id
			})
		}
	}, [organizations])

	/* useEffect(() => {
		refetchPermissions && refetch() // Refetch organizations if a change in permissions is detected
	}, [refetchPermissions]) */

	return (
		<LocalSectionStyled className="local_section">
			{globalTabSelected.name === 'Home' && (
				<HomeMenu
					theme={theme}
					commonLocalElements={commonLocalElements}
					setSelectedGlobalTab={setActiveGlobalTab}
					setExpandedItems={setExpandedItems}
					expandedItems={expandedItems}
					organizations={organizations}
				/>
			)}
			{globalTabSelected.type === 'Organization' && !localTabSelected.isSubmenu && (
				<OrganizationMenu
					theme={theme}
					commonLocalElements={commonLocalElements}
					setSelectedGlobalTab={setActiveGlobalTab}
					globalTabSelected={globalTabSelected}
					setCurrentWorkspace={setCurrentWorkspace}
					localTabSelected={localTabSelected}
					setExpandedItems={setExpandedItems}
					expandedItems={expandedItems}
				/>
			)}
			{localTabSelected.parent === 'Workspace' && !localTabSelected.isSubmenu && (
				<WorkspaceMenu
					theme={theme}
					commonLocalElements={commonLocalElements}
					setExpandedItems={setExpandedItems}
					expandedItems={expandedItems}
					currentWorkspace={currentWorkspace}
					globalTabSelected={globalTabSelected}
					setGlobalTabSelected={setActiveGlobalTab}
					localTabSelected={localTabSelected}
				/>
			)}
			{localTabSelected.type === 'Members & Access' && (
				<MembersAndAccess
					theme={theme}
					parent={localTabSelected.parent === 'Workspace' ? 'Workspace' : 'Organization'}
					setLocalTab={setLocalTab}
					currentOrganization={currentOrganization}
					currentWorkspace={currentWorkspace}
				/>
			)}
			{localTabSelected.type === 'Library' && (
				<Library
					theme={theme}
					parent={localTabSelected.parent === 'Workspace' ? 'Workspace' : 'Organization'}
					setLocalTab={setLocalTab}
					currentOrganization={currentOrganization}
					currentWorkspace={currentWorkspace}
				/>
			)}
			{globalTabSelected.name === 'Settings' && (
				<ConfigurationMenu
					theme={theme}
					setCurrentWorkspace={setCurrentWorkspace}
				/>
			)}
		</LocalSectionStyled>
	)
}

export default LocalSection
