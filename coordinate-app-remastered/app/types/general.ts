import { color, contrast, style } from '@common/chips/types'

import { ObjectTypesOptions, TypeAncestor } from './objectType'
import { PropertyConfiguration } from './property'

/* All entities type */
export type Entity = 'project' | 'task' | 'workspace' | 'task_type' | 'project_type' | 'file_folder' | 'file' | null

/* Base interface for common parameters in req.body and req.query */
export interface GeneralParamsRequest {
	personRole: string
	workspaceId: string
}

export interface ChipColor {
	color: color
	variant: style
	contrast: contrast
}

export interface propertyType {
	id: number
	name: string
	icon: string
	color: {
		color: string
		variant: string
		contrast: string
	}
	properties: string[]
	ancestors: number[]
}

export const DefaultColor: ChipColor = { color: 'gray', variant: '30%', contrast: 'low' }

export interface GeneralData {
	typesList: ObjectTypesOptions
	propertiesList: PropertyConfiguration[]
	propertyTypes: propertyType[]
}

export interface GeneralDataFromDB {
	typesList: ObjectTypesOptions
	propertiesList: PropertyConfiguration[]
	ancestorsTypes: TypeAncestor[]
	propertyTypes: propertyType[]
}
