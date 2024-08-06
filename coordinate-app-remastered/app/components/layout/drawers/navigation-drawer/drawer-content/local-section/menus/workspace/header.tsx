import { Theme } from '@mui/material/styles'
import { WorkspaceInfo } from 'app/recoil/atoms'
import { useRouter } from 'next/navigation'
import HeaderSection from '../../headers/Header'
interface Props {
	theme: Theme
	currentWorkspace: WorkspaceInfo
}
const Header = ({ theme, currentWorkspace }: Props) => {
	const navigate = useRouter()
	const workspaceInfo = currentWorkspace
	const image = ''
	const name = workspaceInfo?.name
	const icon = workspaceInfo?.icon
	const color = workspaceInfo?.color
	const onClick = () => {
		localStorage.setItem('activeLocalTab', JSON.stringify({ id: '', type: '', isSubmenu: false }))
		navigate.push(`/${workspaceInfo.name}`)
	}
	return (
		<HeaderSection
			theme={theme}
			name={name}
			image={image}
			color={color}
			iconName={icon}
			onClick={onClick}
		/>
	)
}

export default Header
