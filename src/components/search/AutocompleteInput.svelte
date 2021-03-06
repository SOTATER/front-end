<script lang="ts">
	import { Circle2 } from 'svelte-loading-spinners';
	import { debounce } from 'lodash';
	import AutocompleteListItem from './AutocompleteListItem.svelte';
	import AutocompleteHistory from './AutocompleteHistory.svelte';
	import { history } from '../../stores/HistoryStore';
	import type { AutocompleteSummoners } from './types';
	import { search } from '../../utils/SearchUtil';
	import { clickOutside } from '../../utils/ClickOutsideUtil';

	export let isMain = true;

	// eslint-disable-next-line @typescript-eslint/require-await
	async function getAutocompleteResults(keyword: string): Promise<AutocompleteSummoners> {
		return getDummyData(keyword);
	}

	function getDummyData(keyword: string): AutocompleteSummoners {
		return [
			{
				name: keyword + '피그미',
				rank: 'Gold 1',
				tier: 0,
				level: 100,
				profileId: 1,
			},
			{
				name: keyword + 'gabriel',
				rank: 'Platinum',
				tier: 99,
				level: 1000,
				profileId: 2,
			},
			{
				name: keyword + '창석이',
				level: 1,
				profileId: 3,
			},
		];
	}

	let isOpen = false;
	let isLoading = true;
	let summoners: AutocompleteSummoners = [];
	let searchText = '';

	let historyStore: string[];
	history.subscribe((value) => {
		historyStore = value;
	});

	const handleInput = async (
		event: Event & { currentTarget: EventTarget & HTMLInputElement },
	) => {
		isLoading = true;
		if (event.currentTarget.value === '') {
			isOpen = false;
		} else {
			isOpen = true;
			await getData(event.currentTarget.value);
		}
	};

	const getData = debounce(async (str: string) => {
		try {
			summoners = await getAutocompleteResults(str);
		} catch {
			summoners = [];
		} finally {
			isLoading = false;
		}
	}, 500);

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			search(searchText);
		}
	};

	const handleClick = () => {
		search(searchText);
	};

	let isHistoryOpened = false;

	const openHistory = () => {
		isHistoryOpened = true;
	};
	const closeHistory = debounce(() => {
		isHistoryOpened = false;
	}, 500);
</script>

<div class="autocomplete" use:clickOutside={() => closeHistory()}>
	<input
		class="autocomplete-input"
		class:autocomplete-input-main={isMain}
		class:autocomplete-input-header={!isMain}
		bind:value={searchText}
		on:input={handleInput}
		on:keydown={handleKeydown}
		on:focus={openHistory}
	/>
	<button
		class:search-button-main={isMain}
		class:search-button-header={!isMain}
		class="search-button"
		on:click={handleClick}
	>
		<b>.GG</b>
	</button>
	<div
		class="autocomplete-history"
		class:autocomplete-history-main={isMain}
		class:autocomplete-history-header={!isMain}
		class:hide-result={isOpen}
	>
		{#if historyStore && historyStore.length > 0 && isHistoryOpened}
			<AutocompleteHistory {isMain} />
		{/if}
	</div>
	<div class="autocomplete-results" class:hide-result={!isOpen}>
		{#if isLoading}
			<div class="loading-container">
				<Circle2 />
			</div>
		{:else if summoners.length !== 0}
			{#each summoners as summoner}
				<AutocompleteListItem
					name={summoner.name}
					level={summoner.level}
					rank={summoner.rank}
					tier={summoner.tier}
					profileId={summoner.profileId}
					{searchText}
				/>
			{/each}
		{/if}
	</div>
</div>

<style>
	.autocomplete {
		position: relative;
		width: 624px;
		margin: 0 auto;
		border-radius: 2px;
		background-color: #fff;
	}

	.autocomplete-input {
		width: 100%;
		border: none;
		box-sizing: border-box;
		outline: none;
	}

	.autocomplete-input-main {
		padding: 15px 150px 18px 17px;
		line-height: 17px;
		font-size: 14px;
		color: #9b9b9b;
		box-shadow: 0 2px 2px 0 rgb(0 0 0 / 19%);
		display: block;
	}

	.autocomplete-input-header {
		border: 0px;
		padding: 0px 12px 0px 14px;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
		font-size: 12px;
		color: rgb(114, 114, 114);
		line-height: 15px;
		height: 100%;
	}
	.loading-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10px;
	}

	.search-button {
		position: absolute;
		background-color: #00a9ff;
		color: #fff;
		cursor: pointer;
		border: none;
		top: 0;
		right: 0;
	}
	.search-button-main {
		margin: 10px 10px 0 0;
		height: 30px;
		padding: 5px;
	}

	.search-button-header {
		width: 54px;
		height: 32px;
	}
	.autocomplete-history {
		position: absolute;
		left: 0;
		z-index: 10;
		max-height: 1000px;
		width: 100%;
		padding: 0;
		background-color: rgb(249, 250, 252);
		box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
	}
	.autocomplete-history-main {
		top: 100%;
	}
	.autocomplete-history-header {
		top: calc(100% + 3px);
	}
	.autocomplete-results {
		top: 100%;
		left: 0;
		z-index: 10;
		max-height: 1000px;
		width: 100%;
		padding: 0;
		background-color: rgb(249, 250, 252);
		box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
	}
	.hide-result {
		display: none;
	}
</style>
