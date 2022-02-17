<script lang="ts">
	import { ApiConstants } from '../../apis/ApiConstants';
	import ChampionImageCircle from '../image/champion/ChampionImageCircle.svelte';
	import ChampionImageSmall from '../image/champion/ChampionImageSmall.svelte';
	import ItemImage from '../image/ItemImage.svelte';
	import RuneImage from '../image/RuneImage.svelte';
	import SpellImage from '../image/SpellImage.svelte';
	import { popoverText } from '../tooltip/Tooltip';
	import type { Items, Spells, Team } from './GameListItemTypes';

	export let isWon = true;
	export let gameType = '솔랭';
	export let playedAt = new Date();
	export let gameLength = '26분 10초';
	export let playedChampion = 'Nidalee';
	export let spells: Spells = ['SummonerSmite', 'SummonerFlash'];
	export let kill = 8;
	export let death = 8;
	export let assist = 8;
	export let kdaRatio = '2.00:1';
	export let level = 14;
	export let miniCs = 21;
	export let monsterCs = 99;
	export let csPerMinute = 4.6;
	export let totalCs = 120;
	export let csKillRate = 52;
	export let mmr = 'Master';
	export let items: Items = [3152, 4645, 1052, 3364, 3020, 1026, 1082];
	export let wardNumber = 7;
	export let leftTeam: Team = [
		{
			championName: 'Sylas',
			summonerName: 'xiao fan tang',
		},
		{
			championName: 'Sylas',
			summonerName: 'xiao fan tang',
		},
		{
			championName: 'Sylas',
			summonerName: 'xiao fan tang',
		},
		{
			championName: 'Sylas',
			summonerName: 'xiao fan tang',
		},
		{
			championName: 'Sylas',
			summonerName: 'xiao fan tang',
		},
	];
	export let rightTeam: Team = [
		{
			championName: 'Sylas',
			summonerName: 'xiao fan tang',
		},
		{
			championName: 'Sylas',
			summonerName: 'xiao fan tang',
		},
		{
			championName: 'Sylas',
			summonerName: 'xiao fan tang',
		},
		{
			championName: 'Sylas',
			summonerName: 'xiao fan tang',
		},
		{
			championName: 'Sylas',
			summonerName: 'xiao fan tang',
		},
	];

	let isToggled = false;

	const buildButtonImageUrl = `assets/images/icon-build${isWon ? 'blue' : 'red'}-p.png`;
	const wardIconUrl = `assets/images/icon-ward-${isWon ? 'blue' : 'red'}.png`;
	function convertDate2TimeAgo(date: Date) {
		return '2시간 전';
	}

	function convertDate2LocalTime(date: Date): string {
		return '2022년 1월 26일 오전 3시 10분';
	}
</script>

