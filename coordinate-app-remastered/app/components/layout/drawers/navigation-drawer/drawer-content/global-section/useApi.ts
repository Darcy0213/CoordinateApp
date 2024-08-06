import ApiAxios from '@api/ApiAxios'
import { useQuery } from 'react-query'

export const useQueryGetOrganizations = () => {
	return useQuery(
		['Organizations-Menu'],
		/* Query to get organizations */
		async () => {
			try {
				const response = await ApiAxios.get({ route: `/menu/organizations` })
				return response
			} catch (error) {
				console.error('Error fetching organizations:', error)
				throw new Error('Failed to fetch organizations')
			}
		}
	)
}
