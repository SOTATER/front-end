<script lang="ts">
	import { registerPanel, selectedPanel } from '../../stores/GameListStore';

	const panel = {};
	registerPanel(panel);
</script>

{#if $selectedPanel === panel}
	<slot />
{/if}
