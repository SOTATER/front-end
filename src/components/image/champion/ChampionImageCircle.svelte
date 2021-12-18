<script lang="ts">
	import { ApiConstants } from '../../../apis/ApiConstants';
	export let championName: string;
	export let size = 46;
	function getChampionImageUrl(name: string): string {
		return `http://ddragon.leagueoflegends.com/cdn/${ApiConstants.version}/img/champion/${ApiConstants.champions[name].image.full}`;
	}
</script>

<div class="champion-image" style="width:{size}px;height:{size}px">
	<img class="image" src={getChampionImageUrl(championName)} alt={championName} />
</div>

<style>
	.champion-image {
		overflow: hidden;
		border-radius: 50%;
	}
	.image {
		width: 100%;
		height: 100%;
	}
</style>
