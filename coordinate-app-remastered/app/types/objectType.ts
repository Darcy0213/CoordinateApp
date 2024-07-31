import { IconTypes } from '@common/icons/types'
import { ChipColor } from './general'

export interface ObjectTypeBase {
	id: number
	name: string
	icon: IconTypes | string
	color: ChipColor
	personRole?: string
}

export interface ObjectType extends ObjectTypeBase {
	properties: string[]
	type: 'organization' | 'workspace' | 'type'
	ancestors?: number[]
}

export type ObjectTypesOptions = ObjectType[]

interface TypeSettings {
	general: {
		name: string
	}
	appearance: {
		color: ChipColor //  cambiar con lo de los iconos @darcy
		iconName: string
	}
}

export interface typeData {
	id: number
	settings: TypeSettings
	MaxGroupHierarchy: number
	personRole: string
}

export interface TypeAncestor {
	typeId: number
	ancestorsIds: number[]
}
