<script lang="ts">
	import PieChart from './PieChart.svelte';
	import ProgressBar from './ProgressBar.svelte';

	const img =
		'https://opgg-static.akamaized.net/images/lol/champion/Camille.png?image=q_auto:best&v=1630555355';
</script>

<ProgressBar imgUrl={img} value={5000} percentage={65} isWin={true} />
<PieChart percentage={(39 / 81) * 100} winnerValue={42} loserValue={39} />
