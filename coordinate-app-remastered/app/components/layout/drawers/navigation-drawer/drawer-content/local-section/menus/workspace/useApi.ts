import ApiAxios from '@api/ApiAxios'
import { useQuery } from 'react-query'

export const useQueryGetObjects = (workspaceId: string, personRole: string, fatherType?: number) => {
	const url = fatherType
		? `/menu/types?fatherTypeId=${fatherType}&workspaceId=${workspaceId}&personRole=${personRole}`
		: `/menu/types?workspaceId=${workspaceId}&personRole=${personRole}`
	return useQuery(
		['WorkspaceTypes', { fatherType }, personRole],

		async () => {
			return await ApiAxios.get({ route: url })
		}
	)
}
