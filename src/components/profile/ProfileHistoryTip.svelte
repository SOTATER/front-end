<script lang="ts">
	import { popoverText } from '../tooltip/Tooltip';
	export let season = 'S2020';
	export let tier = 'gold';
	export let tooltip: string | undefined = undefined;
</script>

{#if tooltip}
	<li class="history-tip" use:popoverText={{ text: tooltip }}>
		<b>{season}</b>
		{' ' + tier}
	</li>
{:else}
	<li class="history-tip">
		<b>{season}</b>
		{' ' + tier}
	</li>
{/if}

<style>
	.history-tip {
		padding: 3px 4px 2px 4px;
		margin-right: 3px;
		background: #e0e3e3;
		color: #657070;
		font-size: 11px;
		border: 1px solid #ced3d3;
		border-radius: 3px;
		list-style: none;
		width: fit-content;
	}
</style>
