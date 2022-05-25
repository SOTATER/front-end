/* eslint-disable @typescript-eslint/no-empty-interface */

import type { DDragonDataWrapper, DDragonImage } from './common';

export interface DDragonSpellWrapper {
	id: string;
	name: string;
	description: string;
	tooltip: string;
	maxrank: number;
	cooldown: number[];
	cooldownBurn: string;
	cost: number[];
	// datavalues: {};
	effect: number[][];
	effectBurn: string[];
	vars: {
		link: string;
		coeff: number;
		key: string;
	}[];
	costType: string;
	maxammo: string;
	range: number[];
	rangeBurn: string;
	image: DDragonImage;
	resource: string;
}

export interface DDragonSummonerSpellData extends DDragonSpellWrapper {
	costBurn: string;
	key: string;
	summonerLevel: number;
	modes: string[];
}

export interface DDragonSummonerSpell extends DDragonDataWrapper<DDragonSummonerSpellData> {}
