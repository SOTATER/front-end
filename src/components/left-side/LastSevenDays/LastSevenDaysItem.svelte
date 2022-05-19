<script lang="ts">
	import ddragon from '../../../stores/DDragonStore';
	import ChampionImageCircle from '../../image/champion/ChampionImageCircle.svelte';
	import WinRatioGraph from './WinRatioGraph.svelte';
	export let championName: string;
	export let win: number;
	export let lose: number;
	const championKoreanName = $ddragon.champions[championName].name;
	const winRatio = (win * 100) / (win + lose);
</script>

<div class="ChampionWinRatioBox">
	<div class="Face">
		<ChampionImageCircle {championName} size={32} />
	</div>
	<div class="ChampionInfo">
		<div class="ChampionName">{championKoreanName}</div>
	</div>
	<div class="WinRatio">{Math.round(winRatio)}%</div>
	<div class="RatioGraph">
		<WinRatioGraph {win} {lose} />
	</div>
</div>

<style>
	.ChampionWinRatioBox {
		display: flex;
		flex-direction: row;
		width: 100%;
		border-bottom: 1px solid #cdd2d2;
		background: #ededed;
		color: #879292;
		font-size: 12px;
	}
	.Face {
		display: flex;
		width: 44px;
		padding: 5px 0 0 0;
		flex-direction: row;
		justify-content: flex-end;
	}
	.ChampionInfo {
		display: flex;
		width: 61px;
		flex-direction: row;
		align-items: center;
	}
	.ChampionName {
		width: 100%;
		margin-left: 10px;
		color: #555e5e;
		font-weight: bold;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		text-decoration: none;
	}
	.WinRatio {
		display: flex;
		width: 40px;
		align-items: center;
		justify-content: center;
	}
	.RatioGraph {
		display: flex;
		height: 40px;
		align-items: center;
		padding-left: 6px;
		padding-right: 12px;
	}
</style>
