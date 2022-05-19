<script lang="ts">
	import Router from 'svelte-spa-router';
	import { Search } from './components/search';
	import { Main } from './components/main';
	import axios from 'axios';
	import { ApiConstants } from './apis/ApiConstants';
	import type { Rune } from './schema/api/runes';
	import ddragon, { getChampions, getItems, getSpells, getVersion } from './stores/DDragonStore';

	async function fetchDataDragon() {
		await getVersion();
		const runes = await axios.get(
			`https://ddragon.leagueoflegends.com/cdn/${$ddragon.version}/data/ko_KR/runesReforged.json`,
		);
		await getChampions($ddragon.version);
		await getItems($ddragon.version);
		await getSpells($ddragon.version);
		ApiConstants.runes = {};
		for (const bigPart of runes.data) {
			ApiConstants.runes[bigPart.id as number] = {
				id: bigPart.id,
				icon: bigPart.icon,
				key: bigPart.key,
				longDesc: '',
				shortDesc: '',
				name: bigPart.name,
			};
			for (const smallPart of bigPart.slots) {
				for (const rune of smallPart.runes) {
					ApiConstants.runes[rune.id as number] = rune as Rune;
				}
			}
		}
		// console.log(ApiConstants.runes);
	}

	let fetchPromise = fetchDataDragon();
</script>

{#await fetchPromise then}
	<Router
		routes={{
			'/': Search,
			'/summoner/:id': Main,
			'/summoner/champions/:id': Main,
		}}
	/>
{/await}
