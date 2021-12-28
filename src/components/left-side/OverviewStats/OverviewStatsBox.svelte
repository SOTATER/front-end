<script lang="ts">
	import MoreButton from './MoreButton.svelte';
	import OverviewStatsTab from './OverviewStatsTab.svelte';
	import OverviewStatsTabPanel from './OverviewStatsTabPanel.svelte';
	import type { OverviewStats } from './OverviewStatsTabPanelItem.svelte';
	import OverviewStatsTabPanelItem from './OverviewStatsTabPanelItem.svelte';

	let allStats: OverviewStats[] = [
		{
			championName: 'Jayce',
			championMinionKillAverage: 196.8,
			championMinionKillPerMin: 7.2,
			kill: 7.0,
			death: 3.75,
			assist: 7.94,
			winRatio: 69,
			playTimes: 16,
		},
		{
			championName: 'Kassadin',
			championMinionKillAverage: 179.8,
			championMinionKillPerMin: 6.5,
			kill: 6.8,
			death: 3.2,
			assist: 5.4,
			winRatio: 80,
			playTimes: 5,
		},
		{
			championName: 'Sylas',
			championMinionKillAverage: 153.0,
			championMinionKillPerMin: 4.6,
			kill: 8.25,
			death: 7.25,
			assist: 7.5,
			winRatio: 25,
			playTimes: 4,
		},
		{
			championName: 'Viktor',
			championMinionKillAverage: 211.8,
			championMinionKillPerMin: 6.1,
			kill: 4.75,
			death: 5.75,
			assist: 6.0,
			winRatio: 25,
			playTimes: 4,
		},
		{
			championName: 'Lux',
			championMinionKillAverage: 153.3,
			championMinionKillPerMin: 5.6,
			kill: 5.33,
			death: 4.0,
			assist: 8.0,
			winRatio: 33,
			playTimes: 3,
		},
		{
			championName: 'Akali',
			championMinionKillAverage: 181.5,
			championMinionKillPerMin: 5.5,
			kill: 7.5,
			death: 7.0,
			assist: 4.0,
			winRatio: 0,
			playTimes: 2,
		},
		{
			championName: 'Cassiopeia',
			championMinionKillAverage: 120.0,
			championMinionKillPerMin: 5.3,
			kill: 4.0,
			death: 4.0,
			assist: 2.5,
			winRatio: 0,
			playTimes: 2,
		},
	];
	let solorankedStats: OverviewStats[] = [
		{
			championName: 'Jayce',
			championMinionKillAverage: 198.5,
			championMinionKillPerMin: 7.2,
			kill: 6.8,
			death: 3.73,
			assist: 7.73,
			winRatio: 67,
			playTimes: 15,
		},
		{
			championName: 'Kassadin',
			championMinionKillAverage: 179.8,
			championMinionKillPerMin: 6.5,
			kill: 6.8,
			death: 3.2,
			assist: 5.4,
			winRatio: 80,
			playTimes: 5,
		},
		{
			championName: 'Viktor',
			championMinionKillAverage: 220.0,
			championMinionKillPerMin: 6.5,
			kill: 6.33,
			death: 5.33,
			assist: 5.67,
			winRatio: 33,
			playTimes: 3,
		},
		{
			championName: 'Sylas',
			championMinionKillAverage: 160.0,
			championMinionKillPerMin: 4.7,
			kill: 7.67,
			death: 7.33,
			assist: 7.67,
			winRatio: 33,
			playTimes: 3,
		},

		{
			championName: 'Lux',
			championMinionKillAverage: 153.3,
			championMinionKillPerMin: 5.6,
			kill: 5.33,
			death: 4.0,
			assist: 8.0,
			winRatio: 33,
			playTimes: 3,
		},
		{
			championName: 'Akali',
			championMinionKillAverage: 181.5,
			championMinionKillPerMin: 5.5,
			kill: 7.5,
			death: 7.0,
			assist: 4.0,
			winRatio: 0,
			playTimes: 2,
		},
		{
			championName: 'Cassiopeia',
			championMinionKillAverage: 120.0,
			championMinionKillPerMin: 5.3,
			kill: 4.0,
			death: 4.0,
			assist: 2.5,
			winRatio: 0,
			playTimes: 2,
		},
	];
	let flexranked5v5Stats: OverviewStats[] = [
		{
			championName: 'Vex',
			championMinionKillAverage: 162.5,
			championMinionKillPerMin: 5.8,
			kill: 5.0,
			death: 6.5,
			assist: 6.5,
			winRatio: 0,
			playTimes: 2,
		},
		{
			championName: 'Jayce',
			championMinionKillAverage: 171.0,
			championMinionKillPerMin: 7.7,
			kill: 10.0,
			death: 4.0,
			assist: 11.0,
			winRatio: 100,
			playTimes: 1,
		},
		{
			championName: 'Ashe',
			championMinionKillAverage: 132.0,
			championMinionKillPerMin: 5.3,
			kill: 1.0,
			death: 6.0,
			assist: 4.0,
			winRatio: 0,
			playTimes: 1,
		},
		{
			championName: 'Viktor',
			championMinionKillAverage: 187.0,
			championMinionKillPerMin: 5.1,
			kill: 0.0,
			death: 7.0,
			assist: 7.0,
			winRatio: 0,
			playTimes: 1,
		},
		{
			championName: 'Sylas',
			championMinionKillAverage: 132.0,
			championMinionKillPerMin: 4.3,
			kill: 10.0,
			death: 7.0,
			assist: 7.0,
			winRatio: 0,
			playTimes: 1,
		},
	];
</script>

<div class="stats-box">
	<div>
		<div class="TabList">
			<OverviewStatsTab>
				프리시즌<br />
				전체
			</OverviewStatsTab>
			<OverviewStatsTab>솔로랭크</OverviewStatsTab>
			<OverviewStatsTab>
				자유랭크<br />5v5
			</OverviewStatsTab>
		</div>
		<div class="Content">
			<OverviewStatsTabPanel>
				{#if allStats.length === 0}
					<div class="ErrorMessage">기록된 전적이 없습니다.</div>
				{:else}
					{#each allStats as stats}
						<OverviewStatsTabPanelItem {stats} />
					{/each}
					<MoreButton />
				{/if}
			</OverviewStatsTabPanel>
			<OverviewStatsTabPanel>
				{#if solorankedStats.length === 0}
					<div class="ErrorMessage">기록된 전적이 없습니다.</div>
				{:else}
					{#each solorankedStats as stats}
						<OverviewStatsTabPanelItem {stats} />
					{/each}
					<MoreButton />
				{/if}
			</OverviewStatsTabPanel>
			<OverviewStatsTabPanel>
				{#if flexranked5v5Stats.length === 0}
					<div class="ErrorMessage">기록된 전적이 없습니다.</div>
				{:else}
					{#each flexranked5v5Stats as stats}
						<OverviewStatsTabPanelItem {stats} />
					{/each}
					<MoreButton />
				{/if}
			</OverviewStatsTabPanel>
		</div>
	</div>
</div>

<style>
	.stats-box {
		margin-top: 10px;
		border: 1px solid #cdd2d2;
		box-shadow: 0 1px #dcdfdf;
		background: #f2f2f2;
		border-radius: 2px;
	}
	.TabList {
		display: table;
		width: 100%;
		table-layout: fixed;
	}
	.Content {
		background: #ededed;
	}
	.ErrorMessage {
		display: block;
		padding: 126px 0 60px;
		text-align: center;
		background: url('/assets/images/bg-noData.png') 50% 50px no-repeat;
		font-size: 16px;
		color: #555e5e;
	}
</style>
