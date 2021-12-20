<script lang="ts">
	import LastSevenDaysItem from './LastSevenDaysItem.svelte';

	// 아래 데이터는 추후 context api로 대체 예정
	let data = [
		{
			championName: 'Garen',
			win: 30,
			lose: 20,
		},
		{
			championName: 'Jinx',
			win: 10,
			lose: 20,
		},
		{
			championName: 'Galio',
			win: 2,
			lose: 1,
		},
		{
			championName: 'Teemo',
			win: 50,
			lose: 0,
		},
	];
</script>

<div class="Box">
	<div class="Title">최근 7일간 랭크 승률</div>
	<div class="Content">
		{#each data as { championName, win, lose }}
			<LastSevenDaysItem {championName} {win} {lose} />
		{/each}
	</div>
</div>

<style>
	.Box {
		border: 1px solid #cdd2d2;
		box-shadow: 0 1px #dcdfdf;
		background: #f2f2f2;
		border-radius: 2px;
		margin-top: 10px;
		width: 300px;
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
