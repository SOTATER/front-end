<script lang="ts">
	import type { Match } from '../../../schema/api/matches';
	import type { GameDetailTab } from '../types';
	import GameDetailTabs from './GameDetailTabs.svelte';
	import { GameDetailBuild } from './build';
	import { GameDetailEtc } from './etc';
	import { GameDetailTeam } from './team';
	import { GameDetailTotal } from './total';
	import { getMatches } from '../dummy';

	let tabs: GameDetailTab[] = [
		{ label: '종합', value: 'overview', component: GameDetailTotal },
		{ label: '팀 분석', value: 'teamAnalysis', component: GameDetailTeam },
		{ label: '빌드', value: 'builds', component: GameDetailBuild },
		{ label: 'etc', value: 'gold', component: GameDetailEtc },
	];

	// TODO: 소환사 아이디 가져오기
	let summonerId = 'summonerId';
	// TODO: 매치 데이터 가져오기
	let matches: Match = getMatches();
</script>

<GameDetailTabs {tabs} {summonerId} {matches} />
