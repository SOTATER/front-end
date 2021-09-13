<script lang="ts">
	import Router from 'svelte-spa-router';
	import { Search } from './components/search';
	import { Main } from './components/main';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { ApiConstants } from './apis/ApiConstants';
	import type { Item } from './schema/api/items';
	export const url = '';

	onMount(async () => {
		const version = await axios.get('https://ddragon.leagueoflegends.com/api/versions.json');
		ApiConstants.version = (version.data as string[])[0];
		const items = await axios.get(
			`https://ddragon.leagueoflegends.com/cdn/${ApiConstants.version}/data/ko_KR/item.json`,
		);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		ApiConstants.items = items.data.data as {
			[id: number]: Item;
		};
	});
</script>

<Router
	routes={{
		'/': Search,
		'/summoner/:id': Main,
	}}
/>
