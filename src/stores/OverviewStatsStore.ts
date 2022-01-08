/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { onDestroy } from 'svelte';
import { writable } from 'svelte/store';

const tabs = [];
const panels = [];

export const selectedTab = writable(null);
export const selectedPanel = writable(null);

export const registerTab = (tab: any) => {
	tabs.push(tab);
	selectedTab.update((current) => current || tab);

	onDestroy(() => {
		const i = tabs.indexOf(tab);
		tabs.splice(i, 1);
		selectedTab.update((current) =>
			current === tab ? tabs[i] || tabs[tabs.length - 1] : current,
		);
	});
};

export const registerPanel = (panel: any) => {
	panels.push(panel);
	selectedPanel.update((current) => current || panel);

	onDestroy(() => {
		const i = panels.indexOf(panel);
		panels.splice(i, 1);
		selectedPanel.update((current) =>
			current === panel ? panels[i] || panels[panels.length - 1] : current,
		);
	});
};

export const selectTab = (tab: any) => {
	const i = tabs.indexOf(tab);
	selectedTab.set(tab);
	selectedPanel.set(panels[i]);
};
