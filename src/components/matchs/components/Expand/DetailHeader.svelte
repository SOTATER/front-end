<script lang="ts">
	import { TeamTab } from './Team';
	import Test from './Test.svelte';

	export let isWin: boolean;

	let activeTab = 'total';

	interface ITab {
		label: string;
		component: typeof Test | TeamTab;
		activeOption: 'total' | 'team' | 'build' | 'etc';
	}

	const items: ITab[] = [
		{
			label: '종합',
			component: Test,
			activeOption: 'total',
		},
		{
			label: '팀 분석',
			component: TeamTab,
			activeOption: 'team',
		},
		{
			label: '빌드',
			component: Test,
			activeOption: 'build',
		},
		{
			label: 'etc',
			component: Test,
			activeOption: 'etc',
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
		border-bottom: 1px solid #cdd2d2;
	}
	.ul {
		display: flex;
		flex-direction: row;
		justify-content: space-around;

		margin: 5px 25px 0;
	}
	.tab {
		display: block;

		width: 148px;
		height: 18px;

		padding: 5px 0;

		margin-bottom: -1px;

		border: 1px solid #d67b77;
		border-bottom: none;
		background-color: #f3aca7;

		text-align: center;
		cursor: pointer;

		font-size: 13px;
		color: black;
	}

	.tab.isWin {
		border-color: #4aa1d2;
		background: #89c8f2;
		border-bottom: none;
	}

	.tab:hover {
		background-color: #facbc9;
	}
	.tab.isWin:hover {
		background-color: #b7e1fe;
	}

	.tab.active {
		background-color: white;
		border: 1px solid #cdd2d2;
		border-bottom-color: white;
		font-weight: bold;
	}
	.box {
		background-color: white;

		margin-left: -1px;
		margin-right: -1px;
		border: 1px solid #cdcdcd;
		border-top: none;
	}
</style>
