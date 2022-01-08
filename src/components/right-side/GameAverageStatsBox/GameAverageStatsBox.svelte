<script lang="ts">
	import DonutChart from '../../charts/DonutChart.svelte';
	import type { MostChampions, PositionStats } from './GameAverageStats';
	import GameAverageStatsKda from './GameAverageStatsKda.svelte';
	import GameAverageStatsPositionNotFound from './GameAverageStatsPositionNotFound.svelte';
	import GameAverageStatsPosition from './GameAverageStatsPosition.svelte';
	import GameAverageStatsChampion from './GameAverageStatsChampion.svelte';

	export let win = 0;
	export let lose = 0;
	export let kill = 0;
	export let death = 0;
	export let assist = 0;
	export let ckRate = 0; // 킬관여율
	export let mostChampions: MostChampions[] = [];
	export let positionStats: PositionStats[] = [];

	const blueRate = (win / (win + lose)) * 100;
	const redRate = 100 - blueRate;
</script>

<div class="GameAverageStatsBox">
	<div class="Box">
		<table class="GameAverageStats">
			<tbody>
				<tr>
					<td class="Title" colspan="2"> {`${win + lose}전 ${win}승 ${lose}패`} </td>
					<td class="MostChampion" rowspan="2">
						<GameAverageStatsChampion {mostChampions} />
					</td>
					<td class="Title">선호 포지션 (랭크)</td>
				</tr>
				<tr>
					<td class="Summary">
						<div class="WinRatioGraph">
							<DonutChart blue={blueRate} red={redRate} />
						</div>
					</td>
					<td class="KDA">
						<GameAverageStatsKda {kill} {death} {assist} {ckRate} />
					</td>
					<td class="PositionStats">
						{#if positionStats.length !== 0}
							<GameAverageStatsPosition {positionStats} />
						{:else}
							<GameAverageStatsPositionNotFound />
						{/if}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<style>
	.GameAverageStatsBox {
		text-align: center;
		margin-top: -1px;
	}
	.Box {
		border: 1px solid #cdd2d2;
		box-shadow: 0 1px #dcdfdf;
		background: #f2f2f2;
		border-radius: 2px;
	}
	.GameAverageStatsBox > .Box {
		box-sizing: border-box;
		text-align: left;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	.GameAverageStats {
		display: table;
		width: 100%;
		table-layout: auto;
		background-color: #ededed;
	}
	.GameAverageStats tr > .Title {
		padding: 16px 0 14px 20px;
		line-height: 14px;
		font-size: 12px;
		color: #666;
		height: 14px;
		border-left: 1px solid #cdd2d2;
	}
	.GameAverageStats tr > .Title:first-child {
		border-left: none;
		padding-left: 24px;
	}
	.GameAverageStats tr > .MostChampion {
		width: 229px;
		border-left: 1px solid #cdd2d2;
	}
	.GameAverageStats tr > .Summary {
		padding: 0 0 0 24px;
		vertical-align: top;
	}
	.GameAverageStats tr > .Summary .WinRatioGraph {
		display: inline-block;
		vertical-align: middle;
		position: relative;
	}
	.GameAverageStats tr > .KDA {
		color: #879292;
		text-align: center;
		vertical-align: top;
		padding-top: 18px;
		width: 164px;
		box-sizing: border-box;
	}
	.GameAverageStats tr > .PositionStats {
		width: 183px;
		border-left: 1px solid #cdd2d2;
		white-space: nowrap;
		vertical-align: middle;
	}
</style>
