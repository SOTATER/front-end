<script lang="ts">
	import ddragon from '../../../stores/DDragonStore';
	import { getKdaColor } from '../../../utils/KDAUtil';
	import ChampionImageCircle from '../../image/champion/ChampionImageCircle.svelte';
	import { popoverText } from '../../tooltip/Tooltip';
	import type { OverviewStats } from './OverviewStats';

	export let stats: OverviewStats = {
		championName: '',
		championMinionKillAverage: 0,
		championMinionKillPerMin: 0,
		kill: 0,
		death: 0,
		assist: 0,
		winRatio: 0,
		playTimes: 0,
	};

	const championKoreanName = $ddragon.champions[stats.championName].name;
	const kda = ((stats.kill + stats.assist) / stats.death).toFixed(2);
	const kdaTooltip = `(K ${stats.kill} + A ${stats.assist}) / D ${stats.death}`;

	const getRoundNum = (num: number) => {
		return (Math.round(num * 10) / 10).toFixed(1);
	};
</script>

<div class="ChampionBox">
	<div class="Face" title={championKoreanName}>
		<ChampionImageCircle championName={stats.championName} size={45} />
	</div>
	<div class="ChampionInfo">
		<div class="ChampionName" title={championKoreanName}>
			{championKoreanName}
		</div>
		<div class="ChampionMinionKill" use:popoverText={{ text: '평균 CS (CS/분)' }}>
			{`CS ${stats.championMinionKillAverage.toFixed(1)} (${stats.championMinionKillPerMin})`}
		</div>
	</div>
	<div class="PersonalKDA">
		<div class={`KDA ${getKdaColor(parseFloat(kda))}`} use:popoverText={{ text: kdaTooltip }}>
			<span>{`${kda}:1`}</span>
			<span>평점</span>
		</div>
		<div class="KDAEach">
			<span>{getRoundNum(stats.kill)}</span>
			<span class="Bar">/</span>
			<span>{getRoundNum(stats.death)}</span>
			<span class="Bar">/</span>
			<span>{getRoundNum(stats.assist)}</span>
		</div>
	</div>
	<div class="Played">
		<div class="WinRatio" class:red={stats.winRatio > 60} use:popoverText={{ text: '승률' }}>
			{`${stats.winRatio}%`}
		</div>
		<div class="Title">{`${stats.playTimes} 게임`}</div>
	</div>
</div>

<style>
	.ChampionBox {
		display: table;
		width: 100%;
		border-bottom: 1px solid #cdd2d2;
		color: #879292;
		text-align: center;
	}
	.ChampionBox > .Face {
		display: table-cell;
		width: 60px;
		padding: 4px 0px 4px 15px;
		text-align: right;
		vertical-align: middle;
		box-sizing: border-box;
	}
	.ChampionBox > .ChampionInfo {
		display: table-cell;
		width: 85px;
		text-align: left;
		vertical-align: middle;
		padding-left: 10px;
		box-sizing: border-box;
	}
	.ChampionBox > .ChampionInfo > .ChampionName {
		width: 70px;
		color: #555e5e;
		font-weight: bold;
		font-size: 13px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.ChampionBox > .ChampionInfo > .ChampionMinionKill {
		margin-top: 6px;
		font-size: 12px;
		white-space: nowrap;
	}
	.ChampionBox > .PersonalKDA {
		display: table-cell;
		line-height: 1.8;
		vertical-align: middle;
	}
	.ChampionBox > .PersonalKDA > .KDA {
		font-size: 13px;
		font-weight: bold;
		white-space: nowrap;
	}
	.ChampionBox > .PersonalKDA > .KDA.green {
		color: #2daf7f;
	}
	.ChampionBox > .PersonalKDA > .KDA.blue {
		color: #1f8ecd;
	}
	.ChampionBox > .PersonalKDA > .KDA.orange {
		color: #e19205;
	}
	.ChampionBox > .PersonalKDA > .KDAEach {
		font-size: 12px;
		color: #879292;
		white-space: nowrap;
	}
	.ChampionBox > .PersonalKDA > .KDAEach > .Bar {
		color: #bbb;
	}
	.ChampionBox > .Played {
		display: table-cell;
		width: 70px;
		line-height: 1.8;
		vertical-align: middle;
	}
	.ChampionBox > .Played > .WinRatio {
		color: #879292;
		font-weight: bold;
		font-size: 13px;
	}
	.ChampionBox > .Played > .WinRatio.red {
		color: #c6443e;
	}
	.ChampionBox > .Played > .Title {
		font-size: 11px;
		white-space: nowrap;
	}
</style>
