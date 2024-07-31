import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from 'react-query'
import { atom } from 'recoil'
import { Entity } from 'types/general'
import { IconTypes } from 'types/icons'

export type EntityInfo = {
	type: Entity,
	id: string | null,
	icon: IconTypes,
	color: string,
	name: string,
	url?: string
	assigned?: string[],
	followers?: string[],
	refetchFunction?: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>
}

export const defaultEntityInfoState: EntityInfo = {
	type: null,
	id: null,
	icon: 'questionHelp',
	color: '',
	name: '',
	url: ''
}

export const EntityType = atom<EntityInfo>({
	key: 'EntityType',
	default: defaultEntityInfoState
})
