'use client'
import { ChipColor, DefaultColor } from '@globalTypes/general'
import { atom } from 'recoil'

export type OrganizationInfo = {
	name: string
	id: string
	image: string
}

export const CurrentOrganization = atom<OrganizationInfo>({
	key: 'currentOrganization',
	default: { name: '', id: '', image: '' }
})

export type WorkspaceInfo = {
	name: string
	id: string
	icon: string
	color: ChipColor
	personRole: string
	organizationId: string
}
export const emptyWorkspaceInfo: WorkspaceInfo = {
	name: '',
	id: '',
	icon: '',
	color: DefaultColor,
	personRole: '',
	organizationId: ''
}

export const CurrentWorkspace = atom<WorkspaceInfo>({
	key: 'currentWorkspace',
	default: emptyWorkspaceInfo
})

export const NotificationsOpen = atom({
	key: 'notificationsOpen',
	default: false
})

export const NotificationsNumber = atom({
	key: 'notificationsNumber',
	default: 0
})
