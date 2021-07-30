<script lang="ts">
	interface Summoner {
		name: string;
		champion: string;
	}
	interface Team {
		summoners: Summoner[];
	}

	export let teams: Team[];
</script>

<div class="Players">
	{#each teams as team}
		<div class="Team">
			{#each team.summoners as summoner}
				<div class="Summoner">
					<div class="ChampionImage">
						<div class="img" />
					</div>
					<div class="SummonerName">
						<a
							href="localhost:5000/#/summoner/sd"
							target="_blank"
							class="Link"
							rel="noopener">{summoner.name}</a
						>
					</div>
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	.Players {
		width: 170px;

		display: flex;
		justify-content: center;
		align-items: center;
	}
	.Players > .Team {
		display: flex;
		flex-direction: column;

		justify-content: center;
		align-items: center;
	}
	.Players > .Team > .Summoner {
		width: 80px;
		height: 18px;

		display: flex;
		align-items: center;
	}
	.ChampionImage {
		margin-right: 3px;
	}
	.img {
		background-image: url(https://opgg-static.akamaized.net/assets/champion16.png?image=q_auto&v=1626880099);
		width: 16px;
		height: 16px;
	}
	.SummonerName {
		max-width: 60px;
	}
	.Link {
		display: block;
		font-size: 11px;
		color: #555;
		cursor: pointer;
		text-decoration: none;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
