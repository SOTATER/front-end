<script lang="ts">
	import { location } from 'svelte-spa-router';
	import { title } from '../../stores/MetaStore';
	import { HeaderTitle, HeaderNav } from '../headers';
	import { TabList } from '../contents';
	import NotFound from '../NoResult/NotFound.svelte';

	// svelte-ignore unused-export-let
	export let params = {}; // "<Main> was created with unknown prop 'params'" warning 제거를 위함

	const summoner =
		($location.startsWith('/summoner/') && ($location as string).split('/')?.pop()) || '';
	summoner ? title.set(`${summoner} - 게임 전적`) : title.clear();
</script>

<main>
	<HeaderNav />
	{#if summoner}
		<HeaderTitle />
		<TabList />
	{:else}
		<NotFound />
	{/if}
</main>

<style>
	main {
		background-color: #f2f2f2;
	}
</style>
