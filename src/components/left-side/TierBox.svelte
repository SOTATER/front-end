<script lang="ts">
	import { popoverText } from '../tooltip/Tooltip';

	export let rankType = '솔로랭크';
	export let rank = 'Gold';
	export let tier = 4;
	export let leaguePoint = 63;
	export let wins = 135;
	export let loses = 122;
	export let winRatio = 53;
	export let leagueName = '제드의 검투사들';

	const tooltip = rank ? '솔랭' : null;
	const rankTier = rank && tier ? `${rank} ${tier}` : 'Unranked';

	const getTierImage = (rank?: string, tier?: number) => {
		const rankTier = rank && tier ? `${rank.toLowerCase()}_${tier}` : 'default';
		return `assets/images/rankedEmblems/${rankTier}.png`;
	};
</script>

<div class="Box">
	<div class="SummonerRatingMedium">
		{#if tooltip}
			<div class="Medal" use:popoverText={{ text: tooltip }}>
				<img class="Image" alt="tier" src={getTierImage(rank, tier)} />
			</div>
		{:else}
			<div class="Medal">
				<img class="Image" alt="tier" src={getTierImage(rank, tier)} />
			</div>
		{/if}
		<div class="TierRankInfo">
			<div class="RankType">{rankType}</div>
			<div class="TierRank" class:unranked={!rank || !tier}>{rankTier}</div>
			{#if rank && tier}
				<div>
					<span class="LeaguePoints"> {`${leaguePoint} LP`} </span>
					/
					<span>
						<span>{`${wins}승`}</span>
						<span>{`${loses}패`}</span>
						<br />
						<span>{`승률 ${winRatio}%`}</span>
					</span>
				</div>
				<div>{leagueName}</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.Box {
		margin-top: 10px;
		border: 1px solid #cdd2d2;
		box-shadow: 0 1px #dcdfdf;
		background: #f2f2f2;
		border-radius: 2px;
	}
	.SummonerRatingMedium {
		display: table;
		width: 100%;
		color: #879292;
		position: relative;
		background-color: #f2f2f2;
		padding: 8px 0;
	}
	.Medal {
		display: table-cell;
		vertical-align: middle;
		width: 120px;
		height: 124px;
		text-align: center;
	}
	.Image {
		width: 104px;
		height: 104px;
		margin: -5px 0 -10px 0;
	}
	.TierRankInfo {
		display: table-cell;
		vertical-align: middle;
		font-size: 12px;
		line-height: 1.5;
		text-align: left;
	}
	.RankType {
		font-size: 11px;
		color: #879292;
	}
	.TierRank {
		font-size: 15px;
		font-weight: bold;
		color: #1f8ecd;
	}
	.TierRank.unranked {
		color: #879292;
	}
	.LeaguePoints {
		color: #555e5e;
		font-weight: bold;
	}
</style>
