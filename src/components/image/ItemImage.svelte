<script lang="ts">
	import ddragon from '../../stores/DDragonStore';
	import { getItemImageSrc } from '../../utils/ImageUtil';
	import { popoverItem } from '../tooltip/Tooltip';
	export let itemId: number;
</script>

<div class="rune-image" use:popoverItem={{ itemId }}>
	<img
		class="image"
		src={getItemImageSrc($ddragon.version, $ddragon.items[itemId].image.full)}
		alt={$ddragon.items[itemId].name}
	/>
</div>

<style>
	.rune-image {
		width: 22px;
		height: 22px;
		overflow: hidden;
	}
	.image {
		width: 100%;
		height: 100%;
		border-radius: 3px;
	}
</style>
