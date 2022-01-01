<script lang="ts">
	import type { MostChampions } from './GameAverageStats';
	import GameAverageStatsChampionContent from './GameAverageStatsChampionContent.svelte';
	import GameAverageStatsChampionNotFound from './GameAverageStatsChampionNotFound.svelte';

	export let mostChampions: MostChampions[] = [];
</script>

<ul>
	<li>
		{#if !!mostChampions[0]}
			<GameAverageStatsChampionContent champion={mostChampions[0]} />
		{:else}
			<GameAverageStatsChampionNotFound />
		{/if}
	</li>
	<li>
		{#if !!mostChampions[1]}
			<GameAverageStatsChampionContent champion={mostChampions[1]} />
		{:else}
			<GameAverageStatsChampionNotFound />
		{/if}
	</li>
	<li>
		{#if !!mostChampions[2]}
			<GameAverageStatsChampionContent champion={mostChampions[2]} />
		{:else}
			<GameAverageStatsChampionNotFound />
		{/if}
	</li>
</ul>

<style>
	ul,
	li {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	ul {
		font-size: 0;
		margin-left: 16px;
		margin-top: 16px;
		margin-bottom: 16px;
	}
	li {
		position: relative;
		display: block;
		white-space: nowrap;
		margin-top: 12px;
		padding-left: 42px;
		padding-top: 1px;
	}
	li:first-child {
		margin-top: 0;
	}
</style>
