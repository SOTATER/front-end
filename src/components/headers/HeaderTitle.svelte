<script lang="ts">
	import ProfileHistoryTip from '../profile/ProfileHistoryTip.svelte';
	import ProfileIcon from '../profile/ProfileIcon.svelte';
	export let pastRanks = [
		{
			season: 'S2020',
			tier: 'Silver',
			tooltip: 'Silver 3 67LP',
		},
		{
			season: 'S2021',
			tier: 'Gold',
			tooltip: 'Gold 4 0LP',
		},
	];
	export let profileId = 5126;
	export let rank = 'gold';
	export let level = 288;
	export let userName = '수퍼피그미';
	export let percent = 47.1;
	export let ranking = 2327438;
</script>

<div class="Header">
	<div class="PastRank">
		<div class="PastRankList">
			{#each pastRanks as { season, tier, tooltip }}
				<ProfileHistoryTip {season} {tier} {tooltip} />
			{/each}
		</div>
	</div>
	<div class="Face">
		<ProfileIcon {profileId} {rank} {level} />
	</div>
	<div class="Profile">
		<div class="Information">
			<span class="Name">{userName}</span>
			<button class="FavoriteButton" on:click={() => console.log('tt')}>
				<span class="deactive" />
				즐겨찾기
			</button>
			<div class="Rank">
				<div class="LadderRank">
					<a href="#" class="Link">
						래더 랭킹
						<span class="ranking">
							{ranking.toLocaleString()}
						</span>
						위 (상위 {percent}%)
					</a>
				</div>
			</div>
		</div>
		<div class="Buttons">
			<button class="Button Blue SemiRound" on:click={() => console.log('aaaa')}
				>전적 갱신</button
			>
		</div>
	</div>
	<div class="LastUpdate">
		최근 업데이트:
		<span class="_timeCountAssigned" title="2021년 12월 2일 오전 12시 50분"> 19시간 전 </span>
	</div>
</div>

<style>
	.Header {
		position: relative;
		width: 1000px;
		margin: 0 auto;
		padding: 20px 0 0 0;
	}
	.PastRank {
		margin-top: -5px;
		padding-left: 30px;
		padding-bottom: 15px;
	}
	.PastRankList {
		display: flex;
		margin: 0 0 0 5px;
		padding: 0;
	}
	.Face {
		display: inline-block;
		width: 100px;
		padding-left: 30px;
		vertical-align: top;
	}
	.Profile {
		position: relative;
		display: inline-block;
		height: 100px;
		margin: 0 25px;
		vertical-align: top;
		line-height: 1.1;
	}
	.Name {
		color: #242929;
		font-size: 20px;
		font-weight: bold;
		margin-right: 4px;
		vertical-align: middle;
	}
	.FavoriteButton {
		margin-left: 4px;
		vertical-align: 1px;
		text-decoration: none;
		color: #777;
		display: inline-block;
		border: 1px solid #c6cbcb;
		border-radius: 3px;
		padding: 3px 5px;
		font-size: 10px;
	}
	.Rank {
		margin-bottom: 5px;
	}
	.Link {
		color: #555e5e;
		font-size: 11px;
		text-decoration: none;
		line-height: 1.5;
	}
	.ranking {
		color: #059ede;
		font-weight: bold;
	}
	.Buttons {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		font-size: 0;
		margin: 15px 0 -6px;
		white-space: nowrap;
	}
	.Button {
		position: relative;
		margin: 0 6px 6px 0;
	}
	.Button.Blue {
		border: 1px solid #1a78ae;
		background: #1f8ecd;
		color: #f2f2f2;
	}
	.Button.SemiRound {
		padding: 11px 14px 10px;
		border-radius: 2px;
		font-size: 14px;
	}
	.LastUpdate {
		position: absolute;
		left: 160px;
		bottom: 4px;
		height: 12px;
		color: #99a2a2;
		font-size: 11px;
	}
	._timeCountAssigned {
		font-size: inherit;
		cursor: help;
	}
</style>
