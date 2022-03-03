<script lang="ts">
	import GameListTab from './GameListTab.svelte';
	import GameListTabPanel from './GameListTabPanel.svelte';
	import GameListTabPanelItem from './GameListTabPanelItem.svelte';
	import GameTypeSelect from './GameTypeSelect.svelte';
	import SearchTextfield from './search/SearchTextfield.svelte';
	import { GAME_TYPES } from './types';
</script>

<div class="GameListContainer">
	<div class="Box">
		<div class="Navigation">
			<ul class="List">
				<GameListTab tab="total">전체</GameListTab>
				<GameListTab tab="soloranked">솔로랭크</GameListTab>
				<GameListTab tab="flexranked">자유랭크</GameListTab>
				<GameTypeSelect />
			</ul>
			<SearchTextfield />
		</div>
	</div>
	<div>
		{#each GAME_TYPES as type}
			<GameListTabPanel panel={type}>
				<GameListTabPanelItem />
			</GameListTabPanel>
		{/each}
	</div>
</div>

<style>
	.GameListContainer {
		margin-top: 10px;
	}
	.Box {
		border: 1px solid #cdd2d2;
		box-shadow: 0 1px #dcdfdf;
		background: #f2f2f2;
		border-radius: 2px;
	}
	.Navigation {
		position: relative;
		border-bottom: 1px solid #cdd2d2;
		margin-bottom: -1px;
		height: 34px;
		overflow: visible;
	}
	.List {
		float: left;
		padding-left: 10px;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
