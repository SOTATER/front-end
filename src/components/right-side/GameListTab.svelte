<script lang="ts">
	import { registerTab, selectedTab, selectTab } from '../../stores/GameListStore';

	const tab = {};
	registerTab(tab);

	const handleTabClick = () => {
		selectTab(tab);
		// TODO: 탭 별 매치 데이터 가져오기
	};
</script>

<li class="Item" class:active={$selectedTab === tab}>
	<a href="/" class="Link" on:click|preventDefault={handleTabClick}>
		<slot />
	</a>
</li>

<style>
	li {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.Item {
		display: inline-block;
		height: 32px;
		margin: 0 10px;
		vertical-align: top;
	}
	.Item.active {
		border-bottom: 2px solid #1f8ecd;
	}
	.Item > .Link {
		display: inline-block;
		color: #555e5e;
		font-size: 12px;
		line-height: 36px;
		text-decoration: none;
	}
	.Item.active > .Link {
		color: #1f8ecd;
		font-weight: bold;
	}
</style>
