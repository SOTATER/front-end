export interface KDAStats {
	kill: number;
	death: number;
	assist: number;
	ckRate: number; // 킬관여율
}

export interface MostChampions {
	name: string;
	win: number;
	lose: number;
	kda: number;
}

export interface PositionStats {
	name: string;
	roleRate: number;
	winRatio: number;
}

export interface GameAverageStats {
	win: number;
	lose: number;
	kda: KDAStats;
	mostChampions: MostChampions[];
	positionStats: PositionStats[];
}
