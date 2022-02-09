<script lang="ts">
	import { popoverText } from '../../../../tooltip/Tooltip';
	import type { WinLoseType } from '../../types';
	import type { ScoreSummary } from '../types';

	export let winLose: WinLoseType = 'Win';
	export let objectScore: ScoreSummary = {
		baron: 0,
		dragon: 0,
		tower: 0,
	};

	const objectLabel = {
		baron: '바론',
		dragon: '드래곤',
		tower: '타워',
	};
</script>

<div class="Team">
	{#each Object.entries(objectScore) as [key, value]}
		{#if objectLabel[key]}
			<div class="ObjectScore" use:popoverText={{ text: objectLabel[key] }}>
				<img
					src={`assets/images/objects/icon-${key}-${winLose === 'Win' ? 'b' : 'r'}.png`}
					class="Image"
					title={objectLabel[key]}
					alt={key}
				/>
				{value}
			</div>
		{/if}
	{/each}
</div>

<style>
	.Team {
		display: table-cell;
		height: 30px;
		vertical-align: middle;
		padding-right: 10px;
		text-align: right;
		line-height: 30px;
	}
	.Team:first-child {
		padding-right: 0;
		padding-left: 10px;
		text-align: left;
		border-left: 1px solid transparent;
	}
	.Team:last-child {
		padding-right: 10px;
		border-right: 1px solid transparent;
		border-top: 1px solid transparent;
	}
	.Team > .ObjectScore {
		display: inline-block;
		font-size: 11px;
		color: #555;
	}
	.Team > .ObjectScore + .ObjectScore {
		margin-left: 10px;
	}
	.Team > .ObjectScore > .Image {
		display: inline-block;
		margin-right: 3px;
		vertical-align: middle;
		height: 16px;
	}
</style>
