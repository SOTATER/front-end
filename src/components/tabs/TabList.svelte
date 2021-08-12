<script lang="ts">
	import { ChampionTab, TotalTab } from '.';

	let activeTab = 'total';

	interface Tab {
		label: string;
		component: typeof TotalTab | ChampionTab;
		activeOption: 'total' | 'champion' | 'ingame';
	}

	const items: Tab[] = [
		{
			label: '종합',
			component: TotalTab,
			activeOption: 'total',
		},
		{
			label: '챔피언',
			component: ChampionTab,
			activeOption: 'champion',
		},
		{
			label: '인게임 정보',
			component: ChampionTab,
			activeOption: 'ingame',
		},
	];
	const handleClick = (selectedTab: string) => () => (activeTab = selectedTab);
</script>

<ul>
	{#each items as item, i}
		<li class={activeTab === item.activeOption ? `active index-${i}` : `non-active index-${i}`}>
			<div class="tab" on:click={handleClick(item.activeOption)}>
				<i class={i === 2 ? `icon` : ``} />
				<span class={i === 2 ? `iconspan` : ``}>{item.label}</span>
			</div>
		</li>
	{/each}
</ul>
{#each items as item}
	{#if activeTab == item.activeOption}
		<div class="box">
			<svelte:component this={item.component} />
		</div>
	{/if}
{/each}

<style>
	ul {
		margin-top: 5px;
		display: flex;
		flex-direction: row;
		list-style: none;
		padding-left: calc(100% / 2 - 500px);
		border-bottom: 1px solid #c6cbcb;
	}
	li {
		margin-left: -1px;
		margin-bottom: -1px;
	}

	li.index-2 {
		margin-left: 15px;
	}

	.index-2 > .tab {
		padding: 0.5rem 1rem;
	}
	.iconspan {
		color: #1a78ae;
	}
	.index-2 > .tab > .icon {
		position: relative;
		bottom: 1px;
		display: inline-block;
		width: 19px;
		height: 17px;
		margin-right: 2px;
		background: url('https://opgg-static.akamaized.net/images/plus/icon-ingame-n.png') no-repeat;
		vertical-align: middle;
	}
	.tab {
		font-size: 13px;
		min-width: 82px;
		height: 18px;
		border: 1px solid #c6cbcb;
		display: block;
		background-color: #fff;
		padding: 0.5rem 0;
		text-align: center;
		cursor: pointer;
		color: #555e5e;
	}

	.tab:hover {
		background-color: transparent;
		color: black;
	}

	li.active > .tab {
		color: #495057;
		background-color: transparent;
		border-bottom-color: #f2f2f2;
		color: black;
	}
	.box {
		height: 100vh;
	}
</style>
