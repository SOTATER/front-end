<script lang="ts">
	import { ApiConstants } from '../../apis/ApiConstants';
	import ddragon from '../../stores/DDragonStore';
	import { popoverSpell } from '../tooltip/Tooltip';
	export let spellName: string;
	export let size = 22;
</script>

<div class="rune-image" use:popoverSpell={{ spellName }} style="width:{size}px;height:{size}px">
	<img
		class="image"
		src={`http://ddragon.leagueoflegends.com/cdn/${$ddragon.version}/img/spell/${ApiConstants.spells[spellName].image.full}`}
		alt={ApiConstants.spells[spellName].name}
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
