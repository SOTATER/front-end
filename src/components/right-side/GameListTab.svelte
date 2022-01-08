<script lang="ts">
	import { selectedTab, selectTab } from '../../stores/GameListStore';
	import type { GameType } from './types';

	export let tab: GameType = 'total';

	const handleTabClick = () => {
		selectTab(tab);
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
