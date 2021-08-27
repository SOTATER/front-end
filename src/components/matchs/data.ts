export interface GameSettingInfo {
	championImage: string;
	championName: string;
	spells: string[];
	spellAlts: string[];
	runes: string[];
	runeAlts: string[];
}
interface Summoner {
	name: string;
	champion: string;
}
export interface Team {
	summoners: Summoner[];
}
interface Item {
	imgUrl?: string;
	name: string;
}

export interface Items {
	items: Item[];
	trinketNum: number;
}
export interface GameStats {
	gameType: string;
	time: string;
	result: string;
	gameLength: string;
}
export interface Kda {
	kill: number;
	death: number;
	assist: number;
	kdaRatio: number;
	badge?: string;
}
export interface Stats {
	level: number;
	cs: string;
	killRelated: number;
	mmr: string;
}
export interface MatchInfo {
	gameSettingInfo: GameSettingInfo;
	teams: Team[];
	gameStats: GameStats;
	items: Items;
	kda: Kda;
	stats: Stats;
	isWin: boolean;
}

const isWin = true;

const gameStats = {
	gameType: '솔랭',
	time: '3일 전',
	result: '패배',
	gameLength: '25분 8초',
};
const gameSettingInfo = {
	championImage:
		'https://opgg-static.akamaized.net/images/lol/champion/Lucian.png?image=c_scale,q_auto,w_46&v=1626880099',
	championName: '루시안',
	spells: [
		'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png?image=c_scale,q_auto,w_22&v=1626880099',
		'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=c_scale,q_auto,w_22&v=1626880099',
	],
	spellAlts: ['순간이동', '점멸'],
	runes: [
		'https://opgg-static.akamaized.net/images/lol/perk/8005.png?image=c_scale,q_auto,w_22&v=1626880099',
		'https://opgg-static.akamaized.net/images/lol/perkStyle/8100.png?image=c_scale,q_auto,w_22&v=1626880099',
	],
	runeAlts: ['집중공격', '지배'],
};
const kda = {
	kill: 0,
	death: 8,
	assist: 13,
	kdaRatio: 1.63,
	badge: 'ACE',
};
const stats = {
	level: 11,
	cs: '46(1.7)',
	killRelated: 54,
	mmr: 'Gold 1',
};
const itemList = [
	{
		imgUrl: 'https://opgg-static.akamaized.net/images/lol/item/6671.png?image=q_auto:best&v=1626880099',
		name: '돌풍',
	},
	{
		imgUrl: 'https://opgg-static.akamaized.net/images/lol/item/3140.png?image=q_auto:best&v=1626880099',
		name: '수은 장식띠',
	},
	{
		imgUrl: '',
		name: '',
	},
	{
		imgUrl: 'https://opgg-static.akamaized.net/images/lol/item/3340.png?image=q_auto:best&v=1626880099',
		name: '투명 와드',
	},
	{
		imgUrl: 'https://opgg-static.akamaized.net/images/lol/item/1037.png?image=q_auto:best&v=1626880099',
		name: '곡괭이',
	},
	{
		imgUrl: 'https://opgg-static.akamaized.net/images/lol/item/3134.png?image=q_auto:best&v=1626880099',
		name: '톱날단검',
	},
	{
		imgUrl: 'https://opgg-static.akamaized.net/images/lol/item/3006.png?image=q_auto:best&v=1626880099',
		name: '광전사의 군화',
	},
];
const items = {
	items: itemList,
	trinketNum: 4,
};

const summoners = [
	{
		name: '미드병자 김대오',
		champion: '제이스',
	},
	{
		name: 'Sensitive Walnut',
		champion: '제이스',
	},
	{
		name: '천재한',
		champion: '제이스',
	},
	{
		name: '심술난승기',
		champion: '제이스',
	},
	{
		name: '더용종신',
		champion: '제이스',
	},
];
const teams = [
	{
		summoners,
	},
	{
		summoners,
	},
];

const matchItems: MatchInfo[] = [];

for (let i = 0; i < 100; i++) {
	matchItems.push({
		gameStats,
		gameSettingInfo,
		kda,
		stats,
		items,
		teams,
		isWin,
	});
}

export default matchItems;
