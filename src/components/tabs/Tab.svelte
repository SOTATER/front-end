<script lang="ts">
	/* eslint-disable @typescript-eslint/no-unsafe-return */
	import { getContext } from 'svelte';
	import { getId, Tab } from './Tabs';
	import { TABS } from './Tabs.svelte';

	const { registerTab, selectedTab, selectTab } = getContext(TABS);
	const tab: Tab = { id: getId() };

	registerTab(tab);

	let classname = '';
	export { classname as class };
</script>

<li
	id={tab.id}
	class={classname}
	class:selected={$selectedTab === tab}
	on:click|preventDefault={() => selectTab(tab)}
>
	<slot />
</li>

<style>
	li {
		list-style: none;
		cursor: pointer;
	}
</style>
