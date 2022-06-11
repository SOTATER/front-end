<script lang="ts" context="module">
	export const TABS = {};
</script>

<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { Tab, Panel } from './Tabs';

	export let selectedTabIndex = 0;

	const tabs = [];
	const panels = [];

	const selectedTab = writable(null);
	const selectedPanel = writable(null);

	let classname = '';
	export { classname as class };

	const dispatch = createEventDispatcher();

	const registerTab = (tab: Tab) => {
		tabs.push(tab);
		selectedTab.update((selected) => selected || tab);
		onDestroy(() => {
			const i = tabs.indexOf(tab);
			tabs.splice(i, 1);
			selectedTab.update((selected) =>
				selected === tab ? tabs[i] || tabs[tabs.length - 1] : selected,
			);
		});
	};

	const registerPanel = (panel: Panel) => {
		panels.push(panel);
		selectedPanel.update((selected) => selected || panel);
		onDestroy(() => {
			const i = panels.indexOf(panel);
			panels.splice(i, 1);
			selectedPanel.update((selected) =>
				selected === panel ? panels[i] || panels[panels.length - 1] : selected,
			);
		});
	};

	const selectTab = (tab: Tab) => {
		selectedTabIndex = tabs.indexOf(tab);
		selectedTab.set(tab);
		selectedPanel.set(panels[selectedTabIndex]);
		dispatch('tabChanged', selectedTabIndex);
	};

	export const setTabAndPanel = (index: number) => {
		selectedTabIndex = index;
		selectedTab.set(tabs[index]);
		selectedPanel.set(panels[index]);
	};

	setContext(TABS, {
		registerTab,
		registerPanel,
		selectTab,
		selectedTab,
		selectedPanel,
	});

	onMount(() => {
		selectTab(tabs[selectedTabIndex]);
	});

	$: setTabAndPanel(selectedTabIndex);
</script>

<div class={classname}>
	<slot />
</div>
