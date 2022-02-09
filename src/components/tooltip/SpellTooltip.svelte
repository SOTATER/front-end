<script lang="ts">
	import { ApiConstants } from '../../apis/ApiConstants';
	export let spellName: string;
	const spell = ApiConstants.spells[spellName];
</script>

<div class="spell-popup">
	<div class="spell-name">
		{spell.name}
	</div>
	<div class="spell-description">
		{spell.description}
	</div>
</div>

<style>
	.spell-popup {
		max-width: 300px;
		font-size: 12px;
	}
	.spell-name {
		color: gold;
	}

	.spell-description {
		color: white;
	}
</style>
