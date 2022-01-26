import { Writable, writable } from 'svelte/store';
import { GameType, GAME_TYPES } from '../components/right-side/types';

const tabs = GAME_TYPES;
const panels = GAME_TYPES;

export const selectedTab: Writable<GameType> = writable('total');
export const selectedPanel: Writable<GameType> = writable('total');

export const selectTab = (tab: GameType): void => {
	const i = tabs.indexOf(tab);
	selectedTab.set(tab);
	selectedPanel.set(panels[i]);
};
