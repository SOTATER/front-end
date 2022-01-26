export const GAME_COMMON_TYPES = ['total', 'soloranked', 'flexranked'] as const;
export type GameCommonType = typeof GAME_COMMON_TYPES[number];

export const GAME_OTHER_TYPES = ['', 'normal', 'aram', 'bot', 'clash', 'event'] as const;
export type GameOtherType = typeof GAME_OTHER_TYPES[number];

export const GAME_TYPES = [
	'total',
	'soloranked',
	'flexranked',
	'',
	'normal',
	'aram',
	'bot',
	'clash',
	'event',
] as const;
export type GameType = GameCommonType | GameOtherType;

export interface GameOtherTypeSelect {
	id: number;
	name: string;
	value: GameOtherType;
}
