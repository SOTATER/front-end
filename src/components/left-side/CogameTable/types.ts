export interface CogameSummoner {
	name: string;
	games: number;
	win: number;
	lose: number;
}

export type AscendingMode = 'name' | 'games' | 'wins' | 'loses' | 'winningRate' | 'none';
