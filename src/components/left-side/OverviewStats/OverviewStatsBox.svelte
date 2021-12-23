<script lang="ts">
	import {
		OverviewStatsTab,
		OverviewStatsTabList,
		OverviewStatsTabPanel,
		OverviewStatsTabPanelItem,
		OverviewStatsTabs,
	} from '.';
	import MoreButton from './MoreButton.svelte';
	import type { OverviewStats } from './OverviewStatsTabPanelItem.svelte';

	let allStats: OverviewStats[] = [
		{
			championName: 'Jayce',
			championMinionKillAverage: 196.8,
			championMinionKillPerMin: 7.2,
			kill: 7.0,
			death: 3.75,
			assist: 7.94,
		},
		{
			championName: 'Kassadin',
			championMinionKillAverage: 179.8,
			championMinionKillPerMin: 6.5,
			kill: 6.8,
			death: 3.2,
			assist: 5.4,
		},
		{
			championName: 'Sylas',
			championMinionKillAverage: 153.0,
			championMinionKillPerMin: 4.6,
			kill: 8.25,
			death: 7.25,
			assist: 7.5,
		},
		{
			championName: 'Viktor',
			championMinionKillAverage: 211.8,
			championMinionKillPerMin: 6.1,
			kill: 4.75,
			death: 5.75,
			assist: 6.0,
		},
		{
			championName: 'Lux',
			championMinionKillAverage: 153.3,
			championMinionKillPerMin: 5.6,
			kill: 5.33,
			death: 4.0,
			assist: 8.0,
		},
		{
			championName: 'Akali',
			championMinionKillAverage: 181.5,
			championMinionKillPerMin: 5.5,
			kill: 7.5,
			death: 7.0,
			assist: 4.0,
		},
		{
			championName: 'Cassiopeia',
			championMinionKillAverage: 120.0,
			championMinionKillPerMin: 5.3,
			kill: 4.0,
			death: 4.0,
			assist: 2.5,
		},
	];
	// TODO: 솔랭, 자랭 추가
	let solorankedStats: OverviewStats[] = [];
	let flexranked5v5Stats: OverviewStats[] = [];
</script>

