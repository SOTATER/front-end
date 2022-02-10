<script lang="ts">
	import type { Participant, Team } from '../../../../schema/api/matches';

	export let winLose = true;
	export let teams: Team[] = [];
	export let participants: Participant[] = [];

	let myTeam = teams.find((team) => team.win === winLose);
	let enemyTeam = teams.find((team) => team.win === !winLose);
	let myTeamGold = participants
		.filter((part) => part.win === winLose)
		.reduce((acc, part) => acc + part.goldEarned, 0);
	let enemyTeamGold = participants
		.filter((part) => part.win === !winLose)
		.reduce((acc, part) => acc + part.goldEarned, 0);
</script>

<div class="summary-graph">
	<div class="total--container">
		<div class="text graph--title">Total Kill</div>
		<div class="text graph--data graph--data__left">{myTeam.objectives.champion.kills}</div>
		<div class="graph--container">
			<div
				class="graph"
				class:win--team={winLose}
				class:lose--team={!winLose}
				style={`flex:${myTeam.objectives.champion.kills}`}
			/>
			<div
				class="graph"
				class:win--team={!winLose}
				class:lose--team={winLose}
				style={`flex:${enemyTeam.objectives.champion.kills}`}
			/>
		</div>
		<div class="text graph--data graph--data__right">{enemyTeam.objectives.champion.kills}</div>
	</div>
	<div class="total--container">
		<div class="text graph--title">Total Gold</div>
		<div class="text graph--data graph--data__left">{myTeamGold}</div>
		<div class="graph--container">
			<div
				class="graph"
				class:win--team={winLose}
				class:lose--team={!winLose}
				style={`flex:${myTeamGold}`}
			/>
			<div
				class="graph"
				class:win--team={!winLose}
				class:lose--team={winLose}
				style={`flex:${enemyTeamGold}`}
			/>
		</div>
		<div class="text graph--data graph--data__right">{enemyTeamGold}</div>
	</div>
</div>

<style>
	.summary-graph {
		flex: 0 1 390px;
	}
	.summary-graph > .total--container {
		display: flex;
		justify-content: center;
		padding: 0 8px;
	}
	.summary-graph > .total--container:first-child {
		padding-top: 8px;
		padding-bottom: 8px;
	}
	.summary-graph > .total--container:last-child {
		padding-bottom: 8px;
	}
	.summary-graph > .total--container > .text {
		font-size: 10px;
		color: #222222;
	}
	.summary-graph > .total--container > .graph--title {
		text-align: left;
		width: 60px;
	}
	.summary-graph > .total--container > .graph--data {
		width: 40px;
	}
	.summary-graph > .total--container > .graph--data__left {
		text-align: right;
	}
	.summary-graph > .total--container > .graph--data__right {
		text-align: left;
	}
	.summary-graph > .total--container > .graph--container {
		flex: 0 1 290px;
		display: flex;
		align-items: center;
		margin-left: 8px;
		margin: 0 3px;
	}
	.summary-graph > .total--container > .graph--container > .graph {
		flex: 1;
		height: 10px;
	}
	.summary-graph > .total--container > .graph--container > .win--team {
		background-color: #548dca;
		margin-left: 4px;
	}
	.summary-graph > .total--container > .graph--container > .lose--team {
		background-color: #d05a53;
		margin-right: 4px;
	}
</style>
