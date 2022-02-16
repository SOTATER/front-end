<script lang="ts">
	import type { Participant, Team } from '../../../../schema/api/matches';
	import GraphSummary from './GraphSummary.svelte';
	import ObjectSummary from './ObjectSummary.svelte';

	export let participants: Participant[] = [];
	export let teams: Team[] = [];
	export let winLose = true;
</script>

<div class="Summary">
	<ObjectSummary {winLose} objectives={teams.find((team) => team.win === winLose).objectives} />
	<GraphSummary {winLose} {teams} {participants} />
	<ObjectSummary
		winLose={!winLose}
		objectives={teams.find((team) => team.win === !winLose).objectives}
	/>
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
