'use client'
import { atom } from 'recoil'

export type GlobalTabType = { name: string; type: string }
export type LocalTabType = { id: string; type: string; parent: string; isSubmenu: boolean }

export const GlobalTabSelected = atom<GlobalTabType>({
	key: 'GlobalTabSelected',
	default: { name: 'Home', type: 'Global' }
})

export const CommonLocalTabSelected = atom<LocalTabType>({
	key: 'CommonLocalTabSelected',
	default: { id: '', type: '', parent: '', isSubmenu: false }
})

export interface ExpandedItemState {
	idItem: string
	menu: string
	type: string
	parent: string
}
export const ExpandedItems = atom<ExpandedItemState[]>({
	key: 'ExpandedItems',
	default: []
})
