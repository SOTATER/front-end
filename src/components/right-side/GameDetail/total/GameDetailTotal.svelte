<script lang="ts">
	import type { Match } from '../../../../schema/api/matches';
	import TotalSummary from './TotalSummary.svelte';
	import TotalTable from './TotalTable.svelte';

	export let summonerId = '';
	export let matches: Match = {};

	let participant = matches.info.participants.find((part) => part.summonerId === summonerId);
</script>

<div class="GameDetailTableWrap">
	<TotalTable
		{summonerId}
		gameDuration={matches.info.gameDuration}
		participants={matches.info.participants.filter((part) => part.win === participant.win)}
		teams={matches.info.teams}
		teamId={participant.teamId}
		winLose={participant.win}
	/>
	<TotalSummary
		participants={matches.info.participants}
		teams={matches.info.teams}
		winLose={participant.win}
	/>
	<TotalTable
		{summonerId}
		gameDuration={matches.info.gameDuration}
		participants={matches.info.participants.filter((part) => part.win !== participant.win)}
		teams={matches.info.teams}
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
