<script lang="ts">
	import { SubTierBox, TierBox } from '../summary';
</script>

<div class="Content">
	<div class="SideContent">
		<TierBox />
		<SubTierBox />
	</div>
	<div class="RealContent" />
</div>

<style>
	.Content {
		width: 1000px;
		min-height: 500px;
		margin: 0 auto;
	}
	.SideContent {
		display: inline-block;
		width: 300px;
		font-size: 12px;
		vertical-align: top;
	}
	.RealContent {
		display: inline-block;
		width: 690px;
		margin-left: 10px;
		font-size: 12px;
		vertical-align: top;
	}
</style>
