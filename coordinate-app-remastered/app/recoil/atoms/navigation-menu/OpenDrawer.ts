'use client'
import { atom } from 'recoil'

export const OpenDrawerFromTopbar = atom<boolean | null>({
	key: 'OpenDrawerFromTopbar',
	default: true
})

export const OpenDrawerFromHover = atom<boolean | null>({
	key: 'OpenDrawerFromHover',
	default: null
})
