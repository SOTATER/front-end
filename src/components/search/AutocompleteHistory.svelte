<script lang="ts">
import { favorite } from '../../stores/FavoriteStore';

import { history } from '../../stores/HistoryStore';

    import AutocompleteRecentHistoryItem from './AutocompleteRecentHistoryItem.svelte';

    let historyStore: string[];
    const unsubscribeHistory = history.subscribe(value => {
        historyStore = value;
    });

    let favoriteStore: string[];
    const unsubscribeFavorite = favorite.subscribe(value => {
        favoriteStore = value;
    });

    let isRecentTab: boolean = true;

    const handleRecentTabClick = () => {
        isRecentTab = true;
    }
    const handleFavoriteTabClick = () => {
        isRecentTab = false;
    }
</script>

<div class="history-container">
    <div class="history-tab">
        <div class="history-tabheader" class:active={isRecentTab} on:click={handleRecentTabClick}>최근검색</div>
        <div class="history-tabheader" class:active={!isRecentTab} on:click={handleFavoriteTabClick}>즐겨찾기</div>
    </div>
    <div class="history-tabItems">
        <div class="history-recent" class:hide={!isRecentTab}>
            {#if historyStore}
                {#each historyStore as item (item)}
                    <AutocompleteRecentHistoryItem summonerName={item} />
                {/each}
            {/if}
        </div>
        <div class="history-favorite" class:hide={isRecentTab}>
            {#if favoriteStore}
                {#each favoriteStore as item (item)}
                    <AutocompleteRecentHistoryItem summonerName={item} isHistoryItem={false} />
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
        padding: 5px 20px 20px 0;
    }
    .history-favorite {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 5px 20px 20px 0;
    }
    .hide {
        display: none;
    }
</style>