<script lang="ts">
	import { GameSettingInfo, GameStats, Kda, Stats, Items, FollowPlayers } from './components';

	const isWin = false;

	const gameStats = {
		gameType: '솔랭',
		time: '3일 전',
		result: '패배',
		gameLength: '25분 8초',
	};
	const gameSettingInfo = {
		championImage:
			'https://opgg-static.akamaized.net/images/lol/champion/Lucian.png?image=c_scale,q_auto,w_46&v=1626880099',
		championName: '루시안',
		spells: [
			'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png?image=c_scale,q_auto,w_22&v=1626880099',
			'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=c_scale,q_auto,w_22&v=1626880099',
		],
		spellAlts: ['순간이동', '점멸'],
		runes: [
			'https://opgg-static.akamaized.net/images/lol/perk/8005.png?image=c_scale,q_auto,w_22&v=1626880099',
			'https://opgg-static.akamaized.net/images/lol/perkStyle/8100.png?image=c_scale,q_auto,w_22&v=1626880099',
		],
		runeAlts: ['집중공격', '지배'],
	};
	const kda = {
		kill: 0,
		death: 8,
		assist: 13,
		kdaRatio: 1.63,
		badge: 'ACE',
	};
	const stats = {
		level: 11,
		cs: '46(1.7)',
		killRelated: 54,
		mmr: 'Gold 1',
	};
	const itemList = [
		{
			imgUrl: 'https://opgg-static.akamaized.net/images/lol/item/6671.png?image=q_auto:best&v=1626880099',
			name: '돌풍',
		},
		{
			imgUrl: 'https://opgg-static.akamaized.net/images/lol/item/3140.png?image=q_auto:best&v=1626880099',
			name: '수은 장식띠',
		},
		{
			imgUrl: '',
			name: '',
		},
		{
			imgUrl: 'https://opgg-static.akamaized.net/images/lol/item/3340.png?image=q_auto:best&v=1626880099',
			name: '투명 와드',
		},
		{
			imgUrl: 'https://opgg-static.akamaized.net/images/lol/item/1037.png?image=q_auto:best&v=1626880099',
			name: '곡괭이',
		},
		{
			imgUrl: 'https://opgg-static.akamaized.net/images/lol/item/3134.png?image=q_auto:best&v=1626880099',
			name: '톱날단검',
		},
		{
			imgUrl: 'https://opgg-static.akamaized.net/images/lol/item/3006.png?image=q_auto:best&v=1626880099',
			name: '광전사의 군화',
		},
	];
	const items = {
		items: itemList,
		trinketNum: 4,
	};

	const summoners = [
		{
			name: '미드병자 김대오',
			champion: '제이스',
		},
		{
			name: 'Sensitive Walnut',
			champion: '제이스',
		},
		{
			name: '천재한',
			champion: '제이스',
		},
		{
			name: '심술난승기',
			champion: '제이스',
		},
		{
			name: '더용종신',
			champion: '제이스',
		},
	];
	const teams = [
		{
			summoners,
		},
		{
			summoners,
		},
	];
</script>

<div class="Content" class:Win={isWin} class:Lose={!isWin}>
	<GameStats {gameStats} />
	<GameSettingInfo {gameSettingInfo} />
	<Kda {kda} />
	<Stats {stats} />
	<Items {items} {isWin} />
	<FollowPlayers {teams} />
</div>

<style>
	.Content {
		display: flex;
		flex-direction: row;

		width: 690px;
		height: 96px;
		margin-left: 10px;
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
