<script lang="ts">
	import type { TeamSummary } from './types';
	import type { Participant } from '../../../../schema/api/participants';
	import TotalSummary from './summary/TotalSummary.svelte';
	import TotalTable from './table/TotalTable.svelte';

	export let summonerId = '';
	export let participants: Participant[] = [];

	// TODO: 바론/드래곤/타워/그래프 데이터 가져오기
	// export let scores: TeamSummary = {
	// 	Win: {
	// 		baron: 0,
	// 		dragon: 0,
	// 		tower: 4,
	// 		kill: 45,
	// 		gold: 63810,
	// 	},
	// 	Lose: {
	// 		baron: 0,
	// 		dragon: 0,
	// 		tower: 1,
	// 		kill: 36,
	// 		gold: 59391,
	// 	},
	// };
	let participant = participants.find((part) => part.summonerId === summonerId);
</script>

<div class="GameDetailTableWrap">
	<TotalTable
		{summonerId}
		participants={participants.filter((part) => part.win === participant.win)}
		teamId={participant.teamId}
		winLose={participant.win}
	/>
	<!-- <TotalSummary {winLose} {scores} /> -->
	<TotalTable
		{summonerId}
		participants={participants.filter((part) => part.win !== participant.win)}
		teamId={participant.teamId === 100 ? 200 : 100}
		winLose={!participant.win}
	/>
</div>

<style>
	.GameDetailTableWrap {
		margin: -1px 0 0 0;
		border: none;
	}
</style>
