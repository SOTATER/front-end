<script lang="ts">
	import { Circle2 } from 'svelte-loading-spinners';
	import { debounce } from 'lodash';
	import axios from 'axios';
	import AutocompleteListItem from './AutocompleteListItem.svelte';
	import AutocompleteHistory from './AutocompleteHistory.svelte';
	import { addHistory, history } from '../../stores/HistoryStore';

	const axiosInstance = axios.create({
		baseURL: 'https://restcountries.eu/rest/v2/name/',
		timeout: 3000,
	});
	console.log('aaa');
	let isOpen = false;
	let isLoading = true;
	let countries = [];
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
			const result = await axiosInstance.get(str);
			countries = result.data as any[];
		} catch {
			countries = [];
		} finally {
			isLoading = false;
		}
	}, 500);

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			addHistory(searchText);
		}
	};
</script>

<div class="autocomplete">
	<input
		class="autocomplete-input"
		bind:value={searchText}
		on:input={handleInput}
		on:keydown={handleKeydown}
	/>
	<button class="search-button">.GG</button>
	<div class="autocomplete-history" class:hide-result={isOpen}>
		{#if historyStore && historyStore.length > 0}
			<AutocompleteHistory />
		{/if}
	</div>
	<div class="autocomplete-results" class:hide-result={!isOpen}>
		{#if isLoading}
			<div class="loading-container">
				<Circle2 />
			</div>
		{:else if countries.length !== 0}
			{#each countries as country}
				<AutocompleteListItem
					name={country.name}
					level={123}
					rank="Silver 1"
					tier={11}
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
