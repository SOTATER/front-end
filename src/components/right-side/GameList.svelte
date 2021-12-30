<script lang="ts">
	import GameListTab from './GameListTab.svelte';
	import GameListTabPanel from './GameListTabPanel.svelte';
	import GameTypeSelect from './GameTypeSelect.svelte';
	import SearchTextfield from './search/SearchTextfield.svelte';
</script>

<div class="GameListContainer">
	<div class="Box">
		<div class="Navigation">
			<ul class="List">
				<GameListTab>전체</GameListTab>
				<GameListTab>솔로랭크</GameListTab>
				<GameListTab>자유랭크</GameListTab>
				<GameListTab>
					<GameTypeSelect />
				</GameListTab>
			</ul>
			<SearchTextfield />
		</div>
	</div>
	<div class="Content">
		<GameListTabPanel>
			<!-- 데이터가 없을 경우 -->
			<div class="Box">
				<div class="Content">
					<div class="ErrorMessage"><div>기록된 전적이 없습니다.</div></div>
				</div>
			</div>
		</GameListTabPanel>
		<GameListTabPanel>
			<!-- 데이터가 없을 경우 -->
			<div class="Box">
				<div class="Content">
					<div class="ErrorMessage"><div>기록된 전적이 없습니다.</div></div>
				</div>
			</div>
		</GameListTabPanel>
		<GameListTabPanel>
			<!-- 데이터가 없을 경우 -->
			<div class="Box">
				<div class="Content">
					<div class="ErrorMessage"><div>기록된 전적이 없습니다.</div></div>
				</div>
			</div>
		</GameListTabPanel>
		<GameListTabPanel>
			<!-- 데이터가 없을 경우 -->
			<div class="Box">
				<div class="Content">
					<div class="ErrorMessage"><div>기록된 전적이 없습니다.</div></div>
				</div>
			</div>
		</GameListTabPanel>
	</div>
</div>

<style>
	.GameListContainer {
		margin-top: 10px;
	}
	.Box {
		border: 1px solid #cdd2d2;
		box-shadow: 0 1px #dcdfdf;
		background: #f2f2f2;
		border-radius: 2px;
	}
	.Navigation {
		position: relative;
		border-bottom: 1px solid #cdd2d2;
		margin-bottom: -1px;
		height: 34px;
		overflow: visible;
	}
	.List {
		float: left;
		padding-left: 10px;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.Content {
		position: relative;
	}
	.ErrorMessage {
		display: block;
		padding: 126px 0 60px;
		text-align: center;
		background: url(/assets/images/bg-noData.png) 50% 50px no-repeat;
		font-size: 16px;
		color: #555e5e;
	}
</style>
