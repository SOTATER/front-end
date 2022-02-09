<script lang="ts">
	import type { WinLoseType } from '../types';
	import type { TeamSummary } from './types';
	import TotalSummary from './summary/TotalSummary.svelte';

	export let winLose: WinLoseType = 'Win';
	// TODO: 바론/드래곤/타워/그래프 데이터 가져오기
	export let scores: TeamSummary = {
		Win: {
			baron: 0,
			dragon: 0,
			tower: 4,
			kill: 45,
			gold: 63810,
		},
		Lose: {
			baron: 0,
			dragon: 0,
			tower: 1,
			kill: 36,
			gold: 59391,
		},
	};
</script>

<div class="GameDetailTableWrap">
	<TotalSummary {winLose} {scores} />
</div>

<style>
	.GameDetailTableWrap {
		margin: -1px 0 0 0;
		border: none;
	}
</style>
