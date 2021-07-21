<script lang="ts">
	import { onMount } from 'svelte';

	import SvelteTooltip from 'svelte-tooltip';
	import { isCookie, addFavorite, deleteFavorite } from '../../stores/FavoriteStore';

	interface IPastRanks {
		season: string;
		league: string;
		tier: string;
		point: string;
	}

	const data: IPastRanks = {
		season: 'S2020',
		league: 'Platinum',
		tier: '2',
		point: '0',
	};

	let pastRanks: IPastRanks[] = [data, data];

	let userInfo = {
		level: '104',
		nickName: '욕하는놈코로나19',
	};

	let clicked = 'stale';
	let clickBtn = (clickedName: string) => {
		clicked = clickedName;
		console.log(clicked);
		setTimeout(() => {
			clicked = 'fresh';
			console.log(clicked);
		}, 3000);
	};

	const handleFavoriteClick = () => {
		let doc = document.getElementsByClassName('img') as HTMLCollectionOf<HTMLElement>;
		// 즐겨찾기 등록되있는 별모양
		if (isCookie(userInfo.nickName)) {
			console.log('in cookie');
			deleteFavorite(userInfo.nickName);
			doc[0].style.display = 'inline-block';
			doc[1].style.display = 'none';
		} else {
			console.log('in not cookie');
			addFavorite(userInfo.nickName);
			doc[0].style.display = 'none';
			doc[1].style.display = 'inline-block';
		}
	};

	onMount(() => {
		favoriteInit();
	});

	const favoriteInit = () => {
		let doc = document.getElementsByClassName('img') as HTMLCollectionOf<HTMLElement>;
		if (isCookie(userInfo.nickName)) {
			doc[0].style.display = 'none';
			doc[1].style.display = 'inline-block';
		}
	};
</script>

