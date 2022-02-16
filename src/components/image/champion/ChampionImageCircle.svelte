<script lang="ts">
	import { ApiConstants } from '../../../apis/ApiConstants';
	export let championName: string;
	export let size = 46;
	export let level: number | undefined = undefined;
	function getChampionImageUrl(name: string): string {
		return `http://ddragon.leagueoflegends.com/cdn/${ApiConstants.version}/img/champion/${ApiConstants.champions[name].image.full}`;
	}
</script>

<div class="champion-image" style="width:{size}px;height:{size}px">
	<img class="image" src={getChampionImageUrl(championName)} alt={championName} />
	{#if level}
		<div class="level">{level}</div>
	{/if}
</div>

<style>
	.champion-image {
		position: relative;
	}
	.image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.level {
		position: absolute;
		left: -3px;
		bottom: -3px;
		width: 15px;
		height: 15px;
		background: url(/assets/images/levelholder.png);
		color: #ddd;
		font-size: 10px;
		font-family: 'Tahoma';
		text-align: center;
		line-height: 15px;
	}
</style>
