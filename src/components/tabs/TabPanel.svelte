<script lang="ts">
	import { getContext } from 'svelte';

	import { getId, Panel } from './Tabs';
	import { TABS } from './Tabs.svelte';

	const { registerPanel, selectedPanel } = getContext(TABS);
	const panel: Panel = { id: getId() };

	registerPanel(panel);

	let classname = '';
	export { classname as class };
</script>

<div id={panel.id} class={classname}>
	{#if $selectedPanel === panel}
		<slot />
	{/if}
</div>
