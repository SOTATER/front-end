/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export const API_BASE_URL = 'http://localhost:8080';

class ApiClient {
	private client: AxiosInstance = axios.create();

	constructor() {
		this.client = axios.create({ baseURL: API_BASE_URL, responseType: 'json', timeout: 5000 });
	}

	async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
		try {
			const response = await this.client.get(url, config);
			return Promise.resolve(response);
		} catch (error) {
			return Promise.reject(error);
		}
	}

	async post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
		try {
			const response = await this.client.post(url, data, config);
			return Promise.resolve(response);
		} catch (error) {
			return Promise.reject(error);
		}
	}
}

export default new ApiClient();
