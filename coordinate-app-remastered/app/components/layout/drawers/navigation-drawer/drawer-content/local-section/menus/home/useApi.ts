import ApiAxios from '@api/ApiAxios'
import { useQuery } from 'react-query'

export const useQueryGetOrganizations = () => {
	return useQuery(
		['Menu'],
		/* Query to get organizations and its workspaces */
		async () => {
			return await ApiAxios.get({ route: `/menu/organizations-workspaces` })
		}
	)
}

export const useQueryGetUserData = () => {
	return useQuery(
		['userinfo'],
		async () => {
			return await ApiAxios.get({ route: '/user/user-info' })
		},
		{ refetchOnWindowFocus: false }
	)
}
