import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://34.69.171.78';
axios.defaults.responseType = 'json';
axios.defaults.timeout = 5000;

export class ApiClient {
	private client: AxiosInstance = axios.create();
	private url: string;
	constructor(url: string) {
		this.url = url;
	}

	async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
		return this.client.get(this.url + url, config);
	}

	async gets(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse[]> {
		return this.client.get(this.url + url, config);
	}

	async post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
		return this.client.post(this.url + url, data, config);
	}
}
