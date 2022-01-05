<script lang="ts">
	/* eslint-disable @typescript-eslint/no-unsafe-member-access */
	import Router from 'svelte-spa-router';
	import { Search } from './components/search';
	import { Main } from './components/main';
	import axios from 'axios';
	import { ApiConstants } from './apis/ApiConstants';
	import type { Item } from './schema/api/items';
	import type { Spell } from './schema/api/spells';
	import type { Rune } from './schema/api/runes';
	export const url = '';

	async function fetchDataDragon() {
		const version = await axios.get('https://ddragon.leagueoflegends.com/api/versions.json');
		ApiConstants.version = (version.data as string[])[0];
		const items = await axios.get(
			`https://ddragon.leagueoflegends.com/cdn/${ApiConstants.version}/data/ko_KR/item.json`,
		);
		const spells = await axios.get(
			`https://ddragon.leagueoflegends.com/cdn/${ApiConstants.version}/data/ko_KR/summoner.json`,
		);
		const runes = await axios.get(
			`https://ddragon.leagueoflegends.com/cdn/${ApiConstants.version}/data/ko_KR/runesReforged.json`,
		);
		const champions = await axios.get(
			`https://ddragon.leagueoflegends.com/cdn/${ApiConstants.version}/data/ko_KR/champion.json`,
		);
		console.log(spells);
		ApiConstants.items = items.data.data as {
			[id: number]: Item;
		};
		ApiConstants.spells = spells.data.data as {
			[id: string]: Spell;
		};
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
		console.log(ApiConstants.runes);
		ApiConstants.champions = champions.data.data;
	}

	let fetchPromise = fetchDataDragon();
	// });
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
