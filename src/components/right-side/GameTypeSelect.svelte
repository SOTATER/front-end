<script lang="ts">
	const gameTypes = [
		{ id: 1, name: '큐 타입', value: '' },
		{ id: 2, name: '일반 (비공개 선택)', value: 'normal' },
		{ id: 3, name: '무작위 총력전', value: 'aram' },
		{ id: 4, name: 'AI 상대 대전', value: 'bot' },
		{ id: 5, name: '격전', value: 'clash' },
		{ id: 6, name: '이벤트 게임', value: 'event' },
	];

	let selected = gameTypes[0];

	const handleChange = () => {
		// TODO: 매치 데이터 가져오기
	};
</script>

<span class="jcf-select jcf-unselectable jcf-select-SelectMatchTypes">
	<select
		class="SelectMatchTypes jcf-reset-appearance"
		style="position: absolute; height: 100%; width: 100%;"
		bind:value={selected}
		on:change={handleChange}
	>
		{#each gameTypes as gameType}
			<option value={gameType}>{gameType.name}</option>
		{/each}
	</select>
	<span class="jcf-select-text"><span>{selected.name}</span></span>
</span>

<style>
	.jcf-select {
		position: relative;
	}
	.jcf-unselectable {
		user-select: none;
	}
	.jcf-select-SelectMatchTypes {
		display: inline-block;
		border: none;
		height: 30px;
		line-height: 36px;
		cursor: pointer;
	}
	.jcf-reset-appearance {
		background: none;
		border: none;
		appearance: none;
		opacity: 0;
		display: block !important;
	}
	.jcf-select select {
		z-index: 1;
		left: 0;
		top: 0;
		cursor: pointer;
		font-size: 14px;
	}
	.jcf-select-SelectMatchTypes .jcf-select-text {
		display: inline;
		padding-right: 12px;
		color: #879292;
		font-size: 12px;
		line-height: 36px;
		text-overflow: ellipsis;
		white-space: nowrap;
		cursor: default;
		overflow: hidden;
	}
</style>
