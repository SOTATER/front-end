<script lang="ts">
	import { selectedPanel } from '../../stores/GameListStore';
	import type { GameAverageStats } from './GameAverageStatsBox/GameAverageStats';
	import GameAverageStatsBox from './GameAverageStatsBox/GameAverageStatsBox.svelte';
	import { getGameAverageStatsDummyData } from './dummy';

	// TODO: 탭 별 매치 데이터 가져오기
	$: console.log('게임 타입: ', $selectedPanel);
	let stats: GameAverageStats = getGameAverageStatsDummyData($selectedPanel);
</script>

<div>
	<GameAverageStatsBox {stats} />
</div>
