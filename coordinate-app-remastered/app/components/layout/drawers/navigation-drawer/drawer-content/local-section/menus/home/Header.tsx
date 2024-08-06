import { Theme } from '@mui/material/styles'

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

import { HeaderStructure } from '../../headers'
import { useQueryGetUserData } from './useApi'
interface Props {
	theme: Theme
	navigate: AppRouterInstance
}
const Header = ({ theme, navigate }: Props) => {
	const { data: response = {} as any } = useQueryGetUserData()

	const profileInfo = response
	const icon = ''
	const name = profileInfo?.firstName + ' ' + profileInfo?.lastName
	const image = profileInfo?.image
	const color = profileInfo?.color
	const onClick = () => {
		navigate.push('/profile')
	}
	return (
		<HeaderStructure
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
