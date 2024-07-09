import { isTokenValid } from '@utils/auth'
import axios, { AxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'
import Router from 'next/router'
import { apiUrl } from './Config/Environments'

interface ApiParams {
	route: string
	data?: any
}

const apiInstance = axios.create({
	baseURL: apiUrl,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json'
	}
})

apiInstance.interceptors.request.use(
	(config) => {
		const token = Cookies.get('token')
		if (token && isTokenValid(token)) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

apiInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response.status === 401) {
			Cookies.remove('token')
			Router.push('/login')
		}
		return Promise.reject(error)
	}
)

class ApiAxios {
	private static getHeaders() {
		return {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `${localStorage.getItem('serviceToken')}`
		}
	}

	private static async request<T>(method: AxiosRequestConfig['method'], params: ApiParams): Promise<T> {
		const config: AxiosRequestConfig = {
			url: `${apiUrl}${params.route}`,
			method,
			headers: ApiAxios.getHeaders(),
			data: params.data
		}

		try {
			const response = await axios(config)
			return response.data
		} catch (error: any) {
			throw new Error(error.response?.data?.message || 'Request failed')
		}
	}

	static post<T>(params: ApiParams) {
		return ApiAxios.request<T>('post', params)
	}

	static get<T>(params: ApiParams) {
		return ApiAxios.request<T>('get', params)
	}

	static patch<T>(params: ApiParams) {
		return ApiAxios.request<T>('patch', params)
	}

	static delete<T>(params: ApiParams) {
		return ApiAxios.request<T>('delete', params)
	}

	static put<T>(params: ApiParams) {
		return ApiAxios.request<T>('put', params)
	}
}

export default ApiAxios
