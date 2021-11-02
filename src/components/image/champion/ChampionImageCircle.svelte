<script lang="ts">
	import { ApiConstants } from '../../../apis/ApiConstants';
	export let championName: string;
	function getChampionImageUrl(name: string): string {
		return `http://ddragon.leagueoflegends.com/cdn/${ApiConstants.version}/img/champion/${ApiConstants.champions[name].image.full}`;
	}
</script>

<div class="champion-image">
	<img class="image" src={getChampionImageUrl(championName)} alt={championName} />
</div>

<style>
	.champion-image {
		width: 46px;
		height: 46px;
		overflow: hidden;
		border-radius: 50%;
	}
	.image {
		width: 100%;
		height: 100%;
	}
</style>
