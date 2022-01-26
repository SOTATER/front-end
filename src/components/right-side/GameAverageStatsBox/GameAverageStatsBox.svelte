<script lang="ts">
	import DonutChart from '../../charts/DonutChart.svelte';
	import type { GameAverageStats } from './GameAverageStats';
	import GameAverageStatsKda from './GameAverageStatsKda.svelte';
	import GameAverageStatsPositionNotFound from './GameAverageStatsPositionNotFound.svelte';
	import GameAverageStatsPosition from './GameAverageStatsPosition.svelte';
	import GameAverageStatsChampion from './GameAverageStatsChampion.svelte';

	export let stats: GameAverageStats = {
		win: 0,
		lose: 0,
		kda: {
			kill: 0,
			death: 0,
			assist: 0,
			ckRate: 0,
		},
		mostChampions: [],
		positionStats: [],
	};
</script>

<div class="GameAverageStatsBox">
	<div class="Box">
		{#if stats.mostChampions.length !== 0}
			<table class="GameAverageStats">
				<tbody>
					<tr>
						<td class="Title" colspan="2">
							{`${stats.win + stats.lose}전 ${stats.win}승 ${stats.lose}패`}
						</td>
						<td class="MostChampion" rowspan="2">
							<GameAverageStatsChampion mostChampions={stats.mostChampions} />
						</td>
						<td class="Title">선호 포지션 (랭크)</td>
					</tr>
					<tr>
						<td class="Summary">
							<div class="WinRatioGraph">
								<DonutChart blue={(stats.win / (stats.win + stats.lose)) * 100} />
							</div>
						</td>
						<td class="KDA">
							<GameAverageStatsKda kda={stats.kda} />
						</td>
						<td class="PositionStats">
							{#if stats.positionStats.length !== 0}
								<GameAverageStatsPosition positionStats={stats.positionStats} />
							{:else}
								<GameAverageStatsPositionNotFound />
							{/if}
						</td>
					</tr>
				</tbody>
			</table>
		{:else}
			<div class="ErrorMessage"><div>기록된 전적이 없습니다.</div></div>
		{/if}
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
	.ErrorMessage {
		display: block;
		padding: 126px 0 60px;
		text-align: center;
		background: url(/assets/images/bg-noData.png) 50% 50px no-repeat;
		font-size: 16px;
		color: #555e5e;
	}
</style>
