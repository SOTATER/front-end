import type { Position } from '../../image/PositionImage.svelte';

export interface MostChampions {
	name: string;
	win: number;
	lose: number;
	kda: number;
}

export interface PositionStats {
	name: Position;
	roleRate: number;
	winRatio: number;
}
