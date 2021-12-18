<script lang="ts">
	export let win: number;
	export let lose: number;
	const winRatio = (win * 100) / (win + lose);
	const winWidth = Math.round(winRatio).toString() + '%';
</script>

<div class="Graph">
	{#if win !== 0}
		<div class="Fill Left" style="width: {winWidth}" />
		<div class="Text Left">{win}승</div>
	{/if}
	{#if lose !== 0}
		<div class="Fill Right" />
		<div class="Text Right">{lose}패</div>
	{/if}
	{#if win !== 0 && lose !== 0}
		<div class="Bar" style="left: {winWidth}" />
	{/if}
</div>

<style>
	.Graph {
		width: 140px;
		height: 20px;
		position: relative;
	}
	.Fill {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		border-radius: 3px;
	}
	.Fill.Left {
		z-index: 2;
		background: #3d95e5;
		border: 1px solid #3480c6;
	}
	.Fill.Right {
		width: 100%;
		z-index: 1;
		background: #ee5a52;
		border: 1px solid #c6443e;
	}
	.Text {
		position: absolute;
		top: 0;
		height: 100%;
		font-size: 11px;
		z-index: 3;
		color: #f2f2f2;
		line-height: 22px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.Text.Left {
		left: 6px;
		text-align: left;
	}
	.Text.Right {
		right: 5px;
		text-align: right;
	}
	.Bar {
		position: absolute;
		top: 0;
		height: 100%;
		border-left: 1px solid #1a78ae;
		border-right: 1px solid #c6443e;
		z-index: 2;
	}
</style>
