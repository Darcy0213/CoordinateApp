import { atom } from 'recoil'
export type sharePermissions = {
	sharePermission: boolean
	deletePermission: boolean
	editRolePermission: boolean
}

export const SharePermissions = atom<sharePermissions>({
	key: 'SharePermissions',
	default: { sharePermission: false, deletePermission: false, editRolePermission: false }
})
