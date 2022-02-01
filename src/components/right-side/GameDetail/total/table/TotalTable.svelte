<script lang="ts">
	import type { Participant } from '../../../../../schema/api/participants';
	import type { TeamColor, WinLoseType } from '../../types';

	export let participants: Participant[] = [];
	let participantId = 1; // temp
	let winLose: WinLoseType = participants[participantId].win ? 'Win' : 'Lose'; // TODO: 무효시에는??
	let teamColor: TeamColor = participants[participantId].teamId === 100 ? 'blue' : 'red';
</script>

<table class={`GameDetailTable ${winLose}`}>
	<colgroup>
		<col width="44px" />
		<col width="18px" />
		<col width="18px" />
		<col />
		<col width="65px" />
		<col width="55px" />
		<col width="76px" />
		<col width="66px" />
		<col width="48px" />
		<col width="55px" />
		<col width="170px" />
	</colgroup>
	<thead class="Header">
		<tr class="Row">
			<th class="HeaderCell" colspan="4">
				<span class="GameResult"
					>{winLose === 'Win' ? '승리' : winLose === 'Lose' ? '패배' : ''}
				</span>
				{`(${teamColor === 'blue' ? '블루' : '레드'}팀)`}
			</th>
			<th class="HeaderCell">티어</th>
			<th class="HeaderCell">OP Score</th>
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
				class:isRequester={i === participantId}
			>
				<td class="Cell" />
				<td class="Cell" />
				<td class="Cell" />
				<td class="Cell" />
				<td class="Cell" />
				<td class="Cell" />
				<td class="Cell" />
				<td class="Cell" />
				<td class="Cell" />
				<td class="Cell" />
				<td class="Cell" />
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
</style>
