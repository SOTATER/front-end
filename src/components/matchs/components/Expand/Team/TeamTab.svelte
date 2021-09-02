<script lang="ts">
	import { MatchAnalysis } from './MatchAnalysis';

	export let isWin: boolean;

	let activeTab = 'total';

	interface Tab {
		label: string;
		component: typeof MatchAnalysis;
		activeOption: 'match' | 'goldAndKill' | 'killMap' | 'timeline';
	}

	const items: Tab[] = [
		{
			label: '경기 분석',
			component: MatchAnalysis,
			activeOption: 'match',
		},
		{
			label: '골드 & 킬',
			component: MatchAnalysis,
			activeOption: 'goldAndKill',
		},
		{
			label: '킬 맵',
			component: MatchAnalysis,
			activeOption: 'killMap',
		},
		{
			label: '타임라인',
			component: MatchAnalysis,
			activeOption: 'timeline',
		},
	];
	const handleClick = (selectedTab: string) => () => (activeTab = selectedTab);
</script>

<div class="Header">
	<div class="ul">
		{#each items as item, i}
			<div
				class="tab"
				class:active={activeTab === item.activeOption}
				class:isWin
				on:click={handleClick(item.activeOption)}
			>
				<span>{item.label}</span>
			</div>
		{/each}
	</div>
</div>
{#each items as item}
	{#if activeTab == item.activeOption}
		<div class="box">
			<svelte:component this={item.component} />
		</div>
	{/if}
{/each}

<style>
	.Header {
	}
	.ul {
		display: flex;
		flex-direction: row;
		justify-content: center;
		border-bottom: solid 1px #cdd2d2;
	}
	.tab {
		display: block;

		width: 148px;
		height: 18px;

		padding: 5px 0;

		margin-bottom: -1px;

		border-bottom: none;

		text-align: center;
		cursor: pointer;

		font-size: 13px;
		color: black;
	}

	.tab.active {
		background-color: white;
		font-weight: bold;
		color: #1a78ae;
		border-bottom: 2px solid #1a78ae;
	}
	.box {
		background-color: #ededed;

		margin-left: -1px;
		margin-right: -1px;
		border: 1px solid #cdcdcd;
		border-top: none;
	}
</style>
