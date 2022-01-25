<script lang="ts">
	import { ApiConstants } from '../../../apis/ApiConstants';
	import { getKdaColor } from '../../../utils/KDAUtil';
	import ChampionImageCircle from '../../image/champion/ChampionImageCircle.svelte';
	import type { MostChampions } from './GameAverageStats';

	export let champion: MostChampions = {
		name: '',
		win: 0,
		lose: 0,
		kda: 0,
	};

	const getWonLoseRatio = (win: number, lose: number) => {
		return parseFloat(((win / (win + lose)) * 100).toFixed());
	};
</script>

<div class="Content">
	<div class="Image">
		<ChampionImageCircle championName={champion.name} size={34} />
	</div>
	<div class="Name">{ApiConstants.champions[champion.name].name}</div>
	<div class="WonLose">
		<b class:red={getWonLoseRatio(champion.win, champion.lose) > 50}>
			{`${getWonLoseRatio(champion.win, champion.lose)}%`}
		</b>
		<span>{`(${champion.win}승 ${champion.lose}패)`}</span>
	</div>
	<div class={`KDA ${getKdaColor(champion.kda)}`}>
		<span>{champion.kda}</span> 평점
	</div>
</div>

<style>
	.Image {
		position: absolute;
		left: 0;
		top: 0;
		width: 34px;
		height: 34px;
		border-radius: 50%;
		overflow: hidden;
	}
	.Name {
		margin-bottom: 2px;
		line-height: 16px;
		font-size: 14px;
		color: #333;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.WonLose {
		display: inline-block;
		font-size: 11px;
		line-height: 12px;
		color: #333;
	}
	.WonLose b.red {
		color: #c6443e;
	}
	.KDA {
		display: inline-block;
		line-height: 12px;
		font-size: 11px;
		color: #333;
		font-weight: bold;
	}
	.KDA:before {
		display: inline-block;
		margin-left: 6px;
		margin-right: 6px;
		content: '';
		border-left: 1px solid #e0e3e3;
		height: 11px;
		vertical-align: middle;
	}
	.KDA.orange {
		color: #e19205;
	}
	.KDA.blue {
		color: #1f8ecd;
	}
	.KDA.green {
		color: #2daf7f;
	}
</style>
