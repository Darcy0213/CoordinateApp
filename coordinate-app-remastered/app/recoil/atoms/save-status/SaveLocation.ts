'use client'
import { LocationEntities } from '@globalTypes/entities'
import { ChipColor, DefaultColor } from '@globalTypes/general'
import { IconTypes } from '@globalTypes/icons'
import { atom } from 'recoil'

export type LocationInfo = {
	entity: LocationEntities
	id: string | number | null
	icon: IconTypes
	color: ChipColor
	name: string
	personRole?: string
}

export const defaultLocation: LocationInfo = {
	entity: null,
	id: null,
	icon: 'questionHelp',
	color: DefaultColor,
	name: ''
}

export const SaveLocation = atom<LocationInfo>({
	key: 'SaveLocation',
	default: defaultLocation
})
