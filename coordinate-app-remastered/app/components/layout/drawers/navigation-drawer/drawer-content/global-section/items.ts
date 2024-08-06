import { IconTypes } from '@globalTypes/icons'

export interface Organization {
	id: string
	name: string
}

export const globalElements = [
	{
		id: 1,
		name: 'Home',
		icon: 'homeFilled' as IconTypes,
		path: '/home',
		iconLibrary: 'MDI'
	},
	{
		id: 2,
		name: 'Search',
		icon: 'searchFilled' as IconTypes,
		path: '',
		disabled: true,
		iconLibrary: 'MDI'
	},
	{
		id: 3,
		name: 'Notifications',
		icon: 'notificationOutlined' as IconTypes,
		path: ''
	},
	{
		id: 4,
		name: 'Favorites',
		icon: 'starFilled' as IconTypes,
		path: '',
		disabled: true,
		iconLibrary: 'MDI'
	}
]

export const configurationElements = [
	{
		id: 1,
		name: 'Help',
		icon: 'help' as IconTypes,
		path: '/help',
		disabled: true
	},
	{
		id: 2,
		name: 'Settings',
		icon: 'settings' as IconTypes,
		path: '',
		disabled: false
	}
]

export const organizations = [
	{
		id: 1,
		name: 'Organization 1',
		icon: 'organization' as IconTypes,
		path: '/organization1'
	}
]
