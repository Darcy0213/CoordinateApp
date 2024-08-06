import ApiAxios from '@api/ApiAxios'
import { useQuery } from 'react-query'

export const useQueryGetWorkspacesByOrganizationId = (id: string) => {
	return useQuery(
		['Menu'],
		/* Query to get workspaces of an organization */
		async () => {
			return await ApiAxios.get({ route: `/menu/workspaces?organizationId=${id}` })
		}
	)
}
export const useQueryGetObjects = (fatherType?: number) => {
	const url = fatherType ? `/menu/types?fatherTypeId=${fatherType}` : `/menu/types`
	return useQuery(
		['Types', { fatherType }],

		async () => {
			return await ApiAxios.get({ route: url })
		}
	)
}
