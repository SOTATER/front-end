<script lang="ts">
	import MatchComponent from './MatchComponent.svelte';
	import matchItems from './data';
</script>

<div class="container">
	{#each matchItems as matchItem}
		<MatchComponent matchInfo={matchItem} />
	{/each}
</div>

<style>
	.container {
		background-color: #f2f2f2;
	}
</style>
