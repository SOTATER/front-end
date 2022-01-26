<script lang="ts">
	import { selectedPanel } from '../../stores/GameListStore';
	import type { GameType } from './types';

	export let panel: GameType = 'total';
</script>

{#if $selectedPanel === panel}
	<slot />
{/if}