<div class="Header">
	<div class="PastRank">
		<div class="PastRankList">
			{#each pastRanks as pastRank}
				<div class="Item tip">
					<SvelteTooltip
						tip="{pastRank.league} {pastRank.tier} {pastRank.point} LP"
						top
						color="white"
					>
						<span style="font-weight: bold;">{pastRank.season}</span>
						{pastRank.league}
					</SvelteTooltip>
				</div>
			{/each}
		</div>
	</div>
	<div class="Face">
		<div class="ProfileIcon">
			<div
				class="borderImage"
				style="background-image: url(//opgg-static.akamaized.net/images/borders2/platinum.png)"
			/>
			<img
				class="ProfileImage"
				alt="noImage"
				src="//opgg-static.akamaized.net/images/profile_icons/profileIcon4881.jpg?image=q_auto:best&amp;v=1518361200"
			/>
			<span class="Level tip" title="레벨">{userInfo.level}</span>
		</div>
	</div>
	<div class="Profile">
		<div class="Information">
			<span class="Name">{userInfo.nickName}</span>

			<button class="Favorite" on:click={handleFavoriteClick}>
				<span class="img off" />
				<span class="img on" />
				즐겨찾기</button
			>
			<div class="Rank">
				<div class="LadderRank">
					<a
						href="https://www.op.gg/ranking/ladder/summonerName=%EC%9A%95%ED%95%98%EB%8A%94%EB%86%88%EC%BD%94%EB%A1%9C%EB%82%9819"
						class="tip Link tpd-delegation-uid-1"
						title=""
						target="_blank"
					>
						래더 랭킹 <span class="ranking">432,949</span>위 (상위 10.73%)
					</a>
				</div>
			</div>
		</div>
		<div class="Buttons">
			<button
				class={`Button SemiRound Blue ${clicked}`}
				id="SummonerRefreshButton"
				on:click={() => {
					clickBtn('renew');
				}}
				style="position: relative;"
			>
				{#if clicked === 'stale'}
					전적 갱신
				{:else if clicked === 'renew'}
					갱신중
				{:else if clicked === 'fresh'}
					갱신됨
				{/if}
			</button>
			<button
				id="top_tiergraph"
				class={clicked === 'tierGraph'
					? 'Button SemiRound White'
					: 'Button SemiRound White'}
				on:click={() => clickBtn('tierGraph')}
			>
				티어 그래프
			</button>
		</div>

		<div class="LastUpdate">
			최근 업데이트:
			<span
				class="_timeago _timeCountAssigned tip"
				data-datetime="1624267694"
				data-type=""
				data-interval="60"
				title="2021년 6월 21일 오후 6시 28분">20시간 전</span
			>
		</div>
	</div>
</div>

<style>
	.Header {
		width: 1000px;
		margin: 0 auto;
		padding: 20px 0 0 0;
	}
	.PastRank {
		padding-left: 30px;
	}
	.PastRankList {
		display: inline-block;
		padding-left: 0;
	}
	.PastRankList > .Item {
		display: inline-block;
		padding: 3px 4px;
		margin-left: 5px;
		margin-bottom: 15px;
		background: #e0e3e3;
		color: #657070;
		font-size: 11px;
		border: 1px solid #ced3d3;
		border-radius: 3px;
	}
	.Face {
		display: inline-block;
		width: 100px;
		padding-left: 30px;
	}
	.ProfileIcon {
		position: relative;
	}
	.borderImage {
		position: absolute;
		left: -10px;
		top: -10px;
		width: 120px;
		height: 120px;
		background-position: center bottom;
		background-repeat: no-repeat;
	}
	.ProfileImage {
		display: block;
		width: 100px;
		height: 100px;
	}
	.Header > .Face > .ProfileIcon > .Level {
		position: absolute;
		top: 100%;
		left: 50%;
		margin-top: -14px;
		margin-left: -22px;
		width: 44px;
		height: 24px;
		padding-top: 3px;
		box-sizing: border-box;
		background: url(//opgg-static.akamaized.net/images/site/summoner/bg-levelbox.png);
		background-size: 100%;
		line-height: 17px;
		font-size: 14px;
		text-align: center;
		color: #eabd56;
	}
	.Header > .Profile {
		position: relative;
		display: inline-block;
		margin-left: 25px;
		vertical-align: top;
	}
	.Information > .Name {
		color: #242929;
		font-size: 20px;
		font-weight: bold;
	}
	.Information > .Favorite {
		margin-left: 4px;
		color: #777;
		border: 1px solid #c6cbcb;
		border-radius: 3px;
		padding: 3px 5px;
		font-size: 10px;
	}
	.Information > .Favorite > .img.off {
		zoom: 0.7;
		display: inline-block;
		vertical-align: middle;
		width: 18px;
		height: 18px;
		background-position: -122px -1905px;
		background-image: url(https://opgg-static.akamaized.net/assets/site.png?image=q_auto&v=1626239949);
	}
	.Information > .Favorite > .img.on {
		zoom: 0.7;
		display: none;
		vertical-align: middle;
		width: 18px;
		height: 18px;
		background-position: -122px -1923px;
		background-image: url(https://opgg-static.akamaized.net/assets/site.png?image=q_auto&v=1626239949);
	}
	.Rank {
		margin-top: -5px;
		margin-bottom: 15px;
	}
	.LadderRank > .Link {
		color: #555e5e;
		font-size: 11px;
		text-decoration: none;
	}
	.LadderRank > .Link > .ranking {
		color: #059ede;
		font-weight: bold;
	}
	.Profile > .Buttons {
		display: flex;
		flex-direction: row;
	}
	.Buttons > .Button {
		margin-right: 5px;
		text-align: center;
	}
	.Button.Blue {
		color: #f2f2f2;
		border: 1px solid #1a78ae;
		background: #1f8ecd;
	}
	.fresh {
		border: 1px solid #288b8b;
		background: #36a4a4;
	}

	.Button.White {
		border: 1px solid #ccd1d1;
		background: #f2f2f2;
		color: #242929;
	}
	.Button.SemiRound {
		padding: 10px 14px;
		border-radius: 2px;
		font-size: 14px;
	}
	.LastUpdate {
		margin-top: 10px;
		color: #99a2a2;
		font-size: 11px;
	}
	.Button.Blue.renew {
		pointer-events: none;
		cursor: not-allowed;

		background: linear-gradient(to right, red 50%, #1f8ecd 50%);
		background-size: 200% 100%;
		animation: myAnimation 2s ease-in;
	}
	@keyframes myAnimation {
		from {
			background-position: right;
		}
		to {
			background-position: left;
		}
	}
</style>
