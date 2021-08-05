<script lang="ts">
	import type { GameStats } from '../data';

	export let gameStats: GameStats;
</script>

<div class="GameStats">
	<div class="GameType">
		{gameStats.gameType}
	</div>
	<div class="time">
		{gameStats.time}
	</div>
	<div class="horizontal_bar" />
	<div class="result">
		{gameStats.result}
	</div>
	<div class="gameLength">
		{gameStats.gameLength}
	</div>
</div>

<style>
	.GameStats {
		display: flex;
		flex-direction: column;

		width: 70px;
		text-align: center;
		font-size: 11px;
		color: #555;
		line-height: 16px;
		align-self: center;
	}
	.GameStats > .horizontal_bar {
		width: 27px;
		margin: 5px auto;
		height: 2px;

		background: #cdd2d2;
	}
	.GameStats > .result {
		color: #c6443e;
	}
</style>
