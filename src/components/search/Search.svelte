<script lang="ts">
	import { title } from '../../stores/MetaStore';
	import AutocompleteInput from './AutocompleteInput.svelte';

	export let name: string;
	title.set('롤 전적 검색');
</script>

<div class="index-logo">
	<img
		class="logo-image"
		src="https://opgg-static.akamaized.net/logo/20210611215731.8b528e77f19d4de2892e6cb9d83f882a.png"
		alt="logo"
	/>
</div>

<AutocompleteInput />

<style>
	.index-logo {
		padding: 32px 0 24px;
	}
	.logo-image {
		display: block;
		max-height: 200px;
		margin: 0 auto;
	}
</style>
