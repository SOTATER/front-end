<script lang="ts">
	import { ApiConstants } from '../../apis/ApiConstants';
	import { popoverRune } from '../tooltip/Tooltip';
	export let runeId: number;
	console.log(ApiConstants.runes[runeId].icon);
</script>

<div class="rune-image" use:popoverRune={{ runeId }}>
	<img
		class="image"
		src={'http://ddragon.leagueoflegends.com/cdn/img/' + ApiConstants.runes[runeId].icon}
		alt={ApiConstants.runes[runeId].name}
	/>
</div>

<style>
	.rune-image {
		width: 22px;
		height: 22px;
		overflow: hidden;
		border-radius: 50%;
	}
	.image {
		width: 100%;
		height: 100%;
	}
</style>
