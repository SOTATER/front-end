<script lang="ts">
	import StarFilled16 from 'carbon-icons-svelte/lib/StarFilled16/StarFilled16.svelte';

	import { favorite } from '../../stores/FavoriteStore';

	import { history } from '../../stores/HistoryStore';

	import AutocompleteRecentHistoryItem from './AutocompleteRecentHistoryItem.svelte';

	export let isMain = true;
	let historyStore: string[];
	history.subscribe((value) => {
		historyStore = value;
	});

	let favoriteStore: string[];
	favorite.subscribe((value) => {
		favoriteStore = value;
	});

	let isRecentTab = true;

	const handleRecentTabClick = () => {
		isRecentTab = true;
	};
	const handleFavoriteTabClick = () => {
		isRecentTab = false;
	};
</script>

<div class="history-container">
	<div class="history-tab">
		<div class="history-tabheader" class:active={isRecentTab} on:click={handleRecentTabClick}>
			최근검색
		</div>
		<div
			class="history-tabheader"
			class:active={!isRecentTab}
			on:click={handleFavoriteTabClick}
		>
			즐겨찾기
		</div>
	</div>
	<div class="history-tabItems">
		<div class="history-recent" class:history-recent-main={isMain} class:hide={!isRecentTab}>
			{#if historyStore}
				{#each historyStore as item (item)}
					<AutocompleteRecentHistoryItem {isMain} summonerName={item} />
				{/each}
			{/if}
		</div>
		<div class="history-favorite" class:history-favorite-main={isMain} class:hide={isRecentTab}>
			{#if !favoriteStore?.length}
				<li class="no-data">
					<img
						src="assets/images/icon-history-info.png"
						width="16"
						height="16"
						alt="Info"
					/>
					<p>
						관심있는 소환사에 <StarFilled16 class="non-favorite-icon" /> 즐겨찾기를 하여
						편리하게 정보를 받아보세요.
					</p>
				</li>
			{/if}
			{#if favoriteStore}
				{#each favoriteStore as item (item)}
					<AutocompleteRecentHistoryItem
						{isMain}
						summonerName={item}
						isHistoryItem={false}
					/>
				{/each}
			{/if}
		</div>
	</div>
</div>

<style>
	.history-tab {
		display: flex;
		line-height: 40px;
		cursor: pointer;
	}
	.history-tabheader {
		flex-grow: 1;
		text-align: center;
		font-size: 14px;
		background: #e3e3e3;
		color: #9c9c9c;
	}
	.active {
		background: #fff;
		color: #4a4a4a;
	}
	.history-tabItems {
		display: block;
	}
	.history-recent {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.history-recent-main {
		padding: 5px 20px 20px 0;
	}
	.history-favorite {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.history-favorite-main {
		padding: 5px 20px 20px 0;
	}
	.hide {
		display: none;
	}
	.no-data {
		padding: 20px;
		width: 100%;
		text-align: center;
		box-sizing: border-box;
		list-style: none;
	}
	.no-data > img {
		display: inline-block;
		vertical-align: middle;
		margin: 0px auto;
	}
	.no-data p {
		margin-left: 4px;
		display: inline-block;
		font-size: 12px;
		vertical-align: middle;
		line-height: 15px;
		color: rgb(102, 102, 102);
	}
</style>
