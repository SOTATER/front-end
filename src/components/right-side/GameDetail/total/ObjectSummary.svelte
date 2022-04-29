<script lang="ts">
	import type { Objectives } from '../../../../schema/api/matches';
	import { popoverText } from '../../../tooltip/Tooltip';

	export let winLose = true;
	export let objectives: Objectives = {};

	const objectLabel = {
		baron: '바론',
		dragon: '드래곤',
		tower: '타워',
	};
</script>

<div class="Team">
	{#each Object.entries(objectives) as [key, value]}
		{#if objectLabel[key]}
			<div class="ObjectScore" use:popoverText={{ text: objectLabel[key] }}>
				<img
					src={`assets/images/objects/icon-${key}-${winLose ? 'b' : 'r'}.png`}
					class="Image"
					title={objectLabel[key].kills}
					alt={key}
				/>
				{value.kills}
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
