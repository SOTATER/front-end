import type { SvelteComponent } from 'svelte';

export interface Tab {
	label: string;
	value: TabType;
	component: typeof SvelteComponent;
}

export type TabType = 'overview' | 'teamAnalysis' | 'builds' | 'gold';
