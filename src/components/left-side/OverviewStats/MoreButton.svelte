<script lang="ts">
	import { link, location } from 'svelte-spa-router';

	const userName: string = ($location as string).split('/')?.pop() || '';
</script>

<div class="MoreButton">
	<a href={`/summoner/champions/${userName}`} use:link class="Action">더 보기 + 다른 시즌 보기</a>
</div>

<style>
	.MoreButton > .Action {
		display: block;
		text-decoration: none;
		padding: 11px 0 10px;
		line-height: 15px;
		font-size: 12px;
		text-align: center;
		color: #555e5e;
	}
</style>
