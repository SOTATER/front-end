<script lang="ts">
	import type { Tab, TabType, WinLoseType } from './types';

	export let tabs: Tab[] = [];
	export let winLose: WinLoseType = 'Win';

	let activeTab: TabType = 'overview';

	//TODO: 각 탭 별 API 호출
	const handleClick = (tab: TabType) => () => (activeTab = tab);
</script>

<div class="GameDetail" class:Win={winLose === 'Win'} class:Lose={winLose === 'Lose'}>
	<div class="MatchDetailLayout">
		<div class="MatchDetailHeader">
			<ul class="tabHeaders">
				{#each tabs as { label, value }}
					<li
						class="tabHeader"
						class:active={activeTab === value}
						class:Win={winLose === 'Win'}
						class:Lose={winLose === 'Lose'}
					>
						<a href="/" on:click|preventDefault={handleClick(value)}>{label}</a>
					</li>
				{/each}
			</ul>
		</div>
		{#each tabs as { value, component }}
			{#if activeTab == value}
				<div class="MatchDetailContent">
					<svelte:component this={component} />
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	.GameDetail {
		background: #ededed;
	}
	.GameDetail.Win {
		background: #64b1e4;
	}
	.GameDetail.Lose {
		background: #e89d99;
	}
	ul,
	li {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.MatchDetailHeader ul {
		padding: 3px 15px 0;
		border-right: 1px solid #cdd2d2;
		border-left: 1px solid #cdd2d2;
		box-sizing: border-box;
		font-size: 0;
		border-bottom: none;
	}
	.GameDetail.Win .MatchDetailHeader .tabHeaders {
		border-color: #4aa1d2;
	}
	.GameDetail.Lose .MatchDetailHeader .tabHeaders {
		border-color: #d67b77;
	}
	.MatchDetailHeader ul li:first-child {
		margin-left: 0;
	}
	.tabHeader {
		display: inline-block;
		width: 156px;
		margin-left: 8px;
		border-bottom: 1px solid #cdd2d2;
		vertical-align: top;
	}
	.tabHeader.active {
		position: relative;
		border-bottom-color: #fff;
	}
	.tabHeader a {
		border: 1px solid transparent;
		border-bottom: none;
		display: block;
		height: 28px;
		text-align: center;
		line-height: 28px;
		font-size: 13px;
		color: #111;
		text-decoration: none;
	}

	.tabHeader.active a {
		font-weight: bold;
		border-color: #cdd2d2 !important;
		background: #fff !important;
	}
	.tabHeader.Win a {
		background: #89c8f2;
		border-color: #4aa1d2;
	}
	.tabHeader.Lose a {
		background: #f3aca7;
		border-color: #d67b77;
	}
	.MatchDetailContent {
		background: #ededed;
		border-top: none;
	}
</style>
