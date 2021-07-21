import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.baseURL = ''; //'http://34.69.171.78';
axios.defaults.responseType = 'json';
axios.defaults.timeout = 5000;

export class ApiClient {
	private client: AxiosInstance = axios.create();

	async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
		return this.client.get(url, config);
	}

	async post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
		return this.client.post(url, data, config);
	}
}
