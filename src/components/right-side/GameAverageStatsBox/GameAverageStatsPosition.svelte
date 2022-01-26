<script lang="ts">
	import PositionImage from '../../image/PositionImage.svelte';
	import type { PositionStats } from './GameAverageStats';

	export let positionStats: PositionStats[] = [];
</script>

<ul class="Content">
	{#each positionStats as stats}
		<li>
			<PositionImage position={stats.name} />
			<div class="PositionStatContent">
				<div class="Name">{stats.name}</div>
				<span class="RoleRate"><b>{stats.roleRate}</b>%</span>
				<span class="WinRatio">승률 <span><b>{stats.winRatio}</b>%</span></span>
			</div>
		</li>
	{/each}
</ul>

<style>
	ul,
	li {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	ul {
		padding: 0 16px 0 12px;
		font-size: 0;
	}
	ul > li {
		margin-top: 20px;
	}
	ul > li:first-child {
		margin-top: 0;
	}
	.PositionStatContent {
		display: inline-block;
		vertical-align: middle;
		padding-bottom: 1px;
		margin-left: 4px;
	}
	.PositionStatContent .Name {
		line-height: 16px;
		font-size: 14px;
		color: #333;
		margin-bottom: 4px;
	}
	.PositionStatContent .RoleRate {
		line-height: 12px;
		font-size: 11px;
		color: #1f8ecd;
	}
	.PositionStatContent .WinRatio {
		line-height: 12px;
		font-size: 11px;
		color: #666;
	}
	.PositionStatContent .WinRatio:before {
		display: inline-block;
		margin-left: 6px;
		margin-right: 6px;
		content: '';
		border-left: 1px solid #cdd2d2;
		height: 12px;
		vertical-align: middle;
	}
	.PositionStatContent .WinRatio span {
		color: #333;
	}
</style>
