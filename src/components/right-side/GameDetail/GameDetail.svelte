<script lang="ts">
	import { GameDetailBuild } from '../GameDetailBuild';
	import { GameDetailEtc } from '../GameDetailEtc';
	import { GameDetailTeam } from '../GameDetailTeam';
	import { GameDetailTotal } from '../GameDetailTotal';
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
