import { Theme } from '@mui/material/styles'

import { DefaultColor } from '@globalTypes/general'
import { OrganizationInfo } from 'app/recoil/atoms'
import HeaderSection from '../../headers/Header'

interface Props {
	theme: Theme
	currentOrganization: OrganizationInfo
}
const Header = ({ theme, currentOrganization }: Props) => {
	return (
		<HeaderSection
			theme={theme}
			name={currentOrganization.name}
			image={''}
			color={DefaultColor}
			iconName={'company'}
			onClick={() => console.log('onClick')}
		/>
	)
}

export default Header
