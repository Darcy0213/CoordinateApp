'use client'
import { atom } from 'recoil'
export const SaveOnDatabaseStatus = atom({
	key: 'SaveOnDatabaseStatus',
	default: false as boolean
})
