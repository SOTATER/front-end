<script lang="ts">
	import StarFilled16 from 'carbon-icons-svelte/lib/StarFilled16/StarFilled16.svelte';
	import Delete16 from 'carbon-icons-svelte/lib/Delete16/Delete16.svelte';
	import { deleteHistory } from '../../stores/HistoryStore';
	import { addFavorite, deleteFavorite, favorite } from '../../stores/FavoriteStore';
	import { search } from '../../utils/SearchUtil';
	export let isMain = true;
	export let summonerName: string;
	export let isHistoryItem = true;
	let isFavorite = false;
	favorite.subscribe((value) => {
		if (value) {
			isFavorite = value.includes(summonerName);
		} else {
			isFavorite = false;
		}
	});

	const handleStarClick = () => {
		if (isFavorite) {
			deleteFavorite(summonerName);
		} else {
			addFavorite(summonerName);
		}
	};

	const handleDeleteClick = () => {
		if (isHistoryItem) {
			deleteHistory(summonerName);
		}
		deleteFavorite(summonerName);
	};

	const handleClick = () => {
		search(summonerName);
	};
</script>

<div
	class="history-item"
	class:history-item-main={isMain}
	class:history-item-header={!isMain}
	on:click={handleClick}
>
	<div class="item-summonor-name">
		<div class="summonor-name">{summonerName}</div>
	</div>
	<div class="history-actions">
		{#if isHistoryItem}
			<div class="action-icon">
				{#if isFavorite}
					<StarFilled16 class="favorite-icon" on:click={handleStarClick} />
				{:else}
					<StarFilled16 class="non-favorite-icon" on:click={handleStarClick} />
				{/if}
			</div>
		{/if}
		<div class="action-icon">
			<Delete16 on:click={handleDeleteClick} />
		</div>
	</div>
</div>

<style>
	.history-item {
		box-sizing: border-box;
		line-height: 15px;
		font-size: 12px;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}
	.history-item-main {
		width: 33.3%;
		padding-left: 20px;
		margin-top: 15px;
	}
	.history-item-header {
		width: 100%;
		padding: 8px 16px;
	}
	.item-summonor-name {
		flex-grow: 1;
	}
	.summonor-name {
		cursor: pointer;
		display: inline-block;
	}
	.history-actions {
		display: flex;
		flex-direction: row;
	}
	.action-icon {
		margin: 5px;
		cursor: pointer;
	}
</style>
