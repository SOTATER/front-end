import { writable } from 'svelte/store';
import { ApiClient } from '../apis/ApiClient';
import type { DDragonChampionData } from '../schema/ddragon/champions';

export const ddragon = writable<DDragon>({ version: null, champions: null });

const API = new ApiClient('https://ddragon.leagueoflegends.com');
const LOCALE = 'ko_KR';

export const getVersion = async (): Promise<void> => {
	const response = await API.get('/api/versions.json');
	ddragon.update((d) => {
		d.version = (response.data as string[])[0];
		return d;
	});
};

export const getChampions = async (version: string): Promise<void> => {
	const response = await API.get(`cdn/${version}/data/${LOCALE}/champion.json`);
	const { data } = response.data;
	ddragon.update((d) => {
		d.champions = data;
		return d;
	});
};

// TODO: getItems, getSpells, getRunes 구현

interface DDragon {
	version: string;
	champions: DDragonChampionData;
}

export default ddragon;
