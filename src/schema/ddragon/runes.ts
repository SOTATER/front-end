/* eslint-disable @typescript-eslint/no-empty-interface */

export interface DDragonRunesReforgedData {
	id: number;
	key: string;
	icon: string;
	name: string;
	shortDesc: string;
	longDesc: string;
}

export interface DDragonRunesReforgedWrapper<T> {
	[key: string]: T;
}

export interface DDragonRunesReforged
	extends DDragonRunesReforgedWrapper<DDragonRunesReforgedData> {}
