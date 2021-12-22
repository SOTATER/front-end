<script lang="ts">
	import ChampionImageCircle from '../../image/champion/ChampionImageCircle.svelte';

	export let championName: string;
</script>

<div class="ChampionBox Ranked">
	<div class="Face" title="제이스">
		<ChampionImageCircle {championName} size={45} />
	</div>
	<div class="ChampionInfo">
		<div class="ChampionName" title="제이스">
			<a href="/champion/jayce/statistics" target="_blank"> 제이스 </a>
		</div>
		<div class="ChampionMinionKill tip tpd-delegation-uid-1" title="">CS 196.8 (7.2)</div>
	</div>
	<div class="PersonalKDA">
		<div class="KDA green tip tpd-delegation-uid-1" title="">
			<span class="KDA">3.98:1</span>
			<span class="Text">평점</span>
		</div>
		<div class="KDAEach">
			<span class="Kill">7.0</span>
			<span class="Bar">/</span>
			<span class="Death">3.8</span>
			<span class="Bar">/</span>
			<span class="Assist">7.9</span>
		</div>
	</div>
	<div class="Played">
		<div class="WinRatio red tip tpd-delegation-uid-1" title="">69%</div>
		<div class="Title">16 게임</div>
	</div>
</div>

<style>
	.ChampionBox {
		display: table;
		width: 100%;
		border-bottom: 1px solid #cdd2d2;
		color: #879292;
		text-align: center;
	}
	.ChampionBox > .Face {
		display: table-cell;
		width: 60px;
		padding: 5px 0 0 0;
		text-align: right;
		vertical-align: middle;
	}
	.ChampionBox > .ChampionInfo {
		display: table-cell;
		width: 85px;
		text-align: left;
		vertical-align: middle;
		padding-left: 10px;
	}
	.ChampionBox > .PersonalKDA {
		display: table-cell;
		line-height: 1.8;
		vertical-align: middle;
	}
	.ChampionBox > .Played {
		display: table-cell;
		width: 70px;
		line-height: 1.8;
		vertical-align: middle;
	}
</style>
