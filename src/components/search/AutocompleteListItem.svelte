<script lang="ts">
	import { ApiConstants } from '../../apis/ApiConstants';
	export let name: string;
	export let level: number;
	export let rank: string = undefined;
	export let tier: number = undefined;
	export let profileId: number;
	export let searchText: string;
	const index = name.toLowerCase().search(searchText.toLowerCase());
	let isSelected = false;

	function handleMouseenter() {
		isSelected = true;
	}
	function handleMouseleave() {
		isSelected = false;
	}
</script>

<div
	class="autocomplete-item"
	on:mouseenter={handleMouseenter}
	on:mouseleave={handleMouseleave}
	class:autocomplete-selected={isSelected}
>
	<img
		class="profile-icon"
		alt={name}
		src={`http://ddragon.leagueoflegends.com/cdn/${ApiConstants.version}/img/profileicon/${profileId}.png`}
	/>
	<div>
		<div class="autocomplete-name">
			{#if index >= 0}
				{name.substring(0, index)}<b>{name.substring(index, index + searchText.length)}</b
				>{name.substring(index + searchText.length)}
			{:else}
				{name}
			{/if}
		</div>
		<div class="autocomplete-rank">
			{#if rank}
				{rank + ' - ' + String(tier) + 'LP'}
			{:else}
				level {level}
			{/if}
		</div>
	</div>
</div>

<style>
	.autocomplete-item {
		display: flex;
		flex-direction: row;
		cursor: pointer;
		padding: 7px 17px;
	}
	.autocomplete-selected {
		background: #e8f5fe;
	}
	.autocomplete-item b {
		color: #d53f3f;
	}
	.autocomplete-name {
		margin-top: 2px;
		font-size: 14px;
		line-height: 17px;
		color: #333;
	}
	.autocomplete-rank {
		margin-top: 2px;
		line-height: 14px;
		font-size: 12px;
		color: #666;
	}
	.profile-icon {
		border-radius: 50%;
		width: 36px;
		height: 36px;
		margin-right: 14px;
	}
</style>
