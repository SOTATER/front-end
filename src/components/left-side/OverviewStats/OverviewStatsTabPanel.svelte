<script lang="ts">
	import { getContext } from 'svelte';
	import { TABS } from './OverviewStatsTabs.svelte';

	const panel = {};
	const { registerPanel, selectedPanel } = getContext(TABS);
	registerPanel(panel);
</script>

{#if $selectedPanel === panel}
	<slot />
{/if}
