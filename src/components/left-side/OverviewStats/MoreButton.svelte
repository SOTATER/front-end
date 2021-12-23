<script lang="ts">
	import { location, push } from 'svelte-spa-router';

	const handleClick = () => {
		const path = $location as string;
		const userName: string = path.split('/')?.pop() || '';
		const newPath = `/summoner/champions/${userName}`;
		if (path === newPath) {
			window.location.reload();
		} else {
			return push(newPath);
		}
	};
</script>

<div class="MoreButton">
	<a href="/" on:click|preventDefault={handleClick} class="Action">더 보기 + 다른 시즌 보기</a>
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
