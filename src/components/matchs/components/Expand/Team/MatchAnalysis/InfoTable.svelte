<script lang="ts">
	import type { CircleData, ProgressData } from './data';

	import PieChart from './PieChart.svelte';
	import ProgressBar from './ProgressBar.svelte';

	export let label: string;
	export let winners: ProgressData[];
	export let losers: ProgressData[];
	export let circleData: CircleData;
</script>

<div class="Container">
	<div class="label">{label}</div>
	<div class="Table">
		<div class="winnerTable">
			{#each winners as winner}
				<ProgressBar
					imgUrl={winner.img}
					value={winner.value}
					percentage={winner.percentage}
					isWin={true}
				/>
			{/each}
		</div>
		<div class="pieChart">
			<PieChart
				percentage={(circleData.loserValue /
					(circleData.loserValue + circleData.winnerValue)) *
					100}
				winnerValue={circleData.winnerValue}
				loserValue={circleData.loserValue}
			/>
		</div>
		<div class="loserTable">
			{#each losers as loser}
				<ProgressBar
					imgUrl={loser.img}
					value={loser.value}
					percentage={loser.percentage}
					isWin={false}
				/>
			{/each}
		</div>
	</div>
</div>

<style>
	.Container {
		height: 153px;
		width: 304px;

		display: flex;
		flex-direction: column;

		margin-bottom: 25px;
	}

	.label {
		text-align: center;
		font-size: 14px;
		color: #555;

		margin-bottom: 12px;
	}

	.Table {
		height: 125px;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.winnerTable {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.loserTable {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.pieChart {
		margin-top: 15px;
	}
</style>
