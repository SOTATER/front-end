<script lang="ts">
	interface GameInfo {
		championImage: string;
		championName: string;
		spells: string[];
		spellAlts: string[];
		runes: string[];
		runeAlts: string[];
	}

	export let gameSettingInfo: GameInfo;
</script>

<div class="GameSettingInfo">
	<div class="Image">
		<div class="ChampionImage">
			<img src={gameSettingInfo.championImage} alt={gameSettingInfo.championName} />
		</div>
		<div class="SummonerSpell">
			{#each gameSettingInfo.spells as spell, index}
				<div class="Spell" class:first={index === 0}>
					<img src={spell} alt={gameSettingInfo.spellAlts[index]} />
				</div>
			{/each}
		</div>
		<div class="Runes">
			{#each gameSettingInfo.runes as rune, index}
				<div class="Rune" class:first={index === 0}>
					<img src={rune} alt={gameSettingInfo.runeAlts[index]} />
				</div>
			{/each}
		</div>
	</div>
	<div class="ChampionName">
		{gameSettingInfo.championName}
	</div>
</div>

<style>
	.GameSettingInfo {
		display: flex;
		flex-direction: column;
		width: 100px;
		align-self: center;
	}
	.GameSettingInfo > .Image {
		display: flex;
		flex-direction: row;
	}
	.ChampionImage {
		width: 46px;
		height: 46px;
		border-radius: 50%;
		overflow: hidden;
	}
	.SummonerSpell {
		margin-left: 4px;
	}
	.SummonerSpell > .Spell {
		width: 22px;
		height: 22px;
		margin-top: 2px;
		border-radius: 3px;
		overflow: hidden;
	}
	.Spell.first {
		margin-top: 0;
	}
	.Runes {
		margin-left: 4px;
	}
	.Runes > .Rune {
		width: 22px;
		height: 22px;
		border-radius: 50%;
		overflow: hidden;
		margin-top: 2px;
	}
	.Runes > .Rune.first {
		background: #000;
		margin-top: 0;
	}
	.ChampionName {
		margin-top: 8px;
		font-size: 11px;
		color: #555;
		text-align: center;
	}
</style>
