<script lang="ts">
	let recentChampionList = [
		{ id: 78, name: '뽀삐' },
		{ id: 876, name: '릴리아' },
		{ id: 126, name: '제이스' },
		{ id: 202, name: '진' },
		{ id: 55, name: '카타리나' },
		{ id: 53, name: '블리츠크랭크' },
		{ id: 50, name: '스웨인' },
		{ id: 79, name: '그라가스' },
		{ id: 555, name: '파이크' },
		{ id: 81, name: '이즈리얼' },
		{ id: 38, name: '카사딘' },
		{ id: 104, name: '그레이브즈' },
		{ id: 92, name: '리븐' },
		{ id: 76, name: '니달리' },
		{ id: 112, name: '빅토르' },
		{ id: 103, name: '아리' },
	];

	let visible = false;

	const handleItemClick = (champion: { id: number; name: string }) => {
		// TODO: 챔피언 별 매치 데이터 가져오기
		console.log(`id: ${champion.id}, name: ${champion.name}`);
		visible = false;
	};
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
					on:focus={() => {
						visible = true;
					}}
				/>
				<div class="Action">
					<i class="__spSite __spSite-227" />
				</div>
			</div>
			<div class="Content" class:hidden={!visible}>
				<ul class="SelectMatchChampionList">
					<li class="Item Recent">
						<div class="Header">최근 플레이</div>
						<div class="Content">
							<ul class="ChampionList">
								{#each recentChampionList as champion}
									<li class="Item">
										<a
											href="/"
											data-champion-id={champion.id}
											class="Link"
											on:click|preventDefault={() =>
												handleItemClick(champion)}>{champion.name}</a
										>
									</li>
								{/each}
							</ul>
						</div>
					</li>
					<li class="Item All">
						<div class="Header">챔피언 목록</div>
						<div class="Content" />
					</li>
				</ul>
			</div>
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
	.ChampionMatchSearchWrap > .Content {
		position: absolute;
		right: -1px;
		width: 303px;
		margin-top: -1px;
		z-index: 100;
		background-color: #fff; /* opgg 에서는 transparent 이나, 가독성을 위해 white로 수정 */
	}
	.ChampionMatchSearchWrap > .Content.hidden {
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
	.SelectMatchChampionList > .Item > .Content > .ChampionList > .Item {
		height: 21px;
	}
	.SelectMatchChampionList > .Item > .Content > .ChampionList > .Item > .Link {
		display: block;
		padding: 3px 12px;
		max-width: 130px;
		font-size: 13px;
		color: #879292;
		text-decoration: none;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.SelectMatchChampionList > .Item > .Content > .ChampionList > .Item > .Link:hover {
		color: #fff;
		background-color: #1f8ecd;
	}
</style>
