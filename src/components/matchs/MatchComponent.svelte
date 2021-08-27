<script lang="ts">
	import { GameSettingInfo, GameStats, Kda, Stats, Items, FollowPlayers } from './components';
	import { MatchDetail } from './components/Expand';
	import StatsButton from './components/StatsButton.svelte';

	import type { MatchInfo } from './data';

	export let matchInfo: MatchInfo;
	const { gameStats, gameSettingInfo, kda, stats, items, teams, isWin } = matchInfo;

	let expanded = false;
</script>

<div class="GameWrapper">
	<div class="ContentLayout">
		<div class="Content" class:Win={isWin} class:Lose={!isWin} class:expanded>
			<GameStats {gameStats} />
			<GameSettingInfo {gameSettingInfo} />
			<Kda {kda} />
			<Stats {stats} />
			<Items {items} {isWin} />
			<FollowPlayers {teams} />
		</div>
		<StatsButton {isWin} bind:expanded />
	</div>
	{#if expanded}
		<div class="DetailLayout" class:Win={isWin} class:Lose={!isWin}>
			<MatchDetail {isWin} />
		</div>
	{/if}
</div>

<style>
	.GameWrapper {
		width: 690px;
		margin-left: 10px;
		margin-bottom: 8px;
	}
	.ContentLayout {
		display: flex;
		flex-direction: row;

		height: 96px;
	}
	.Content {
		display: flex;
		flex-direction: row;

		height: 96px;
	}
	.Content.Win {
		background-color: #a3cfec;
		border: 1px solid #99b9cf;
	}
	.Content.Lose {
		background-color: #e2b6b3;
		border: 1px solid #cea7a7;
	}
	.Content.Lose.expanded {
		border-bottom: 1px solid #d67b77;
	}
	.Content.Win.expanded {
		border-bottom: 1px solid #4aa1d2;
	}
	.DetailLayout.Lose {
		background-color: #e89d99;
		border: 1px solid #d67b77;
		border-bottom: none;
	}

	.DetailLayout.Win {
		border: 1px solid #4aa1d2;
		background-color: #64b1e4;
		border-bottom: none;
	}
</style>
