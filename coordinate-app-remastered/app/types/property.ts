import { DateFormats, DatePropertyValueOnObject } from './date'

export type PossibleValues = string | string[] | number | number[] | boolean | boolean[] | null | DatePropertyValueOnObject

export type PropertyValue =
	| PossibleValues
	| Record<string, PossibleValues> //To be able JSONs as values
	| Record<string, PossibleValues>[] //To be able to store arrays of JSONs (sections)

interface PropertyType {
	id: string
	name: string
}

export interface PropertyAttributes {
	label: string
	hidden: boolean
	readOnly: boolean
	required: boolean
	description: string
	placeholder: string
	defaultValue: PropertyValue

	choicesLimit?: number //Choice Select property
	choicesData?: PropertyValue[] //Choice Select property
	subFields?: string[] // Section property
	iterations?: number // Section property

	decimals?: 0 | 1 | 2 | 3 | 4 // Number property
	format?: 'percent' | 'number' // Number property
	separator?: 'local' | 'comma-period' | 'comma-period' | 'period-comma' | 'space-comma' | 'space-period' // Number property

	dateFormat?: DateFormats // Date property
	timeZone?: boolean // Date property
	multiple?: boolean // Date property
}

export interface PropertyData {
	type: string
	properties: PropertyAttributes
	validations: Record<string, any>
	visibility_rules: Record<string, any>
}

export interface CreateProperty {
	name: string
	data: PropertyData
	tagsIds: string[]
	propertyTypeId: string
	typeIdUpdate: number
}

export interface PropertyConfiguration {
	id: string
	name: string
	default: boolean
	locked: boolean
	isActive: boolean
	data: PropertyData
	fieldTypeId: PropertyType
	fieldLabelsTags: string[]
}

export interface ResponseDataCreateProperty {
	data: {
		newProperty?: {
			id: string
		}
	}
}
