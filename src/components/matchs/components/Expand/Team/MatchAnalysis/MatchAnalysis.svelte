<script lang="ts">
	import { tableInfos } from './data';

	import InfoTable from './InfoTable.svelte';
</script>

<div class="Container">
	<div class="Header">
		<span class="win">승리팀</span>
		<span class="lose">패배팀</span>
	</div>
	<div class="Table">
		{#each tableInfos as tableInfo}
			<InfoTable
				winners={tableInfo.winners}
				losers={tableInfo.losers}
				label={tableInfo.label}
				circleData={tableInfo.circleData}
			/>
		{/each}
	</div>
</div>

<style>
	.Container {
		display: flex;
		flex-direction: column;

		padding-top: 5px;
	}
	.Header {
		text-align: center;
		margin-bottom: 15px;

		font-size: 12px;
	}
	.win::before {
		display: inline-block;
		vertical-align: middle;
		margin-right: 8px;
		content: '';
		width: 10px;
		border-top: 4px solid #1a78ae;
	}
	.win {
		margin-right: 8px;
		color: #1a78ae;
	}
	.lose {
		margin-left: 8px;
		color: #c6443e;
	}
	.lose::before {
		display: inline-block;
		vertical-align: middle;
		margin-right: 8px;
		content: '';
		width: 10px;
		border-top: 4px solid #c6443e;
	}
	.Table {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		flex-wrap: wrap;
	}
</style>
