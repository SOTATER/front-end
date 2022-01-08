<script lang="ts">
	import { selectedPanel } from '../../stores/GameListStore';
	import type { MostChampions, PositionStats } from './GameAverageStatsBox/GameAverageStats';
	import GameAverageStatsBox from './GameAverageStatsBox/GameAverageStatsBox.svelte';

	// TODO: 탭 별 매치 데이터 가져오기
	$: console.log('게임 타입: ', $selectedPanel);

	let win = 9;
	let lose = 11;
	let kill = 9.9;
	let death = 8.0;
	let assist = 17.6;
	let ckRate = 64; // 킬관여율
	let mostChampions: MostChampions[] = [
		{
			name: 'Kassadin',
			win: 1,
			lose: 1,
			kda: 5.53,
		},
		{
			name: 'Jayce',
			win: 1,
			lose: 1,
			kda: 3.75,
		},
		{
			name: 'Pyke',
			win: 1,
			lose: 1,
			kda: 3,
		},
	];
	let positionStats: PositionStats[] = [
		{
			name: '미드',
			roleRate: 100,
			winRatio: 100,
		},
	];
</script>

<div>
	{#if mostChampions.length !== 0}
		<GameAverageStatsBox
			{win}
			{lose}
			{kill}
			{death}
			{assist}
			{ckRate}
			{mostChampions}
			{positionStats}
		/>
	{:else}
		<div class="Box">
			<div class="ErrorMessage"><div>기록된 전적이 없습니다.</div></div>
		</div>
	{/if}
</div>

<style>
	.Box {
		border: 1px solid #cdd2d2;
		box-shadow: 0 1px #dcdfdf;
		background: #f2f2f2;
		border-radius: 2px;
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
