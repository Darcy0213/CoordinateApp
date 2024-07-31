'use client'
import { atom } from 'recoil'

export type LocationOptions = {
	mode: 'create' | 'edit' | null
	entity?: 'object' | 'type' | null
	id?: string
}

export const defaultLocationOptions: LocationOptions = {
	mode: null
}

export const LocationOnContainer = atom<LocationOptions>({
	key: 'LocationOnContainer',
	default: defaultLocationOptions
})
