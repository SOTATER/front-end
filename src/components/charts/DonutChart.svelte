<script lang="ts">
	export let radius = 90;
	export let blue = 35;
	export let red = 65;
	export let mode: 'winningRate' | 'normal' = 'winningRate';
	const width = mode === 'winningRate' ? 6 : 2.5;
	const blueRate = (blue / (blue + red)) * 100;
	const strokeDashArrayRed = `${100 - blueRate} ${blueRate}`;
	const strokeDashArrayBlue = `${blueRate} ${100 - blueRate}`;
</script>

<div class="container">
	<svg width={radius} height={radius} viewBox="0 0 42 42" class="donut">
		<circle
			cx="21"
			cy="21"
			r="15.91549430918954"
			fill="transparent"
			stroke="#ee5a52"
			stroke-dasharray={strokeDashArrayRed}
			stroke-dashoffset={25}
			stroke-width={width}
		/>
		<circle
			cx="21"
			cy="21"
			r="15.91549430918954"
			fill="transparent"
			stroke="#1a78ae"
			stroke-dasharray={strokeDashArrayBlue}
			stroke-dashoffset={25 + blueRate}
			stroke-width={width}
		/>
	</svg>
	{#if mode === 'normal'}
		<div class="text">
			<div class="blue-text">
				{blue}
			</div>
			<div class="red-text">
				{red}
			</div>
		</div>
	{:else}
		<div class="winning-rate-text">
			{`${blue}%`}
		</div>
	{/if}
</div>

<style>
	.container {
		width: 90px;
		height: 90px;
		position: relative;
	}
	.text {
		box-sizing: border-box;
		position: absolute;
		top: 31%;
		left: 0;
		width: 100%;
		text-align: center;
		font-weight: bold;
		font-size: 12px;
		padding: 0 15px;
	}
	.blue-text {
		color: #1a78ae;
		border-bottom: 1px solid #cdd2d2;
		padding-bottom: 2px;
	}
	.red-text {
		color: #c6443e;
		margin-top: 2px;
	}
	.winning-rate-text {
		position: absolute;
		top: 40%;
		width: 100%;
		text-align: center;
		color: #555;
		font-size: 14px;
	}
</style>
