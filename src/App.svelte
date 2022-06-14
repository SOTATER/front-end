<script lang="ts">
	import Router from 'svelte-spa-router';
	import { Search } from './components/search';
	import { Main } from './components/main';
	import ddragon, {
		getChampions,
		getItems,
		getRunes,
		getSpells,
		getVersion,
	} from './stores/DDragonStore';

	async function fetchDataDragon() {
		await getVersion();
		await getChampions($ddragon.version);
		await getItems($ddragon.version);
		await getSpells($ddragon.version);
		await getRunes($ddragon.version);
	}

	let fetchPromise = fetchDataDragon();
</script>

{#await fetchPromise then}
	<Router
		routes={{
			'/': Search,
			'/summoner/:id': Main,
			// '/summoner/champions/:id': Main, // 챔피언 탭 미사용으로 인한 주석 처리
		}}
	/>
{/await}

<style>
	:global(body) {
		margin: 0;
	}
</style>
