/* eslint-disable @typescript-eslint/no-unsafe-return */

import { writable } from 'svelte/store';
import { ApiClient } from '../apis/ApiClient';
import type { DDragonChampionData } from '../schema/ddragon/champions';
import type { DDragonItemData } from '../schema/ddragon/items';
import type { DDragonRunesReforgedData } from '../schema/ddragon/runes';
import type { DDragonSummonerSpellData } from '../schema/ddragon/spells';

export const ddragon = writable<DDragon>({
	version: null,
	champions: null,
	items: null,
	spells: null,
	runes: null,
});

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

export const getItems = async (version: string): Promise<void> => {
	const response = await API.get(`cdn/${version}/data/${LOCALE}/item.json`);
	const { data } = response.data;
	ddragon.update((d) => {
		d.items = data;
		return d;
	});
};

export const getSpells = async (version: string): Promise<void> => {
	const response = await API.get(`cdn/${version}/data/${LOCALE}/summoner.json`);
	const { data } = response.data;
	ddragon.update((d) => {
		d.spells = data;
		return d;
	});
};

export const getRunes = async (version: string): Promise<void> => {
	const response = await API.get(`cdn/${version}/data/${LOCALE}/runesReforged.json`);
	const data = response.data.reduce((acc, cur) => {
		const { id, key, icon, name } = cur;
		acc[cur.id] = { id, key, icon, name, shortDesc: '', longDesc: '' };
		for (const slot of cur.slots) {
			for (const rune of slot.runes) {
				acc[rune.id] = rune;
			}
		}
		return acc;
	}, {});
	ddragon.update((d) => {
		d.runes = data;
		return d;
	});
};

interface DDragon {
	version: string;
	champions: DDragonChampionData;
	items: DDragonItemData;
	spells: DDragonSummonerSpellData;
	runes: DDragonRunesReforgedData;
}

export default ddragon;
