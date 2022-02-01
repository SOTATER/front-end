import type { SvelteComponent } from 'svelte';

export interface Tab {
	label: string;
	value: TabType;
	component: typeof SvelteComponent;
}

export type TabType = 'overview' | 'teamAnalysis' | 'builds' | 'gold';

export type WinLoseType = 'Win' | 'Lose' | 'Remake';

export type TeamColor = 'blue' | 'red';