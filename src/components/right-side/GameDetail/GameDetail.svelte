<script lang="ts">
	import { GameDetailBuild } from './build';
	import { GameDetailEtc } from './etc';
	import { GameDetailTeam } from './team';
	import { GameDetailTotal } from './total';
	import GameDetailTabs from './GameDetailTabs.svelte';
	import type { Tab } from './types';
	import type { Participant } from '../../../schema/api/participants';
	import { getParticipants } from './total/dummy';

	let tabs: Tab[] = [
		{ label: '종합', value: 'overview', component: GameDetailTotal },
		{ label: '팀 분석', value: 'teamAnalysis', component: GameDetailTeam },
		{ label: '빌드', value: 'builds', component: GameDetailBuild },
		{ label: 'etc', value: 'gold', component: GameDetailEtc },
	];

	// TODO: 소환사 아이디 가져오기
	let summonerId = 'summonerId';
	// TODO: 매치 데이터 가져오기
	let participants: Participant[] = getParticipants();
</script>

<GameDetailTabs {tabs} {summonerId} {participants} />
