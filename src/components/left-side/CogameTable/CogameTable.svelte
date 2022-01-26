<script lang="ts">
	import Table from './Table.svelte';
</script>

<div class="SummonersMostGame Box">
	<div class="Title">같은 팀으로 게임한 소환사들 (최근 20 게임)</div>
	<Table />
</div>

<style>
	.Box {
		margin-top: 10px;
		border: 1px solid #cdd2d2;
		box-shadow: 0 1px #dcdfdf;
		background: #f2f2f2;
		border-radius: 2px;
	}
	.Box > .Title {
		position: relative;
		display: block;
		padding: 10px 15px;
		border-bottom: 1px solid #cdd2d2;
		color: #555e5e;
		font-size: 12px;
		font-weight: bold;
		text-decoration: none;
	}
</style>
