import { DefaultColor } from '@globalTypes/general'
import { Box, Divider } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { LocalTabType, OrganizationInfo, WorkspaceInfo } from 'app/recoil/atoms'
import { SetterOrUpdater } from 'recoil'
import HeaderSubmenu from '../../headers/SubmenuHeader'
import { MembersSubmenu, updatePaths } from '../../items'
import { SimpleNavigationButton } from '../../lists-items'

interface Props {
	theme: Theme
	currentWorkspace: WorkspaceInfo
	parent: 'Organization' | 'Workspace'
	setLocalTab: SetterOrUpdater<LocalTabType>
	currentOrganization: OrganizationInfo
}
const MembersAndAccess = ({ theme, parent, setLocalTab, currentWorkspace, currentOrganization }: Props) => {
	let subMenuItems = MembersSubmenu
	const newPathMapping = {
		1: parent === 'Workspace' ? `/${currentWorkspace.name}/members` : '/members',
		2: parent === 'Workspace' ? `/${currentWorkspace.name}/groups` : '/groups'
	}
	subMenuItems = updatePaths(subMenuItems, newPathMapping)
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
				icon="groups"
				name="Members & Access"
				onClick={() => {
					parent === 'Workspace'
						? setLocalTab({ id: currentWorkspace.name, type: 'Workspace', parent: 'Workspace', isSubmenu: false })
						: setLocalTab({ id: currentOrganization.id, type: 'Organization', parent: 'Organization', isSubmenu: false })
				}}
			/>
			<SimpleNavigationButton
				entityType="Members & Access"
				parent={parent}
				name="Overview"
				theme={theme}
				path={``}
				submenu={true}
				disabled={true}
			/>
			<Divider sx={{ height: '1px' }} />
			{subMenuItems.map((element, i) => (
				<SimpleNavigationButton
					key={i}
					path={element.path}
					iconName={element.icon}
					theme={theme}
					name={element.name}
					parentIconName="groups"
					entityType={'Members & Access'}
					parent={parent}
					disabled={element.disabled}
					submenu={true}
					parentPath=""
				/>
			))}
		</Box>
	)
}

export default MembersAndAccess
