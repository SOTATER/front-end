<script lang="ts">
	import type { WinLoseType } from '../../types';
	import type { TeamSummary } from '../types';
	import GraphSummary from './GraphSummary.svelte';
	import ObjectSummary from './ObjectSummary.svelte';

	export let winLose: WinLoseType = 'Win';
	export let scores: TeamSummary = {
		Win: {
			baron: 0,
			dragon: 0,
			tower: 0,
			kill: 0,
			gold: 0,
		},
		Lose: {
			baron: 0,
			dragon: 0,
			tower: 0,
			kill: 0,
			gold: 0,
		},
	};

	const loseWin = winLose === 'Win' ? 'Lose' : 'Win';
</script>

<div class="Summary">
	<ObjectSummary {winLose} objectScore={scores[winLose]} />
	<GraphSummary {winLose} graphScore={scores} />
	<ObjectSummary winLose={loseWin} objectScore={scores[loseWin]} />
</div>

<style>
	.Summary {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-left: 1px solid #cdd2d2;
		border-right: 1px solid #cdd2d2;
		background-color: #e4e4e4;
	}
</style>
