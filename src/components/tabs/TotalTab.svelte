<script lang="ts">
	import { LastSevenDays, OverviewStatsBox, SubTierBox, TierBox } from '../left-side';
	import { GameList } from '../right-side';
</script>

<div class="Content">
	<div class="SideContent">
		<TierBox />
		<SubTierBox />
		<OverviewStatsBox />
		<LastSevenDays />
	</div>
	<div class="RealContent">
		<GameList />
	</div>
</div>

<style>
	.Content {
		width: 1000px;
		min-height: 500px;
		margin: 0 auto;
	}
	.SideContent {
		display: inline-block;
		width: 300px;
		font-size: 12px;
		vertical-align: top;
	}
	.RealContent {
		display: inline-block;
		width: 690px;
		margin-left: 4px;
		font-size: 12px;
		vertical-align: top;
	}
</style>
