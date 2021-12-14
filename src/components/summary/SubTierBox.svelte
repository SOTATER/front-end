<script lang="ts">
	const rankType = '자유 5:5 랭크';
	const rank = 'Silver';
	const tier = 1;
	const leaguePoint = 9;
	const wins = 50;
	const loses = 52;
	const winRatio = 49;

	const rankTier = rank && tier ? `${rank} ${tier}` : 'Unranked';

	const getSubTierImage = (rank?: string, tier?: number) => {
		const rankTier = rank && tier ? `${rank.toLowerCase()}_${tier}` : 'default';
		return `//opgg-static.akamaized.net/images/medals/${rankTier}.png?image=q_auto:best&v=1`;
	};
</script>

<div class="sub-tier">
	<img class="Image" alt="sub-tier" src={getSubTierImage(rank, tier)} />
	<div class="sub-tier__info" class:unranked={!rank || !tier}>
		<div class="sub-tier__rank-type">{rankType}</div>
		<div class="sub-tier__rank-tier" class:unranked={!rank || !tier}>{rankTier}</div>
		{#if rank && tier}
			<div class="sub-tier__league-point">
				{`${leaguePoint}LP`}<span class="sub-tier__gray-text"
					>{`/ ${wins}승 ${loses}패`}
				</span>
			</div>
			<div class="sub-tier__gray-text">{`승률 ${winRatio}%`}</div>
		{/if}
	</div>
</div>

<style>
	.sub-tier {
		margin-top: 8px;
		padding: 16px 0;
		display: flex;
		align-items: center;
		background-color: #f2f2f2;
		border: solid 1px #cdd2d2;
	}
	.Image {
		width: 64px;
		height: 64px;
		margin: 0 28px;
	}
	.sub-tier__info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-self: stretch;
	}
	.sub-tier__info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-self: stretch;
	}
	.sub-tier__info.unranked {
		justify-content: center;
	}
	.sub-tier__rank-type {
		font-size: 11px;
		color: #879292;
	}
	.sub-tier__rank-tier {
		font-size: 13px;
		font-weight: bold;
		color: #1f8ecd;
	}
	.sub-tier__rank-tier.unranked {
		color: #879292;
	}
	.sub-tier__league-point {
		font-size: 12px;
		font-weight: bold;
		color: #555e5e;
	}
	.sub-tier__gray-text {
		font-size: 12px;
		color: #879292;
	}
</style>
