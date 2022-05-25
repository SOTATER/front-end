<script lang="ts">
	import ddragon from '../../stores/DDragonStore';

	export let runeId: number;
	const rune = $ddragon.runes[runeId];
	const runeDescription = rune.shortDesc.replaceAll(
		/<(\/)?([a-zA-Z-]*)(\s[a-zA-Z-]*=[^>]*)?(\s)*(\/)?>/g,
		'',
	);
</script>

<div class="rune-popup">
	<div class="rune-name">
		{rune.name}
	</div>
	<div class="rune-description">
		{runeDescription}
	</div>
</div>

<style>
	.rune-popup {
		max-width: 300px;
		font-size: 12px;
	}
	.rune-name {
		color: gold;
	}

	.rune-description {
		color: white;
	}
</style>
