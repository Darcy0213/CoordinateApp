import { DefaultColor } from '@globalTypes/general'
import { Box } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { LocalTabType, OrganizationInfo, WorkspaceInfo } from 'app/recoil/atoms'
import { useRouter } from 'next/navigation'
import { SetterOrUpdater } from 'recoil'
import HeaderSubmenu from '../../headers/SubmenuHeader'
import { librarySubmenu, updatePaths } from '../../items'
import { MenuDivider, SimpleNavigationButton } from '../../lists-items'

interface Props {
	theme: Theme
	currentWorkspace: WorkspaceInfo
	parent: 'Organization' | 'Workspace'
	setLocalTab: SetterOrUpdater<LocalTabType>
	currentOrganization: OrganizationInfo
}

const Library = ({ theme, currentWorkspace, parent, setLocalTab, currentOrganization }: Props) => {
	let subMenuItems = librarySubmenu
	const newPathMapping = {
		1: parent === 'Workspace' ? `${currentWorkspace.name}/library/types` : `/library/types`,
		2: parent === 'Workspace' ? `${currentWorkspace.name}/library/types/properties` : `/library/types/properties`,
		3: parent === 'Workspace' ? `${currentWorkspace.name}/library/types/relations` : `/library/types/relations`

		// Map menu item ID 1 to a new path
	}
	subMenuItems = updatePaths(subMenuItems, newPathMapping) // Update paths for specific menu items
	const navigate = useRouter()

	return (
		<Box
			gap={theme.dimensions.frame.spacing.xs}
			display={'flex'}
			flexDirection={'column'}
		>
			<HeaderSubmenu
				color={parent === 'Workspace' ? currentWorkspace.color : DefaultColor}
				parentName={parent === 'Workspace' ? currentWorkspace.name : currentOrganization.name}
				theme={theme}
				parentIconName={parent === 'Workspace' ? currentWorkspace.icon : 'company'}
				icon="templates"
				name="Library"
				onClick={() => {
					parent === 'Workspace'
						? setLocalTab({ id: currentWorkspace.name, type: 'Workspace', parent: 'Workspace', isSubmenu: false })
						: setLocalTab({ id: currentOrganization.id, type: 'Organization', parent: 'Organization', isSubmenu: false })
				}}
			/>
			<SimpleNavigationButton
				entityType="Library"
				parent={parent}
				parentIconName="templates"
				name="Overview"
				theme={theme}
				path={''}
				submenu={true}
				onClick={() => {
					navigate.push(parent === 'Workspace' ? `/${currentWorkspace.name}/library` : `/library`)
				}}
			/>
			<MenuDivider />
			{subMenuItems.map((element, i) => (
				<SimpleNavigationButton
					key={i}
					path={element.path}
					iconName={element.icon}
					theme={theme}
					name={element.name}
					parentIconName="templates"
					entityType={'Library'}
					parentPath={parent === 'Workspace' ? `/${currentWorkspace.name}/library` : `/library`}
					parent={parent}
					disabled={element.disabled}
					submenu={true}
					iconLibrary={element.iconLibrary}
				/>
			))}
		</Box>
	)
}

export default Library
