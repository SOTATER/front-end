<script lang="ts">
	import ProgressBar from './ProgressBar.svelte';
	const img =
		'https://opgg-static.akamaized.net/images/lol/champion/Camille.png?image=q_auto:best&v=1630555355';
</script>

<ProgressBar imgUrl={img} value={5000} percentage={65} isWin={true} />
