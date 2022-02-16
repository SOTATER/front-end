<script lang="ts">
	import { ApiConstants } from '../../apis/ApiConstants';
	import { popoverRune } from '../tooltip/Tooltip';

	export let runeId: number;
	export let size = 22;
</script>

<div class="rune-image" use:popoverRune={{ runeId }} style="width:{size}px;height:{size}px">
	<img
		class="image"
		src={'http://ddragon.leagueoflegends.com/cdn/img/' + ApiConstants.runes[runeId].icon}
		alt={ApiConstants.runes[runeId].name}
	/>
</div>

<style>
	.rune-image {
		overflow: hidden;
		border-radius: 50%;
	}
	.image {
		width: 100%;
		height: 100%;
	}
</style>
