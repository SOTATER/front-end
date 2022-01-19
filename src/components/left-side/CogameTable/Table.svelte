<script lang="ts">
	import axios from 'axios';

	import type { AscendingMode, SortingClick, CogameSummoner } from './types';

	const summonerData: CogameSummoner[] = [
		{
			name: 'LSB Kael',
			games: 2,
			win: 2,
			lose: 0,
		},
		{
			name: '다없수질',
			games: 2,
			win: 2,
			lose: 0,
		},
		{
			name: '양 가브리엘',
			games: 4,
			win: 4,
			lose: 0,
		},
		{
			name: '수퍼피그미',
			games: 2,
			win: 2,
			lose: 0,
		},
		{
			name: '신수영 결혼',
			games: 2,
			win: 1,
			lose: 1,
		},
	];
	let ascending: AscendingMode = 'none';
	let descending: AscendingMode = 'none';
	let sortedData = [...summonerData];
	const handleHeaderClick = (clicked: SortingClick) => {
		if (ascending === clicked) {
			ascending = 'none';
			descending = clicked;
			sort(clicked, false);
		} else {
			ascending = clicked;
			descending = 'none';
			sort(clicked, true);
		}
	};

	function sortAtoB<T>(a: T, b: T, isAscending: boolean): number {
		return isAscending ? (a < b ? 1 : -1) : a > b ? 1 : -1;
	}

	function sortByType(
		sortData: CogameSummoner[],
		sortingType: SortingClick,
		isAscending: boolean,
	) {
		return sortData.sort((a, b) => sortAtoB(a[sortingType], b[sortingType], isAscending));
	}
	const sort = (sortingType: SortingClick, ascending: boolean) => {
		switch (sortingType) {
			case 'name':
			case 'wins':
			case 'loses':
			case 'games': {
				sortedData = sortByType(sortedData, sortingType, ascending);
				break;
			}
			case 'winningRate': {
				sortedData = sortedData.sort((a, b) =>
					sortAtoB(a.win / a.games, b.win / b.games, ascending),
				);
				break;
			}
		}
	};
</script>

<div>
	<table class="SummonersMostGameTable tablesorter" role="grid">
		<colgroup>
			<col />
			<col width="50" />
			<col width="45" />
			<col width="45" />
			<col width="70" />
		</colgroup>
		<thead class="Header">
			<tr class="Row" role="row">
				<th
					class="SummonerName HeaderCell"
					class:tablesorter-headerAsc={ascending === 'name'}
					class:tablesorter-headerDesc={descending === 'name'}
					class:sorted={ascending === 'name' || descending === 'name'}
					tabindex="0"
					role="columnheader"
					unselectable={true}
					style="user-select: none;"
					on:click={() => handleHeaderClick('name')}
				>
					<div class="tablesorter-header-inner">소환사</div>
				</th>
				<th
					class="HeaderCell"
					class:tablesorter-headerAsc={ascending === 'games'}
					class:tablesorter-headerDesc={descending === 'games'}
					class:sorted={ascending === 'games' || descending === 'games'}
					tabindex="0"
					role="columnheader"
					unselectable={true}
					style="user-select: none;"
					on:click={() => handleHeaderClick('games')}
				>
					<div class="tablesorter-header-inner">게임</div>
				</th>
				<th
					class="HeaderCell"
					class:tablesorter-headerAsc={ascending === 'wins'}
					class:tablesorter-headerDesc={descending === 'wins'}
					class:sorted={ascending === 'wins' || descending === 'wins'}
					tabindex="0"
					role="columnheader"
					unselectable={true}
					style="user-select: none;"
					on:click={() => handleHeaderClick('wins')}
				>
					<div class="tablesorter-header-inner">승</div>
				</th>
				<th
					class="HeaderCell"
					class:tablesorter-headerAsc={ascending === 'loses'}
					class:tablesorter-headerDesc={descending === 'loses'}
					class:sorted={ascending === 'loses' || descending === 'loses'}
					tabindex="0"
					role="columnheader"
					unselectable={true}
					style="user-select: none;"
					on:click={() => handleHeaderClick('loses')}
				>
					<div class="tablesorter-header-inner">패</div>
				</th>
				<th
					class="HeaderCell"
					class:tablesorter-headerAsc={ascending === 'winningRate'}
					class:tablesorter-headerDesc={descending === 'winningRate'}
					class:sorted={ascending === 'winningRate' || descending === 'winningRate'}
					tabindex="0"
					role="columnheader"
					unselectable={true}
					style="user-select: none;"
					on:click={() => handleHeaderClick('winningRate')}
				>
					<div class="tablesorter-header-inner">승률</div>
				</th>
			</tr>
		</thead>
		<tbody class="Body">
			{#each sortedData as { name, games, win, lose }, i}
				<tr class="Row" class:Odd={i % 2 === 1} role="row">
					<td class="SummonerName Cell">
						<a href={`/#/summoner/${name}`} class="Link">{name}</a>
					</td>
					<td class="Cell">{games}</td>
					<td class="Cell">
						{win}
					</td>
					<td class="Cell">
						{lose}
					</td>
					<td class="WinRatio Cell">
						{((win / games) * 100).toFixed(0)}%
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.SummonersMostGameTable {
		width: 100%;
		table-layout: fixed;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	.SummonersMostGameTable > .Header > .Row > .HeaderCell.SummonerName {
		text-align: left;
		padding-left: 15px;
	}
	.SummonersMostGameTable > .Header > .Row > .HeaderCell {
		padding-top: 11px;
		padding-bottom: 10px;
		background-color: #ededed;
		color: #879292;
		font-weight: normal;
		font-size: 12px;
		word-break: break-word;
	}
	.tablesorter > .Header > .Row > .HeaderCell {
		background-image: url(/assets/images/tableSorter/bg-tableSorter.png);
		background-repeat: no-repeat;
		background-position: 90% center;
		cursor: pointer;
		outline: none;
	}
	.tablesorter th {
		background-image: url(/assets/images/tableSorter/bg-tableSorter.png);
		background-repeat: no-repeat;
		background-position: 90% center;
		cursor: pointer;
		outline: none;
	}
	.tablesorter > .Header > .Row > .tablesorter-headerAsc {
		background-image: url(/assets/images/tableSorter/bg-tableSorter-asc.png);
	}
	.tablesorter > .Header > .Row > .tablesorter-headerDesc {
		background-image: url(/assets/images/tableSorter/bg-tableSorter-desc.png);
	}
	.tablesorter > .Header > .Row > .sorted > .tablesorter-header-inner {
		color: #3d95e5;
	}
	.SummonersMostGameTable > .Body > .Row.Odd > .Cell {
		background-color: #e0e3e3;
	}
	.SummonersMostGameTable > .Body > .Row > .Cell.SummonerName {
		text-align: left;
		padding-left: 15px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.SummonersMostGameTable > .Body > .Row > .Cell {
		padding-top: 11px;
		padding-bottom: 10px;
		color: #879292;
		font-size: 11px;
		text-align: center;
	}
	.SummonersMostGameTable > .Body > .Row > .Cell.SummonerName > .Link {
		color: #555e5e;
		font-size: 12px;
		font-weight: bold;
		text-decoration: none;
	}
	.SummonersMostGameTable > .Body > .Row.Odd > .Cell {
		background-color: #e0e3e3;
	}
	.SummonersMostGameTable > .Body > .Row > .Cell.WinRatio {
		color: #676f89;
	}
</style>
