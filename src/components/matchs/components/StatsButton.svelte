<script lang="ts">
	import ChevronDown24 from 'carbon-icons-svelte/lib/ChevronDown24';
	import ChevronUp24 from 'carbon-icons-svelte/lib/ChevronUp24';

	export let isWin: boolean;
	export let expanded: boolean;
	let color: string;
	if (!isWin) {
		color = '#B71C1C';
	} else {
		color = 'C100M20';
	}

	const handleClick = (): void => {
		expanded = !expanded;
	};
</script>

<div
	class="StatsButton"
	class:win={isWin}
	class:lose={!isWin}
	class:expanded
	on:click={handleClick}
>
	{#if !expanded}
		<ChevronDown24 style="fill: {color}" />
	{:else}
		<ChevronUp24 style="fill: {color}" />
	{/if}
</div>

<style>
	.StatsButton {
		width: 30px;
		height: 100%;
		border: 1px solid #000;

		padding-left: 1px;

		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
	}
	.lose {
		border-color: #d67b77;
		background: #e89d99;
	}
	.win {
		border-color: #4aa1d2;
		background: #64b1e4;
	}

	.expanded {
		border-bottom: none;
	}
</style>
