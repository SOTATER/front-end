<script lang="ts">
	import type { Match } from '../../schema/api/matches';
	import { getMatches } from './dummy';
	import GameListItem from './GameListItem.svelte';

	const matches: Match[] = [];
	for (let i = 0; i < 20; i++) {
		matches.push(getMatches());
	}
</script>

<div class="GameList">
	{#each matches as match}
		<GameListItem />
	{/each}
</div>

<style>
	.GameList {
		margin-top: 8px;
	}
</style>
