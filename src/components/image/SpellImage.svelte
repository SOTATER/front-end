<script lang="ts">
	import ddragon from '../../stores/DDragonStore';
	import { getSpellImageSrc } from '../../utils/ImageUtil';
	import { popoverSpell } from '../tooltip/Tooltip';
	export let spellName: string;
	export let size = 22;
</script>

<div class="rune-image" use:popoverSpell={{ spellName }} style="width:{size}px;height:{size}px">
	<img
		class="image"
		src={getSpellImageSrc($ddragon.version, $ddragon.spells[spellName].image.full)}
		alt={$ddragon.spells[spellName].name}
	/>
</div>

<style>
	.rune-image {
		overflow: hidden;
	}
	.image {
		width: 100%;
		height: 100%;
	}
</style>
