<script lang="ts">
	import ChevronDown24 from 'carbon-icons-svelte/lib/ChevronDown24';
	import ChevronUp24 from 'carbon-icons-svelte/lib/ChevronUp24';

	export let isWin: boolean;
	let color: string;
	if (!isWin) {
		color = '#B71C1C';
	} else {
		color = 'C100M20';
	}

	let clicked = false;
	const handleClick = (): void => {
		clicked = !clicked;
	};
</script>

<div class="StatsButton" class:win={isWin} class:lose={!isWin} on:click={handleClick}>
	{#if !clicked}
		<ChevronDown24 style="fill: {color}" />
	{:else}
		<ChevronUp24 style="fill: {color}" />
	{/if}
</div>

<style>
	.StatsButton {
		width: 30px;
		height: 100%;
		margin-top: -1px;
		margin-left: 5px;
		border: 1px solid #000;

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
	.sd {
		fill: red;
	}
</style>
