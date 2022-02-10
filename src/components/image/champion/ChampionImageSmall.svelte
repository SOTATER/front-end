<script lang="ts">
	import { ApiConstants } from '../../../apis/ApiConstants';
	import { popoverText } from '../../tooltip/Tooltip';
	export let championName: string;
	function getChampionImageUrl(name: string): string {
		return `http://ddragon.leagueoflegends.com/cdn/${ApiConstants.version}/img/champion/${ApiConstants.champions[name].image.full}`;
	}
</script>

<div
	class="champion-small-image"
	use:popoverText={{ text: ApiConstants.champions[championName].name }}
>
	<img class="image" src={getChampionImageUrl(championName)} alt={championName} />
</div>

<style>
	.champion-small-image {
		width: 16px;
		height: 16px;
	}
	.image {
		width: 100%;
		height: 100%;
	}
</style>
