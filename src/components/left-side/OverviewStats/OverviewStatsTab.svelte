<script lang="ts">
	/* eslint-disable @typescript-eslint/no-unsafe-return */
	import { getContext } from 'svelte';
	import { TABS } from './OverviewStatsTabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);
	registerTab(tab);
</script>

<li class="Item" class:active={$selectedTab === tab}>
	<a href="/" on:click|preventDefault={() => selectTab(tab)}>
		<slot />
	</a>
</li>

<style>
	li {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.Item {
		display: table-cell;
		border-left: 1px solid #cdd2d2;
		border-bottom: 1px solid #cdd2d2;
		background-color: #f2f2f2;
		vertical-align: middle;
		cursor: pointer;
		color: #879292;
		text-align: center;
	}
	.Item.active {
		border-bottom-color: #ededed;
		background-color: #ededed;
		color: #555e5e;
		font-weight: bold;
	}
	.Item:first-child {
		border-left: none;
	}
	.Item a {
		display: block;
		color: inherit;
		padding-top: 7px;
		font-size: 12px;
		line-height: 15px;
		padding-bottom: 6px;
		text-decoration: none;
		box-sizing: border-box;
	}
</style>
