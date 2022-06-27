<script lang="ts">
	import AutocompleteInput from '../search/AutocompleteInput.svelte';
</script>

<div class="headerTop">
	<div class="logo">
		<h1>
			<a href="/">
				<img
					src="https://s-lol-web.op.gg/images/icon/opgglogo.svg?v=1653487405752"
					width="65"
					alt="OP.GG"
					height="16"
				/>
			</a>
		</h1>
	</div>
	<div class="search">
		<!-- TODO: OP.GG Search 컴포넌트 CSS으로 수정 필요 -->
		<AutocompleteInput isMain={false} />
	</div>
</div>

<style>
	.headerTop {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 48px;
		background-color: #5383e8;
	}
	.logo {
		height: 40px;
	}
	.logo h1 {
		width: 98px;
		height: 40px;
		background-color: #5383e8;
		margin: 0;
	}
	.logo h1 a {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.search {
		display: flex;
		position: absolute;
		top: 8px;
		right: 0px;
		width: 340px;
		height: 32px;
		transition: width 0.2s ease 0s;
		z-index: 1;
	}
</style>
