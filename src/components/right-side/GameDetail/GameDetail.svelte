<script lang="ts">
	import { GameDetailBuild } from './build';
	import { GameDetailEtc } from './etc';
	import { GameDetailTeam } from './team';
	import { GameDetailTotal } from './total';
	import GameDetailTabs from './GameDetailTabs.svelte';
	import type { Tab, WinLoseType } from './types';

	let tabs: Tab[] = [
		{ label: '종합', value: 'overview', component: GameDetailTotal },
		{ label: '팀 분석', value: 'teamAnalysis', component: GameDetailTeam },
		{ label: '빌드', value: 'builds', component: GameDetailBuild },
		{ label: 'etc', value: 'gold', component: GameDetailEtc },
	];

	// TODO: 승패 여부 가져오기
	let winLose: WinLoseType = 'Win';
</script>

<GameDetailTabs {tabs} {winLose} />
