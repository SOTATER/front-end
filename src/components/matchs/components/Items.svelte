<script lang="ts">
	import type { Items } from '../data';
	export let items: Items;
	export let isWin: boolean;

	const handleClick = () => {
		console.log('clicked');
	};
</script>

<div class="Items">
	<div class="ItemList">
		{#each items.items as item}
			<div class="Item ">
				{#if item.imgUrl}
					<img src={item.imgUrl} class="Image" alt={item.name} />
				{:else}
					<div class="NoItem" />
				{/if}
			</div>
		{/each}
		<button class="Build" on:click={handleClick}>
			<img
				class="Image"
				src={isWin
					? 'https://opgg-static.akamaized.net/css3/sprite/images/icon-buildblue-p.png'
					: 'https://opgg-static.akamaized.net/css3/sprite/images/icon-buildred-p.png'}
				alt="빌드"
			/>
		</button>
	</div>
	{#if items.trinketNum > 0}
		<div class="Trinket">
			<img
				src={isWin
					? 'https://opgg-static.akamaized.net/images/site/summoner/icon-ward-blue.png'
					: 'https://opgg-static.akamaized.net/images/site/summoner/icon-ward-red.png'}
				alt=" 제어 와드 "
			/>
			제어 와드
			<span class="wards">{items.trinketNum}</span>
		</div>
	{/if}
</div>

<style>
	.Items {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.Items > .ItemList {
		width: 96px;
		display: flex;
		flex-wrap: wrap;
		margin: 0 8px;
	}
	.Item {
		display: inline-block;
		width: 22px;
		height: 22px;
		border-radius: 3px;
		margin-top: 2px;
		margin-right: 2px;
		overflow: hidden;
		background-color: #cea7a7;
		font-size: 0;
	}
	.Build {
		margin-top: 2px;
		border: none;
		padding: 0;
		background: none;
		width: 22px;
		height: 22px;
	}
	.Image {
		width: 100%;
		height: 100%;
	}
	.Item > .NoItem {
		background-image: url(https://opgg-static.akamaized.net/images/pattern/opacity.1.png);
		background-size: 100%;
	}
	.Trinket {
		margin-top: 7px;
		color: #353a3a;
		line-height: 13px;
		font-size: 11px;
		text-align: center;
	}
	.Trinket > img {
		vertical-align: middle;
	}
</style>
