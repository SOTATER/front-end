export interface CogameSummoner {
	name: string;
	games: number;
	win: number;
	lose: number;
}

export type SortingClick = 'name' | 'games' | 'wins' | 'loses' | 'winningRate';

export type AscendingMode = SortingClick | 'none';
