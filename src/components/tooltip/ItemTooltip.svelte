<script lang="ts">
	import { ApiConstants } from '../../apis/ApiConstants';
	export let itemId: number;
	const item = ApiConstants.items[itemId];
	const parsedData = new DOMParser().parseFromString(
		item.description.replace(/<br>/g, '').replace(/<li>/g, ''),
		'application/xml',
	);
	const statsMap = new Map<string, string>();
	let isStatName = true;
	let statName = '';
	for (const stat of parsedData.querySelector('stats').childNodes) {
		if (isStatName) {
			statName = stat.textContent;
		} else {
			statsMap.set(statName, stat.textContent);
		}
		isStatName = !isStatName;
	}
	let advancedStatString = '';
	let advancedStats: string[] = [];
	for (const advancedStat of parsedData.querySelector('mainText').childNodes) {
		if (advancedStat.nodeName === 'passive' || advancedStat.nodeName === 'rarityMythic') {
			if (advancedStatString !== '') {
				advancedStats.push(advancedStatString);
			}
			advancedStatString = advancedStat.textContent;
		} else {
			if (advancedStatString !== '') {
				advancedStatString += advancedStat.textContent;
			}
		}
	}
	if (advancedStatString !== '') {
		advancedStats.push(advancedStatString);
	}
	const statArray: [string, string][] = [];
	for (const stat of statsMap.entries()) {
		statArray.push(stat);
	}
</script>

<div class="item-popup">
	<div class="item-name">
		{item.name}
	</div>
	<div>
		{item.plainText}<br />
		{#each statArray as [stat, value]}
			{stat + value} <br />
		{/each}
		{#each advancedStats as advancedStat}
			{#if advancedStat.startsWith('신화급 기본 지속 효과')}
				<br />
			{/if}
			{advancedStat} <br />
		{/each}
		<div class="item-gold">
			{'가격:                  '}
			<div class="gold">
				{item.gold.total}
				({item.gold.sell})
			</div>
		</div>
	</div>
</div>

<style>
	.item-popup {
		max-width: 300px;
		font-size: 12px;
	}
	.item-name {
		color: aquamarine;
	}

	.item-gold {
		margin-top: 10px;
		display: flex;
	}
	.gold {
		margin-left: 5px;
		color: gold;
	}
</style>
