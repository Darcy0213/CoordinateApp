import { CurrentWorkspace } from 'app/recoil/atoms'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { useRecoilValue } from 'recoil'

const useGetLocationInfo = () => {
	//Location is a hook from react-router-dom that returns the location object that represents the current URL.
	const urlParams = useSearchParams()

	const typeId = urlParams.get('typeId')

	//Workspace information

	const [workspaceRole, setWorkspaceRole] = useState<string>('')
	const workspaceInfo = localStorage.getItem('currentWorkspace')
	const workspaceInfoAtom = useRecoilValue(CurrentWorkspace)
	const workspace = JSON.parse(workspaceInfo as string)
	const workspaceId: string = JSON.parse(workspaceInfo as string)?.id
	const workspaceName: string = JSON.parse(workspaceInfo as string)?.name

	//Local and global tabs selected in navigation drawer
	//Globals are the vertical tabs in the navigation drawer
	//Locals are the horizontal tabs in the navigation drawer

	const activeLocalTab = localStorage.getItem('activeLocalTab')
	const localTab = JSON.parse(activeLocalTab as string)

	const activeGlobalTab = localStorage.getItem('activeGlobalTab')
	const globalTab = JSON.parse(activeGlobalTab as string)

	//Organization information

	const currentOrganization = localStorage.getItem('currentOrganization')
	const organization = JSON.parse(currentOrganization as string)
	const organizationId: string = JSON.parse(workspaceInfo as string)?.organizationId

	//User information

	const userId = localStorage.getItem('userId')
	//Set the Personrole  that represents the role of the user in the workspace.
	useEffect(() => {
		if (workspaceInfoAtom.personRole === '') {
			setWorkspaceRole(JSON.parse(workspaceInfo as string)?.personRole)
		} else {
			setWorkspaceRole(workspaceInfoAtom.personRole)
		}
	}, [workspaceInfoAtom])

	return {
		localTab,
		globalTab,
		organization,
		workspace,
		organizationId,
		userId,
		workspaceId,
		workspaceName,
		workspaceRole,

		location,
		typeId
	}
}

export default useGetLocationInfo
