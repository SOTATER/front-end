<script lang="ts">
	import { ApiConstants } from '../../apis/ApiConstants';
	import { popoverSpell } from '../tooltip/Tooltip';
	export let spellName: string;
	// console.log(ApiConstants.spells[spellId].image.full);
</script>

<div class="rune-image" use:popoverSpell={{ spellName }}>
	<img
		class="image"
		src={'http://ddragon.leagueoflegends.com/cdn/' +
			ApiConstants.version +
			'/img/spell/' +
			ApiConstants.spells[spellName].image.full}
		alt={ApiConstants.spells[spellName].name}
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
	}
</style>
