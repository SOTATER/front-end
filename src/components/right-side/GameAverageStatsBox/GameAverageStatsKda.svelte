<script lang="ts">
	import { popoverText } from '../../tooltip/Tooltip';
	import type { KDAStats } from './GameAverageStats';

	export let kda: KDAStats = {
		kill: 0,
		death: 0,
		assist: 0,
		ckRate: 0,
	};
</script>

<div>
	<div class="KDA">
		<span class="Kill">{kda.kill}</span> /
		<span class="Death">{kda.death}</span> /
		<span class="Assist">{kda.assist}</span>
	</div>
	<div class="KDARatio">
		<span class="KDARatio">{`${((kda.kill + kda.assist) / kda.death).toFixed(2)}:1`}</span>
		<span class="CKRate" use:popoverText={{ text: '킬관여율' }}
			>(<span>{`${kda.ckRate}%`}</span>)</span
		>
	</div>
</div>

<style>
	.KDA {
		color: #879292;
		font-size: 11px;
		line-height: 12px;
		font-weight: bold;
	}
	.KDA > .Kill,
	.KDA > .Assist {
		color: #555e5e;
	}
	.KDA > .Death {
		color: #c6443e;
	}
	.KDARatio {
		font-size: 16px;
		line-height: 19px;
		margin-top: 7px;
	}
	.KDARatio > .KDARatio {
		color: #353a3a;
	}
	.KDARatio > .CKRate {
		color: #c6443e;
	}
</style>