<div class="GameItemWrap">
	<div class="GameItem" class:Win={isWon} class:Lose={!isWon}>
		<div class="Content">
			<div class="GameStats">
				<div class="GameType">{gameType}</div>
				<div class="TimeStamp">
					<span
						class="_timeago _timeCountAssigned"
						use:popoverText={{ text: convertDate2LocalTime(playedAt) }}
						>{convertDate2TimeAgo(playedAt)}
					</span>
				</div>
				<div class="Bar" />
				<div class="GameResult">{isWon ? '승리' : '패배'}</div>
				<div class="GameLength">{gameLength}</div>
			</div>
			<div class="GameSettingInfo">
				<div class="ChampionImage">
					<ChampionImageCircle championName={playedChampion} />
				</div>
				<div class="SummonerSpell">
					<div class="Spell">
						<SpellImage spellName={spells[0]} />
					</div>
					<div class="Spell">
						<SpellImage spellName={spells[1]} />
					</div>
				</div>
				<div class="Runes">
					<div class="Rune">
						<RuneImage runeId={8112} />
					</div>
					<div class="Rune">
						<RuneImage runeId={8300} />
					</div>
				</div>
				<div class="ChampionName">
					{ApiConstants.champions[playedChampion].name}
				</div>
			</div>
			<div class="KDA">
				<div class="KDA">
					<span class="Kill">{kill}</span>
					{' / '}
					<span class="Death">{death}</span>
					{' / '}
					<span class="Assist">{assist}</span>
				</div>
				<div class="KDARatio">
					<span class="KDARatio">{kdaRatio}</span>
					{' 평점 '}
				</div>
			</div>
			<div class="Stats">
				<div class="Level">
					{`레벨${level}`}
				</div>
				<div
					class="CS"
					use:popoverText={{
						text: `미니언 ${miniCs}  + 몬스터 ${monsterCs}\n분당CS ${csPerMinute}개`,
					}}
				>
					<span class="CS">
						{`${totalCs} (${csPerMinute})`}
					</span>
					{' CS '}
				</div>
				<div class="CKRate" use:popoverText={{ text: '킬관여율' }}>
					{`킬관여 ${csKillRate}%`}
				</div>
				<div class="MMR">
					<span>매치 평균</span>
					<br />
					<b>{mmr}</b>
				</div>
			</div>
			<div class="Items">
				<div class="ItemList">
					{#each items as itemId}
						<div class="Item">
							<ItemImage {itemId} />
						</div>
					{/each}
					<button class="Button" type="button">
						<img src={buildButtonImageUrl} alt="" />
					</button>
				</div>
				<div class="Trinket">
					<img src={wardIconUrl} alt="" />
					{' 제어 와드 '}
					<span class="wards vision">{wardNumber}</span>
				</div>
			</div>
			<div class="FollowPlayers Names">
				{#each [leftTeam, rightTeam] as team}
					<div class="Team">
						{#each team as summoner}
							<div class="Summoner">
								<div class="ChampionImage">
									<ChampionImageSmall championName={summoner.championName} />
								</div>
								<div class="SummonerName">
									<a href="#" class="Link" target="_blank">
										{summoner.summonerName}
									</a>
								</div>
							</div>
						{/each}
					</div>
				{/each}
				<div class="Team" />
			</div>
			<div class="StatsButton">
				<div class="Content">
					<div class="Item">
						<button class="Button Replay OpenSpectateButton">
							<span class="__spSite __spSite-159" />
						</button>
					</div>
					<div class="Item">
						<button
							class="Button MatchDetail"
							on:click={() => {
								isToggled = !isToggled;
							}}
						>
							<span
								class="__spSite"
								class:__spSite-198={!isWon}
								class:__spSite-194={isWon}
								class:Off={!isToggled}
								class:On={isToggled}
							/>
							<span
								class="__spSite"
								class:__spSite-197={!isWon}
								class:__spSite-193={isWon}
								class:Off={isToggled}
								class:On={!isToggled}
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.GameItemWrap {
		position: relative;
		border-radius: 3px;
		margin-bottom: 8px;
	}
	.GameItem {
		position: relative;
		background: none;
	}
	.GameItem.Win > .Content {
		table-layout: fixed;
		background-color: #a3cfec;
		border-color: #99b9cf;
	}
	.GameItem.Lose > .Content {
		table-layout: fixed;
		background-color: #e2b6b3;
		border-color: #cea7a7;
	}
	.GameItem > .Content {
		display: table;
		width: 689px;
		border-collapse: collapse;
		border: 1px solid #cdd2d2;
	}
	.GameItem > .Content > .GameStats {
		width: 70px;
		text-align: center;
		font-size: 11px;
		color: #555;
		line-height: 16px;
	}

	.GameItem > .Content > div {
		display: table-cell;
		height: 96px;
		vertical-align: middle;
	}
	.GameItem > .Content > .GameStats > .GameType {
		font-weight: bold;
		width: 70px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	._timeCountAssigned {
		font-size: inherit;
		cursor: help;
	}
	.GameItem.Lose > .Content > .GameStats > .Bar {
		background: #cea7a7;
	}
	.GameItem.Win > .Content > .GameStats > .Bar {
		background: #99b9cf;
	}
	.GameItem > .Content > .GameStats > .Bar {
		display: block;
		width: 27px;
		margin: 5px auto;
		height: 2px;
		background: #cdd2d2;
	}
	.GameItem.Lose > .Content > .GameStats > .GameResult {
		color: #c6443e;
	}
	.GameItem.Win > .Content > .GameStats > .GameResult {
		color: #1a78ae;
	}
	.GameItem > .Content > .GameStats > .GameResult {
		font-weight: bold;
	}
	.GameItem > .Content > .GameSettingInfo {
		width: 100px;
		font-size: 0;
	}
	.GameItem > .Content > div {
		display: table-cell;
		height: 96px;
		vertical-align: middle;
	}
	.GameItem > .Content > .GameSettingInfo > .ChampionImage {
		display: inline-block;
		width: 46px;
		height: 46px;
		vertical-align: middle;
		border-radius: 50%;
		overflow: hidden;
	}
	.GameItem > .Content > .GameSettingInfo > .SummonerSpell {
		display: inline-block;
		vertical-align: middle;
		margin-left: 4px;
	}
	.GameItem > .Content > .GameSettingInfo > .SummonerSpell > .Spell:first-child {
		margin-left: 0;
	}

	.GameItem > .Content > .GameSettingInfo > .SummonerSpell > .Spell {
		display: block;
		width: 22px;
		height: 22px;
		margin-top: 2px;
		border-radius: 3px;
		overflow: hidden;
	}
	.GameItem > .Content > .GameSettingInfo > .Runes {
		display: inline-block;
		vertical-align: middle;
		margin-left: 4px;
	}
	.GameItem > .Content > .GameSettingInfo > .Runes > .Rune:first-child {
		margin-top: 0;
	}

	.GameItem > .Content > .GameSettingInfo > .Runes > .Rune {
		width: 22px;
		height: 22px;
		margin-top: 2px;
	}
	.GameItem > .Content > .GameSettingInfo > .ChampionName {
		margin-top: 8px;
		font-size: 11px;
		color: #555;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.GameItem > .Content > .KDA {
		font-size: 11px;
		text-align: center;
	}

	.GameItem > .Content > div {
		display: table-cell;
		height: 96px;
		vertical-align: middle;
	}
	.GameItem > .Content > .KDA > .KDA {
		color: #879292;
		font-size: 15px;
		white-space: nowrap;
	}
	.GameItem > .Content > .KDA > .KDA > .Kill,
	.GameItem > .Content > .KDA > .KDA > .Assist {
		color: #555e5e;
	}
	.GameItem > .Content > .KDA > .KDA > .Death {
		color: #c6443e;
	}

	.GameItem > .Content > .KDA > .KDA > .Kill,
	.GameItem > .Content > .KDA > .KDA > .Death,
	.GameItem > .Content > .KDA > .KDA > .Assist {
		font-weight: bold;
	}

	.GameItem > .Content > .KDA > .KDARatio {
		color: #555e5e;
		font-size: 12px;
		font-weight: bold;
		margin-top: 6px;
	}
	.GameItem > .Content > .KDA > .KDARatio .KDARatio {
		color: #353a3a;
	}
	.GameItem > .Content > .Stats {
		width: 90px;
		font-size: 11px;
		text-align: center;
		line-height: 18px;
		color: #555e5e;
	}

	.GameItem > .Content > div {
		display: table-cell;
		height: 96px;
		vertical-align: middle;
	}
	.GameItem > .Content > .Stats > .CKRate {
		color: #c6443e;
	}
	.GameItem > .Content > .Stats > .MMR b {
		color: #353a3a;
	}
	.GameItem > .Content > .Items {
		font-size: 0;
	}

	.GameItem > .Content > div {
		display: table-cell;
		height: 96px;
		vertical-align: middle;
	}
	.GameItem > .Content > .Items .ItemList {
		width: 96px;
		margin: 0 auto;
	}
	.GameItem.Lose > .Content > .Items > .ItemList > .Item {
		background-color: #cea7a7;
	}
	.GameItem.Win > .Content > .Items > .ItemList > .Item {
		background-color: #99b9cf;
	}
	.GameItem > .Content > .Items .Item {
		display: inline-block;
		width: 22px;
		height: 22px;
		border-radius: 3px;
		margin-top: 2px;
		margin-right: 2px;
		overflow: hidden;
	}
	.GameItem > .Content > .Items .Button {
		margin-top: 2px;
		border: none;
		padding: 0;
		background: none;
		width: 22px;
		height: 22px;
	}
	.GameItem > .Content > .Items .Button img {
		width: 100%;
	}

	.Button {
		text-align: center;
	}
	.GameItem > .Content > .Items .Trinket {
		margin-top: 7px;
		color: #353a3a;
		line-height: 13px;
		font-size: 11px;
		text-align: center;
	}
	.GameItem > .Content > .Items .Trinket img {
		vertical-align: middle;
	}
	.GameItem > .Content > .FollowPlayers {
		width: 170px;
		font-size: 0;
	}

	.GameItem > .Content > div {
		display: table-cell;
		height: 96px;
		vertical-align: middle;
	}
	.GameItem > .Content > .FollowPlayers.Names > .Team {
		float: left;
		width: 50%;
	}
	.GameItem > .Content > .FollowPlayers.Names > .Team > .Summoner {
		display: block;
		width: 80px;
		height: 18px;
		margin-left: 3px;
		text-align: left;
		white-space: nowrap;
	}
	.GameItem > .Content > .FollowPlayers.Names > .Team > .Summoner > .ChampionImage {
		display: inline-block;
		vertical-align: middle;
		margin-right: 3px;
	}
	.GameItem > .Content > .FollowPlayers.Names > .Team > .Summoner > .SummonerName {
		display: inline-block;
		max-width: 60px;
		vertical-align: middle;
		font-size: 11px;
		color: #555;
	}
	.GameItem > .Content > .FollowPlayers.Names > .Team > .Summoner > .SummonerName > .Link {
		display: block;
		color: inherit;
		text-decoration: none;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.GameItem.Lose > .Content > .StatsButton {
		border-color: #d67b77;
		background: #e89d99;
	}
	.GameItem.Win > .Content > .StatsButton {
		border-color: #4aa1d2;
		background: #64b1e4;
	}

	.GameItem > .Content > .StatsButton {
		width: 30px;
		border: 1px solid #000;
	}
	.GameItem > .Content > div {
		display: table-cell;
		height: 96px;
		vertical-align: middle;
	}
	.GameItem > .Content > .StatsButton .Content {
		position: relative;
		width: 30px;
		height: 96px;
	}
	.GameItem > .Content > .StatsButton .Content .Item {
		position: absolute;
		left: -1px;
		top: -1px;
		width: 30px;
		height: 100%;
	}
	.GameItem > .Content > .StatsButton .Content .Item .Button.Replay {
		height: 30px;
		border: 1px solid #288b8b;
		background: #36a4a4;
		color: #f2f2f2;
		line-height: 30px;
		z-index: 99;
	}
	.GameItem > .Content > .StatsButton .Content .Item .Button {
		display: block;
		width: 30px;
		position: relative;
		cursor: pointer;
	}
	.__spSite-159 {
		background-position: -124px -3150px;
		width: 16px;
		height: 10px;
	}

	.__spSite {
		background-image: url(../assets/images/site.png);
	}
	.__spSite {
		display: inline-block;
		vertical-align: middle;
		text-indent: -99999px;
	}
	.GameItem > .Content > .StatsButton .Content .Item .Button.MatchDetail {
		height: 100%;
		border: 0;
		padding: 0;
		background: transparent;
		cursor: pointer;
	}

	.GameItem > .Content > .StatsButton .Content .Item .Button {
		display: block;
		width: 30px;
		position: relative;
		cursor: pointer;
	}
	.GameItem > .Content > .StatsButton .Content .Item .Button.MatchDetail span {
		position: absolute;
		bottom: 10px;
		left: 9px;
	}

	.GameItem > .Content > .StatsButton .Content .Off {
		display: block;
	}
	.GameItem > .Content > .StatsButton .Content .On {
		display: none;
	}
	.__spSite-198 {
		background-position: -127px -3880px;
		width: 13px;
		height: 10px;
	}
	.GameItem > .Content > .StatsButton .Content .Item .Button.MatchDetail span {
		position: absolute;
		bottom: 10px;
		left: 9px;
	}

	.__spSite-197 {
		background-position: -127px -3870px;
		width: 13px;
		height: 10px;
	}

	.__spSite-194 {
		background-position: -127px -3840px;
		width: 13px;
		height: 10px;
	}
	.__spSite-193 {
		background-position: -127px -3830px;
		width: 13px;
		height: 10px;
	}
</style>
