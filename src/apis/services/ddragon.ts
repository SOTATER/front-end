import axios, { AxiosResponse } from 'axios';
import type { DDragonChampion } from '../../schema/ddragon/champions';

export class DDragon {
	private readonly host: string = 'https://ddragon.leagueoflegends.com';
	private readonly locale: string = 'ko_KR';

	async get(path: string): Promise<AxiosResponse> {
		try {
			const response = await axios.get(`${this.host}${path}`);
			return Promise.resolve(response);
		} catch (error) {
			return Promise.reject(error);
		}
	}

	async version(): Promise<string> {
		const response = await this.get('/api/versions.json');
		return (response.data as string[])[0];
	}

	async champions(): Promise<DDragonChampion> {
		const version = await this.version();
		const response = await this.get(`cdn/${version}/data/${this.locale}/champion.json`);
		return response.data as DDragonChampion;
	}
}
