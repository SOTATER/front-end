<script lang="ts">
	export let imgUrl: string;
	export let value: number;
	export let percentage: number;
	export let isWin: boolean;
</script>

<div class="Container">
	<div class="imgContainer">
		<img src={imgUrl} alt="" />
	</div>
	<div class="ProgressContainer">
		<div class="Progress" class:isWin style={`width: ${percentage}%`} />
		<span>{value.toLocaleString()}</span>
	</div>
</div>

<style>
	.Container {
		display: flex;
		flex-direction: row;
		height: 20px;
		width: 100px;
		background-color: #afafaf;
	}
	.imgContainer {
		width: 20px;
		height: 20px;
	}
	img {
		width: 100%;
		height: 100%;
	}
	.ProgressContainer {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.Progress {
		background-color: #c6443e;
	}
	.Progress.isWin {
		background-color: #1a78ae;
	}
	span {
		position: absolute;
		top: 2px;
		right: 5px;
		font-size: 11px;
	}
</style>
