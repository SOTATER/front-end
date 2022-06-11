<script lang="ts">
	import StarFilled16 from 'carbon-icons-svelte/lib/StarFilled16/StarFilled16.svelte';
	import Delete16 from 'carbon-icons-svelte/lib/Delete16/Delete16.svelte';
	import { deleteHistory } from '../../stores/HistoryStore';
	import { addFavorite, deleteFavorite, favorite } from '../../stores/FavoriteStore';

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
</script>

<div class="history-item">
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
		width: 33.3%;
		padding-left: 20px;
		margin-top: 15px;
		box-sizing: border-box;
		line-height: 15px;
		font-size: 12px;
	}
	.item-summonor-name {
		flex-grow: 1;
	}
	.summonor-name {
		cursor: pointer;
		display: inline-block;
	}
	.history-item {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
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
