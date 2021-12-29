<script lang="ts">
	import { ApiConstants } from '../../../apis/ApiConstants';
	import SearchList from './SearchList.svelte';

	// TODO: 최근 플레이한 챔피언 목록 가져오기
	const recentChampionList = [
		{ id: '78', name: '뽀삐' },
		{ id: '876', name: '릴리아' },
		{ id: '126', name: '제이스' },
		{ id: '202', name: '진' },
		{ id: '55', name: '카타리나' },
		{ id: '53', name: '블리츠크랭크' },
		{ id: '50', name: '스웨인' },
		{ id: '79', name: '그라가스' },
		{ id: '555', name: '파이크' },
		{ id: '81', name: '이즈리얼' },
		{ id: '38', name: '카사딘' },
		{ id: '104', name: '그레이브즈' },
		{ id: '92', name: '리븐' },
		{ id: '76', name: '니달리' },
		{ id: '112', name: '빅토르' },
		{ id: '103', name: '아리' },
	];

	const allChampionList = Object.entries(ApiConstants.champions).sort(([, a], [, b]) => {
		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}
		return 0;
	});

	let visible = false;

	let input = '';
</script>

<div class="Actions">
	<div class="Action">
		<div class="ChampionMatchSearchWrap">
			<div class="Header">
				<input
					id="ChampionMatchSearch"
					type="text"
					class="Input"
					placeholder="챔피언 검색"
					bind:value={input}
					on:focus={() => (visible = true)}
				/>
				<div class="Action">
					<i class="__spSite __spSite-227" />
				</div>
			</div>
			<SearchList bind:input bind:visible {recentChampionList} {allChampionList} />
		</div>
	</div>
</div>

<style>
	.Actions {
		position: absolute;
		right: 0;
		top: 0;
	}
	.Actions > .Action {
		display: inline-block;
		vertical-align: middle;
	}
	.ChampionMatchSearchWrap {
		position: relative;
		height: 34px;
		border-left: 1px solid #cdd2d2;
	}
	.ChampionMatchSearchWrap > .Header {
		position: relative;
		width: 114px;
		height: 17px;
		padding: 8px 30px 9px 9px;
		background-color: #f2f2f2;
		border-bottom: 1px solid #cdd2d2;
	}
	.ChampionMatchSearchWrap > .Header > .Input {
		display: block;
		width: 100%;
		color: #999;
		font-size: 13px;
		border: none;
		outline: none;
		background-color: #f2f2f2;
	}
	.ChampionMatchSearchWrap > .Header > .Action {
		position: absolute;
		top: 8px;
		right: 10px;
	}
	.__spSite {
		display: inline-block;
		vertical-align: middle;
		text-indent: -99999px;
	}
	.__spSite {
		background-image: url(/assets/images/site.png);
	}
	.__spSite-227 {
		background-position: -125px -4369px;
		width: 15px;
		height: 15px;
	}
</style>
