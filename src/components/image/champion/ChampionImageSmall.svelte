<script lang="ts">
	import ddragon from '../../../stores/DDragonStore';
	import { getChampionImageSrc } from '../../../utils/ImageUtil';
	import { popoverText } from '../../tooltip/Tooltip';
	export let championName: string;
</script>

<div class="champion-small-image" use:popoverText={{ text: $ddragon.champions[championName].name }}>
	<img
		class="image"
		src={getChampionImageSrc($ddragon.version, $ddragon.champions[championName].image.full)}
		alt={championName}
	/>
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
