import { Box } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import { SetterOrUpdater, useRecoilState } from 'recoil'

import { CurrentOrganization, GlobalTabType, LocalTabType, NotificationsOpen } from 'app/recoil/atoms'
import NotificationsButton from './NotificationsButton'
import TabButton from './TabButton'
import { Organization, configurationElements, globalElements } from './items'
import { useQueryGetOrganizations } from './useApi'

interface Props {
	theme: Theme
	globalTabSelected: GlobalTabType
	setActiveGlobalTab: SetterOrUpdater<GlobalTabType>
	setLocalTab: SetterOrUpdater<LocalTabType>
}

const GlobalSection = ({ theme, setLocalTab, globalTabSelected, setActiveGlobalTab }: Props) => {
	const { data: dataOrganizations }: { data: any } = useQueryGetOrganizations()

	const [organizations, getOrganizations] = useState<Organization[] | null>(null)

	const [currentOrganization, setCurrentOrganization] = useRecoilState(CurrentOrganization)
	const [notificationsOpen, setNotificationsOpen] = useRecoilState(NotificationsOpen)
	// useEffect for data handling
	useEffect(() => {
		// Check if dataOrganizations has data
		if (dataOrganizations?.length > 0) {
			// Update organizations state with fetched data
			getOrganizations(dataOrganizations)
		}
	}, [dataOrganizations]) // This effect runs whenever dataOrganizations changes

	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			width={'fit-content'}
			justifyContent={'space-between'}
			paddingLeft={theme.dimensions.drawer.padding.xs}
			paddingY={theme.dimensions.drawer.padding.xs}
		>
			<Box
				className="global_elements"
				display={'flex'}
				flexDirection={'column'}
				gap={theme.dimensions.drawer.spacing.xs}
				alignItems={'center'}
				width={'fit-content'}
			>
				{globalElements.map((element) =>
					element.name === 'Notifications' ? (
						<NotificationsButton
							key={element.id}
							onClick={() => setNotificationsOpen(!notificationsOpen)}
							disabled={/* element.disabled */ true}
							isActive={notificationsOpen}
							theme={theme}
							name={element.name}
						/>
					) : (
						<TabButton
							iconLibrary={element.iconLibrary as 'MUI' | 'MDI'}
							theme={theme}
							key={element.id}
							name={element.name}
							iconName={element.icon}
							path={element.path}
							isActive={globalTabSelected.name === element.name}
							onClick={() => {
								setActiveGlobalTab({ name: element.name, type: 'Global' })
								setLocalTab({ id: '', type: '', parent: '', isSubmenu: false })
								localStorage.setItem('activeGlobalTab', JSON.stringify({ name: element.name, type: 'Global' }))
								if (element.name === 'Home') {
									localStorage.setItem('currentOrganization', JSON.stringify({ name: '', id: '', image: '' }))
									localStorage.setItem('activeLocalTab', JSON.stringify({ id: '', type: '', parent: '', isSubmenu: false }))
								}
							}}
							disabled={element.disabled}
						/>
					)
				)}

				{organizations?.map((organization) => (
					<TabButton
						theme={theme}
						key={organization.id}
						name={organization.name}
						iconName={'company'}
						path={``}
						isActive={globalTabSelected.name === organization.name || currentOrganization.id === organization.id}
						onClick={() => {
							setActiveGlobalTab({ name: organization.name, type: 'Organization' })
							localStorage.setItem('activeGlobalTab', JSON.stringify({ name: organization.name, type: 'Organization' }))
							setLocalTab({ id: organization.id, type: 'Organization', parent: 'Organization', isSubmenu: false })
							setCurrentOrganization({ name: organization.name, id: organization.id, image: '' })
							localStorage.setItem('currentOrganization', JSON.stringify({ name: organization.name, id: organization.id, image: '' }))
						}}
					/>
				))}
			</Box>

			<Box
				className="configuration_elements"
				display={'flex'}
				flexDirection={'column'}
				gap={theme.dimensions.drawer.spacing.xs}
				alignItems={'center'}
				width={'fit-content'}
			>
				{configurationElements.map((element) => (
					<TabButton
						theme={theme}
						key={element.id}
						name={element.name}
						iconName={element.icon}
						path={element.path}
						disabled={element.disabled}
						isActive={globalTabSelected.name === element.name}
						onClick={() => {
							setLocalTab({ id: '', type: '', parent: '', isSubmenu: false })
							setActiveGlobalTab({ name: element.name, type: 'Global' })
						}}
					/>
				))}
			</Box>
		</Box>
	)
}

export default GlobalSection
