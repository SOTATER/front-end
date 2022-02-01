<script lang="ts">
	export let text: string;
</script>

<div class="text-popup">
	{text}
</div>

<style>
	.text-popup {
		max-width: 300px;
		font-size: 12px;
		white-space: pre-wrap;
	}
</style>
