<script lang="ts">
	import ddragon from '../../../stores/DDragonStore';
	import { clickOutside } from '../../../utils/ClickOutsideUtil';
	import { disassembleChosung, getChosung } from '../../../utils/SearchUtil';
	import SearchListItem from './SearchListItem.svelte';

	export let recentChampionList = [];
	export let allChampionList = [];
	export let focus = false;
	export let input = '';

	let visible = false;

	// 입력에 따른 챔피언 필터링, 한글 이름순으로 정렬
	$: filterChampionList = Object.entries($ddragon.champions)
		.filter(([, champ]) => {
			const newInput = disassembleChosung(input);
			return getChosung(champ.name).includes(newInput) || champ.name.includes(newInput);
		})
		.sort(([, a], [, b]) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});

	// 입력이 없으면 모든 챔피언 표시, 입력이 있을 경우 필터링된 챔피언 목록 표시
	$: searchChampionList = input === '' ? allChampionList : filterChampionList;
</script>

<div class="SearchContent" class:hidden={!visible} use:clickOutside={() => (visible = focus)}>
	<ul class="SelectMatchChampionList">
		<li class="Item Recent">
			<div class="Header">최근 플레이</div>
			<div class="Content">
				<ul class="ChampionList">
					{#each recentChampionList as champion}
						<SearchListItem bind:visible {champion} />
					{/each}
				</ul>
			</div>
		</li>
		<li class="Item All">
			<div class="Header">챔피언 목록</div>
			<div class="Content">
				<ul class="ChampionList">
					<SearchListItem bind:visible />
					{#each searchChampionList as champion}
						<SearchListItem bind:visible champion={champion[1]} />
					{/each}
					<div class="ChampionNotFound" class:hidden={searchChampionList.length !== 0}>
						<div class="ErrorMessage">챔피언이 존재하지 않습니다.</div>
					</div>
				</ul>
			</div>
		</li>
	</ul>
</div>

<style>
	.SearchContent {
		position: absolute;
		right: -1px;
		width: 303px;
		margin-top: -1px;
		z-index: 100;
	}
	.SearchContent.hidden {
		display: none;
	}
	ul,
	li {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.SelectMatchChampionList {
		display: table;
		width: 100%;
		font-size: 0;
		table-layout: fixed;
	}
	.SelectMatchChampionList > .Item {
		display: table-cell;
		width: 140px;
		padding-bottom: 10px;
		border-left: 1px solid #cdd2d2;
		border-right: 1px solid #cdd2d2;
		border-bottom: 1px solid #cdd2d2;
		vertical-align: top;
	}
	.SelectMatchChampionList > .Item.Recent {
		background: url(/assets/images/img_boxbg_recent.png);
		border-top: 1px solid #cdd2d2;
	}
	.SelectMatchChampionList > .Item.All {
		background: url(/assets/images/img_boxbg.png);
		border-top: 1px solid #f2f2f2;
	}
	.SelectMatchChampionList > .Item:first-child {
		border-right: none;
	}
	.SelectMatchChampionList > .Item > .Header {
		height: 13px;
		margin: 12px;
		padding-bottom: 9px;
		color: #aaa;
		font-size: 11px;
		border-bottom: 1px solid #cdd2d2;
	}
	.SelectMatchChampionList > .Item > .Content {
		height: 418px;
		overflow-y: auto;
	}
	.ErrorMessage {
		display: block;
		padding: 126px 0 60px;
		text-align: center;
		background: url(/assets/images/bg-noData.png) 50% 50px no-repeat;
		font-size: 16px;
		color: #555e5e;
	}
	.SelectMatchChampionList > .Item > .Content .ErrorMessage {
		background-size: 30%;
		padding-left: 10px;
		padding-right: 10px;
		font-size: 13px;
		color: #879292;
	}
	.ChampionNotFound.hidden {
		display: none;
	}
</style>
