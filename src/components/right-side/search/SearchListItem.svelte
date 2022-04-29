<script lang="ts">
	import type { DDragonChampionData } from '../../../schema/ddragon/champions';

	export let visible = false;
	export let champion: DDragonChampionData = null;

	const handleItemClick = (champion?: DDragonChampionData) => {
		// TODO: 챔피언 별 매치 데이터 가져오기
		// console.log(`id: ${champion?.key}, name: ${champion?.name}`);
		visible = false;
	};
</script>

<li class="Item">
	<a href="/" class="Link" on:click|preventDefault={() => handleItemClick(champion)}>
		{champion?.name || '모든 챔피언'}
	</a>
</li>

<style>
	.Item {
		height: 21px;
	}
	.Item > .Link {
		display: block;
		padding: 3px 12px;
		max-width: 130px;
		font-size: 13px;
		color: #879292;
		text-decoration: none;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.Item > .Link:hover {
		color: #fff;
		background-color: #1f8ecd;
	}
</style>
