<script lang="ts">
	import type { Stats } from '../data';

	export let stats: Stats;
</script>

<div class="Stats">
	<div class="Level">레벨{stats.level}</div>
	<div class="CS">
		<span class="cs">{stats.cs}</span> CS
	</div>
	<div class="KillRelated">킬관여 {stats.killRelated}%</div>
	<div class="MMR">
		<span>매치 평균</span>
		<br />
		<b>{stats.mmr}</b>
	</div>
</div>

<style>
	.Stats {
		width: 90px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		color: #555e5e;
		font-size: 11px;
		line-height: 18px;
	}
	.KillRelated {
		color: #c6443e;
	}
	.MMR {
		text-align: center;
	}
</style>
