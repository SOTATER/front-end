<script lang="ts">
	/* eslint-disable @typescript-eslint/restrict-template-expressions */
	/* eslint-disable @typescript-eslint/no-unsafe-member-access */
	/* eslint-disable @typescript-eslint/restrict-plus-operands */
	import type { Participant, Team } from '../../../../schema/api/matches';
	import { ApiConstants } from '../../../../apis/ApiConstants';
	import { getKdaColorByStats, getKdaRatio } from '../../../../utils/KDAUtil';
	import ChampionImageCircle from '../../../image/champion/ChampionImageCircle.svelte';
	import { popoverText } from '../../../tooltip/Tooltip';
	import SpellImage from '../../../image/SpellImage.svelte';
	import RuneImage from '../../../image/RuneImage.svelte';
	import ItemImage from '../../../image/ItemImage.svelte';

	export let summonerId = '';
	export let gameDuration = 0;
	export let participants: Participant[] = [];
	export let teams: Team[] = [];
	export let teamId = 100;
	export let winLose = true;

	let participant = participants.find((part) => part.summonerId === summonerId);
</script>

<table class={`GameDetailTable ${winLose ? 'Win' : 'Lose'}`}>
	<colgroup>
		<col width="44px" />
		<col width="18px" />
		<col width="18px" />
		<col />
		<col width="65px" />
		<col width="76px" />
		<col width="66px" />
		<col width="48px" />
		<col width="55px" />
		<col width="170px" />
	</colgroup>
	<thead class="Header">
		<tr class="Row">
			<th class="HeaderCell" colspan="4">
				<span class="GameResult">{winLose ? '승리' : '패배'} </span>
				{`(${teamId === 100 ? '블루' : '레드'}팀)`}
			</th>
			<th class="HeaderCell">티어</th>
			<th class="HeaderCell">KDA</th>
			<th class="HeaderCell">피해량</th>
			<th class="HeaderCell">와드</th>
			<th class="HeaderCell">CS</th>
			<th class="HeaderCell">아이템</th>
		</tr>
	</thead>
	<tbody class="Content">
		{#each participants as part, i}
			<tr
				class="Row"
				class:first={i === 0}
				class:last={i === participants.length - 1}
				class:isRequester={i === participant?.participantId}
			>
				<td class="ChampionImage Cell">
					<div
						class="Image"
						use:popoverText={{ text: ApiConstants.champions[part.championName].name }}
					>
						<ChampionImageCircle
							championName={part.championName}
							size={32}
							level={part.champLevel}
						/>
					</div>
				</td>
				<!-- TODO: 소환자 스펠 표시 ({spell1Id, spell2Id}로 스펠이름 가져오기) -->
				<td class="SummonerSpell Cell">
					<SpellImage spellName="SummonerSmite" size={16} />
					<div class="SummonerSpellSpace" />
					<SpellImage spellName="SummonerFlash" size={16} />
				</td>
				<!-- TODO: 룬 아이디 가져오기 -->
				<td class="Rune Cell">
					<RuneImage runeId={8112} size={16} />
					<div class="RuneSpace" />
					<RuneImage runeId={8300} size={16} />
				</td>
				<td class="SummonerName Cell">
					<a
						href={`/#/summoner/${encodeURIComponent(part.summonerName)}`}
						target="_blank"
						class="Link"
						rel="noopener"
					>
						{part.summonerName}
					</a>
				</td>
				<!-- TODO: 소환사별 티어 가져오기 -->
				<td class="Tier Cell">Gold 4</td>
				<td class="KDA Cell">
					<span
						class={`KDARatio ${getKdaColorByStats(
							part.kills,
							part.deaths,
							part.assists,
						)}`}
					>
						{`${getKdaRatio(part.kills, part.deaths, part.assists)}:1`}
					</span>
					<div class="KDA">
						<span>{`${part.kills}/${part.deaths}/${part.assists}`}</span>
						<!-- 킬관여율 계산: (개인 킬수 + 어시스트수) / 팀 총 킬수 -->
						<span use:popoverText={{ text: '킬관여율' }}
							>{`(${(
								((part.kills + part.assists) /
									teams.find((team) => team.win === winLose).objectives.champion
										.kills) *
								100
							).toFixed(0)}%)`}</span
						>
					</div>
				</td>
				<td
					class="Damage Cell"
					use:popoverText={{
						text: `챔피언에게 가한 피해량: ${part.totalDamageDealtToChampions}\n총피해량: ${part.totalDamageDealt}`,
					}}
				>
					<div class="ChampionDamage">{part.totalDamageDealtToChampions}</div>
					<div class="Progress">
						<!-- 피해량 계산: 개인당 챔피언에게 가한 피해량 / 모든 팀에서 가장 많은 챔피언에게 가한 피해량  -->
						<div
							class="Fill"
							style={`width: ${(
								(part.totalDamageDealtToChampions /
									Math.max(
										...participants.map(
											(part) => part.totalDamageDealtToChampions,
										),
									)) *
								100
							).toFixed(0)}%;`}
						/>
					</div>
				</td>
				<td
					class="Ward Cell"
					use:popoverText={{
						text: `제어 와드 ${part.sightWardsBoughtInGame}\n 와드 설치: ${part.wardsPlaced}\n 와드 제거: ${part.wardsKilled}`,
					}}
				>
					<div>
						<span>{part.sightWardsBoughtInGame}</span>
					</div>
					<div>
						<span>{part.wardsPlaced}</span> /
						<span> {part.wardsKilled}</span>
					</div>
				</td>
				<td class="CS Cell">
					<div class="CS">{part.totalMinionsKilled}</div>
					<!-- CSPerMinute 계산: CS / 경기시간(분) -->
					<div>
						{`분당 ${(part.totalMinionsKilled / (gameDuration / (60 * 1000))).toFixed(
							1,
						)}`}
					</div>
				</td>
				<td class="Items Cell">
					{#each [part.item0, part.item1, part.item2, part.item3, part.item4, part.item5, part.item6] as itemId}
						<div class="Item">
							{#if itemId === 0}
								<div class="NoItem" />
							{:else}
								<ItemImage {itemId} />
							{/if}
						</div>
					{/each}
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	.GameDetailTable {
		width: 100%;
		table-layout: fixed;
	}
	.GameDetailTable > .Header {
		border: solid 1px #cdd2d2;
		background-color: #fff;
	}
	.GameDetailTable > .Header > .Row > .HeaderCell {
		height: 32px;
		color: #555e5e;
		font-size: 12px;
		font-weight: normal;
	}
	.GameDetailTable > .Header > .Row > .HeaderCell:first-child {
		padding-left: 15px;
		text-align: left;
	}
	.GameDetailTable > .Header > .Row > .HeaderCell > .GameResult {
		font-size: 13px;
		font-weight: bold;
	}
	.GameDetailTable.Win > .Header .Row > .HeaderCell > .GameResult {
		color: #1a78ae;
	}
	.GameDetailTable.Lose > .Header .Row > .HeaderCell > .GameResult {
		color: #c6443e;
	}
	.GameDetailTable.Win > .Content {
		background-color: #d8e4ec;
		border: solid 1px #bacedc;
	}
	.GameDetailTable > .Content > .Row > .Cell {
		padding: 3px 0;
		vertical-align: middle;
	}
	.GameDetailTable > .Content > .Row.first > .Cell {
		padding-top: 4px;
	}
	.GameDetailTable > .Content > .Row.last > .Cell {
		padding-bottom: 4px;
	}
	.GameDetailTable.Win > .Content > .Row.isRequester {
		background-color: #c6dbe9;
	}
	.GameDetailTable.Lose > .Content > .Row.isRequester {
		background-color: #e1d1d0;
	}
	.GameDetailTable > .Content > .Row > .Cell.ChampionImage {
		padding-left: 10px;
		padding-right: 4px;
	}
	.GameDetailTable > .Content > .Row > .Cell.SummonerSpell > .SummonerSpellSpace {
		margin-bottom: 2px;
	}
	.GameDetailTable > .Content > .Row > .Cell.Rune > .RuneSpace {
		margin-bottom: 2px;
	}
	.GameDetailTable > .Content > .Row > .Cell.SummonerName {
		padding-left: 5px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.GameDetailTable > .Content > .Row > .Cell.SummonerName > .Link {
		color: #555e5e;
		font-size: 11px;
		text-decoration: none;
	}
	.GameDetailTable > .Content > .Row > .Cell.Tier {
		color: #555e5e;
		font-size: 11px;
		text-align: center;
	}
	.GameDetailTable > .Content > .Row > .Cell.KDA {
		text-align: center;
		white-space: nowrap;
	}
	.GameDetailTable > .Content > .Row > .Cell.KDA > .KDARatio {
		color: #879292;
		font-size: 11px;
		font-weight: bold;
	}
	.GameDetailTable > .Content > .Row > .Cell.KDA > .KDARatio.orange {
		color: #e19205;
	}
	.GameDetailTable > .Content > .Row > .Cell.KDA > .KDARatio.blue {
		color: #1f8ecd;
	}
	.GameDetailTable > .Content > .Row > .Cell.KDA > .KDARatio.green {
		color: #2daf7f;
	}
	.GameDetailTable > .Content > .Row > .Cell.KDA > .KDA {
		color: #555e5e;
		font-size: 11px;
	}
	.GameDetailTable > .Content > .Row > .Cell.Damage {
		text-align: center;
	}
	.GameDetailTable > .Content > .Row > .Cell.Damage > .ChampionDamage {
		color: #555e5e;
		font-size: 11px;
	}
	.GameDetailTable > .Content > .Row > .Cell.Damage > .Progress {
		width: 50px;
		height: 6px;
		margin: 0 auto;
		border: 1px solid #cdd2d2;
		background-color: #f2f2f2;
	}
	.GameDetailTable > .Content > .Row > .Cell.Damage > .Progress .Fill {
		height: 100%;
		margin: -1px;
		border: 1px solid #c6443e;
		background-color: #ee5a52;
	}
	.GameDetailTable > .Content > .Row > .Cell.Ward {
		text-align: center;
		color: #555e5e;
		font-size: 11px;
	}
	.GameDetailTable > .Content > .Row > .Cell.CS {
		text-align: center;
		color: #777;
		font-size: 11px;
	}
	.GameDetailTable > .Content > .Row > .Cell.CS > .CS {
		color: #555e5e;
	}
	.GameDetailTable > .Content > .Row > .Cell.Items {
		text-align: center;
		font-size: 0;
	}
	.GameDetailTable > .Content > .Row > .Cell.Items > .Item {
		display: inline-block;
		margin-left: 1px;
		vertical-align: middle;
	}
	.GameDetailTable > .Content > .Row > .Cell.Items > .Item > .NoItem {
		width: 22px;
		height: 22px;
		border-radius: 3px;
		background: rgba(0, 0, 0, 0.15);
	}
</style>
