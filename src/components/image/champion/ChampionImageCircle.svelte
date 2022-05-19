<script lang="ts">
	import ddragon from '../../../stores/DDragonStore';
	import { getChampionImageSrc } from '../../../utils/ImageUtil';
	export let championName: string;
	export let size = 46;
	export let level: number | undefined = undefined;
</script>

<div class="champion-image" style="width:{size}px;height:{size}px">
	<img
		class="image"
		src={getChampionImageSrc($ddragon.version, $ddragon.champions[championName].image.full)}
		alt={championName}
	/>
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
