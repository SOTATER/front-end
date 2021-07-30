<script lang="ts">
	import App from '../../../App.svelte';

	interface Kda {
		kill: number;
		death: number;
		assist: number;
		kdaRatio: number;
		badge?: string;
	}

	export let kda: Kda;
</script>

<div class="KDA">
	<div class="Kda">
		<span class="Kill">{kda.kill}</span> /
		<span class="Death">{kda.death}</span> /
		<span class="Assist">{kda.assist}</span>
	</div>
	<div class="KdaRatio">
		<span class="kdaRatio">{kda.kdaRatio}:1</span> 평점
	</div>
	{#if kda.badge}
		<div class="Badge">
			<span class={`${kda.badge}`}>{kda.badge}</span>
		</div>
	{/if}
</div>

<style>
	.KDA {
		width: 113px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 11px;
		text-align: center;
	}
	.KDA > .Kda {
		color: #879292;
		font-size: 15px;
	}
	.Kill {
		color: #555e5e;
		font-weight: bold;
	}
	.Death {
		color: #c6443e;
		font-weight: bold;
	}
	.Assist {
		color: #555e5e;
		font-weight: bold;
	}
	.KDA > .KdaRatio {
		color: #555e5e;
		font-size: 12px;
		font-weight: bold;
		margin-top: 6px;
	}
	.KDA > .Badge {
		margin-top: 8px;
		font-size: 10px;
		color: #fff;
	}
	.Badge > .ACE {
		border-radius: 9px;
		background-color: #8c51c5;
		border: solid 1px #7f3590;
		padding: 2px 5px;
		line-height: 1px;
	}
</style>
