<script lang="ts">
	export let percentage: number;
	export let winnerValue: number;
	export let loserValue: number;
</script>

<div class="Container">
	<div
		class="OuterCircle"
		style={`background: conic-gradient(#c6443e 0% ${percentage}%, #1a78ae ${percentage}% 100%)`}
	>
		<div class="InnerCircle">
			<span class="winner">{winnerValue}</span>

			<div class="horizon" />
			<span class="loser">{loserValue}</span>
		</div>
	</div>
</div>

<style>
	.Container {
	}
	.OuterCircle {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
	.InnerCircle {
		position: relative;
		width: 70px;
		height: 70px;
		background: #ededed;
		border-radius: 50%;
		top: 5px;
		left: 5px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.winner {
		text-align: center;
		color: #1a78ae;
		font-size: 12px;
		font-weight: bold;
	}
	.loser {
		text-align: center;
		color: #c6443e;
		font-size: 12px;
		font-weight: bold;
	}
	.horizon {
		height: 1px;
		width: 60px;
		margin: 3px 0;

		background: #cdcdcd;
	}
</style>
