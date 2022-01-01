<script lang="ts">
	import { popoverText } from '../../tooltip/Tooltip';

	export let kill = 0;
	export let death = 0;
	export let assist = 0;
	export let ckRate = 0;

	const ratio = Math.floor(((kill + assist) / death) * 100) / 100; // 소수점 둘째자리에서 내림
</script>

<div>
	<div class="KDA">
		<span class="Kill">{kill}</span> /
		<span class="Death">{death}</span> /
		<span class="Assist">{assist}</span>
	</div>
	<div class="KDARatio">
		<span class="KDARatio">{`${ratio}:1`}</span>
		<span class="CKRate" use:popoverText={{ text: '킬관여율' }}
			>(<span>{`${ckRate}%`}</span>)</span
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
