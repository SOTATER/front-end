/* eslint-disable @typescript-eslint/no-empty-interface */

import type { DDragonDataWrapper } from './common';

export interface DDragonChampionInfo {
	attack: number;
	defense: number;
	magic: number;
	difficulty: number;
}

export interface DDragonImage {
	full: string;
	sprite: string;
	group: string;
	x: number;
	y: number;
	w: number;
	h: number;
}

export interface DDragonChampionStats {
	hp: number;
	hpperlevel: number;
	mp: number;
	mpperlevel: number;
	movespeed: number;
	armor: number;
	armorperlevel: number;
	spellblock: number;
	spellblockperlevel: number;
	attackrange: number;
	hpregen: number;
	hpregenperlevel: number;
	mpregen: number;
	mpregenperlevel: number;
	crit: number;
	critperlevel: number;
	attackdamage: number;
	attackdamageperlevel: number;
	attackspeedperlevel: number;
	attackspeed: number;
}

export interface DDragonChampionData {
	version: string;
	id: string;
	key: string;
	name: string;
	title: string;
	blurb: string;
	info: DDragonChampionInfo;
	image: DDragonImage;
	tags: string[];
	partype: string;
	stats: DDragonChampionStats;
}

export interface DDragonChampion extends DDragonDataWrapper<DDragonChampionData> {}
