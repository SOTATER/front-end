export interface Match {
	metadata?: Metadata;
	info?: Info;
}

export interface Metadata {
	dataVersion: string;
	matchId: string;
	participants: string[]; //	A list of participant PUUIDs
}

export interface Info {
	gameCreation: number; // Unix timestamp for when the game is created on the game server (i.e., the loading screen)
	gameDuration: number; // Prior to patch 11.20, this field returns the game length in milliseconds calculated from gameEndTimestamp - gameStartTimestamp. Post patch 11.20, this field returns the max timePlayed of any participant in the game in seconds, which makes the behavior of this field consistent with that of match-v4. The best way to handling the change in this field is to treat the value as milliseconds if the gameEndTimestamp field isn't in the response and to treat the value as seconds if gameEndTimestamp is in the response
	gameEndTimestamp: number; // Unix timestamp for when match ends on the game server. This timestamp can occasionally be significantly longer than when the match "ends". The most reliable way of determining the timestamp for the end of the match would be to add the max time played of any participant to the gameStartTimestamp. This field was added to match-v5 in patch 11.20 on Oct 5th, 2021
	gameId: number;
	gameMode: string; // Refer to the Game Constants documentation
	gameName: string;
	gameStartTimestamp: number; // Unix timestamp for when match starts on the game server.
	gameType: string;
	gameVersion: string; // The first two parts can be used to determine the patch a game was played on
	mapId: number; // Refer to the Game Constants documentation
	participants: Participant[];
	platformId: string; // Platform where the match was played
	queueId: number; // Refer to the Game Constants documentation
	teams: Team[];
	tournamentCode: string;
}

export interface Participant {
	assists?: number;
	baronKills?: number;
	bountyLevel?: number;
	champExperience?: number;
	champLevel?: number;
	championId?: number;
	championName?: string;
	championTransform?: number;
	consumablesPurchased?: number;
	damageDealtToBuildings?: number;
	damageDealtToObjectives?: number;
	damageDealtToTurrets?: number;
	damageSelfMitigated?: number;
	deaths?: number;
	detectorWardsPlaced?: number;
	doubleKills?: number;
	dragonKills?: number;
	firstBloodAssist?: boolean;
	firstBloodKill?: boolean;
	firstTowerAssist?: boolean;
	firstTowerKill?: boolean;
	gameEndedInEarlySurrender?: boolean;
	gameEndedInSurrender?: boolean;
	goldEarned?: number;
	goldSpent?: number;
	individualPosition?: string;
	inhibitorKills?: number;
	inhibitorTakedowns?: number;
	inhibitorsLost?: number;
	item0?: number;
	item1?: number;
	item2?: number;
	item3?: number;
	item4?: number;
	item5?: number;
	item6?: number;
	itemsPurchased?: number;
	killingSprees?: number;
	kills?: number;
	lane?: string;
	largestCriticalStrike?: number;
	largestKillingSpree?: number;
	largestMultiKill?: number;
	longestTimeSpentLiving?: number;
	magicDamageDealt?: number;
	magicDamageDealtToChampions?: number;
	magicDamageTaken?: number;
	neutralMinionsKilled?: number;
	nexusKills?: number;
	nexusTakedowns?: number;
	nexusLost?: number;
	objectivesStolen?: number;
	objectivesStolenAssists?: number;
	participantId?: number;
	pentaKills?: number;
	perks?: Perks;
	physicalDamageDealt?: number;
	physicalDamageDealtToChampions?: number;
	physicalDamageTaken?: number;
	profileIcon?: number;
	puuid?: string;
	quadraKills?: number;
	riotIdName?: string;
	riotIdTagline?: string;
	role?: string;
	sightWardsBoughtInGame?: number;
	spell1Id?: string; // 임의 추가
	spell2Id?: string; // 임의 추가
	spell1Casts?: number;
	spell2Casts?: number;
	spell3Casts?: number;
	spell4Casts?: number;
	summoner1Casts?: number;
	summoner1Id?: number;
	summoner2Casts?: number;
	summoner2Id?: number;
	summonerId?: string;
	summonerLevel?: number;
	summonerName?: string;
	teamEarlySurrendered?: boolean;
	teamId?: number; // 100: 블루팀, 200: 레드팀
	teamPosition?: string;
	timeCCingOthers?: number;
	timePlayed?: number;
	totalDamageDealt?: number;
	totalDamageDealtToChampions?: number;
	totalDamageShieldedOnTeammates?: number;
	totalDamageTaken?: number;
	totalHeal?: number;
	totalHealsOnTeammates?: number;
	totalMinionsKilled?: number;
	totalTimeCCDealt?: number;
	totalTimeSpentDead?: number;
	totalUnitsHealed?: number;
	tripleKills?: number;
	trueDamageDealt?: number;
	trueDamageDealtToChampions?: number;
	trueDamageTaken?: number;
	turretKills?: number;
	turretTakedowns?: number;
	turretsLost?: number;
	unrealKills?: number;
	visionScore?: number;
	visionWardsBoughtInGame?: number;
	wardsKilled?: number;
	wardsPlaced?: number;
	win?: boolean; // 무효시에는??
}

export interface Perks {
	statPerks: PerkStats;
	styles: PerkStyleDto[];
}

export interface PerkStats {
	defense: number;
	flex: number;
	offense: number;
}
export interface PerkStyleDto {
	description: string;
	selections: PerkStyleSelection[];
	style: number;
}

export interface PerkStyleSelection {
	perk: number;
	var1: number;
	var2: number;
	var3: number;
}

export interface Team {
	bans: Ban[];
	objectives: Objectives;
	teamId: number;
	win: boolean;
}

export interface Ban {
	championId: number;
	pickTurn: number;
}

export interface Objectives {
	baron: Objective;
	champion: Objective;
	dragon: Objective;
	inhibitor: Objective;
	riftHerald: Objective;
	tower: Objective;
}

export interface Objective {
	first: boolean;
	kills: number;
}
