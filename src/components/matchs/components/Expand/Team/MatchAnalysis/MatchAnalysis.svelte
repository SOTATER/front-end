<script lang="ts">
	import { circleData, losers, winners } from './data';

	import InfoTable from './InfoTable.svelte';
</script>

<InfoTable {winners} {losers} label="챔피언 처치" {circleData} />
