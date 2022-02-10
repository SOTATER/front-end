<script lang="ts">
	import type { Match } from '../../../../schema/api/matches';
	import type { TeamSummary } from './types';
	import TotalSummary from './summary/TotalSummary.svelte';
	import TotalTable from './table/TotalTable.svelte';

	export let summonerId = '';
	export let matches: Match = {};

	let participant = matches.info.participants.find((part) => part.summonerId === summonerId);
</script>

<div class="GameDetailTableWrap">
	<TotalTable
		{summonerId}
		participants={matches.info.participants.filter((part) => part.win === participant.win)}
		teamId={participant.teamId}
		winLose={participant.win}
	/>
	<!-- <TotalSummary {winLose} {scores} /> -->
	<TotalTable
		{summonerId}
		participants={matches.info.participants.filter((part) => part.win !== participant.win)}
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
