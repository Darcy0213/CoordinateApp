'use client'
import { atom } from 'recoil'
export const ChangeBackground = atom<boolean>({
	key: 'ChangeBackground',
	default: false
})
