<script lang="ts">
	import type { WinLoseType } from '../../types';
	import type { TeamSummary } from '../types';

	export let winLose: WinLoseType = 'Win';
	export let graphScore: TeamSummary = {
		Win: {
			kill: 0,
			gold: 0,
		},
		Lose: {
			kill: 0,
			gold: 0,
		},
	};

	const loseWin = winLose === 'Win' ? 'Lose' : 'Win';
</script>

<div class="summary-graph">
	<div class="total--container">
		<div class="text graph--title">Total Kill</div>
		<div class="text graph--data graph--data__left">{graphScore[winLose].kill}</div>
		<div class="graph--container">
			<div
				class="graph"
				class:win--team={winLose === 'Win'}
				class:lose--team={winLose === 'Lose'}
				style={`flex:${graphScore[winLose].kill}`}
			/>
			<div
				class="graph"
				class:win--team={loseWin === 'Win'}
				class:lose--team={loseWin === 'Lose'}
				style={`flex:${graphScore[loseWin].kill}`}
			/>
		</div>
		<div class="text graph--data graph--data__right">{graphScore[loseWin].kill}</div>
	</div>
	<div class="total--container">
		<div class="text graph--title">Total Gold</div>
		<div class="text graph--data graph--data__left">{graphScore[winLose].gold}</div>
		<div class="graph--container">
			<div
				class="graph"
				class:win--team={winLose === 'Win'}
				class:lose--team={winLose === 'Lose'}
				style={`flex:${graphScore[winLose].gold}`}
			/>
			<div
				class="graph"
				class:win--team={loseWin === 'Win'}
				class:lose--team={loseWin === 'Lose'}
				style={`flex:${graphScore[loseWin].gold}`}
			/>
		</div>
		<div class="text graph--data graph--data__right">{graphScore[loseWin].gold}</div>
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
