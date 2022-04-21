/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class ApiClient {
	private client: AxiosInstance = axios.create();

	constructor(baseURL: string) {
		this.client = axios.create({ baseURL, responseType: 'json', timeout: 5000 });
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