<div class="stats-box">
	<OverviewStatsTabs>
		<OverviewStatsTabList>
			<OverviewStatsTab>
				프리시즌<br />
				전체
			</OverviewStatsTab>
			<OverviewStatsTab>솔로랭크</OverviewStatsTab>
			<OverviewStatsTab>
				자유랭크<br />5v5
			</OverviewStatsTab>
		</OverviewStatsTabList>
		<div class="Content">
			<OverviewStatsTabPanel>
				{#each allStats as stats}
					<OverviewStatsTabPanelItem {stats} />
				{/each}
				<MoreButton />
			</OverviewStatsTabPanel>
			<OverviewStatsTabPanel>
				<div class="ChampionBox Ranked">
					<div class="Face" title="제이스">
						<a href="/champion/jayce/statistics" target="_blank">
							<img
								src="//opgg-static.akamaized.net/images/lol/champion/Jayce.png?image=c_scale,q_auto,w_45&amp;v=1637122822"
								width="45"
								class="ChampionImage"
								alt="제이스"
							/>
						</a>
					</div>
					<div class="ChampionInfo">
						<div class="ChampionName" title="제이스">
							<a href="/champion/jayce/statistics" target="_blank"> 제이스 </a>
						</div>
						<div class="ChampionMinionKill tip" title="평균 CS (CS/분)">
							CS 198.5 (7.2)
						</div>
					</div>
					<div class="PersonalKDA">
						<div class="KDA green tip" title="(K 6.8 + A 7.73) / D 3.73">
							<span class="KDA">3.89:1</span>
							<span class="Text">평점</span>
						</div>
						<div class="KDAEach">
							<span class="Kill">6.8</span>
							<span class="Bar">/</span>
							<span class="Death">3.7</span>
							<span class="Bar">/</span>
							<span class="Assist">7.7</span>
						</div>
					</div>
					<div class="Played">
						<div class="WinRatio red tip" title="승률">67%</div>
						<div class="Title">15 게임</div>
					</div>
				</div>
				<div class="ChampionBox Ranked">
					<div class="Face" title="카사딘">
						<a href="/champion/kassadin/statistics" target="_blank">
							<img
								src="//opgg-static.akamaized.net/images/lol/champion/Kassadin.png?image=c_scale,q_auto,w_45&amp;v=1637122822"
								width="45"
								class="ChampionImage"
								alt="카사딘"
							/>
						</a>
					</div>
					<div class="ChampionInfo">
						<div class="ChampionName" title="카사딘">
							<a href="/champion/kassadin/statistics" target="_blank"> 카사딘 </a>
						</div>
						<div class="ChampionMinionKill tip" title="평균 CS (CS/분)">
							CS 179.8 (6.5)
						</div>
					</div>
					<div class="PersonalKDA">
						<div class="KDA green tip" title="(K 6.8 + A 5.4) / D 3.2">
							<span class="KDA">3.81:1</span>
							<span class="Text">평점</span>
						</div>
						<div class="KDAEach">
							<span class="Kill">6.8</span>
							<span class="Bar">/</span>
							<span class="Death">3.2</span>
							<span class="Bar">/</span>
							<span class="Assist">5.4</span>
						</div>
					</div>
					<div class="Played">
						<div class="WinRatio red tip" title="승률">80%</div>
						<div class="Title">5 게임</div>
					</div>
				</div>
				<div class="ChampionBox Ranked">
					<div class="Face" title="빅토르">
						<a href="/champion/viktor/statistics" target="_blank">
							<img
								src="//opgg-static.akamaized.net/images/lol/champion/Viktor.png?image=c_scale,q_auto,w_45&amp;v=1637122822"
								width="45"
								class="ChampionImage"
								alt="빅토르"
							/>
						</a>
					</div>
					<div class="ChampionInfo">
						<div class="ChampionName" title="빅토르">
							<a href="/champion/viktor/statistics" target="_blank"> 빅토르 </a>
						</div>
						<div class="ChampionMinionKill tip" title="평균 CS (CS/분)">
							CS 220.0 (6.5)
						</div>
					</div>
					<div class="PersonalKDA">
						<div class="KDA normal tip" title="(K 6.33 + A 5.67) / D 5.33">
							<span class="KDA">2.25:1</span>
							<span class="Text">평점</span>
						</div>
						<div class="KDAEach">
							<span class="Kill">6.3</span>
							<span class="Bar">/</span>
							<span class="Death">5.3</span>
							<span class="Bar">/</span>
							<span class="Assist">5.7</span>
						</div>
					</div>
					<div class="Played">
						<div class="WinRatio normal tip" title="승률">33%</div>
						<div class="Title">3 게임</div>
					</div>
				</div>
				<div class="ChampionBox Ranked">
					<div class="Face" title="사일러스">
						<a href="/champion/sylas/statistics" target="_blank">
							<img
								src="//opgg-static.akamaized.net/images/lol/champion/Sylas.png?image=c_scale,q_auto,w_45&amp;v=1637122822"
								width="45"
								class="ChampionImage"
								alt="사일러스"
							/>
						</a>
					</div>
					<div class="ChampionInfo">
						<div class="ChampionName" title="사일러스">
							<a href="/champion/sylas/statistics" target="_blank"> 사일러스 </a>
						</div>
						<div class="ChampionMinionKill tip" title="평균 CS (CS/분)">
							CS 160.0 (4.7)
						</div>
					</div>
					<div class="PersonalKDA">
						<div class="KDA normal tip" title="(K 7.67 + A 7.67) / D 7.33">
							<span class="KDA">2.09:1</span>
							<span class="Text">평점</span>
						</div>
						<div class="KDAEach">
							<span class="Kill">7.7</span>
							<span class="Bar">/</span>
							<span class="Death">7.3</span>
							<span class="Bar">/</span>
							<span class="Assist">7.7</span>
						</div>
					</div>
					<div class="Played">
						<div class="WinRatio normal tip" title="승률">33%</div>
						<div class="Title">3 게임</div>
					</div>
				</div>
				<div class="ChampionBox Ranked">
					<div class="Face" title="럭스">
						<a href="/champion/lux/statistics" target="_blank">
							<img
								src="//opgg-static.akamaized.net/images/lol/champion/Lux.png?image=c_scale,q_auto,w_45&amp;v=1637122822"
								width="45"
								class="ChampionImage"
								alt="럭스"
							/>
						</a>
					</div>
					<div class="ChampionInfo">
						<div class="ChampionName" title="럭스">
							<a href="/champion/lux/statistics" target="_blank"> 럭스 </a>
						</div>
						<div class="ChampionMinionKill tip" title="평균 CS (CS/분)">
							CS 153.3 (5.6)
						</div>
					</div>
					<div class="PersonalKDA">
						<div class="KDA green tip" title="(K 5.33 + A 8) / D 4">
							<span class="KDA">3.33:1</span>
							<span class="Text">평점</span>
						</div>
						<div class="KDAEach">
							<span class="Kill">5.3</span>
							<span class="Bar">/</span>
							<span class="Death">4.0</span>
							<span class="Bar">/</span>
							<span class="Assist">8.0</span>
						</div>
					</div>
					<div class="Played">
						<div class="WinRatio normal tip" title="승률">33%</div>
						<div class="Title">3 게임</div>
					</div>
				</div>
				<div class="ChampionBox Ranked">
					<div class="Face" title="아칼리">
						<a href="/champion/akali/statistics" target="_blank">
							<img
								src="//opgg-static.akamaized.net/images/lol/champion/Akali.png?image=c_scale,q_auto,w_45&amp;v=1637122822"
								width="45"
								class="ChampionImage"
								alt="아칼리"
							/>
						</a>
					</div>
					<div class="ChampionInfo">
						<div class="ChampionName" title="아칼리">
							<a href="/champion/akali/statistics" target="_blank"> 아칼리 </a>
						</div>
						<div class="ChampionMinionKill tip" title="평균 CS (CS/분)">
							CS 181.5 (5.5)
						</div>
					</div>
					<div class="PersonalKDA">
						<div class="KDA normal tip" title="(K 7.5 + A 4) / D 7">
							<span class="KDA">1.64:1</span>
							<span class="Text">평점</span>
						</div>
						<div class="KDAEach">
							<span class="Kill">7.5</span>
							<span class="Bar">/</span>
							<span class="Death">7.0</span>
							<span class="Bar">/</span>
							<span class="Assist">4.0</span>
						</div>
					</div>
					<div class="Played">
						<div class="WinRatio normal tip" title="승률">0%</div>
						<div class="Title">2 게임</div>
					</div>
				</div>
				<div class="ChampionBox Ranked">
					<div class="Face" title="카시오페아">
						<a href="/champion/cassiopeia/statistics" target="_blank">
							<img
								src="//opgg-static.akamaized.net/images/lol/champion/Cassiopeia.png?image=c_scale,q_auto,w_45&amp;v=1637122822"
								width="45"
								class="ChampionImage"
								alt="카시오페아"
							/>
						</a>
					</div>
					<div class="ChampionInfo">
						<div class="ChampionName" title="카시오페아">
							<a href="/champion/cassiopeia/statistics" target="_blank">
								카시오페아
							</a>
						</div>
						<div class="ChampionMinionKill tip" title="평균 CS (CS/분)">
							CS 120.0 (5.3)
						</div>
					</div>
					<div class="PersonalKDA">
						<div class="KDA normal tip" title="(K 4 + A 2.5) / D 4">
							<span class="KDA">1.63:1</span>
							<span class="Text">평점</span>
						</div>
						<div class="KDAEach">
							<span class="Kill">4.0</span>
							<span class="Bar">/</span>
							<span class="Death">4.0</span>
							<span class="Bar">/</span>
							<span class="Assist">2.5</span>
						</div>
					</div>
					<div class="Played">
						<div class="WinRatio normal tip" title="승률">0%</div>
						<div class="Title">2 게임</div>
					</div>
				</div>
				<MoreButton />
			</OverviewStatsTabPanel>
			<OverviewStatsTabPanel />
		</div>
	</OverviewStatsTabs>
</div>

<style>
	.stats-box {
		margin-top: 10px;
		border: 1px solid #cdd2d2;
		box-shadow: 0 1px #dcdfdf;
		background: #f2f2f2;
		border-radius: 2px;
	}
	.Content {
		background: #ededed;
	}
</style>
