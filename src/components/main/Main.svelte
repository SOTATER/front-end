<script lang="ts">
	import { location } from 'svelte-spa-router';
	import { title } from '../../stores/MetaStore';
	import { HeaderTitle, HeaderNav } from '../headers';
	import { TabList } from '../contents';

	const summoner = ($location as string).split('/')?.pop() || '';
	title.set(`${summoner} - 게임 전적`);
</script>

<main>
	<HeaderNav />
	<HeaderTitle />
	<TabList />
</main>

<style>
	main {
		background-color: #f2f2f2;
	}
</style>
