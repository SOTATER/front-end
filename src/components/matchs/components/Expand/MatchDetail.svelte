<script lang="ts">
	import LoadingIndicator from './LoadingIndicator.svelte';
	import DetailHeader from './DetailHeader.svelte';

	export let isWin: boolean;

	let loading = true;
	setTimeout(() => {
		loading = false;
	}, 1000);
</script>

{#if loading}
	<LoadingIndicator />
{:else}
	<DetailHeader {isWin} />
{/if}

<style>
</style>
