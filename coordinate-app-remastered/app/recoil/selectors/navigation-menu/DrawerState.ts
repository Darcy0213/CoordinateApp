import { OpenDrawerFromHover, OpenDrawerFromTopbar } from 'app/recoil/atoms'
import { selector } from 'recoil'

export type DrawerMode = 'pinned' | 'hovered' | null

export const DrawerWidthOpen: number = 270
export const DrawerWidthClosed: number = 0

export interface DrawerStateType {
	open: boolean
	mode: DrawerMode
	width: number
}

export const DrawerState = selector<DrawerStateType>({
	key: 'DrawerState',
	get: ({ get }): DrawerStateType => {
		const fromTopbar = get(OpenDrawerFromTopbar)

		const fromHover = get(OpenDrawerFromHover)
		if (fromTopbar) return { open: true, mode: 'pinned', width: DrawerWidthOpen }
		if (fromHover) return { open: true, mode: 'hovered', width: 0 }
		return { open: false, mode: null, width: DrawerWidthClosed }
	}
})
