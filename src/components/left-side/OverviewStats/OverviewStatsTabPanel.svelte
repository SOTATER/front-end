<script lang="ts">
	import { registerPanel, selectedPanel } from '../../../stores/OverviewStatsStore';

	const panel = {};
	registerPanel(panel);
</script>

{#if $selectedPanel === panel}
	<slot />
{/if}
