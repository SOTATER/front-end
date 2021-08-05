<script lang="ts">
	import { GameSettingInfo, GameStats, Kda, Stats, Items, FollowPlayers } from './components';
	import StatsButton from './components/StatsButton.svelte';

	import type { MatchInfo } from './data';

	export let matchInfo: MatchInfo;
	const { gameStats, gameSettingInfo, kda, stats, items, teams, isWin } = matchInfo;
</script>

<div class="Content" class:Win={isWin} class:Lose={!isWin}>
	<GameStats {gameStats} />
	<GameSettingInfo {gameSettingInfo} />
	<Kda {kda} />
	<Stats {stats} />
	<Items {items} {isWin} />
	<FollowPlayers {teams} />
	<StatsButton {isWin} />
</div>

<style>
	.Content {
		display: flex;
		flex-direction: row;

		width: 690px;
		height: 96px;
		margin-left: 10px;
		margin-bottom: 8px;
	}
	.Content.Win {
		background-color: #a3cfec;
		border: 1px solid #99b9cf;
	}
	.Content.Lose {
		background-color: #e2b6b3;
		border: 1px solid #cea7a7;
	}
</style>
