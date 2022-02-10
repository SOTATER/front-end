<script lang="ts">
	import { ApiConstants } from '../../apis/ApiConstants';
	import { popoverItem } from '../tooltip/Tooltip';
	export let itemId: number;
</script>

<div class="rune-image" use:popoverItem={{ itemId }}>
	<img
		class="image"
		src={'http://ddragon.leagueoflegends.com/cdn/' +
			ApiConstants.version +
			'/img/item/' +
			ApiConstants.items[itemId].image.full}
		alt={ApiConstants.items[itemId].name}
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
