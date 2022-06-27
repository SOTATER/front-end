<script lang="ts">
	import { Circle2 } from 'svelte-loading-spinners';
	import { debounce } from 'lodash';
	import AutocompleteListItem from './AutocompleteListItem.svelte';
	import AutocompleteHistory from './AutocompleteHistory.svelte';
	import { history } from '../../stores/HistoryStore';
	import type { AutocompleteSummoners } from './types';
	import { search } from '../../utils/SearchUtil';

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

<div class="autocomplete">
	<input
		class="autocomplete-input"
		bind:value={searchText}
		on:input={handleInput}
		on:keydown={handleKeydown}
		on:focus={openHistory}
		on:blur={closeHistory}
	/>
	<button class="search-button" on:click={handleClick}><b>.GG</b></button>
	<div class="autocomplete-history" class:hide-result={isOpen}>
		{#if historyStore && historyStore.length > 0 && isHistoryOpened}
			<AutocompleteHistory />
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
		padding: 15px 150px 18px 17px;
		border: none;
		line-height: 17px;
		font-size: 14px;
		color: #9b9b9b;
		box-sizing: border-box;
		outline: none;
		box-shadow: 0 2px 2px 0 rgb(0 0 0 / 19%);
		display: block;
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
		top: 0;
		right: 0;
		margin: 10px 10px 0 0;
		height: 30px;
		padding: 5px;
		border: none;
		background-color: #00a9ff;
		color: #fff;
		cursor: pointer;
	}
	.autocomplete-history {
		top: 100%;
		left: 0;
		z-index: 10;
		max-height: 1000px;
		width: 100%;
		padding: 0;
		background-color: rgb(249, 250, 252);
		box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
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
